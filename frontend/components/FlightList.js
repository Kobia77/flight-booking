import { useState } from "react";

const FlightList = ({ flights, onBook }) => {
  const [bookedFlights, setBookedFlights] = useState([]);

  const handleBook = (flight) => {
    onBook(flight);
    setBookedFlights((prev) => [...prev, flight.id]); // Add the booked flight ID
  };

  return (
    <div className="space-y-4">
      {flights.length ? (
        flights.map((flight) => {
          const isBooked = bookedFlights.includes(flight.id); // Check if flight is booked

          return (
            <div
              key={flight.id}
              data-cy="flight-card"
              className="p-4 border rounded-lg bg-white text-black shadow-sm flex justify-between items-center"
            >
              <div>
                <h3 data-cy="flight-airline" className="text-xl font-semibold">
                  {flight.airline}
                </h3>
                <p>
                  From: {flight.origin} - To: {flight.destination}
                </p>
                <p>Date: {new Date(flight.date).toLocaleDateString()}</p>
              </div>
              <button
                onClick={() => handleBook(flight)}
                className={`ml-4 p-2 rounded-lg ${
                  isBooked
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-500 hover:bg-blue-600"
                } text-white`}
                disabled={isBooked} // Disable button if flight is booked
              >
                {isBooked ? "Booked" : "Book Now"}
              </button>
            </div>
          );
        })
      ) : (
        <p className="text-center text-gray-500">
          No flights found. Please search.
        </p>
      )}
    </div>
  );
};

export default FlightList;
