import { createSlice } from "@reduxjs/toolkit";

export const weatherReducer = createSlice({
	name: "weather",
	initialState: {
		unit: "C",
		temp: "",
		minTemp: "",
		maxTemp: "",
		condition: "",
		conditionIcon: "",
	},
	reducers: {
		setWeather: (state, action) => {
			const data = action.payload;

			state.temp =
				state.unit === "C" ? data.current.temp_c : data.current.temp_f;
			state.minTemp =
				state.unit === "C"
					? data.forecast.forecastday[0].day.mintemp_c
					: data.forecast.forecastday[0].day.mintemp_f;
			state.maxTemp =
				state.unit === "C"
					? data.forecast.forecastday[0].day.maxtemp_c
					: data.forecast.forecastday[0].day.maxtemp_f;
			state.condition = data.current.condition.text;
			state.conditionIcon = data.current.condition.icon;
		},
		setUnit: (state, action) => {
			const data = action.payload;

			state.unit = data;
		},
	},
});

// Action creators are generated for each case reducer function
export const { setWeather, setUnit } = weatherReducer.actions;

export default weatherReducer.reducer;
