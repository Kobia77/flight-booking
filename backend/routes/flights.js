const express = require("express");
const Flight = require("../models/Flight");

const router = express.Router();

// Route to get all flights
router.get("/", async (req, res) => {
  try {
    const flights = await Flight.find();
    res.status(200).json(flights);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch flights" });
  }
});

// Route to add a new flight
router.post("/", async (req, res) => {
  try {
    const flight = new Flight(req.body);
    await flight.save();
    res.status(201).json({ message: "created successfully" });
  } catch (err) {
    res.status(400).json({ error: "Failed to create flight" });
  }
});

// Route to search for flights based on origin, destination, and date
router.get("/search", async (req, res) => {
  const { origin, destination, date } = req.query;

  try {
    const query = {
      ...(origin && { origin }),
      ...(destination && { destination }),
      ...(date && { date: new Date(date) }),
    };

    const flights = await Flight.find(query);
    res.status(200).json(flights);
  } catch (err) {
    res.status(500).json({ error: "Failed to search flights" });
  }
});

module.exports = router;
