
import React from 'react';
import About from './About';
import Services from './Services';
import { useNavigate } from 'react-router-dom';
import Contact from './Contact';

const Home = () => {
  const navigate = useNavigate();

  const goToContactPage = () => {
    navigate("/contact");
  };

  return (
    <>
      <main className="pt-24">
        <section className="bg-gradient-to-b from-black to-gray-900 flex flex-col-reverse md:flex-row justify-center items-center text-center md:text-left lg:w-screen">
          {/* Text Section */}
          <div className="flex w-full md:w-1/2 items-center justify-center p-4  ">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                Hey, I'm <span className="text-[#9D00FF]">Sandesh Acharya</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                I'm a passionate web developer specializing in building and designing exceptional digital experiences.
                With a strong focus on frontend technologies like React and modern CSS frameworks, I aim to create websites and applications that are user-friendly, responsive, and engaging.
              </p>
              <button
                onClick={goToContactPage}
                className="h-12 md:h-16 w-36 md:w-48 text-md md:text-xl bg-[#9D00FF] text-black py-3 px-6 rounded-lg font-semibold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-purple-500 duration-300"
              >
                Contact Me
              </button>
            </div>
          </div>

          {/* Image Section with Blurry Effect */}
          <div className="relative flex justify-center w-full md:w-1/2 ">
            <img
              className="h-[400px] w-[300px] md:h-[400px] md:w-[400px] lg:h-[740px] lg:w-[550px] object-cover mt-8"
              src="file.png"
              alt="Profile visual representation"
            />
            {/* <div className="absolute bottom-0 h-24 w-[300px] bg-gradient-to-t from-gray-700 to-transparent blur-md"></div> */}
          </div>
        </section>
        <About />
        <Services />
        <Contact />
      </main>
    </>
  );
};

export default Home;
// import React from 'react';
// import About from './About';
// import Services from './Services';
// import { useNavigate } from 'react-router-dom';
// import Contact from './Contact';

// const Home = () => {
//   const navigate = useNavigate();

//   const goToContactPage = () => {
//     navigate("/contact");
//   };

//   return (
//     <>
//       <main className="pt-24">
//         <section className="bg-gradient-to-b from-black to-gray-900 flex flex-col-reverse md:flex-row justify-center items-center text-center md:text-left lg:w-screen">
//           {/* Text Section */}
//           <div className="flex w-full md:w-1/2 items-center justify-center p-4 animate-slide-in">
//             <div className="max-w-4xl">
//               <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
//                 Hey, I'm <span className="text-[#9D00FF]">Sandesh Acharya</span>
//               </h1>
//               <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
//                 I'm a passionate web developer specializing in building and designing exceptional digital experiences.
//                 With a strong focus on frontend technologies like React and modern CSS frameworks, I aim to create websites and applications that are user-friendly, responsive, and engaging.
//               </p>
//               <button
//                 onClick={goToContactPage}
//                 className="h-12 md:h-16 w-36 md:w-48 text-md md:text-xl bg-[#9D00FF] text-black py-3 px-6 rounded-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:bg-purple-500"
//               >
//                 Contact Me
//               </button>
//             </div>
//           </div>

//           {/* Image Section */}
//           <div className="relative flex justify-center w-full md:w-1/2 animate-slide-in">
//             <img
//               className="h-[300px] md:h-[400px] lg:h-[550px] w-auto object-cover mt-8"
//               src="file.png"
//               alt="Profile visual representation"
//             />
//             <div className="absolute bottom-0 h-24 w-full md:w-[400px] lg:w-[550px] bg-gradient-to-t from-gray-700 to-transparent blur-md"></div>
//           </div>
//         </section>
//         <About />
//         <Services />
//         <Contact />
//       </main>
//     </>
//   );
// };

// export default Home;
