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

// Route to update booked status by flight ID
router.patch("/:id/book", async (req, res) => {
  try {
    const flightId = req.params.id;
    const updatedFlight = await Flight.findByIdAndUpdate(
      flightId,
      { booked: true },
      { new: true } // Return the updated document
    );
    if (!updatedFlight) {
      return res.status(404).json({ error: "Flight not found" });
    }
    res.json(updatedFlight);
  } catch (err) {
    res.status(500).json({ error: "Failed to update flight booking status" });
  }
});

// Route to cancel booked status by flight ID
router.patch("/:id/cancel", async (req, res) => {
  try {
    const flightId = req.params.id;
    const updatedFlight = await Flight.findByIdAndUpdate(
      flightId,
      { booked: false },
      { new: true } // Return the updated document
    );
    if (!updatedFlight) {
      return res.status(404).json({ error: "Flight not found" });
    }
    res.json(updatedFlight);
  } catch (err) {
    res.status(500).json({ error: "Failed to update flight booking status" });
  }
});

// Get all booked flights
router.get("/booked", async (req, res) => {
  try {
    const bookedFlights = await Flight.find({ booked: true });
    res.status(200).json(bookedFlights);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch booked flights" });
  }
});
module.exports = router;
