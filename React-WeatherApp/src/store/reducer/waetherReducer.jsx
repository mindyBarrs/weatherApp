import { createSlice } from "@reduxjs/toolkit";
import { convertCelcius, convertFahrenheit } from "utils/tempature.utils";

export const weatherReducer = createSlice({
	name: "weather",
	initialState: {
		unit: "C",
		weatherInfo: {},
		location: "",
	},
	reducers: {
		setWeather: (state, action) => {
			const data = action.payload;

			state.weatherInfo = data;
			state.location = data.location;
		},
		setUnit: (state, action) => {
			const data = action.payload;

			state.unit = data;
		},
		convertTemp: (state, action) => {
			const data = action.payload;

			if (state.unit === "C") {
				state.weatherInfo.temp = {
					...convertFahrenheit(data),
				};

				state.unit = "F";
			} else {
				state.weatherInfo.temp = {
					...convertCelcius(data),
				};

				state.unit = "C";
			}
		},
	},
});

// Action creators are generated for each case reducer function
export const { setWeather, setUnit, convertTemp } = weatherReducer.actions;

export default weatherReducer.reducer;
