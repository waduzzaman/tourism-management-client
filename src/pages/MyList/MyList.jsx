import { useState, useEffect } from 'react';
import { useAuth } from '../../providers/AuthProvider';

const MyList = () => {
  const { user } = useAuth(); // Get the authenticated user
  const [spots, setSpots] = useState([]);

  useEffect(() => {
    // Fetch data of spots added by the logged-in user
    fetch(`http://localhost:5000/spots?userId=${user.id}`)
      .then(response => response.json())
      .then(data => setSpots(data))
      .catch(error => console.error('Error fetching spots:', error));
  }, [user]);

  const handleDelete = async (spotId) => {
    try {
      // Implement your delete functionality here
      console.log(`Deleting spot with ID: ${spotId}`);
    } catch (error) {
      console.error('Error deleting spot:', error);
    }
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-8">My List</h1>
      <table className="table-auto">
        <thead>
          <tr>
            <th>Tourists Spot Name</th>
            <th>Location</th>
            <th>Average Cost</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {spots.map(spot => (
            <tr key={spot._id}>
              <td>{spot.tourists_spot_name}</td>
              <td>{spot.location}</td>
              <td>${spot.average_cost}</td>
              <td>
                <button className="btn btn-primary">Update</button>
              </td>
              <td>
                <button className="btn btn-danger" onClick={() => handleDelete(spot._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyList;
