import React from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const InfoPanel = () => {
	const weather = useSelector((state) => state.weather);

	const { t } = useTranslation();

	return <div>{weather.temp}</div>;
};

export default InfoPanel;
