import "@testing-library/jest-dom/extend-expect";
import fetchMock from "jest-fetch-mock";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";

beforeEach(() => {
	fetchMock.resetMocks();
});

i18next.use(initReactI18next).init({
	fallbackLng: "en",
	interpolation: {
		escapeValue: false, // react already safes from xss
	},
	ns: ["common"],
	defaultNS: "common",
	resources: {
		en: {
			common: {
				app_header: "Currect Weather",
				max_temp: "Max. Tempature",
				min_temp: "Min. Tempature",
				current_temp: "Current Tempature",
				weather_condition: "Current weather condition",
				search_btn: "Search",
				search_input: {
					id: "locationSearch",
					placeholder: "Enter city, postal code or lat,long",
					label: "Seach a locations weather",
				},
				errors: {
					vaildString:
						"Invalid city, latlong or postal/zipcode. use format like 45.0,-93.2 for latlong or '12345' or 'A1A 1A1' for postal/zip code.",
					emptyString: "Please enter a city, latLog, postal code or zip code.",
				},
			},
		},
	},
});

export default i18next;
