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
			console.log(data);
		},
	},
});

// Action creators are generated for each case reducer function
export const { setWeather } = weatherReducer.actions;

export default weatherReducer.reducer;
