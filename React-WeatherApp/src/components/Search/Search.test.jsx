import React from "react";
import "@testing-library/jest-dom";
import { act, fireEvent } from "@testing-library/react";

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
});
