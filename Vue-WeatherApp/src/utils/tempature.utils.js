/**
 * Converts a set of temperature values from Celsius to Fahrenheit.
 *
 * @param {Object} temps - An object where keys represent labels and values are temperatures in Celsius.
 * @returns {Object} A new object with temperatures converted to Fahrenheit, rounded to two decimal places.
 */
export const convertFahrenheit = (temps) => {
  const fahTemps = { ...temps } // Create a shallow copy

  // Convert each temperature value from Celsius to Fahrenheit.
  Object.keys(fahTemps).forEach((key) => {
    fahTemps[key] = ((fahTemps[key] * 9) / 5 + 32).toFixed(1)
  })

  return fahTemps
}

/**
 * Converts a set of temperature values from Fahrenheit to Celsius.
 *
 * @param {Object} temps - An object where keys represent labels and values are temperatures in Fahrenheit.
 * @returns {Object} A new object with temperatures converted to Celsius, rounded to two decimal places.
 */
export const convertCelcius = (temps) => {
  const celTemps = { ...temps } // Create a shallow copy

  // Convert each temperature value from Fahrenheit to Celsius.
  Object.keys(celTemps).forEach((key) => {
    celTemps[key] = (((celTemps[key] - 32) * 5) / 9).toFixed(1)
  })

  return celTemps
}
