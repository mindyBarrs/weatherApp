import React, { startTransition, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import useGeoLocation from "hooks/useGeoLocation";

import { setError, resetError } from "store/reducer/errorReducer";
import { setWeather } from "store/reducer/waetherReducer";
import { useLazyGetCurrentWeatherQuery } from "store/services/weatherAPI";

import "./Search.scss";
import { validateInput } from "utils/validation.utils";

const Search = () => {
	const dispatch = useDispatch();

	const { t } = useTranslation();

	const [getCurrentWeatherQuery, { data, error }] =
		useLazyGetCurrentWeatherQuery();

	const [value, setValue] = useState("");

	const { location, getMyLocation } = useGeoLocation();

	const errorMessage = useSelector((state) => state.error);

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
		if (value) {
			if (validateInput(value)) {
				getCurrentWeatherQuery(value);
				dispatch(resetError());
			}
		} else {
			dispatch(setError("errors.emptyString"));
		}
	};

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

			{errorMessage && <span className="error">{t(errorMessage.error)}</span>}
		</>
	);
};

export default Search;
