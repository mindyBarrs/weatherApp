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

export function setupStore(preloadedState) {
	return configureStore({
		reducer: rootReducer,
		preloadedState,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware().concat(weartherApi.middleware),
	});
}

const store = setupStore();

setupListeners(store.dispatch);

export default store;
