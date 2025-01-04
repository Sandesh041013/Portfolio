
import React, { useState } from "react";
import { toast } from "react-toastify";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { formvalidn } from "../Data/Loginschema";
import * as Yup from 'yup'; 
const ContactForm = () => {
  // const formvalidn = Yup.object({
  //   name: Yup.string().required('Name is required'),
  //   email: Yup.string()
  //     .email('Invalid email address')
  //     .required('Email is required'),
  //   message: Yup.string()
  //     .min(6, 'Password must be at least 6 characters long')
  //     .required('Password is required'),
      
  // });
  // const [formData, setformData] = useState({
  //   name: "",
  //   email: "",
  //   message: "",
  // });
  // const [errorData, seterrorData] = useState({});

  // const validation = () => {
  //   let errorData = {};
  //   if (!formData.name.trim()) {
  //     errorData.name = "Name is required.";
  //   }
  //   if (!formData.email.trim()) {
  //     errorData.email = "Email is required.";
  //   } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
  //     errorData.email = "Email is invalid.";
  //   }
  //   if (!formData.message.trim()) {
  //     errorData.message = "Message is required.";
  //   }
  //   return errorData;
  // };

  const URL = "https://api.durlavparajuli.com.np/api/form/contact";

  const postMessage = async () => {
    try {
      const res = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        const res_data = await res.json();
        console.log(res_data);
        // toast.success("submitted");
        setformData({ name: "", email: "", message: "" });
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
      onSubmit={(values,{resetForm}) => {
        postMessage()
        resetForm();
        toast.success("Submitted")
        console.log('form data:', values); // Logging the form data
      }}
      
    >

   {({handleSubmit})=>(
    <div className="bg-gradient-to-b to-black from-gray-900 min-h-screen grid items-center justify-center font-poppins lg:w-screen ">
        <div className="bg-gray-900 lg:w-[600px] w-[410px] lg:h-max-full rounded-lg grid p-5 lg:p-10 ">
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
      </div>
   )}
      
      </Formik>
    </>

  );
};

export default ContactForm;