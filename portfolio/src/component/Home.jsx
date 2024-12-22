// import React from 'react'
// import About from './About'
// import Services from './Services'
// import { useNavigate } from 'react-router-dom';
// import Footer from '../Navigation/Footer';
// import Homes from '../pages/Homes';
// import Contact from './Contact'
// const Home = () => {
//   const navigate = useNavigate();

//   const goToAboutPage = () => {
//     navigate("/contact");
//   };
//   return (
//     <>
//  <main className='pt-24 '>
//       <div className='bg-gradient-to-b from-black to-gray-900  flex justify-center items-center text-center '>
//         <div className="  flex w-1/2 items-center justify-center p-4 ml-20">
//           <div className="max-w-4xl text-center">
//             <h1 className="text-5xl font-extrabold text-white mb-6 ">
//               Hey, I'm <span className='text-[#9D00FF]'>Sandesh Acharya</span>
//             </h1>
//             <p className="text-xl text-gray-300 mb-8 leading-relaxed">
//               I'm a passionate web developer specializing in building and designing
//               exceptional digital experiences. With a strong focus on frontend technologies like React and modern CSS frameworks, I aim to create websites and applications that are user-friendly, responsive, and engaging.
//             </p>
//             <button onClick={goToAboutPage} className=" h-16 w-48 text-xl bg-[#9D00FF] text-black py-3 px-6 rounded-lg font-semibold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-purple-500 duration-300">Contact Me</button>
//           </div>
//         </div>
//         <div className=' flex items-center mr-32 pt-20 justify-end w-1/2 bg-blue '>
//           <img className='h-[660px] w-[550px] bg-blend-color-burn' src="file.png" alt="" />
//         </div>
//       </div>
//       <About/>
//       <Services/>
//       <Contact/>
//       </main>
//     </>

//   )
// }

// export default Home
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
        <section className=" bg-gradient-to-b from-black to-gray-900 flex flex-col md:flex-row justify-center items-center text-center md:text-left lg:w-screen">
          <div className="flex w-full md:w-1/2 items-center justify-center p-4">
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
          <div className="hidden md:flex items-center justify-end w-full md:w-1/2">
            <img className="h-[400px] md:h-[660px] w-full md:w-[550px] bg-blend-color-burn" src="file.png" alt="Profile visual representation" />
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
