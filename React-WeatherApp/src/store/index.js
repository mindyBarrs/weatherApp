import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

// REDUCER
import waetherReducer from "reducer/waetherReducer";

// SERVICES
import weartherApi from "services/weartherAPI";

const store = configureStore({
	reducer: {
		[weartherApi.reducerPath]: weartherApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(weartherApi.middleware),
});

setupListeners(store.dispatch);

export default store;
