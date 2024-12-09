import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

import useGeoLocation from "hooks/useGeoLocation";

import { setWeather } from "store/reducer/waetherReducer";
import { useLazyGetCurrentWeatherQuery } from "store/services/weatherAPI";

import "./Search.scss";

const Search = () => {
	const dispatch = useDispatch();

	const { t } = useTranslation();

	const [getCurrentWeatherQuery, { data, isLoading, error }] =
		useLazyGetCurrentWeatherQuery();

	const [value, setValue] = useState("");

	const { location, getMyLocation } = useGeoLocation();

	useEffect(() => {
		if (data) {
			dispatch(setWeather(data));
		}
	}, [data]);

	useEffect(() => {
		if (location) {
			const { latitude, longitude } = location;
			setValue(`${latitude}, ${longitude}`);
			getCurrentWeatherQuery(`${latitude}, ${longitude}`);
		}
	}, [location]);

	const onClickHandler = () => {
		// TODO: Add Validation
		getCurrentWeatherQuery(value);
	};

	const onClickMyLocation = () => {
		getMyLocation();
	};

	return (
		<div className="search">
			<div className="searchInputBtn">
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
			</div>

			<button
				className="myLocationBtn"
				aria-label="use my location"
				onClick={() => {
					onClickMyLocation();
				}}
			>
				<i className="fa-solid fa-location-crosshairs"></i>
			</button>
		</div>
	);
};

export default Search;
