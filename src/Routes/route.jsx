import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../page/Home/Home/Home";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [{ path: "/", element: <Home></Home> }],
  },
]);
export default router;
