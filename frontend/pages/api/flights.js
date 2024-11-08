// pages/api/flights.js
import axios from "axios";

export default async function handler(req, res) {
  const { origin, destination, date } = req.query;

  try {
    const response = await axios.get(
      "http://localhost:3000/api/flights/search",
      {
        params: { origin, destination, date },
      }
    );
    res.status(200).json(response.data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch flights" });
  }
}
