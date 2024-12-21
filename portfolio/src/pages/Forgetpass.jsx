import React from 'react';
import { useNavigate } from 'react-router-dom';

const Forgetpass = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/login");
  };

  return (
    <div className="lg:h-screen w-screen bg-black flex justify-center items-center text-white px-4 ">
      <div className="bg-slate-900 flex flex-col lg:flex-row justify-center items-center lg:h-[650px] w-full max-w-5xl rounded-lg lg:mt-20">
        {/* Image Section */}
        <div className="flex justify-center items-center w-full lg:w-1/2 p-4">
          <img
            className="h-40 w-40 sm:h-64 sm:w-64 lg:h-96 lg:w-96"
            src="10892514.png"
            alt="Forget Password Illustration"
          />
        </div>

        {/* Form Section */}
        <div className="flex flex-col w-full lg:w-1/2 px-6 py-8 gap-4">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6 text-center lg:text-left">
            Forgot Password
          </h1>

          {/* Email Input */}
          <div className="flex flex-col">
            <label className="text-sm sm:text-lg font-semibold mb-2" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              className="h-12 sm:h-14 w-full rounded-md outline-none text-base sm:text-lg px-4 text-black border border-gray-300 focus:ring-2 focus:ring-blue-500"
              type="email"
              placeholder="Enter your email address"
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-col lg:flex-row items-center gap-4 mt-6">
            <button
              className="h-12 sm:h-14 w-full lg:w-48 bg-purple-600 text-sm sm:text-xl font-semibold rounded-lg hover:opacity-70 transition ease-in-out"
            >
              Send Verification Email
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
  );
};

export default Forgetpass;
