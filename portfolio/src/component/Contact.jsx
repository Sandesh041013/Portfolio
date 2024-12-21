import React, { useState } from 'react';
import { toast } from "react-toastify";
import { useEffect } from 'react';
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [error, seterror] = useState({})
  const [issubmitted, setissubmitted] = useState(false)
const errorfun = () => {
  const errorData = {};
  if (formData.name === "") {
    errorData.name = "Please enter your name";
  }
  if (formData.email === "") {
    errorData.email = "Please enter your email"; 
  } else if (!formData.email.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    errorData.email = "Please enter a valid email"; 
  }
  if (formData.message === "") {
    errorData.message = "Please enter a message";
  }

  return errorData;
};

  // message sent successfully matlab tyo enter gareko msg chai pugeo
  const URL = "https://api.durlavparajuli.com.np/api/form/contact"
  const postMessage = async () => {
    try {
      const res = await fetch(URL, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData),
      })
      if (res.ok) {
        const res_data = await res.json();
        console.log(res_data);
        toast.success("submitted")
      }
      else {
        toast.error("Failed")
      }

    } catch (err) {
      console.error(err)
      toast.error("something went wrong please try again later")
      // console.log(err)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   postMessage();
  //   const errordatas=errorfun();
  //   console.log(errordatas)
  //   seterror(errorfun())
  //   // Add form submission logic (like API calls) here
  //    console.log(formData);

  //   if(JSON.stringify(errordatas)=="{}"){
  //     setissubmitted(true);
  //   }
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    const errordatas = errorfun();
    seterror(errordatas);
    
    // If there are no errors, proceed with submission
    if (Object.keys(errordatas).length === 0) {
      setissubmitted(true);
      postMessage(); // Only call postMessage if there are no errors
      console.log(formData); // Only log formData if there are no errors
    }
  };
  
  return (
    <>
      {!issubmitted ? (
        <div className="flex items-center justify-center lg:w-screen min-h-screen bg-gradient-to-b to-black from-gray-900">
          <div className="p-8 bg-gray-800 rounded-lg shadow-2xl w-[600px] mt-28">
            <h2 className="text-5xl font-bold text-center text-[#9D00FF]">Contact Me</h2>
            <form className="mt-4">
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2 text-xl font-medium text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg outline-none h-16 text-xl"
                  placeholder="Your Name"
                />
                <p className="text-red-500">{error.name}</p>
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2 text-lg font-medium text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg outline-none h-16 text-xl"
                  placeholder="Your Email"
                />
                <p className="text-red-500">{error.email}</p>
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block mb-2 text-lg font-medium text-gray-300">
                  Message
                </label>
                <input
                  type="text"
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg outline-none h-16 text-xl"
                  placeholder="Your Message"
                />
                <p className="text-red-500">{error.message}</p>
              </div>
              <button
                onClick={handleSubmit}
                className="text-xl w-full px-4 py-2 text-white bg-[#9D00FF] rounded-lg hover:bg-purple-500 h-14"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      ) : (
        <>
           {/* name:{formData.name}
        email:{formData.email}
        message:{formData.password}  */}
        </>
      )}

    </>
  );
};

export default ContactForm
