import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [data, setData] = useState({
    email: '',
    password: '',
  });
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
    console.log(data);
  };

  return (
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
  );
};

export default Login;
