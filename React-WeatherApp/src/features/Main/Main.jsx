import React from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import Info from "components/InfoPanel";
import Search from "components/Search";

import "./Main.scss";

const Main = () => {
	const { t } = useTranslation();

	const weather = useSelector((state) => state.weather);

	return (
		<>
			<h1>{t("app_header")}</h1>

			<Search />

			{Object.keys(weather.weatherInfo).length > 0 && <Info />}
		</>
	);
};

export default Main;
