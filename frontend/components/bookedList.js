// components/FlightList.js
const BookedFlights = ({ flights, onBook }) => {
  return (
    <div className="space-y-4">
      {flights.length ? (
        flights.map((flight) => (
          <div
            key={flight.id}
            className="p-4 border rounded-lg bg-white text-black shadow-sm flex justify-between items-center"
          >
            <div>
              <h3 className="text-xl font-semibold">{flight.airline}</h3>
              <p>
                From: {flight.origin} - To: {flight.destination}
              </p>
              <p>Date: {new Date(flight.date).toLocaleDateString()}</p>
            </div>
            <button
              onClick={() => onBook(flight)}
              className="ml-4 p-2 bg-red-700 text-white rounded-lg hover:bg-blue-600"
            >
              Cancel
            </button>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500">
          No flights found. Please search.
        </p>
      )}
    </div>
  );
};

export default BookedFlights;
