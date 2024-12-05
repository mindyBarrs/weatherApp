const api = "http://api.weatherapi.com/v1/forecast.json?key=";
const apiKey = "<APIKEY GOES HERE>";
const apiAppend = "&days=1&aqi=no&alerts=no";
const tempUnit = "C";

let latLong = "";
let currentTempCelsius;
let currentMinTemp;
let currentMaxTemp;

$(document).ready(function () {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function (position) {
			latLong = position.coords.latitude + "," + position.coords.longitude;

			getWeather(latLong);
		});
	} else {
		$(".card-body").html(
			"Unable to get current location. Please reload the page and try again."
		);
	}

	$("#tempUnit, #minUnit, #maxUnit").click(function () {
		let currentTempUnit = $("#tempUnit").text();
		let currentTemp = $(".temp").text();
		let currentMax = $(".maxTemp").text();
		let currentMin = $(".minTemp").text();
		let newTempUnit = currentTempUnit == "C" ? "F" : "C";

		$(".tempunit").text(newTempUnit);

		if (newTempUnit == "F") {
			var fahTemp = convertFahrenheit(currentTemp);
			var fahMaxTemp = convertFahrenheit(currentMax);
			var fahMinTemp = convertFahrenheit(currentMin);

			$(".temp").text(fahTemp + " " + String.fromCharCode(176));
			$(".minTemp").text(fahMinTemp + " " + String.fromCharCode(176));
			$(".maxTemp").text(fahMaxTemp + " " + String.fromCharCode(176));
		} else {
			$(".temp").text(currentTempCelsius + " " + String.fromCharCode(176));
			$(".minTemp").text(currentMinTemp + " " + String.fromCharCode(176));
			$(".maxTemp").text(currentMaxTemp + " " + String.fromCharCode(176));
		}
	});
});

function getWeather(latLong) {
	var jsonStr = api + apiKey + "&q=" + latLong + apiAppend;

	$.ajax({
		url: jsonStr,
		success: function (data) {
			currentTempCelsius = Math.round(data?.current?.temp_c * 10) / 10;
			currentMinTemp =
				Math.round(data?.forecast?.forecastday[0]?.day?.mintemp_c * 10) / 10;
			currentMaxTemp =
				Math.round(data?.forecast?.forecastday[0]?.day?.maxtemp_c * 10) / 10;

			$(".city").html(data?.location?.name + ", " + data?.location?.country);
			$(".temp").text(currentTempCelsius + " " + String.fromCharCode(176));
			$(".minTemp").html(currentMinTemp + " " + String.fromCharCode(176));
			$(".maxTemp").html(currentMaxTemp + " " + String.fromCharCode(176));
			$(".tempunit").text(tempUnit);
			$(".weather").html(data?.current?.condition?.text);

			weatherIcons(data?.current?.condition?.text);
		},
	});
}

function weatherIcons(weather) {
	let weatherType = weather.toLowerCase();

	switch (weatherType) {
		case "clouds":
			$("i").addClass("wi-cloudy");
			break;
		case "snow":
			$("i").addClass("wi-snow");
			break;
		case "rain":
			$("i").addClass("wi-rain");
			break;
		case "sunny":
			$("i").addClass("wi-day-sunny");
			break;
		case "wind":
			$("i").addClass("wi-cloudy-gusts");
			break;
		case "thunderstom":
			$("i").addClass("wi-storm-showers");
			break;
		case "clear":
			$("i").addClass("wi-cloud");
			break;
		case "haze":
			$("i").addClass("wi-fog");
			break;
		case "fog":
			$("i").addClass("wi-fog");
			break;
		case "mist":
			$("i").addClass("wi-sprinkle");
			$(".weather").html("Possible Rain");
			break;
	}
}

function convertFahrenheit(temp) {
	var fahTemp = Math.round((parseInt(temp) * 9) / 5 + 32);

	return fahTemp;
}
