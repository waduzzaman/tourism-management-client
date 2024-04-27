

import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { PiSignInBold } from "react-icons/pi";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [showUserName, setShowUserName] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then(() => console.log("User logged out successfully"))
      .catch((error) => console.error(error));
  };

  const navLinks = (
    <>
      <li>
        <NavLink to="/" exact>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/all-tourists-spot">All Tourists Spot</NavLink>
      </li>
      <li>
        <NavLink to="/add-tourists-spot">Add Tourists Spot</NavLink>
      </li>      
      <li>
        <NavLink to="/my-list">My List</NavLink>
      </li>      
      <li>
        <NavLink to="/blogs">Blogs</NavLink>
      </li>
 
      <li>
        <NavLink to="/userprofile">User Profile</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <Link to="/" className="">
          <img className="w-16" src="logo.jpeg" alt="Logo" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>

      <div className="navbar-end">
        {user ? (
          <div
            className="flex items-center relative"
            onMouseEnter={() => setShowUserName(true)}
            onMouseLeave={() => setShowUserName(false)}
          >
            {user.photoURL && (
              <div className="relative">
                <img
                  src={user.photoURL}
                  alt={user.displayName}
                  className="w-8 h-8 rounded-full mr-2"
                />
                {showUserName && (
                  <span className="absolute top-[25px] left-[20px] bg-white p-1 rounded">
                    {user.displayName}
                  </span>
                )}
              </div>
            )}
            <button onClick={handleLogOut} className="btn btn-sm">
              Sign out
            </button>
          </div>
        ) : (
          <div className="flex gap-3 items-center">         
            <div>
              <Link to="/login">
                <button className="btn btn-sm"> <PiSignInBold /> Login</button>
              </Link>
            </div>
            <div>
              <Link to="/register">
                <button className="btn btn-sm">Register</button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
