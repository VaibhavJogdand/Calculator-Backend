// historyController.js

const History = require("../model/histoy"); // Assuming 'history.js' contains the History model

// Function to create a new history document
const getHistory = async () => {
	try {
		const history = await History.find();
		return history;
	} catch (error) {
		throw new Error("Error creating history document:", error);
	}
};

// Function to create a new history document
const createHistory = async (equation, result) => {
	try {
		const newHistory = new History({
			equation,
			result,
		});

		console.log(newHistory);

		const savedHistory = await newHistory.save();

		return savedHistory;
	} catch (error) {
		console.log(error);
		throw new Error("Error creating history document:", error);
	}
};

// Function to delete one history document by its ID
const deleteHistoryById = async (historyId) => {
	try {
		console.log("first");
		const deletedHistory = await History.findByIdAndDelete(historyId);
		return deletedHistory;
	} catch (error) {
		throw new Error("Error deleting history document:", error);
	}
};

// Function to delete all history documents
const deleteAllHistory = async () => {
	try {
		const deletedHistories = await History.deleteMany({});
		return deletedHistories;
	} catch (error) {
		throw new Error("Error deleting all history documents:", error);
	}
};

module.exports = {
	getHistory,
	createHistory,
	deleteHistoryById,
	deleteAllHistory,
};
