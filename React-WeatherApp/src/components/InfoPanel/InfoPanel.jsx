import React from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import "./InfoPanel.scss";

const InfoPanel = () => {
	const weather = useSelector((state) => state.weather);

	const { t } = useTranslation();

	return (
		<div className="card">
			<div>
				<span>{t("current_temp")}</span>

				{weather.temp && (
					<span className="temp">
						{weather.temp} {weather.unit}
					</span>
				)}
			</div>

			<div className="minMaxTemp">
				<div>
					<span>{t("min_temp")}</span>

					{weather.minTemp && (
						<span className="temp">
							{weather.minTemp} {weather.unit}
						</span>
					)}
				</div>

				<span className="right-border" />

				<div>
					<span>{t("max_temp")}</span>

					{weather.maxTemp && (
						<span className="temp">
							{weather.maxTemp} {weather.unit}
						</span>
					)}
				</div>
			</div>

			<div>
				<span>{weather.condition}</span>
				<img src={weather.conditionIcon} alt={weather.condition} />
			</div>
		</div>
	);
};

export default InfoPanel;
