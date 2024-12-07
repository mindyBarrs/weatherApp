import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

import { setWeather } from "store/reducer/waetherReducer";
import { useLazyGetCurrentWeatherQuery } from "store/services/weatherAPI";

import "./Search.scss";

const Search = () => {
	const dispatch = useDispatch();

	const { t } = useTranslation();

	const [getCurrentWeatherQuery, { data, isLoading, error }] =
		useLazyGetCurrentWeatherQuery();

	const [value, setValue] = useState("");

	useEffect(() => {
		if (data) {
			dispatch(setWeather(data));
		}
	}, [data]);

	const onClickHandler = () => {
		// TODO: Add Validation
		getCurrentWeatherQuery(value);
	};

	return (
		<>
			<label htmlFor={t("search_input.id")}>{t("search_input.label")}</label>

			<div className="inputWithBtn">
				<input
					id={t("search_input.id")}
					placeholder={t("search_input.placeholder")}
					value={value}
					onChange={(e) => setValue(e.target.value)}
				/>

				<button onClick={() => onClickHandler()}>{t("search_btn")}</button>
			</div>
			{/* Add use my location button */}
		</>
	);
};

export default Search;
