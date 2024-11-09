// models/Flight.js
const mongoose = require("mongoose");

const flightSchema = new mongoose.Schema({
  airline: { type: String, required: true },
  origin: { type: String, required: true },
  destination: { type: String, required: true },
  date: { type: Date, required: true },
  price: { type: Number, required: true },
  booked: { type: Boolean, default: false },
});

module.exports = mongoose.model("Flight", flightSchema);
