import React from "react";
import { useTranslation } from "react-i18next";

import Info from "components/InfoPanel";
import Search from "components/Search";

import "./Main.scss";

const Main = () => {
	const { t } = useTranslation();
	return (
		<>
			<h1>{t("app_header")}</h1>
			<Search />
			<Info />
		</>
	);
};

export default Main;
