import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { signInWithPopup, GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { FaGithub, FaGoogle } from "react-icons/fa";

const GitHubSignInButton = () => {
  const auth = useContext(AuthContext);
  const handleGitHubSignIn = async () => {
    try {
      const provider = new GithubAuthProvider();
      const result = await signInWithPopup(auth.auth, provider);
      const user = result.user;

      console.log("GitHub sign-in successful:", user);
    } catch (error) {
      console.error("GitHub sign-in error:", error);
    }
  };

  return (
    <button onClick={handleGitHubSignIn}>
      <FaGithub />
    </button>
  );
};

const GoogleSignInButton = () => {
  const auth = useContext(AuthContext);
  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth.auth, provider);
      const user = result.user;

      console.log("Google sign-in successful:", user);
    } catch (error) {
      console.error("Google sign-in error:", error);
    }
  };

  return (
    <button onClick={handleGoogleSignIn}>
      <FaGoogle />
    </button>
  );
};

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [showUserName, setShowUserName] = useState(false);
  const [googleUserPhotoURL, setGoogleUserPhotoURL] = useState(null);
  const [userName, setUserName] = useState("");

  const handleLogOut = () => {
    logOut()
      .then(() => console.log("User logged out successfully"))
      .catch((error) => console.error(error));
  };

  const handleMouseEnter = () => {
    setShowUserName(true);
  };

  const handleMouseLeave = () => {
    setShowUserName(false);
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
            className="flex items-center"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {googleUserPhotoURL && (
              <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <img
                  src={googleUserPhotoURL}
                  alt="Google User"
                  className="w-8 h-8 rounded-full mr-2"
                />
                {showUserName && (
                  <span className="absolute top-10 left-4 bg-white p-1 rounded">
                    {userName}
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
            <div className="pr-3">
              <GoogleSignInButton />
            </div>
            <div>
              <GitHubSignInButton />
            </div>
            <div>
              <Link to="/login">
                <button className="btn btn-sm">Login</button>
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

