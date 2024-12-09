import { useState } from "react";

export default function useGeoLocation() {
	const [location, setLocation] = useState(null);
	const [error, setError] = useState(null);

	const refresh = () => {
		setLocation(null);
		setError(null);
	};

	function getMyLocation() {
		if (!navigator.geolocation) {
			setError("Geolocation is not supported by this browser.");
			return;
		}

		navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
	}

	function handleSuccess(position) {
		const { latitude, longitude } = position.coords;
		return setLocation({ latitude, longitude });
	}

	function handleError(error) {
		setError(error.message);
	}

	return { location, error, refresh, getMyLocation };
}
