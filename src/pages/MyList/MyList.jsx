// import { useState, useEffect, useContext } from "react";
// import { Link } from "react-router-dom";
// import PrivateRoute from "../../routes/PrivateRoute";
// import { FiEdit } from "react-icons/fi";
// import { AuthContext } from "../../providers/AuthProvider";

// const MyList = () => {
//   const { user } = useContext(AuthContext) || {};
//   const [spots, setSpots] = useState([]);
//   const [control, setControl] = useState(false);
//   // console.log(user);

//   useEffect(() => {
//     if (!user?.email) return; // Skip fetch if email is not available

//     fetch(`http://localhost:5000/spots/email/${user.email}`)
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error("Failed to fetch");
//         }
//         return res.json();
//       })
//       .then((data) => {
//         setSpots(data);
//       })
//       .catch((error) => {
//         console.error("Error fetching spots:", error);
//         // Handle the error, e.g., display an error message to the user
//       });
//   }, [user, control]);

//   const handleDelete = (id) => {
//     fetch(`http://localhost:5000/delete/${id}`, {
//       method: "DELETE",
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.deletedCount > 0) {
//           setControl(!control);
//         }
//       });
//   };

//   return (
//     <div className="container mx-auto p-3">
//       <div className="bg-blue-500 text-white text-center py-4 rounded-t-lg">
//         <h1 className="text-3xl font-bold mb-4">Tourist Spots</h1>
//       </div>

//       <table className="w-full border border-gray-300">
//         <thead>
//           <tr className="bg-gray-200 text-black">
//             <th className="p-4 text-center border border-gray-800">Image</th>
//             <th className="p-4 text-center border border-gray-800">
//               Spot Name
//             </th>
//             <th className="p-4 text-center border border-gray-800">Cost</th>
//             <th className="p-4 text-center border border-gray-800">Duration</th>
//             <th className="p-4 text-center border border-gray-800">Update</th>
//             <th className="p-4 text-center border border-gray-800">Delete</th>
//           </tr>
//         </thead>
//         <tbody>
//           {spots?.map((spot) => (
//             <tr key={spot._id} className="border-b border-gray-300">
//               <td className="p-4 text-center border">
//                 <img
//                   src={spot.image}
//                   alt={spot.tourists_spot_name}
//                   className="w-16 h-16 object-cover rounded-lg"
//                 />
//               </td>
//               <td className="p-4 text-center border">
//                 {spot.tourists_spot_name}
//               </td>
//               <td className="p-4 text-center border">${spot.average_cost}</td>
//               <td className="p-4 text-center border">
//                 {spot.travel_duration} days
//               </td>
//               <td className="p-4 text-center border">
//                 <Link to={`/update-tourists-spot/${spot._id}`}>
//                   <PrivateRoute>
//                     <FiEdit className="w-8 h-8" />
//                   </PrivateRoute>
//                 </Link>
//               </td>
//               <td className="p-4 text-center border">              

//                 <button className="text-white bg-red-600 px-4 py-2 rounded-md transition duration-300 hover:bg-orange-600" onClick={() => handleDelete(spot._id)}>X</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default MyList;


import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import PrivateRoute from "../../routes/PrivateRoute";
import { FiEdit } from "react-icons/fi";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const MyList = () => {
  const { user } = useContext(AuthContext) || {};
  const [spots, setSpots] = useState([]);
  const [control, setControl] = useState(false);

  useEffect(() => {
    if (!user?.email) return; // Skip fetch if email is not available

    fetch(`http://localhost:5000/spots/email/${user.email}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch");
        }
        return res.json();
      })
      .then((data) => {
        setSpots(data);
      })
      .catch((error) => {
        console.error("Error fetching spots:", error);
      });
  }, [user, control]);

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/delete/${id}`, {
          method: "DELETE",
        })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            setControl(!control);
          }
        });
        Swal.fire(
          'Deleted!',
          'Your spot has been deleted.',
          'success'
        );
      }
    });
  };

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
                <Link to={`/update-tourists-spot/${spot._id}`}>
                  <PrivateRoute>
                    <FiEdit className="w-8 h-8" />
                  </PrivateRoute>
                </Link>
              </td>
              <td className="p-4 text-center border">
                <button className="text-white bg-red-600 px-4 py-2 rounded-md transition duration-300 hover:bg-orange-600" onClick={() => handleDelete(spot._id)}>X</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyList;

