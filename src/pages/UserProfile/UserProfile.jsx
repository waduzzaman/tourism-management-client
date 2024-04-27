import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEdit, faEnvelope } from "@fortawesome/free-solid-svg-icons";


const UserProfile = () => {
  const { user } = useContext(AuthContext);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhotoURL, setUserPhotoURL] = useState("");

  useEffect(() => {
    if (user) {
      setUserName(user.displayName || "");
      setUserEmail(user.email || "");
      setUserPhotoURL(user.photoURL || "");
    }
  }, [user]);

  const handleUpdateUserInfo = () => {
    // Logic to handle updating user information
    // For example, you can trigger a modal or form for updating user details
    console.log("Updating user information...");
  };

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="bg-white rounded-lg shadow-lg p-8 w-96">
        <div className="text-center mb-6">
          {userPhotoURL ? (
            <img
              src={userPhotoURL}
              alt="User"
              className="w-20 h-20 rounded-full mx-auto mb-4"
            />
          ) : (
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gray-200 text-gray-400 mb-4 mx-auto">
              <FontAwesomeIcon icon={faUser} size="3x" />
            </div>
          )}
          <h2 className="text-xl font-bold my-3">{userName}</h2>
         
          <div className="text-center">
          <div className="flex justify-center items-center space-x-2 text-gray-600">
            <FontAwesomeIcon icon={faEnvelope} />
            <p>{userEmail}</p>
          </div>
        </div>
        </div>
        <div className="flex justify-center mb-6">
  <button
    className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full flex items-center justify-center space-x-2 transition duration-300"
    onClick={handleUpdateUserInfo}
  >
    <FontAwesomeIcon icon={faEdit} />
    <span>Update User Information</span>
  </button>
</div>

        
      </div>
    </div>
  );
};

export default UserProfile;
