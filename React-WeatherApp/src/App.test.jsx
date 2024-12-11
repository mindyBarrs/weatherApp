import React from "react";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import App from "./App";

import { render } from "utils/test.utils";

describe("<App />", () => {
	it("should render properly", () => {
		render(<App />, {
			preloadedState: {
				weather: {
					unit: "C",
					weatherInfo: {},
					location: "",
				},
			},
		});

		const heading = screen.getByText(/Currect Weather/i);
		const searchBtn = screen.getByText(/Search/i);

		expect(heading).toBeInTheDocument();
		expect(searchBtn).toBeInTheDocument();
	});
});
