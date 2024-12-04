import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import App from "./App";

describe("App tests", () => {
	it("should render properly", () => {
		render(<App />);

		const heading = screen.getByText(/Search options go here/i);

		expect(heading).to;
	});
});
