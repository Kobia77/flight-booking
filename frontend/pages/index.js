// pages/index.js
import { useState } from "react";
import SearchForm from "../components/SearchForm";
import FlightList from "../components/FlightList";
import axios from "axios";
import Link from "next/link"; // Import Link from Next.js

require("dotenv").config();

export default function Home() {
  const [flights, setFlights] = useState([]);
  const [error, setError] = useState("");
  const baseURL = process.env.BACKEND_URL; //doesnt work somehow-need to check

  const bookFlight = async (flight) => {
    try {
      const response = await axios.patch(
        `http://localhost:3001/api/flights/${flight._id}/book`
      );
      console.log("Flight booked successfully:", response.data);
    } catch (error) {
      console.error("Error booking flight:", error);
    }
  };

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
      <Link href="/" passHref>
        {" "}
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-8 cursor-pointer">
          Flight Booking System
        </h1>
      </Link>
      <div className="max-w-4xl mx-auto">
        <SearchForm onSearch={searchFlights} />
        {error && <p className="text-red-500 text-center">{error}</p>}
        <FlightList flights={flights} onBook={bookFlight} />
      </div>
    </div>
  );
}
