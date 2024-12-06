import React from "react";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { customRender } from "utils/test.utils";

import App from "./App";

describe("App tests", () => {
	it("should render properly", () => {
		customRender(<App />);

		const heading = screen.getByText(/Search options go here/i);

		expect(heading).to;
	});
});
