import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

// REDUCER
import waetherReducer from "./reducer/waetherReducer";
import errorReducer from "./reducer/errorReducer";

// SERVICES
import weartherApi from "./services/weatherAPI";

// Create the root reducer separately so we can extract the RootState type
export const rootReducer = combineReducers({
	error: errorReducer,
	weather: waetherReducer,
	[weartherApi.reducerPath]: weartherApi.reducer,
});

const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(weartherApi.middleware),
});

setupListeners(store.dispatch);

export default store;
