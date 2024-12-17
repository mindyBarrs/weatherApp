import "@testing-library/jest-dom";

import {
	validateLatLong,
	validatePostalOrZip,
	validateCity,
	validateInput,
} from "utils/validation.utils";

describe("Validation Tests", () => {
	describe("validateLatLong", () => {
		it("should pass validation test ", () => {
			const validLatLong = validateLatLong("43.6408663, -79.3942555");

			expect(validLatLong).toBeTruthy();
		});

		it("should fail validation test ", () => {
			const validLatLong = validateLatLong("43.6408663, .394555");

			expect(validLatLong).not.toBeTruthy();
		});
	});

	describe("validatePostalOrZip", () => {
		it("should pass validation test ", () => {
			const validZipCode = validatePostalOrZip("M5V 3Z1");

			expect(validZipCode).toBeTruthy();
		});

		it("should fail validation test ", () => {
			const validZipCode = validatePostalOrZip("rjmfgurmn");

			expect(validZipCode).not.toBeTruthy();
		});
	});

	describe("validateCity", () => {
		it("should pass validation test ", () => {
			const validLCity = validateCity("Toronto");

			expect(validLCity).toBeTruthy();
		});

		it("should fail validation test ", () => {
			const validLCity = validateCity("rjmfgaer94345er90urmn");

			expect(validLCity).not.toBeTruthy();
		});
	});

	describe("validateInput", () => {
		it("should pass validation test ", () => {
			const validInput = validateInput("43.6408663, -79.3942555");

			expect(validInput).toBeTruthy();
		});

		it("should fail validation test ", () => {
			const validInput = validateInput("io234e90-345jkldf90");

			expect(validInput).not.toBeTruthy();
		});
	});
});
