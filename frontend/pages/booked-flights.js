import { useEffect, useState } from "react";
import axios from "axios";
import BookedList from "../components/bookedList";
import Link from "next/link"; // Import Link from Next.js

const BookedFlights = () => {
  const [bookedFlights, setBookedFlights] = useState([]);
  const [error, setError] = useState("");

  const cancelFlight = async (flight) => {
    try {
      const response = await axios.patch(
        `http://localhost:3001/api/flights/${flight._id}/cancel`
      );
      console.log("Flight cancled successfully:", response.data);
      fetchBookedFlights();
    } catch (error) {
      console.error("Error canceling flight:", error);
    }
  };

  const fetchBookedFlights = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3001/api/flights/booked`
      );
      setBookedFlights(response.data);
      setError("");
    } catch (err) {
      setError("Failed to fetch booked flights. Please try again.");
    }
  };
  useEffect(() => {
    fetchBookedFlights();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <Link href="/" passHref>
        {" "}
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-8 cursor-pointer">
          Booked Flights
        </h1>
      </Link>
      {error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : (
        <BookedList flights={bookedFlights} onBook={cancelFlight} />
      )}
    </div>
  );
};

export default BookedFlights;
