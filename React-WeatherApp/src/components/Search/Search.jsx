import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import useGeoLocation from "hooks/useGeoLocation";

import { setError, resetError } from "store/reducer/errorReducer";
import { setWeather } from "store/reducer/waetherReducer";
import { useLazyGetCurrentWeatherQuery } from "store/services/weatherAPI";

import { validateInput } from "utils/validation.utils";

import "./Search.scss";

const Search = () => {
	const dispatch = useDispatch();

	const { t } = useTranslation();

	const [getCurrentWeatherQuery, { data, error }] =
		useLazyGetCurrentWeatherQuery();

	const { location, getMyLocation } = useGeoLocation();

	const errorMessage = useSelector((state) => state.error);
	const weather = useSelector((state) => state.weather);

	const [value, setValue] = useState(weather?.location || "");

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

	useEffect(() => {
		if (weather) {
			setValue(weather?.location);
		}
	}, [weather]);

	const onClickHandler = () => {
		if (value) {
			if (validateInput(value)) {
				getCurrentWeatherQuery(value);
				dispatch(resetError());
			}
		} else {
			dispatch(setError("errors.emptyString"));
		}
	};
	console.log([errorMessage, weather]);
	const onClickMyLocation = () => {
		getMyLocation();
	};

	return (
		<>
			<div className="search">
				<div className="searchInputBtn">
					<label htmlFor={t("search_input.id")}>
						{t("search_input.label")}
					</label>

					<div className="inputWithBtn">
						<input
							data-testid={t("search_input.id")}
							id={t("search_input.id")}
							placeholder={t("search_input.placeholder")}
							value={value}
							onChange={(e) => setValue(e.target.value)}
						/>
						{console.log(errorMessage)}
						<button data-testid="search-btn" onClick={() => onClickHandler()}>
							{t("search_btn")}
						</button>
					</div>
				</div>

				<button
					data-testid="myLocation-btn"
					className="myLocationBtn"
					aria-label="use my location"
					onClick={() => {
						onClickMyLocation();
					}}
				>
					<i className="fa-solid fa-location-crosshairs"></i>
				</button>
			</div>

			{errorMessage?.error && (
				<span data-testid="error-txt" className="error">
					{t(errorMessage.error)}
				</span>
			)}
		</>
	);
};

export default Search;
