import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PrivateRoute from "../../routes/PrivateRoute";

const AllTouristsSpot = () => {
  const [spots, setSpots] = useState([]);
  const [sortBy, setSortBy] = useState("ascending"); // Default sorting order

  useEffect(() => {
    fetch("http://localhost:5000/spots")
      .then((response) => response.json())
      .then((data) => setSpots(data))
      .catch((error) => console.error("Error fetching spots:", error));
  }, []);

  // Function to handle sorting
  const handleSortChange = (e) => {
    setSortBy(e.target.value);
    const sortedSpots = [...spots];
    if (e.target.value === "ascending") {
      sortedSpots.sort((a, b) => a.average_cost - b.average_cost);
    } else {
      sortedSpots.sort((a, b) => b.average_cost - a.average_cost);
    }
    setSpots(sortedSpots);
  };

  return (
    <div className="container mx-auto p-3">
      <div className="bg-blue-500 text-white text-center py-4">
        <h1 className="text-3xl font-bold mb-8">Tourist Spots</h1>

        <div className="mb-4">
          <label className="text-2xl" htmlFor="sort">
            Sort by Average Cost:{" "}
          </label>
          <select
            className="text-lg"
            id="sort"
            value={sortBy}
            onChange={handleSortChange}
          >
            <option className="" value="ascending">
              Ascending
            </option>
            <option value="descending">Descending</option>
          </select>
        </div>
      </div>

      {/* Grid of spots */}
      <div className="grid grid-cols-3 gap-8 shadow-lg">
        {spots.map((spot) => (
          <div key={spot._id} className="border border-gray-200 rounded-lg p-4">
            <img
              src={spot.image}
              alt={spot.tourists_spot_name}
              className="w-full h-48 object-cover mb-4 rounded-lg"
            />
            <h2 className="text-xl font-semibold mb-2">
              Tourists Spot Name: {spot.tourists_spot_name}
            </h2>
            <p className="text-gray-600 mb-2">
              Average Cost: ${spot.average_cost}
            </p>
            {/* <p className="text-gray-600 mb-2">
              Average Cost: ${spot.email}
            </p> */}
            <p className="text-gray-600">
              Total Visitors Per Year: {spot.total_visitors_per_year}
            </p>
            <p className="text-gray-600 mb-2">
              Travel Duration: {spot.travel_duration} days
            </p>
            <p className="text-gray-600 mb-2">
              Seasonality: {spot.seasonality}
            </p>

            

            {/* <Link to={`/view-details/${spot._id}`} className="btn btn-primary p-2">View Details</Link>                       */}
            <Link
              to={`/view-details/${spot._id}`}
              className="btn btn-primary p-2"
            >
              <PrivateRoute>View Details</PrivateRoute>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTouristsSpot;
