// historyRoutes.js

const express = require("express");
const router = express.Router();
const historyController = require("../controller/historyController");

// Route to create a new history
router.get("/history", async (req, res) => {
	try {
		const history = await historyController.getHistory();
		res.status(201).json(history);
	} catch (error) {
		res.status(500).json({ error: "Error getting history document" });
	}
});

// Route to create a new history
router.post("/history", async (req, res) => {
	try {
		const { equation, result } = req.body;
		const newHistory = await historyController.createHistory(equation, result);
		res.status(201).json(newHistory);
	} catch (error) {
		res.status(500).json({ error: "Error creating history document" });
	}
});

// Route to delete one history by ID
router.delete("/history/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const deletedHistory = await historyController.deleteHistoryById(id);
		if (deletedHistory) {
			res.json(deletedHistory);
		} else {
			res.status(404).json({ error: "History not found" });
		}
	} catch (error) {
		res.status(500).json({ error: "Error deleting history document" });
	}
});

// Route to delete all history documents
router.delete("/history", async (req, res) => {
	try {
		const deletedHistories = await historyController.deleteAllHistory();
		res.json(deletedHistories);
	} catch (error) {
		res.status(500).json({ error: "Error deleting all history documents" });
	}
});

module.exports = router;
