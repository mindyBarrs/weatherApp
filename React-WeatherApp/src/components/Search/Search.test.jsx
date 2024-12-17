import React from "react";
import fetch from "jest-fetch-mock";
import "@testing-library/jest-dom";
import { act, fireEvent, waitFor } from "@testing-library/react";

import Search from "./Search";

import { render } from "utils/test.utils";

import mockWeatherData from "mockData/weatherMock.json";

describe("<Search />", () => {
	it("should render properly", () => {
		const { getByText } = render(<Search />, {
			preloadedState: {
				weather: {
					unit: "C",
					weatherInfo: {},
					location: "",
				},
			},
		});

		expect(getByText(/Search/i)).toBeInTheDocument();
	});

	it("should fetch weather data and display it when search button is clicked", async () => {
		fetch.mockResponse(JSON.stringify(mockWeatherData));
		// Render the Search component with the necessary preloaded state
		const { getByTestId, getByText } = render(<Search />);

		// Ensure the "Search" text is present in the document
		expect(getByText(/Search/i)).toBeInTheDocument();

		// Simulate typing the city name into the search input
		fireEvent.change(getByTestId("locationSearch"), {
			target: { value: "Toronto" },
		});

		// Simulate clicking the search button
		fireEvent.click(getByTestId("search-btn"));

		// Wait for the location input to update and check if the value is set
		await waitFor(() => {
			expect(getByTestId("locationSearch")).toHaveValue(
				"Toronto, Ontario, Canada"
			);
		});
	});

	test("Getting user's geolocation", () => {
		global.navigator.geolocation = {
			getCurrentPosition: jest
				.fn()
				.mockImplementation((success, error) =>
					success({ coords: { latitude: 43.6408663, longitude: -79.3942555 } })
				),
			watchPosition: jest.fn(),
		};

		const { getByTestId, getByText } = render(<Search />, {
			preloadedState: {
				weather: {
					unit: "C",
					weatherInfo: {},
					location: "",
				},
			},
		});

		expect(getByText(/Search/i)).toBeInTheDocument();

		act(() => {
			fireEvent.click(getByTestId("myLocation-btn"));
		});

		expect(getByTestId("locationSearch")).toHaveValue(
			"43.6408663, -79.3942555"
		);
	});

	it("should render error message when search is clicked with an empty textbox", () => {
		const { getByTestId, getByText } = render(<Search />, {
			preloadedState: {
				weather: {
					unit: "C",
					weatherInfo: {},
					location: "",
				},
			},
		});

		expect(getByText(/Search/i)).toBeInTheDocument();

		act(() => {
			fireEvent.click(getByTestId("search-btn"));
		});

		expect(
			getByText("Please enter a city, latLog, postal code or zip code.")
		).toBeInTheDocument();
	});

	it("should render error message when search is clicked with invalid value in textbox", async () => {
		const { getByTestId, getByText } = render(<Search />, {
			preloadedState: {
				weather: {
					unit: "C",
					weatherInfo: {},
					location: "",
				},
			},
		});

		// Ensure the search button is in the document
		expect(getByText(/Search/i)).toBeInTheDocument();

		// Change input value to an invalid location (e.g., gibberish string)
		fireEvent.change(getByTestId("locationSearch"), {
			target: { value: "sdfgblknagdfbl;knkn" },
		});

		// Trigger the click event for the search button
		act(() => {
			fireEvent.click(getByTestId("search-btn"));
		});

		// Wait for the error message to appear in the document after the button click
		await waitFor(() => {
			expect(
				getByText(
					"Invalid city, latlong or postal/zipcode. use format like 45.0,-93.2 for latlong or '12345' or 'A1A 1A1' for postal/zip code."
				)
			).toBeInTheDocument();
		});
	});
});
