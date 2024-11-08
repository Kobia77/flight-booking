// pages/index.js
import { useState } from "react";
import SearchForm from "../components/SearchForm";
import FlightList from "../components/FlightList";
import axios from "axios";
require("dotenv").config();

export default function Home() {
  const [flights, setFlights] = useState([]);
  const [error, setError] = useState("");
  const baseURL = process.env.BACKEND_URL; //doesnt work somehow-need to check
  const searchFlights = async (searchParams) => {
    try {
      const response = await axios.get(
        "http://localhost:3001/api/flights/search",
        {
          params: searchParams,
        }
      );
      setFlights(response.data);
      setError("");
    } catch (err) {
      setError("Failed to fetch flights. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
        Flight Booking System
      </h1>
      <div className="max-w-4xl mx-auto">
        <SearchForm onSearch={searchFlights} />
        {error && <p className="text-red-500 text-center">{error}</p>}
        <FlightList flights={flights} />
      </div>
    </div>
  );
}
