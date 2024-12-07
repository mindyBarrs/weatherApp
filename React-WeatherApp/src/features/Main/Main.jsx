import React from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import Info from "components/InfoPanel";
import Search from "components/Search";

import "./Main.scss";

const Main = () => {
	const weather = useSelector((state) => state.weather);

	const { t } = useTranslation();
	return (
		<>
			<h1>{t("app_header")}</h1>
			<Search />

			{weather.temp && <Info />}
		</>
	);
};

export default Main;
