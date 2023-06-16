// import { useContext, useState } from "react";
// import { useForm } from "react-hook-form";
// import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";
// import login from "../../../image/login.gif";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { FaGoogle } from "react-icons/fa";
// import { AuthContext } from "../../../providers/AuthProviders";
// import { toast } from "react-hot-toast";

// const Login = () => {
//   const { googleSignIn, setUser, userLogin } = useContext(AuthContext);
//   const [error, setError] = useState("");
//   const location = useLocation();
//   const navigate = useNavigate();
//   const from = location.state?.from?.pathname || "/";

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const [showPassword, setShowPassword] = useState(false);

//   const onSubmit = (data) => {
//     console.log(data);
//     // Handle form submission here
//     userLogin(data.email, data.password)
//       .then((result) => {
//         console.log(result.user);
//         navigate(from, { replace: true });
//         toast.success("Login Successful");
//       })
//       .catch((error) => {
//         // console.log(err.message);
//         setError(error.message);
//       });
//   };

//   const handleGoogleSignIn = () => {
//     googleSignIn()
//       .then((result) => {
//         // console.log(result.user);
//         setUser(result);
//         navigate(from, { replace: true });
//         toast.success("Login Successful");
//       })
//       .catch((error) => {
//         // console.log(err.message);
//         setError(error.message);
//       });
//   };

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   return (
//     <div className="flex flex-col md:flex-row max-w-3xl mx-auto">
//       <div className="md:w-1/2 p-8 flex items-center justify-center">
//         <img src={login} alt="Login" className="max-w-full" />
//       </div>

//       <div className="md:w-1/2 p-8">
//         <h2 className="text-2xl font-bold mb-6">Login Please</h2>
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <div className="mb-4">
//             <label htmlFor="email" className="block mb-2">
//               Email:
//             </label>
//             <input
//               type="email"
//               id="email"
//               {...register("email", {
//                 required: true,
//                 pattern: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/i,
//               })}
//               className="w-full p-2 border border-gray-300 rounded"
//             />
//             {errors.email && (
//               <span className="text-red-500">
//                 {errors.email.type === "required"
//                   ? "This field is required"
//                   : "Invalid email address"}
//               </span>
//             )}
//           </div>

//           <div className="mb-4 relative">
//             <label htmlFor="password" className="block mb-2">
//               Password:
//             </label>
//             <div className="relative">
//               <input
//                 type={showPassword ? "text" : "password"}
//                 id="password"
//                 {...register("password", { required: true })}
//                 className="w-full p-2 border border-gray-300 rounded"
//               />
//               <span
//                 className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
//                 onClick={togglePasswordVisibility}
//               >
//                 {showPassword ? <RiEyeFill /> : <RiEyeOffFill />}
//               </span>
//             </div>
//             {errors.password && (
//               <span className="text-red-500">This field is required</span>
//             )}
//           </div>
//           <div className="text-center">
//             {error && <span className="text-red-600">{error}</span>}
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white py-2 px-4 rounded"
//           >
//             Login
//           </button>
//         </form>
//         <div
//           onClick={handleGoogleSignIn}
//           className="flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer"
//         >
//           <FaGoogle size={32} />

//           <p>Continue with Google</p>
//         </div>
//         <p className="px-6 text-sm text-center text-gray-400">
//           Don't have an account yet?{" "}
//           <Link
//             to="/signup"
//             className="hover:underline hover:text-rose-500 text-gray-600"
//           >
//             Sign up
//           </Link>
//           .
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;

import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import SocialLogin from "../SocialLogin/SocialLogin";

import { AuthContext } from "../../../providers/AuthProviders";
import useAxiosSecure from "../../../hooks/axiosSecure";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState();
  const axios = useAxiosSecure();

  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission here
    signIn(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        axios
          .post(`https://foreign-language-center-client.vercel.app/jwt`, {
            email: result.user.email,
          })
          .then((response) => {
            console.log(response);

            localStorage.setItem("axcess_token", response.data.token);

            Swal.fire({
              position: "top-center",
              icon: "success",
              title: "Login Successfully",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate(from, { replace: true });
          });
      })
      .catch((err) => {
        console.log(err.message);
        setError(error.message);
      });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col md:flex-row max-w-3xl mx-auto">
      <div className="md:w-1/2 p-8 flex items-center justify-center">
        {/* <img src={login} alt="Login" className="max-w-full" /> */}
      </div>

      <div className="md:w-1/2 p-8">
        <h2 className="text-2xl font-bold mb-6">Login Please</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
              {...register("email", {
                required: true,
                pattern: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/i,
              })}
              className="w-full p-2 border border-gray-300 rounded"
            />
            {errors.email && (
              <span className="text-red-500">
                {errors.email.type === "required"
                  ? "This field is required"
                  : "Invalid email address"}
              </span>
            )}
          </div>

          <div className="mb-4 relative">
            <label htmlFor="password" className="block mb-2">
              Password:
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                {...register("password", { required: true })}
                className="w-full p-2 border border-gray-300 rounded"
              />
              <span
                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <RiEyeFill /> : <RiEyeOffFill />}
              </span>
            </div>
            {errors.password && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>

          <p className="text-red-500">{error}</p>

          <button
            type="submit"
            className="w-full btn btn-warning btn-sm  hover:bg-amber-600  text-white py-2 px-4 rounded"
          >
            Login
          </button>
        </form>

        <SocialLogin></SocialLogin>
        <p className="px-6 text-sm text-center text-gray-400">
          Don not have an account yet?{" "}
          <Link
            to="/signup"
            className="hover:underline hover:text-rose-500 text-gray-600"
          >
            Sign up
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default Login;
