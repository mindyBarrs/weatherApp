import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { I18nextProvider } from "react-i18next";

import store from "./store";

import App from "./App";
import i18n from "i18n";

const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript

root.render(
	<I18nextProvider i18n={i18n}>
		<Provider store={store}>
			<App />
		</Provider>
	</I18nextProvider>
);
