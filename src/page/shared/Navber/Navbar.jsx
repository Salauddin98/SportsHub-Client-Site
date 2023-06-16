// import { useContext, useState } from "react";

// import logo from "../../../assets/logo.png";

// import { Link, NavLink } from "react-router-dom";
// import { AuthContext } from "../../../providers/AuthProviders";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const { user, logOut } = useContext(AuthContext);
//   // console.log(user);
//   const handleLogout = () => {
//     logOut()
//       .then(() => {})
//       .catch((error) => {
//         console.log(error.message);
//       });
//   };
//   return (
//     <header className="bg-slate-200 sticky top-0 z-20">
//       <div className="px-4 py-5 mx-auto max-w-7xl md:px-24 lg:px-8 ">
//         <div className="relative flex items-center justify-between">
//           <Link
//             to="/"
//             aria-label="HeroGadget"
//             title="HeroGadget"
//             className="inline-flex items-center"
//           >
//             <div className="flex items-center justify-center w-12 h-12 rounded-full bg-cyan-200">
//               {/* <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 32 32"
//                 fill="currentColor"
//                 className="flex-shrink-0 w-5 h-5 rounded-full text-cyan-600"
//               >
//                 <path d="M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z"></path>
//               </svg> */}
//               <img src={logo} alt="" />
//             </div>
//             <p className="ml-2 text-3xl font-bold tracking-wide text-gray-800 title-text">
//               Lang<span className="text-orange-400">Store</span>
//             </p>
//           </Link>
//           <ul className="items-center hidden space-x-8 lg:flex text-base font-bold">
//             <li>
//               <NavLink
//                 to="/"
//                 aria-label="Home"
//                 title="Home"
//                 className={({ isActive }) => (isActive ? "active" : "default")}
//               >
//                 Home
//               </NavLink>
//             </li>

//             <li>
//               <NavLink
//                 to="/AllToys"
//                 aria-label="All Toys"
//                 title="All Toys"
//                 className={({ isActive }) => (isActive ? "active" : "default")}
//               >
//                 Instructors
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to="/AllToys"
//                 aria-label="All Toys"
//                 title="All Toys"
//                 className={({ isActive }) => (isActive ? "active" : "default")}
//               >
//                 Classes
//               </NavLink>
//             </li>
//             {user && (
//               <>
//                 <li>
//                   <NavLink
//                     to="/AddToys"
//                     aria-label=" Add Toys"
//                     title=" Add Toys"
//                     className={({ isActive }) =>
//                       isActive ? "active" : "default"
//                     }
//                   >
//                     Dashboard
//                   </NavLink>
//                 </li>
//               </>
//             )}
//           </ul>

//           <div className="items-center hidden space-x-8 lg:flex text-lg font-bold">
//             {user ? (
//               <>
//                 <img
//                   id="img"
//                   alt=""
//                   className="w-12 h-12 border rounded-full dark:bg-gray-500 dark:border-gray-700"
//                   src={user.photoURL}
//                 />

//                 <button
//                   onClick={handleLogout}
//                   className="btn btn-outline btn-error"
//                 >
//                   Logout
//                 </button>
//               </>
//             ) : (
//               <>
//                 {" "}
//                 <Link to="/login">
//                   {" "}
//                   <button className="btn btn-outline btn-secondary">
//                     Login
//                   </button>
//                 </Link>
//                 <Link to="/SignUp">
//                   {" "}
//                   <button className="btn btn-outline btn-primary">
//                     Signup
//                   </button>
//                 </Link>
//               </>
//             )}
//           </div>

//           <div className="lg:hidden">
//             <button
//               aria-label="Open Menu"
//               title="Open Menu"
//               className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
//               onClick={() => setIsMenuOpen(true)}
//             >
//               <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
//                 <path
//                   fill="currentColor"
//                   d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
//                 />
//                 <path
//                   fill="currentColor"
//                   d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
//                 />
//                 <path
//                   fill="currentColor"
//                   d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
//                 />
//               </svg>
//             </button>
//             {isMenuOpen && (
//               <div className="absolute z-10 top-0 left-0 w-full">
//                 <div className="p-5 bg-white border rounded shadow-sm">
//                   <div className="flex items-center justify-between mb-4">
//                     <div>
//                       <Link
//                         to="/"
//                         aria-label="HeroChef"
//                         title="HeroGadget"
//                         className="inline-flex items-center"
//                       >
//                         <div className="flex items-center justify-center w-8 h-8 rounded-full bg-cyan-200">
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             viewBox="0 0 32 32"
//                             fill="currentColor"
//                             className="flex-shrink-0 w-5 h-5 rounded-full text-cyan-600"
//                           >
//                             <path d="M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z"></path>
//                           </svg>
//                         </div>
//                         <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase title-text">
//                           Baby<span className="text-orange-400">Toys</span>
//                         </span>
//                       </Link>
//                     </div>
//                     <div>
//                       <button
//                         aria-label="Close Menu"
//                         title="Close Menu"
//                         className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
//                         onClick={() => setIsMenuOpen(false)}
//                       >
//                         <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
//                           <path
//                             fill="currentColor"
//                             d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
//                           />
//                         </svg>
//                       </button>
//                     </div>
//                   </div>
//                   <nav className="z-30">
//                     <ul className="space-y-4">
//                       <li>
//                         <NavLink
//                           to="/"
//                           aria-label="Home"
//                           title="Home"
//                           className={({ isActive }) =>
//                             isActive ? "active" : "default"
//                           }
//                         >
//                           Home
//                         </NavLink>
//                       </li>

//                       <li>
//                         <NavLink
//                           to="/AllToys"
//                           aria-label="All Toys"
//                           title="All Toys"
//                           className={({ isActive }) =>
//                             isActive ? "active" : "default"
//                           }
//                         >
//                           Instructors
//                         </NavLink>
//                       </li>
//                       {user && (
//                         <>
//                           <li>
//                             <NavLink
//                               to="/myToys"
//                               aria-label="  My Toys"
//                               title="  My Toys"
//                               className={({ isActive }) =>
//                                 isActive ? "active" : "default"
//                               }
//                             >
//                               Dashboard
//                             </NavLink>
//                           </li>
//                         </>
//                       )}

//                       <li>
//                         {user ? (
//                           <>
//                             <img
//                               id="img"
//                               alt=""
//                               className="w-12 h-12 border rounded-full dark:bg-gray-500 dark:border-gray-700"
//                               src={user.photoURL}
//                             />

//                             <button
//                               onClick={handleLogout}
//                               className="btn btn-outline btn-error mt-3 md:mt-0"
//                             >
//                               Logout
//                             </button>
//                           </>
//                         ) : (
//                           <>
//                             {" "}
//                             <Link to="/login">
//                               {" "}
//                               <button className="btn btn-outline btn-secondary mr-3 md:mr-0">
//                                 Login
//                               </button>
//                             </Link>
//                             <Link to="/SignUp">
//                               {" "}
//                               <button className="btn btn-outline btn-primary">
//                                 Signup
//                               </button>
//                             </Link>
//                           </>
//                         )}
//                       </li>
//                     </ul>
//                   </nav>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;

import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProviders";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  // console.log(user);
  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };
  const navOptions = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/instructors">Instructors</Link>
      </li>
      <li>
        <Link to="/classes">Classes</Link>
      </li>

      {user && (
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      )}
    </>
  );
  // dark white mode
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const handleDarkMode = (event) => {
    if (event.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <div>
      <div className="navbar  fixed z-20  rounded-t-lg max-w-6xl bg-stone-700 text-white">
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
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-black text-white rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <div>
            <Link to="/">
              <img className="w-8 mx-1 mt-2" src={logo} alt="" />
            </Link>
          </div>
          <Link to="/" className="  text-xl">
            <h2 className="font-bold ">-Language</h2>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <Link
              onClick={handleLogOut}
              className="btn btn-warning btn-sm text-white hover:bg-amber-600 mx-3"
            >
              Log Out
            </Link>
          ) : (
            <Link
              to="/login"
              className="btn btn-warning btn-sm text-white hover:bg-amber-600 mx-3"
            >
              Login
            </Link>
          )}
          {user && (
            <img
              id="img"
              alt=""
              className="w-12 h-12 border rounded-full dark:bg-gray-500 dark:border-gray-700"
              src={user.photoURL}
            />
          )}

          <div className="lg:flex">
            <label className="swap swap-rotate">
              <input type="checkbox" onChange={handleDarkMode} />

              <svg
                className="swap-on fill-current w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              <svg
                className="swap-off fill-current w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
