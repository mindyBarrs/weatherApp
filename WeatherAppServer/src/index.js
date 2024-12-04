// eslint-disable-next-line no-unused-vars
const axios = require("axios");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());
app.use(cors);

app.get("/", (req, res) => {
	res.send("Hello from Express!");
});

app.listen(port, () => {
	console.log("Listening on port 3000");
});
