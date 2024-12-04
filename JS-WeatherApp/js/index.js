var api = "https://fcc-weather-api.glitch.me/api/current?";
var lat = "";
var long = "";
var currentTempCelsius;
var currentMinTemp;
var currentMaxTemp;
var tempUnit = "C";

$(document).ready(function () {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function (position) {
			var lat = "lat=" + position.coords.latitude;
			var long = "&lon=" + position.coords.longitude;

			getWeather(lat, long);
		});
	} else {
		$(".card-body").html(
			"Unable to get current location. Please reload the page and try again."
		);
	}

	$("#tempUnit, #minUnit, #maxUnit").click(function () {
		var currentTempUnit = $("#tempUnit").text();
		var currentTemp = $(".temp").text();
		var currentMax = $(".maxTemp").text();
		var currentMin = $(".minTemp").text();
		var newTempUnit = currentTempUnit == "C" ? "F" : "C";

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

function getWeather(lat, long) {
	var jsonStr = api + lat + long;

	$.ajax({
		url: jsonStr,
		success: function (data) {
			$(".city").html(data.name + ", " + data.sys.country);

			currentTempCelsius = Math.round(data.main.temp * 10) / 10;
			currentMinTemp = Math.round(data.main.temp_min * 10) / 10;
			currentMaxTemp = Math.round(data.main.temp_max * 10) / 10;

			$(".temp").text(currentTempCelsius + " " + String.fromCharCode(176));
			$(".minTemp").html(currentMinTemp + " " + String.fromCharCode(176));
			$(".maxTemp").html(currentMaxTemp + " " + String.fromCharCode(176));
			$(".tempunit").text(tempUnit);
			$(".weather").html(data.weather[0].main);
			weatherIcons(data.weather[0].main);
		},
	});
}

function weatherIcons(weather) {
	var weather = weather.toLowerCase();

	switch (weather) {
		case "clouds":
			$("i").addClass("wi-cloudy");
			break;
		case "snow":
			$("i").addClass("wi-snow");
			break;
		case "rain":
			$("i").addClass("wi-rain");
			break;
		case "sun":
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
