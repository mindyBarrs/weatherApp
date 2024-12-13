import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { convertTemp } from "store/reducer/waetherReducer";

import "./InfoPanel.scss";

const InfoPanel = () => {
	const dispatch = useDispatch();

	const weather = useSelector((state) => state.weather);

	const { t } = useTranslation();

	const onClickHandler = () => {
		dispatch(convertTemp(weather.weatherInfo.temp));
	};

	return (
		<div className="card">
			<div>
				<span>{t("current_temp")}</span>

				{weather?.weatherInfo?.temp?.current && (
					<button className="temp" onClick={() => onClickHandler()}>
						{weather?.weatherInfo?.temp?.current} &deg;{weather.unit}
					</button>
				)}
			</div>

			<div className="minMaxTemp">
				<div>
					<span>{t("min_temp")}</span>

					{weather?.weatherInfo?.temp?.minTemp && (
						<button className="temp" onClick={() => onClickHandler()}>
							{weather?.weatherInfo?.temp?.minTemp} &deg;{weather.unit}
						</button>
					)}
				</div>

				<span className="right-border" />

				<div>
					<span>{t("max_temp")}</span>

					{weather?.weatherInfo?.temp?.maxTemp && (
						<button className="temp" onClick={() => onClickHandler()}>
							{weather?.weatherInfo?.temp?.maxTemp} &deg;{weather.unit}
						</button>
					)}
				</div>
			</div>

			<div>
				<span>{weather?.weatherInfo?.condition?.text}</span>
				<img
					src={weather?.weatherInfo?.condition?.icon}
					alt={weather?.weatherInfo?.condition?.text}
				/>
			</div>
		</div>
	);
};

export default InfoPanel;
