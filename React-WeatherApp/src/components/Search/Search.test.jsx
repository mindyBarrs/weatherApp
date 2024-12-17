import React from "react";
import "@testing-library/jest-dom";
import { act, fireEvent, waitFor } from "@testing-library/react";

import Search from "./Search";

import { render } from "utils/test.utils";

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

	// TODO: Fix
	it("should get current wearther for searched city", () => {
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
		fireEvent.change(getByTestId("locationSearch"), {
			target: { value: "Toronto" },
		});

		act(() => {
			fireEvent.click(getByTestId("search-btn"));
		});

		expect(getByTestId("locationSearch")).toHaveValue("Toronto");
	});

	//TODO: Add test using the find my location button

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

	//TODO: Fix
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

		expect(getByText(/Search/i)).toBeInTheDocument();
		fireEvent.change(getByTestId("locationSearch"), {
			target: { value: "sdfgblknagdfbl;knkn" },
		});

		act(() => {
			fireEvent.click(getByTestId("search-btn"));
		});

		await waitFor(() =>
			expect(
				getByText(
					"Invalid city, latlong or postal/zipcode. use format like 45.0,-93.2 for latlong or '12345' or 'A1A 1A1' for postal/zip code."
				)
			).toBeInTheDocument()
		);
	});
});
