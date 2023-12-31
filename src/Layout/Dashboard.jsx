import { Link, Outlet } from "react-router-dom";
// import logo from "../assets/logo.png";
import SetRole from "../hooks/SetRole";
// import {
//   FaBookDead,
//   FaBookReader,
//   FaBookmark,
//   FaHome,
//   FaSave,
//   FaUsers,
//   FaWallet,
// } from "react-icons/fa";

const Dashboard = () => {
  const admin = (
    <>
      <li className="mt-10">
        <Link to="/dashboard/manageClasses">
          {/* <FaWallet></FaWallet>  */}
          Manage Classes
        </Link>
      </li>
      <li>
        <Link to="/dashboard/manageUsers">
          {" "}
          {/* <FaUsers></FaUsers>  */}
          Manage Users
        </Link>
      </li>
    </>
  );
  const instractor = (
    <>
      <li className="mt-10">
        <Link to="/dashboard/addClass">
          {/* <FaSave></FaSave>  */}
          Add Class
        </Link>
      </li>
      <li>
        <Link to="/dashboard/myClass">
          {/* <FaBookReader></FaBookReader>  */}
          My Class
        </Link>
      </li>
    </>
  );
  const student = (
    <>
      <li className="mt-10">
        <Link to="/dashboard/selectedClasses">
          {/* <FaBookmark></FaBookmark>  */}
          My Selected Classes
        </Link>
      </li>
      <li>
        <Link to="/dashboard/enrolledClasses">
          {/* <FaBookDead></FaBookDead>  */}
          My Enrolled Classes
        </Link>
      </li>
      <li>
        <Link to="/dashboard/paymentHistory">
          {/* <FaWallet></FaWallet> */}
          My Payment History
        </Link>
      </li>
    </>
  );
  const { data, isLoading } = SetRole();

  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content overflow-x-auto">
          {/* Page content here */}
          <div className="mt-10">
            <Outlet></Outlet>
          </div>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

          <ul className="menu p-4 w-80 h-full bg-teal-950 text-white ">
            <div className="flex items-center">
              {/* <img className="w-8" src={logo} alt="" /> */}
              <h1 className="text-xl font-bold">-SportsHub</h1>
            </div>
            <hr className="w-full mt-2 border-1 mx-auto border-black" />

            {/* Sidebar content here */}
            {isLoading ? <></> : data?.role === "student" && student}
            {isLoading ? <></> : data?.role === "instractor" && instractor}
            {isLoading ? <></> : data?.role === "admin" && admin}

            <hr className="w-full mt-2 border-1 mx-auto border-black" />
            <li>
              <Link to="/">
                {/* <FaHome></FaHome>  */}
                Home
              </Link>{" "}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
