// components/SearchForm.js
import { useState } from "react";
import { useRouter } from "next/router";

const SearchForm = ({ onSearch }) => {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const router = useRouter();
  const handleSearch = (e) => {
    e.preventDefault();
    onSearch({ origin, destination, date });
  };
  const handleViewBookedFlights = () => {
    router.push("/booked-flights");
  };
  return (
    <form
      onSubmit={handleSearch}
      className="flex flex-col md:flex-row items-center gap-4 mb-6"
    >
      <input
        type="text"
        placeholder="Origin"
        value={origin}
        onChange={(e) => setOrigin(e.target.value)}
        className="p-2 border rounded-lg text-black w-full md:w-1/4"
        required
      />
      <input
        type="text"
        placeholder="Destination"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
        className="p-2 border rounded-lg text-black w-full md:w-1/4"
        required
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="p-2 border rounded-lg text-black w-full md:w-1/4"
        required
      />
      <button
        type="submit"
        className="p-2 bg-blue-500 text-white rounded-lg w-full md:w-1/6 hover:bg-blue-600"
      >
        Search Flights
      </button>
      <button
        type="button"
        onClick={handleViewBookedFlights}
        className="p-2 bg-green-500 text-white rounded-lg w-full md:w-1/6 hover:bg-green-600"
      >
        Booked Flights
      </button>
    </form>
  );
};

export default SearchForm;
