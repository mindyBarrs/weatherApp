import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { API_HOST, WEATHER_API } from "utils/constants/url.constants";

const transformResponse = (res) => {
	const weatherInfo = {
		temp: {},
		condition: {},
		location: "",
	};

	weatherInfo.temp = {
		current: res?.current.temp_c,
		maxTemp: res?.forecast.forecastday[0].day.maxtemp_c,
		minTemp: res?.forecast.forecastday[0].day.mintemp_c,
	};
	weatherInfo.condition = res?.current?.condition;
	weatherInfo.location = `${res?.location?.name}, ${res?.location?.region}, ${res?.location?.country}`;

	return weatherInfo;
};

// Define a service using a base URL and expected endpoints
export const weatherApi = createApi({
	reducerPath: "weatherApi",
	baseQuery: fetchBaseQuery({ baseUrl: API_HOST }),
	endpoints: (builder) => ({
		getCurrentWeather: builder.query({
			query: (locationData) => {
				return {
					url: WEATHER_API,
					method: "POST",
					body: { locationData },
				};
			},
			transformResponse: (response, meta, arg) => {
				return transformResponse(response);
			},
		}),
	}),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useLazyGetCurrentWeatherQuery } = weatherApi;

export default weatherApi;
