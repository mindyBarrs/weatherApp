import React from "react";
import "@testing-library/jest-dom";
import { fireEvent } from "@testing-library/dom";

import InfoPanel from "./InfoPanel";

import { render } from "utils/test.utils";

describe("<InfoPanel />", () => {
	it("should render properly", () => {
		const { getByText } = render(<InfoPanel />, {
			preloadedState: {
				weather: {
					unit: "C",
					weatherInfo: {},
					location: "",
				},
			},
		});

		expect(getByText(/Max. Tempature/i)).toBeInTheDocument();
	});

	it("should render tempature info", () => {
		const { getByText } = render(<InfoPanel />, {
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

		expect(getByText(/Overcast/i)).toBeInTheDocument();
	});

	test("convert to fahrenheit", () => {
		const { getByText, debug } = render(<InfoPanel />, {
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

		expect(getByText(/Overcast/i)).toBeInTheDocument();
		fireEvent.click(getByText(/5.1/i));

		expect(getByText(/41.18/i)).toBeInTheDocument();
	});

	test("convert to fahrenheit and then back to celcius", () => {
		const { getByText, debug } = render(<InfoPanel />, {
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

		expect(getByText(/Overcast/i)).toBeInTheDocument();
		fireEvent.click(getByText(/0.6/i));

		expect(getByText(/33.08/i)).toBeInTheDocument();
		fireEvent.click(getByText(/33.08/i));

		expect(getByText(/0.6/i)).toBeInTheDocument();
	});
});
