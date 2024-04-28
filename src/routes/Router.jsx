import { createBrowserRouter } from "react-router-dom";

import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Blogs from "../pages/Blogs/Blogs";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import PrivateRoute from "./PrivateRoute";
import UserProfile from "../pages/UserProfile/UserProfile";
import AddTouristsSpot from "../pages/AddTouristsSpot/AddTouristsSpot";
import AllTouristsSpot from "../pages/AllTouristsSpot/AllTouristsSpot";
import ViewDetails from "../pages/ViewDetails/ViewDetails";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/all-tourists-spot",
        element: <AllTouristsSpot/>
      },
      {
        path: "/view-details",
        element: <ViewDetails/>
      },

      

      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },


      
      {
        path: "/login",
        element: <Login></Login>,
      },

      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/userprofile",
        element: (
          <PrivateRoute>
            <UserProfile/>           
          </PrivateRoute>
        ),
      },
      {
        path: "/add-tourists-spot",
        element: (
          <PrivateRoute>
           <AddTouristsSpot/>       
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;