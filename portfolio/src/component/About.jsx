import React from 'react';
const About = () => {
  return (
    <>
        <section className="relative bg-gradient-to-b from-gray-900 to-black py-16  lg:w-screen " id="about">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 ">
            <div className="bg-gray-900 shadow-xl rounded-lg p-10 md:p-16 text-white flex flex-col justify-center items-center ">
              <h2 className="text-6xl font-bold text-center  text-[#9D00FF] w-72">
                About Me
              </h2>
              <p className="mt-6 text-2xl text-gray-300 leading-relaxed text-center ">
                Hey I'm <strong>Sandesh</strong>, A passionate web developer with a strong focus on building dynamic and intuitive user interfaces using <strong>React</strong> and <strong>Tailwind CSS</strong>. My aim is to combine aesthetics with functionality, delivering applications that not only look great but also offer a seamless user experience.
              </p>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 relative z-10 gap-10">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8 gap-8">
              <div className="flex-1 bg-gray-800  rounded-lg p-6 font-semibold shadow-lg shadow-gray-300 md:p-10 h-72 transform transition duration-500 hover:scale-105">
                <h4 className="text-3xl font-bold text-[#9D00FF] mb-6 text-center">Expertise</h4>
                <ul className="space-y-4 ">
                  <li className="text-lg text-gray-300 flex items-center font-semibold">
                    <span className="inline-block w-3 h-3 bg-blue-300 rounded-full mr-3"></span>
                    Responsive Web Development with React and Tailwind
                  </li>
                  <li className="text-lg text-gray-300 flex items-center font-semibold">
                    <span className="inline-block w-3 h-3 bg-purple-300 rounded-full mr-3"></span>
                    Custom Component Development & UI Opti400ation
                  </li>
                  <li className="text-lg text-gray-300 flex items-center  font-semibold">
                    <span className="inline-block w-3 h-3 bg-pink-300 rounded-full mr-3"></span>
                    State Management with React Hooks and Context API
                  </li>
                  <li className="text-lg text-gray-300 flex items-center  font-semibold">
                    <span className="inline-block w-3 h-3 bg-green-300 rounded-full mr-3"></span>
                    Clean, Maintainable, and Scalable Code Practices
                  </li>
                </ul>
              </div>
              <div className="flex-1 bg-gray-800 font-semibold  shadow-lg shadow-gray-300 rounded-lg p-6 md:p-10 h-72 transform transition duration-500 hover:scale-105">
                <h4 className="text-3xl font-bold text-[#9D00FF] mb-6 text-center">My Vision</h4>
                <p className="text-lg text-gray-300 leading-relaxed font-semibold">
                  My vision as a web developer is to push the boundaries of what’s possible in user experience design. I aim to create digital products that not only meet business goals but also delight users by being intuitive, fast, and visually appealing.
                </p>
              </div>
            </div>
          </div>
          <div className="absolute inset-0">
            <div className="absolute -top-16 left-20 w-48 h-48 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full filter blur-3xl opacity-40"></div>
            <div className="absolute bottom-0 right-20 w-64 h-64 bg-gradient-to-r  from-blue-400 to-purple-400 rounded-full filter blur-3xl opacity-30"></div>
          </div>
        </section>
      
    </>
  );

};

export default About;
