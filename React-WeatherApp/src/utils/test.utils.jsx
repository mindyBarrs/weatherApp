import React from "react";
import { Provider } from "react-redux";
import { I18nextProvider } from "react-i18next";
import { render } from "@testing-library/react";

import i18next from "utils/jest.setup";

import { setupStore } from "store";

// Custom render function
const customRender = (
	ui,
	{
		preloadedState = {},
		store = setupStore(preloadedState),
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
