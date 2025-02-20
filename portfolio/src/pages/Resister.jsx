// import React from 'react';
// import { Form, useNavigate } from 'react-router-dom';
// import { useState } from 'react';
// import { Formvalidn } from '../Data/ResisterSchema';
// import { ErrorMessage, Field, Formik } from 'formik';
// import { toast } from 'react-toastify';

// const Register = () => {
//   //  const [data, setdata] = useState({
//   //     username: '',
//   //     email: '',
//   //     phone: '',
//   //     password: '',
//   //   });
//   const navigate = useNavigate();

//   const goBack = () => {
//     navigate("/Login");
//   };
//   const URL = "https://api.durlavparajuli.com.np/api/auth/register"
//   const postMessage = async () => {
//     try {
//       const res = await fetch(URL, {
//         method: 'POST',
//         headers: {
//           "Content-Type": "application/json"
//         },
//         // body: JSON.stringify(data),
//       })
//       if (res.ok) {
//         const res_data = await res.json();
//         console.log(res_data);
//         // setdata({ username: '', email: '', phone: '', password: '' });
//         // toast.success("submitted")
//       }
//       else {
//         // toast.error("Failed")
//       }

//     } catch (err) {
//       console.error(err)
//       // toast.error("something went wrong please try again later")
//       // console.log(err)
//     }
//   }
  
//   return (
//     <>
//       <Formik
//         initialValues={{ username: '', email: '', phone: '', password: '' }}
//         validationSchema={Formvalidn}
//         onSubmit={(values,{resetForm}) => {
//           postMessage()
//           resetForm();
//           toast.success("Submitted")
//           console.log('form data:', values);
//         }}
//       >
//         {({ handlesubmit }) => {
//           <div className="bg-black h-screen w-screen flex justify-center items-center text-white px-4">
//             <div className="bg-slate-900 flex flex-col lg:flex-row justify-center items-center lg:h-[650px] w-full max-w-5xl rounded-lg mt-24">
//               {/* Image Section */}
//               <div className="flex justify-center items-center w-full lg:w-1/2 p-4">
//                 <img
//                   className="h-40 w-40 sm:h-64 sm:w-64 lg:h-96 lg:w-96"
//                   src="10892514.png"
//                   alt="Register Illustration"
//                 />
//               </div>

//               {/* Form Section */}
//               <div className="flex flex-col w-full lg:w-1/2 px-6 py-8 gap-4">
//                 <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6 text-center lg:text-left">
//                   Registration Form
//                 </h1>
//                 <Form>
//                   {/* Username Input */}
//                   <div className="flex flex-col">
//                     <label className="text-sm sm:text-lg font-semibold mb-2" htmlFor="username">
//                       Username
//                     </label>
//                     <Field

//                       name="username"
//                       className="h-12 sm:h-14 w-full rounded-md outline-none text-base sm:text-lg px-4 text-black"
//                       type="text"
//                       placeholder="Enter your username"
//                     />
//                     <ErrorMessage name="username" component="div" className="text-red-500" />
//                   </div>

//                   {/* Email Input */}
//                   <div className="flex flex-col">
//                     <label className="text-sm sm:text-lg font-semibold mb-2" htmlFor="email">
//                       Email
//                     </label>
//                     <Field

//                       name="email"
//                       className="h-12 sm:h-14 w-full rounded-md outline-none text-base sm:text-lg px-4 text-black"
//                       type="email"
//                       placeholder="Enter your email"
//                     />
//                     <ErrorMessage name="email" component="div" className="text-red-500" />
//                   </div>

//                   {/* Phone Input */}
//                   <div className="flex flex-col">
//                     <label className="text-sm sm:text-lg font-semibold mb-2" htmlFor="phone">
//                       Phone
//                     </label>
//                     <Field

//                       name="phone"

//                       className="h-12 sm:h-14 w-full rounded-md outline-none text-base sm:text-lg px-4 text-black"
//                       type="text"
//                       placeholder="Enter your phone number"
//                     />
//                     <ErrorMessage name="phone" component="div" className="text-red-500" />
//                   </div>

//                   {/* Password Input */}
//                   <div className="flex flex-col">
//                     <label className="text-sm sm:text-lg font-semibold mb-2" htmlFor="password">
//                       Password
//                     </label>
//                     <Field

//                       name="password"
//                       className="h-12 sm:h-14 w-full rounded-md outline-none text-base sm:text-lg px-4 text-black"
//                       type="password"
//                       placeholder="Enter your password"
//                     />
//                     <ErrorMessage name="password" component="div" className="text-red-500" />
//                   </div>
//                 </Form>
//                 {/* Buttons */}
//                 <div className="flex flex-col lg:flex-row items-center gap-4 mt-6">
//                   <button onClick={handlesubmit}
//                     className="h-12 sm:h-14 w-full lg:w-48 bg-purple-600 text-sm sm:text-xl font-semibold rounded-lg hover:opacity-70 transition ease-in-out"
//                   >
//                     Register Now
//                   </button>
//                   <button
//                     className="h-12 sm:h-14 w-full lg:w-48 bg-blue-400 text-sm sm:text-xl font-semibold rounded-lg hover:opacity-70 transition ease-in-out"
//                     onClick={goBack}
//                   >
//                     Back
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         }}
//       </Formik> 
//     </>
//   );
// };

// export default Register;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { toast } from 'react-toastify';
import { Formvalidn } from '../Data/ResisterSchema';

const Register = () => {
  const navigate = useNavigate();
  const URL = 'https://api.durlavparajuli.com.np/api/auth/register';

  const postMessage = async (data) => {
    try {
      const res = await fetch(URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // body: JSON.stringify(data),
      });

      if (res.ok) {
        const res_data = await res.json();
        console.log(res_data);
        // toast.success('Registration successful!');
      } else {
        // toast.error('Registration failed!');
      }
    } catch (err) {
      console.error(err);
      toast.error('Something went wrong. Please try again later.');
    }
  };

  const goBack = () => {
    navigate('/Login');
  };

  return (
    <div className="bg-black h-screen w-screen flex justify-center items-center text-white px-4">
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
          <Formik
            initialValues={{ username: '', email: '', phone: '', password: '' }}
            validationSchema={Formvalidn}
            onSubmit={ (values, { resetForm }) => {
             postMessage()
              resetForm();
              console.log('form data:', values); 
               toast.success(" Form Submitted")
            }}
          >
            {({ handleSubmit }) => (
              <Form onSubmit={handleSubmit}>
                {/* Username Input */}
                <div className="flex flex-col">
                  <label className="text-sm sm:text-lg font-semibold mb-2" htmlFor="username">
                    Username
                  </label>
                  <Field
                    name="username"
                    className="h-12 sm:h-14 w-full rounded-md outline-none text-base sm:text-lg px-4 text-black"
                    type="text"
                    placeholder="Enter your username"
                  />
                  <ErrorMessage name="username" component="div" className="text-red-500" />
                </div>

                {/* Email Input */}
                <div className="flex flex-col">
                  <label className="text-sm sm:text-lg font-semibold mb-2" htmlFor="email">
                    Email
                  </label>
                  <Field
                    name="email"
                    className="h-12 sm:h-14 w-full rounded-md outline-none text-base sm:text-lg px-4 text-black"
                    type="email"
                    placeholder="Enter your email"
                  />
                  <ErrorMessage name="email" component="div" className="text-red-500" />
                </div>

                {/* Phone Input */}
                <div className="flex flex-col">
                  <label className="text-sm sm:text-lg font-semibold mb-2" htmlFor="phone">
                    Phone
                  </label>
                  <Field
                    name="phone"
                    className="h-12 sm:h-14 w-full rounded-md outline-none text-base sm:text-lg px-4 text-black"
                    type="text"
                    placeholder="Enter your phone number"
                  />
                  <ErrorMessage name="phone" component="div" className="text-red-500" />
                </div>

                {/* Password Input */}
                <div className="flex flex-col">
                  <label className="text-sm sm:text-lg font-semibold mb-2" htmlFor="password">
                    Password
                  </label>
                  <Field
                    name="password"
                    className="h-12 sm:h-14 w-full rounded-md outline-none text-base sm:text-lg px-4 text-black"
                    type="password"
                    placeholder="Enter your password"
                  />
                  <ErrorMessage name="password" component="div" className="text-red-500" />
                </div>

                {/* Buttons */}
                <div className="flex flex-col lg:flex-row items-center gap-4 mt-6">
                  <button
                    type="submit"
                    className="h-12 sm:h-14 w-full lg:w-48 bg-purple-600 text-sm sm:text-xl font-semibold rounded-lg hover:opacity-70 transition ease-in-out"
                  >
                    Register Now
                  </button>
                  <button
                    type="button"
                    className="h-12 sm:h-14 w-full lg:w-48 bg-blue-400 text-sm sm:text-xl font-semibold rounded-lg hover:opacity-70 transition ease-in-out"
                    onClick={goBack}
                  >
                    Back
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Register;
