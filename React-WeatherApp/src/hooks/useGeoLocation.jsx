import { useState } from "react";

/**
 * Custom hook to retrieve the user's geolocation.
 *
 * @returns {Object} An object containing:
 *   - location: {Object|null} The user's latitude and longitude if available.
 *   - error: {string|null} Error message if geolocation fails or is unsupported.
 *   - refresh: {Function} Resets the location and error states.
 *   - getMyLocation: {Function} Initiates geolocation retrieval.
 */
export default function useGeoLocation() {
	const [location, setLocation] = useState(null);
	const [geoLocationError, setGeoLocationError] = useState(null);

	/**
	 * Resets the location and error states.
	 */
	const refresh = () => {
		setLocation(null);
		setGeoLocationError(null);
	};

	/**
	 * Initiates geolocation retrieval and updates the location or error state.
	 */
	function getMyLocation() {
		if (!navigator.geolocation) {
			setGeoLocationError("Geolocation is not supported by this browser.");
			return;
		}

		navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
	}

	/**
	 * Success callback for geolocation retrieval.
	 *
	 * @param {Object} position - The position object containing coordinates.
	 */
	function handleSuccess(position) {
		const { latitude, longitude } = position.coords;
		return setLocation({ latitude, longitude });
	}

	/**
	 * Error callback for geolocation retrieval.
	 *
	 * @param {Object} error - The error object containing error details.
	 */
	function handleError(error) {
		setGeoLocationError(error.message);
	}

	return { location, geoLocationError, refresh, getMyLocation };
}
