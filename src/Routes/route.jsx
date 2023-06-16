// import { createBrowserRouter } from "react-router-dom";
// import App from "../App";
// import Home from "../page/Home/Home/Home";
// import Login from "../page/Register/Login/Login";
// import SignUp from "../page/Register/Signup/Signup";
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App></App>,
//     children: [
//       { path: "/", element: <Home></Home> },
//       { path: "login", element: <Login></Login> },
//       { path: "signUp", element: <SignUp></SignUp> },
//     ],
//   },
// ]);
// export default router;
import { createBrowserRouter } from "react-router-dom";

import PrivateInstractor from "./PrivateAdmin copy";
import PrivateStudent from "./PrivateStudent";
import PrivateAdmin from "./PrivateAdmin";
import App from "../App";
import Home from "../page/Home/Home/Home";
import Classes from "../page/Classes/Classes";
import Instructors from "../page/Instructors/Instructors";
import Login from "../page/Register/Login/Login";
import SignUp from "../page/Register/Signup/Signup";

import ManageUsers from "../page/Dashboard/ManageUsers/ManageUsers";
import ManageClasses from "../page/Dashboard/ManageClasses/ManageClasses";
import Dashboard from "../Layout/Dashboard";
import AddClass from "../page/Dashboard/AddClass/AddClass";
import MyClass from "../page/Dashboard/MyClass/MyClass";
import SelectedClasses from "../page/Dashboard/SelectedClasses/SelectedClasses";
import UpdateMyClass from "../page/Dashboard/MyClass/UpdateMyClass";
import EnrolledClasses from "../page/Dashboard/EnrolledClasses/EnrolledClasses";
import Payment from "../page/Dashboard/Payment/Payment";
import PaymentHistory from "../page/Dashboard/PaymentHistory/PaymentHistory";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "instructors",
        element: <Instructors></Instructors>,
      },
      {
        path: "classes",
        element: <Classes></Classes>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signUp",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "manageClasses",
        element: (
          <PrivateAdmin>
            <ManageClasses></ManageClasses>
          </PrivateAdmin>
        ),
      },
      {
        path: "manageUsers",
        element: (
          <PrivateAdmin>
            <ManageUsers></ManageUsers>
          </PrivateAdmin>
        ),
      },
      {
        path: "addClass",
        element: (
          <PrivateInstractor>
            <AddClass></AddClass>
          </PrivateInstractor>
        ),
      },
      {
        path: "myClass",
        element: (
          <PrivateInstractor>
            <MyClass></MyClass>
          </PrivateInstractor>
        ),
      },
      {
        path: "updateMyClass/:id",
        element: (
          <PrivateInstractor>
            <UpdateMyClass></UpdateMyClass>
          </PrivateInstractor>
        ),
        loader: ({ params }) =>
          fetch(
            `https://summer-camp-serversite-salauddin98.vercel.app/classSingle/${params.id}`
          ),
      },
      {
        path: "selectedClasses",
        element: (
          <PrivateStudent>
            <SelectedClasses></SelectedClasses>
          </PrivateStudent>
        ),
      },
      {
        path: "enrolledClasses",
        element: (
          <PrivateStudent>
            <EnrolledClasses></EnrolledClasses>
          </PrivateStudent>
        ),
      },

      {
        path: "payment/:id",
        element: (
          <PrivateStudent>
            <Payment></Payment>
          </PrivateStudent>
        ),
        loader: ({ params }) =>
          fetch(
            `https://summer-camp-serversite-salauddin98.vercel.app/singleSelect/${params.id}`
          ),
      },
      {
        path: "paymentHistory",
        element: (
          <PrivateStudent>
            <PaymentHistory></PaymentHistory>
          </PrivateStudent>
        ),
      },
    ],
  },
]);

export default router;
