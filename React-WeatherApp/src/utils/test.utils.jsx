import React from "react";
import { Provider } from "react-redux";
import { I18nextProvider } from "react-i18next";
import { render } from "@testing-library/react";

import { configureStore } from "@reduxjs/toolkit";

import i18next from "utils/jest.setup";

import weartherApi from "store/services/weatherAPI";

import { rootReducer } from "store";

/**
 * Adds the `data-testid` prop if in 'development' or 'test' environment.
 *
 * @param {string} testId - The value to assign to the `data-testid` attribute.
 * @returns {object} - An object containing `data-testid` prop, if in dev or test environment.
 */
export const testAttr = (testId) => {
	// Check if the environment is 'development' or 'test'
	const isDevOrTest =
		process.env.NODE_ENV === "development" || process.env.NODE_ENV === "test";

	// If in dev or test environment, return the `data-testid` prop
	if (isDevOrTest) {
		return { "data-testid": testId };
	}

	// Otherwise, return an empty object
	return {};
};

// A utility function to create a test Redux store
const createTestStore = (preloadedState) => {
	return configureStore({
		reducer: rootReducer,
		preloadedState,
	});
};

// Custom render function
const customRender = (
	ui,
	{
		preloadedState = {},
		store = createTestStore(preloadedState),
		...renderOptions
	} = {}
) => {
	const Wrapper = ({ children }) => (
		<Provider store={store}>
			<I18nextProvider i18n={i18next}>{children}</I18nextProvider>
		</Provider>
	);

	return render(ui, { wrapper: Wrapper, ...renderOptions });
};

// Re-export everything from react-testing-library
export * from "@testing-library/react";

// Override render method
export { customRender as render };
