import React from "react";
import fetchMock from "jest-fetch-mock";
import "@testing-library/jest-dom";
import { act, fireEvent } from "@testing-library/react";

import Search from "./Search";

import { render } from "utils/test.utils";

describe("<Search />", () => {
	beforeEach(() => {
		fetchMock.resetMocks();
	});

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
		const { getByTestId, container } = render(<Search />, {
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
			expect(getByTestId("locationSearch")).toHaveValue("Toronto");
		});

		expect(fetchMock).toBeCalledTimes(1);
	});
});
