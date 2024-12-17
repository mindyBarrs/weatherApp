import {
	cityRegex,
	latLongRegex,
	postalCodeRegex,
	zipCodeRegex,
} from "./constants/validation.consts";

/**
 * Validates a latitude and longitude input string.
 *
 * @param {string} latLong - The latitude and longitude string to validate.
 * @returns {boolean} Returns false if the input is empty,
 *                        false if the input is invalid,
 *                        or true if the input is valid.
 */
export const validateLatLong = (latLong) => {
	// Check if the input is an empty string after trimming whitespace.
	// An empty input cannot represent a valid latitude and longitude.
	if (!latLong.trim()) return false;

	if (!latLongRegex.test(latLong)) return false;
	return true; // Valid
};

/**
 * Validates a postal code or ZIP code input string.
 *
 * @param {string} postalCode - The postal or ZIP code string to validate.
 * @returns {boolean} Returns false if the input is empty,
 *                        false if the input is invalid,
 *                        or true if the input is valid.
 */
export const validatePostalOrZip = (postalCode) => {
	// Check if the input is an empty string after trimming whitespace.
	// An empty input cannot represent a valid postal or ZIP code.
	if (!postalCode.trim()) return false;

	// Validate against both ZIP code and postal code formats.
	if (!zipCodeRegex.test(postalCode) && !postalCodeRegex.test(postalCode)) {
		return false;
	}
	return true; // Valid
};

/**
 * Validates a city name input string.
 *
 * @param {string} city - The city name string to validate.
 * @returns {boolean} Returns false if the input is empty,
 *                        false if the input is invalid,
 *                        or true if the input is valid.
 */
export const validateCity = (city) => {
	// Check if the input is an empty string after trimming whitespace.
	// An empty input cannot represent a valid city name.
	if (!city.trim()) return false;

	if (!cityRegex.test(city)) return false;
	return true; // Valid
};

/**
 * Validates an input string against city, latitude/longitude, and postal/ZIP code formats.
 * Dispatches an error if all validations fail.
 *
 * @param {string} input - The input string to validate.
 * @returns {boolean} Returns true if the input is valid for any of the formats,
 *                    otherwise dispatches an error and returns false.
 */

export const validateInput = (input) => {
	const cityError = validateCity(input);
	if (cityError) return true;

	const latLongError = validateLatLong(input);
	if (latLongError) return true;

	const postalError = validatePostalOrZip(input);
	if (postalError) return true;

	return false;
};
