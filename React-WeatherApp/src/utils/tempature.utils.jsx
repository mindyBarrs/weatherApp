export const convertFahrenheit = (temps) => {
	const fahTemps = { ...temps }; // Create a shallow copy

	Object.keys(fahTemps).forEach((key) => {
		fahTemps[key] = ((fahTemps[key] * 9) / 5 + 32).toFixed(2);
	});

	return fahTemps;
};

export const convertCelcius = (temps) => {
	const celTemps = { ...temps }; // Create a shallow copy

	Object.keys(celTemps).forEach((key) => {
		celTemps[key] = (((celTemps[key] - 32) * 5) / 9).toFixed(2);
	});

	return celTemps;
};
