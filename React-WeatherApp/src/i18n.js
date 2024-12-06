import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import detector from "i18next-browser-languagedetector";

i18n
	.use(initReactI18next) // passes i18n down to react-i18next
	.use(detector)
	.use(resourcesToBackend((namespace) => import(`./locales/${namespace}.json`)))
	.init({
		fallbackLng: "en",
		interpolation: {
			escapeValue: false, // react already safes from xss
		},
	});

export default i18n;
