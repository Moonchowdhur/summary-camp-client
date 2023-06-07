import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

import Dashboard from "../layout/Dashboard";
import Allusers from "../pages/Allusers/Allusers";
import Error from "../pages/Error/Error";
import Instructor from "../pages/Instructor/Instructor";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/instructors",
        element: <Instructor></Instructor>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,

    children: [
      // admin panel
      {
        path: "allusers",
        element: <Allusers></Allusers>,
      },
    ],
  },
]);

export default router;
