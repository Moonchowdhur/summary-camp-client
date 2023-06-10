import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

import Dashboard from "../layout/Dashboard";
import Allusers from "../pages/Allusers/Allusers";
import Error from "../pages/Error/Error";
import Instructor from "../pages/Instructor/Instructor";
import AddClass from "../pages/AddClass/AddClass";
import MyClass from "../pages/MyClass/MyClass";
import Classes from "../pages/Classes/Classes";
import MySelectedClasses from "../pages/MySelectedClasses/MySelectedClasses";
import MyEnrolledClasses from "../pages/MyEnrolledClasses/MyEnrolledClasses";
import UpdateClass from "../pages/UpdateClass/UpdateClass";
import ManageClass from "../pages/ManageClass/ManageClass";
import PrivateRoute from "./PrivateRoute";
import PaymentHistory from "../pages/PaymentHistory/PaymentHistory";
import Payment from "../pages/Payment/Payment";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";
import StudentRoute from "./StudentRoute";

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
        path: "/classes",
        element: <Classes></Classes>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      // {
      //   path: "update/:id",
      //   element: <UpdateClass></UpdateClass>,
      // },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),

    children: [
      // admin panel
      {
        path: "allusers",
        element: (
          <AdminRoute>
            <Allusers></Allusers>
          </AdminRoute>
        ),
      },
      {
        path: "manageclass",
        element: (
          <AdminRoute>
            {" "}
            <ManageClass></ManageClass>
          </AdminRoute>
        ),
      },
      {
        path: "addclass",
        element: (
          <InstructorRoute>
            <AddClass></AddClass>
          </InstructorRoute>
        ),
      },
      {
        path: "myclass",
        element: (
          <InstructorRoute>
            {" "}
            <MyClass></MyClass>
          </InstructorRoute>
        ),
      },
      {
        path: "selectedclass",
        element: (
          <StudentRoute>
            <MySelectedClasses></MySelectedClasses>
          </StudentRoute>
        ),
      },
      {
        path: "enrolledclass",
        element: (
          <StudentRoute>
            <MyEnrolledClasses></MyEnrolledClasses>
          </StudentRoute>
        ),
      },
      {
        path: "payment",
        element: (
          <StudentRoute>
            <PaymentHistory></PaymentHistory>
          </StudentRoute>
        ),
      },
      {
        path: "pay/:id",
        element: (
          <StudentRoute>
            <Payment></Payment>
          </StudentRoute>
        ),
      },
      {
        path: "update/:id",
        element: (
          <InstructorRoute>
            <UpdateClass></UpdateClass>
          </InstructorRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/classes/${params.id}`),
      },
    ],
  },
]);

export default router;
