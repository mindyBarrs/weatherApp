import React from "react";

import Info from "components/InfoPanel";
import Search from "components/Search";

import "./Main.scss";

const Main = () => {
	return (
		<>
			<h1>Current Weather</h1>
			<Search />
			<Info />
		</>
	);
};

export default Main;
