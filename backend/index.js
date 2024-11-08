// index.js
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const flightsRoute = require("./routes/flights");

dotenv.config();
// const uri =
//   "mongodb+srv://flightsdb:Flights1234@flight-booking.ddp0d.mongodb.net/";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.use("/api/flights", flightsRoute);

// Connect to MongoDB and start the server
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
  });
