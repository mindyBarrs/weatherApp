import { createSlice } from "@reduxjs/toolkit";

export const errorReducer = createSlice({
	name: "error",
	initialState: {
		error: "",
	},
	reducers: {
		setError: (state, action) => {
			state.error = action.payload;
		},
		resetError: (state) => {
			state.error = state.initialState;
		},
	},
});

// Action creators are generated for each case reducer function
export const { setError, resetError } = errorReducer.actions;

export default errorReducer.reducer;
