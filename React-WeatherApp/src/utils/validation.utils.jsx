import { setError } from "store/reducer/errorReducer";

import store from "store";

import {
	cityRegex,
	latLongRegex,
	postalCodeRegex,
	zipCodeRegex,
} from "./constants/validation.consts";

export const validateLatLong = (latLong) => {
	if (!latLong.trim()) return "errors.emptyString";
	if (!latLongRegex.test(latLong)) return "errors.vaildString";
	return null; // Valid
};

const validatePostalOrZip = (postalCode) => {
	if (!postalCode.trim()) return "errors.emptyString";
	if (!zipCodeRegex.test(postalCode) && !postalCodeRegex.test(postalCode)) {
		return "errors.vaildString";
	}
	return null; // Valid
};

export const validateCity = (city) => {
	if (!city.trim()) return "errors.emptyString";
	if (!cityRegex.test(city)) return "errors.vaildString";
	return null;
};

export const validateInput = (input) => {
	const cityError = validateCity(input);
	if (!cityError) return true;

	const latLongError = validateLatLong(input);
	if (!latLongError) return true;

	const postalError = validatePostalOrZip(input);
	if (!postalError) return true;

	store.dispatch(setError(cityError || latLongError || postalError));
	return false;
};
