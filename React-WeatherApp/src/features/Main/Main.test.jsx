import React from "react";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Main from "./Main";

import { render } from "utils/test.utils";

describe("<Main />", () => {
	it("should render properly", () => {
		render(<Main />, {
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

	test("should diaply weather info", () => {
		const { getByText } = render(<Main />, {
			preloadedState: {
				weather: {
					unit: "C",
					weatherInfo: {
						temp: {
							current: 4.1,
							maxTemp: 5.1,
							minTemp: 0.6,
						},
						condition: {
							text: "Overcast",
							icon: "//cdn.weatherapi.com/weather/64x64/day/122.png",
							code: 1009,
						},
						location: "Toronto, Ontario, Canada",
					},
					location: "Toronto, Ontario, Canada",
				},
			},
		});

		expect(getByText(/Min. Temp/i)).toBeInTheDocument();
	});
});
