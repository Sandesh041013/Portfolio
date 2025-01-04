import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Register = () => {
   const [data, setdata] = useState({
      username: '',
      email: '',
      phone: '',
      password: '',
    });
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/Login");
  };
  const URL = "https://api.durlavparajuli.com.np/api/auth/register"
  const postMessage = async () => {
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
        console.log(res_data);
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
  }
  const handleChange=(e)=>{
const {name , value}=e.target;
setdata({...data ,[name]:value});
  };
  const handleSubmit = (e) => {
    e.preventDefault();
     console.log(data)
     postMessage();
    //  setissubmitted(true);
    };
  return (
    <>
   
    <div className="bg-black  w-screen flex justify-center items-center text-white px-4">
      <div className="bg-slate-900 flex flex-col lg:flex-row justify-center items-center lg:h-[650px] w-full max-w-5xl rounded-lg mt-24">
        {/* Image Section */}
        <div className="flex justify-center items-center w-full lg:w-1/2 p-4">
          <img
            className="h-40 w-40 sm:h-64 sm:w-64 lg:h-96 lg:w-96"
            src="10892514.png"
            alt="Register Illustration"
          />
        </div>

        {/* Form Section */}
        <div className="flex flex-col w-full lg:w-1/2 px-6 py-8 gap-4">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6 text-center lg:text-left">
            Registration Form
          </h1>

          {/* Username Input */}
          <div className="flex flex-col">
            <label className="text-sm sm:text-lg font-semibold mb-2" htmlFor="username">
              Username
            </label>
            <input
            onChange={handleChange}
            name="username"
            value={data.username}
              id="username"
              className="h-12 sm:h-14 w-full rounded-md outline-none text-base sm:text-lg px-4 text-black"
              type="text"
              placeholder="Enter your username"
            />
          </div>

          {/* Email Input */}
          <div className="flex flex-col">
            <label className="text-sm sm:text-lg font-semibold mb-2" htmlFor="email">
              Email
            </label>
            <input
            onChange={handleChange}
            name="email"
            value={data.email}
              id="email"
              className="h-12 sm:h-14 w-full rounded-md outline-none text-base sm:text-lg px-4 text-black"
              type="email"
              placeholder="Enter your email"
            />
          </div>

          {/* Phone Input */}
          <div className="flex flex-col">
            <label className="text-sm sm:text-lg font-semibold mb-2" htmlFor="phone">
              Phone
            </label>
            <input
            onChange={handleChange}
            name="phone"
            value={data.phone}
              id="phone"
              className="h-12 sm:h-14 w-full rounded-md outline-none text-base sm:text-lg px-4 text-black"
              type="text"
              placeholder="Enter your phone number"
            />
          </div>

          {/* Password Input */}
          <div className="flex flex-col">
            <label className="text-sm sm:text-lg font-semibold mb-2" htmlFor="password">
              Password
            </label>
            <input
            onChange={handleChange}
            name="password"
            value={data.password}
              id="password"
              className="h-12 sm:h-14 w-full rounded-md outline-none text-base sm:text-lg px-4 text-black"
              type="password"
              placeholder="Enter your password"
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-col lg:flex-row items-center gap-4 mt-6">
            <button onClick={handleSubmit}
              className="h-12 sm:h-14 w-full lg:w-48 bg-purple-600 text-sm sm:text-xl font-semibold rounded-lg hover:opacity-70 transition ease-in-out"
            >
              Register Now
            </button>
            <button
              className="h-12 sm:h-14 w-full lg:w-48 bg-blue-400 text-sm sm:text-xl font-semibold rounded-lg hover:opacity-70 transition ease-in-out"
              onClick={goBack}
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Register;
