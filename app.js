// app.js
const express = require("express");
require("dotenv").config();

const { MongoClient } = require("mongodb");
const cors = require("cors"); // Import the cors package
const app = express();
const port = 4000 || "https://render.com/docs/web-services#port-detection";
const historyRoutes = require("./route/historyRoute"); // Import the historyRoutes.js file
const { default: mongoose } = require("mongoose");

// Middleware to enable CORS
app.use(cors());

app.use(express.json());

app.use("/api", historyRoutes);

// Connect to the MongoDB Atlas database
mongoose
	.connect(process.env.DB_CONNECTION_STRING, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then((client) => {
		console.log("Connected to the MongoDB Atlas database");

		// Additional routes and logic that depend on the database can go here

		// Start the server
		app.listen(port, () => {
			console.log(`Server is running on http://localhost:${port}`);
		});
	})
	.catch((err) => {
		console.error("Error connecting to the database:", err);
	});

module.exports = app;
