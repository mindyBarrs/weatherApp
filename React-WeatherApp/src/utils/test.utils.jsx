import { render } from "@testing-library/react";

import store from "store";

const ProviderWrapper = ({ children }) => (
	<I18nextProvider i18n={i18n}>
		<Provider store={store}>{children}</Provider>
	</I18nextProvider>
);

const customRender = (ui, options) =>
	render(ui, { wrapper: ProviderWrapper, ...options });

// override render method
export { customRender as render };
