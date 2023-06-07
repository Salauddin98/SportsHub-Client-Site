import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../page/Home/Home/Home";
import Login from "../page/Register/Login/Login";
import SignUp from "../page/Register/Signup/Signup";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "login", element: <Login></Login> },
      { path: "signUp", element: <SignUp></SignUp> },
    ],
  },
]);
export default router;
