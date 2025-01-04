import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Authentication from './Authentication';
const Login = () => {
   
  const [data, setData] = useState({
    email: '',
    password: '',
  });
  const checklogin=()=>{
    if(localStorage.getItem('token')){
      navigate("/dashboard");
    }
  }
//   useEffect(() => {
// Authentication();
// checklogin();
//   }, [])
  
  // const [error, seterror] = useState({})
   const [issubmitted, setissubmitted] = useState(false)
  // const errorfun = () => {
  //   const errorData = {};
  //   if (data.email === "") {
  //     errorData.email = "Please enter your email"; 
  //   } else if (!data.email.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
  //     errorData.email = "Please enter a valid email"; 
  //   }
  //   if (data.password === "") {
  //     errorData.message = "Please enter a message";
  //   }
  
  //   return errorData;
  // };
  
  const navigate = useNavigate();
  const goToRegisterPage = () => {
    navigate("/resister");
  };

  const goToForgetPass = () => {
    navigate("/forgetpass");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
  e.preventDefault();
   console.log(data)
   postMessage();
   
   setData(
    {
      email:'',
      password:''
    }
   )
  //  setissubmitted(true);
  };
   const URL = "https://api.durlavparajuli.com.np/api/auth/login"
    const postMessage = async ( ) => {
      try {
        const res = await fetch(URL, {
          method: 'POST',
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data),
        })
        if (res.ok) {
          const res_data = await res.json();
          console.log(res_data.token);
          localStorage.setItem('token',res_data.token)
          navigate("/dashboard")
          // toast.success("submitted")
        }

        else {
          // toast.error("Failed")
        }
  
      } catch (err) {
      console.error(err)
        // toast.error("something went wrong please try again later")
        // console.log(err)
      }
      finally{
        setSubmitting(false);
      }
    }
  // if (Object.keys(data).length === 0) {
  //   setissubmitted(true);
  //  // Only call postMessage if there are no errors
  //   console.log(data); // Only log formData if there are no errors
  // }

  return (
    <>
    {/* <Authentication/> */}
    {!issubmitted ? (
      <>
      <div className=" lg:w-screen lg:h-screen bg-black flex justify-center items-center text-white px-4">
      <div className="mt-[95px] lg:flex lg:grid-cols-2 justify-center items-center lg:h-[550px] w-full max-w-5xl bg-slate-900 rounded-lg lg:mt-20">
        {/* Image Section */}
        <div className="flex justify-center items-center w-full lg:w-1/2 mt-8">
          <img
            className="h-32 w-32 sm:h-48 sm:w-48 lg:h-96 lg:w-96"
            src="10892514.png"
            alt="Login Illustration"
          />
        </div>

        {/* Form Section */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6 px-6 py-8 lg:pl-10">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4 lg:mb-8 text-center lg:text-left">
            Login Here
          </h1>
          <div className="flex flex-col gap-4">
            {/* Email Input */}
            <label className="text-sm sm:text-lg font-semibold">
              Email
              <input
                name="email"
                value={data.email}
                onChange={handleChange}
                className="h-12 sm:h-14 w-full rounded-md outline-none text-base sm:text-lg px-4 text-black mt-2"
                type="email"
                placeholder="Enter your email address"
                required
              />
            </label>
            {/* Password Input */}
            <label className="text-sm sm:text-lg font-semibold">
              Password
              <input
                name="password"
                value={data.password}
                onChange={handleChange}
                className="h-12 sm:h-14 w-full rounded-md outline-none text-base sm:text-lg px-4 text-black mt-2"
                type="password"
                placeholder="Enter your password"
                required
              />
            </label>
          </div>

          {/* Buttons */}
          <div className="flex flex-col lg:flex-row items-center gap-4">
            <button
              className="h-12 sm:h-14 w-full lg:w-48 bg-blue-400 text-sm sm:text-xl font-semibold rounded-lg hover:opacity-70 transition ease-in-out"
              onClick={handleSubmit}
            >
              Login
            </button>
            <button
              className="h-12 sm:h-14 w-full lg:w-48 bg-blue-400 text-sm sm:text-xl font-semibold rounded-lg hover:opacity-70 transition ease-in-out"
              onClick={goToRegisterPage}
            >
              Register Now
            </button>
          </div>
          <button
            className="h-12 sm:h-14 w-full bg-purple-600 text-sm sm:text-xl font-semibold rounded-lg hover:opacity-70 transition ease-in-out mt-4"
            onClick={goToForgetPass}
          >
            Forget Password
          </button>
        </div>
      </div>
    </div>
    </>
    ) :(
<>
</>
    )}
    
    </>
  );
};

export default Login;
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

// const Login = () => {
//   const [data, setData] = useState({ email: "", password: "" });
//   const [error, setError] = useState({});
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const navigate = useNavigate();
//   const URL = "https://api.durlavparajuli.com.np/api/auth/login";

//   const validateInputs = () => {
//     const errors = {};
//     // Validate Email
//     if (!data.email) {
//       errors.email = "Email is required.";
//     } else if (
//       !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i.test(data.email)
//     ) {
//       errors.email = "Enter a valid email address.";
//     }

//     // Validate Password
//     if (!data.password) {
//       errors.password = "Password is required.";
//     } else if (data.password.length < 6) {
//       errors.password = "Password must be at least 6 characters long.";
//     }

//     setError(errors);
//     return Object.keys(errors).length === 0;
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setData({ ...data, [name]: value });
//     setError({ ...error, [name]: "" }); // Clear the error for the current field
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validateInputs()) {
//       return; // Prevent submission if validation fails
//     }

//     setIsSubmitting(true);
//     try {
//       const res = await fetch(URL, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(data),
//       });

//       if (res.ok) {
//         const res_data = await res.json();
//         toast.success("Login successful!");
//         console.log(res_data);
//         navigate("/dashboard"); // Navigate to the dashboard after successful login
//       } else {
//         const err_data = await res.json();
//         toast.error(err_data.message || "Login failed!");
//       }
//     } catch (err) {
//       console.error(err);
//       toast.error("Something went wrong. Please try again later.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const goToRegisterPage = () => navigate("/resister");
//   const goToForgetPass = () => navigate("/forgetpass");

//   return (
//     <div className="lg:w-screen lg:h-screen bg-black flex justify-center items-center text-white px-4">
//       <div className="mt-[95px] lg:flex lg:grid-cols-2 justify-center items-center lg:h-[550px] w-full max-w-5xl bg-slate-900 rounded-lg lg:mt-20">
//         {/* Image Section */}
//         <div className="flex justify-center items-center w-full lg:w-1/2 mt-8">
//           <img
//             className="h-32 w-32 sm:h-48 sm:w-48 lg:h-96 lg:w-96"
//             src="10892514.png"
//             alt="Login Illustration"
//           />
//         </div>

//         {/* Form Section */}
//         <div className="w-full lg:w-1/2 flex flex-col gap-6 px-6 py-8 lg:pl-10">
//           <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4 lg:mb-8 text-center lg:text-left">
//             Login Here
//           </h1>
//           <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//             {/* Email Input */}
//             <label className="text-sm sm:text-lg font-semibold">
//               Email
//               <input
//                 name="email"
//                 value={data.email}
//                 onChange={handleChange}
//                 className="h-12 sm:h-14 w-full rounded-md outline-none text-base sm:text-lg px-4 text-black mt-2"
//                 type="email"
//                 placeholder="Enter your email address"
//                 required
//               />
//               {error.email && (
//                 <p className="text-red-500 text-xs sm:text-sm mt-1">
//                   {error.email}
//                 </p>
//               )}
//             </label>

//             {/* Password Input */}
//             <label className="text-sm sm:text-lg font-semibold">
//               Password
//               <input
//                 name="password"
//                 value={data.password}
//                 onChange={handleChange}
//                 className="h-12 sm:h-14 w-full rounded-md outline-none text-base sm:text-lg px-4 text-black mt-2"
//                 type="password"
//                 placeholder="Enter your password"
//                 required
//               />
//               {error.password && (
//                 <p className="text-red-500 text-xs sm:text-sm mt-1">
//                   {error.password}
//                 </p>
//               )}
//             </label>

//             {/* Buttons */}
//             <div className="flex flex-col lg:flex-row items-center gap-4">
//               <button
//                 type="submit"
//                 className="h-12 sm:h-14 w-full lg:w-48 bg-blue-400 text-sm sm:text-xl font-semibold rounded-lg hover:opacity-70 transition ease-in-out"
//                 disabled={isSubmitting}
//               >
//                 {isSubmitting ? "Logging in..." : "Login"}
//               </button>
//               <button
//                 type="button"
//                 className="h-12 sm:h-14 w-full lg:w-48 bg-blue-400 text-sm sm:text-xl font-semibold rounded-lg hover:opacity-70 transition ease-in-out"
//                 onClick={goToRegisterPage}
//               >
//                 Register Now
//               </button>
//             </div>
//             <button
//               type="button"
//               className="h-12 sm:h-14 w-full bg-purple-600 text-sm sm:text-xl font-semibold rounded-lg hover:opacity-70 transition ease-in-out mt-4"
//               onClick={goToForgetPass}
//             >
//               Forget Password
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

