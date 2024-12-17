import { act, renderHook } from "@testing-library/react";

import useGeoLocation from "./useGeoLocation";

describe("useGeoLocation", () => {
	global.navigator.geolocation = {
		getCurrentPosition: jest
			.fn()
			.mockImplementation((success, error) =>
				success({ coords: { latitude: 43.6408663, longitude: -79.3942555 } })
			),
		watchPosition: jest.fn(),
	};

	test("location: should be empty ", () => {
		const { result } = renderHook(() => useGeoLocation());

		expect(result.current.location).toBeNull();
	});

	test("getMyLocation: should be get users lotlong ", () => {
		const { result } = renderHook(() => useGeoLocation());

		act(() => {
			result.current.getMyLocation();
		});

		expect(result.current.location).toEqual({
			latitude: 43.6408663,
			longitude: -79.3942555,
		});
	});

	test("refresh: should clear location and geoLocationError ", () => {
		const { result } = renderHook(() => useGeoLocation());

		act(() => {
			result.current.refresh();
		});

		expect(result.current.location).toBeNull();
		expect(result.current.geoLocationError).toBeNull();
	});

	test("geoLocationError: should set geoLocationError ", () => {
		global.navigator.geolocation = {
			getCurrentPosition: jest.fn().mockImplementation((success, error) => {
				error({ code: 1, message: "User denied Geolocation" });
			}),
			watchPosition: jest.fn(),
		};

		const { result } = renderHook(() => useGeoLocation());

		act(() => {
			result.current.getMyLocation();
		});

		// expect(result.current.location).toBeNull();
		expect(result.current.geoLocationError).toEqual("User denied Geolocation");
	});

	test("getMyLocation: should handle geolocation unavailability", () => {
		// Mock geolocation being unavailable
		global.navigator.geolocation = undefined; // Simulate no geolocation support

		const { result } = renderHook(() => useGeoLocation());

		// Trigger the getMyLocation method
		act(() => {
			result.current.getMyLocation();
		});

		// Assert that geoLocationError is set correctly when geolocation is unavailable
		expect(result.current.geoLocationError).toEqual(
			"Geolocation is not supported by this browser."
		);
		expect(result.current.location).toBeNull(); // Assuming location is null when unavailable
	});
});
