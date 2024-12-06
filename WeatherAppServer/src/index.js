require("dotenv").config();

const axios = require("axios");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());
app.use(cors());

app.get("/status", (req, res) => {
	const status = {
		Status: "running",
	};

	res.send(status);
});

app.post("/weatherInfo", async (req, res) => {
	const body = req.body;

	await axios
		.get(
			`http://api.weatherapi.com/v1/forecast.json?key=${process.env.WEATHER_API_KEY}&q=${body?.locationData}&days=1&aqi=no&alerts=no`
		)
		.then((response) => {
			res.send(response.data);
		})
		.catch((err) => {
			const status = {
				Status: err.status,
				ErrorCode: err.code,
				message: "Error retrieving weather information",
			};

			res.send(status);
		});
});

app.listen(port, () => {
	console.log("Listening on port 3000");
});
