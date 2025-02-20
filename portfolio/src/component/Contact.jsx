
import React, { useState } from "react";
import { toast } from "react-toastify";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { formvalidn } from "../Data/Loginschema";
const ContactForm = () => {
  const [submittedData, setSubmittedData] = useState([]);
  const URL = "https://api.durlavparajuli.com.np/api/form/contact";
  const postMessage = async () => {
    try {
      const res = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // body: JSON.stringify(formData),
      });

      if (res.ok) {
        const res_data = await res.json();
        console.log(res_data);
        // toast.success("submitted");
        // setformData({ name: "", email: "", message: "" });
      } else {
        // toast.error("failed");
      }
    } catch (error) {
      // toast.error("server error");
      console.log(error);
    }
  };
  // function handlesubmmit(e) {
  //   e.preventDefault();
  //   const validationerror = validation();

  //   if (Object.keys(validationerror).length === 0) {
  //     console.log(formData);
  //     postMessage();
  //     toast.success("submitted");
  //   } else {
  //     console.log(validationerror);
  //     seterrorData(validationerror);
  //     toast.error("failed");
  //   }
  // }
  // const inputsubmmit = (e) => {
  //   const { name, value } = e.target;
  //   setformData({ ...formData, [name]: value });
  // };
  return (
    <>
      <Formik
        initialValues={{ name: '', email: '', message: '' }}
        validationSchema={formvalidn} // Passing the validation function
        onSubmit={(values, { resetForm }) => {
          setSubmittedData((prevData) => [...prevData, values]);
          postMessage()
          resetForm();
          toast.success("Submitted")
          console.log('form data:', values); // Logging the form data
        }}

      >

        {({ handleSubmit }) => (
          <div className="bg-gradient-to-b to-black from-gray-900 min-h-screen grid items-center justify-center font-poppins lg:w-screen ">
            <div className="bg-gray-900 lg:w-[600px] w-[410px] lg:h-max-full rounded-lg grid p-5 lg:p-10  ">
              <div className="text-[#9D00FF] lg:text-4xl text-3xl text-center">
                <h1 className="font-semibold ">Contact Us!</h1>
              </div>
              <div className="grid mt-6">
                <Form>

                  <div className="h-24">
                    <label className="text-white text-xl font-semibold space-y-2" htmlFor="name">
                      Name:
                    </label>
                    <Field
                      className="w-full h-12 p-4 rounded-md text-xl outline hover:outline-green-400 outline-2"
                      type="text"
                      placeholder="Your Name"
                      name="name"
                    />
                    <ErrorMessage name="name" component="div" className="text-red-500" />

                  </div>
                  <div className="h-24">
                    <label className="text-white text-xl font-semibold space-y-2" htmlFor="name">
                      Email:
                    </label>
                    <Field
                      className="w-full h-12 p-4 rounded-md text-xl outline hover:outline-green-400 outline-2"
                      type="text"
                      placeholder="Your email"
                      name="email"
                    />
                    <ErrorMessage name="email" component="div" className="text-red-500" />

                  </div>
                  <div className="h-24">
                    <label className="text-white text-xl font-semibold space-y-2" htmlFor="name">
                      Message:
                    </label>
                    <Field
                      className="w-full h-12 p-4 rounded-md text-xl outline hover:outline-green-400 outline-2"
                      type="text"
                      placeholder=" Your Message"
                      name="message"
                    />
                    <ErrorMessage name="message" component="div" className="text-red-500" />

                  </div>


                </Form>
              </div>

              {/* submmit button */}
              <div className="flex items-center justify-center p-10 lg:p-6">
                <button
                  className="bg-[#9D00FF] rounded-lg hover:bg-purple-500 h-14 w-[300px] mt-10 text-center text-white text-xl font-semibold hover:scale-105 transition-transform  duration-300 "
                  onClick={handleSubmit}
                >
                  Submit
                </button>

              </div>
            </div>
            {submittedData.length > 0 && (
              <div className="bg-gray-800 rounded-lg p-8 mt-8 lg:w-[600px] w-[400px] shadow-lg">
                <h1 className=" text-2xl font-semibold text=[#9D00FF] mb-4">Submitted Data</h1>
                {submittedData.map((data, index) => (
                  <div
                    key={index}
                    className="mb-6 p-4 rounded-lg bg-gray-700 shadow-md"
                  >
                    <p className="text-lg text-white mb-2">
                      <strong>Name:</strong> {data.name}
                    </p>
                    <p className="text-lg text-white mb-2">
                      <strong>Email:</strong> {data.email}
                    </p>
                    <p className="text-lg text-white">
                      <strong>Message:</strong> {data.message}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

      </Formik>

    </>

  );
};

export default ContactForm;
