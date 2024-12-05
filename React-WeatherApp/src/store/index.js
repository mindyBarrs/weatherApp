import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

// REDUCER
import waetherReducer from "./reducer/waetherReducer";

// SERVICES
import weartherApi from "./services/weatherAPI";

const store = configureStore({
	reducer: {
		[weartherApi.reducerPath]: weartherApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(weartherApi.middleware),
});

setupListeners(store.dispatch);

export default store;
