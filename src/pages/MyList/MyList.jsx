

import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import PrivateRoute from "../../routes/PrivateRoute";
import { FiEdit } from "react-icons/fi";
import { AuthContext } from "../../providers/AuthProvider";

const MyList = () => {

    const {user} = useContext(AuthContext) ||{};
  const [spots, setSpots] = useState([]);


  useEffect(() => {
    const fetchSpots = async () => {
      try {
        const response = await fetch(`http://localhost:5000/spots/${user?.email}`);
        if (response.ok) {
          const data = await response.json();
          setSpots(Array.isArray(data) ? data : [data]); // Ensure data is always an array
        } else {
          console.error("Failed to fetch spots:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching spots:", error);
      }
    };

    if (user) {
      fetchSpots();
    }
  }, [user]);

  return (
    <div className="container mx-auto p-3">
      <div className="bg-blue-500 text-white text-center py-4 rounded-t-lg">
        <h1 className="text-3xl font-bold mb-4">Tourist Spots</h1>
      </div>

      <table className="w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-200 text-black">
            <th className="p-4 text-center border border-gray-800">Image</th>
            <th className="p-4 text-center border border-gray-800">Spot Name</th>
            <th className="p-4 text-center border border-gray-800">Cost</th>
            <th className="p-4 text-center border border-gray-800">Duration</th>
            <th className="p-4 text-center border border-gray-800">Update</th>
            <th className="p-4 text-center border border-gray-800">Delete</th>
          </tr>
        </thead>
        <tbody>
          {spots?.map((spot) => (
            <tr key={spot._id} className="border-b border-gray-300">
              <td className="p-4 text-center border">
                <img
                  src={spot.image}
                  alt={spot.tourists_spot_name}
                  className="w-16 h-16 object-cover rounded-lg"
                />
              </td>
              <td className="p-4 text-center border">{spot.tourists_spot_name}</td>
              <td className="p-4 text-center border">${spot.average_cost}</td>
              <td className="p-4 text-center border">{spot.travel_duration} days</td>
              <td className="p-4 text-center border">
                <Link to={`/view-details/${spot._id}`}>
                  <PrivateRoute>
                    <FiEdit className="w-8 h-8" />
                  </PrivateRoute>
                </Link>
              </td>
              <td className="p-4 text-center border">
                <Link
                  to={`/view-details/${spot._id}`}
                  className="text-white bg-red-500 px-4 py-2 rounded-md transition duration-300 hover:bg-blue-600"
                >
                  <PrivateRoute>X</PrivateRoute>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyList;

