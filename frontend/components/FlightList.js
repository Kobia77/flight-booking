// components/FlightList.js
const FlightList = ({ flights }) => {
  return (
    <div className="space-y-4">
      {flights.length ? (
        flights.map((flight) => (
          <div
            key={flight.id}
            className="p-4 border rounded-lg bg-white text-black shadow-sm"
          >
            <h3 className="text-xl font-semibold">{flight.airline}</h3>
            <p>
              From: {flight.origin} - To: {flight.destination}
            </p>
            <p>Date: {flight.date}</p>
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

export default FlightList;
