// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { API_HOST, WEATHER_API } from "utils/constants/url.constants";

// Define a service using a base URL and expected endpoints
export const weatherApi = createApi({
	reducerPath: "weatherApi",
	baseQuery: fetchBaseQuery({ baseUrl: API_HOST }),
	endpoints: (builder) => ({
		getCurrentWeather: builder.query({
			query: (locationData) => {
				console.log(locationData);
				return {
					url: WEATHER_API,
					method: "GET",
					body: locationData,
				};
			},
		}),
	}),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetCurrentWeatherQuery } = weatherApi;

export default weatherApi;
