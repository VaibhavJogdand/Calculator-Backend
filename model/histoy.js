// history.js

const mongoose = require("mongoose");

// Define the History schema
const historySchema = new mongoose.Schema(
	{
		equation: {
			type: String,
		},
		result: {
			type: Number,
		},
	},
	{
		timestamps: true, // Adding timestamps option
	}
);

// Create and export the History model
module.exports = mongoose.model("History", historySchema);
