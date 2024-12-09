import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

// REDUCER
import waetherReducer from "./reducer/waetherReducer";
import errorReducer from "./reducer/errorReducer";

// SERVICES
import weartherApi from "./services/weatherAPI";

const store = configureStore({
	reducer: {
		error: errorReducer,
		weather: waetherReducer,
		[weartherApi.reducerPath]: weartherApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(weartherApi.middleware),
});

setupListeners(store.dispatch);

export default store;
