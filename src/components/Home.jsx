// import React from "react";
// // import HeroImage from "../assets/Hero8.jpg";
// import HeroImage from "../assets/Hero9.jpg";
// import { LuArrowRight } from "react-icons/lu";
// import { Link } from "react-scroll";

// const Home = () => {
//   return (
//     <div
//       name="home"
//       className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white overflow-y-auto ">
//       <div className="max-w-screen-lg mx-auto flex flex-col-reverse justify-end py-32 items-center md:justify-between h-full px-4 md:gap-16 md:flex-row">
//         <div className="flex flex-col justify-center gap-6 md:h-full">
//           {/* <h2 className="text-4xl sm:text-7xl text-center md:text-left font-bold text-white max-w-2xl mt-8">
//             Full-Stack Developer
//           </h2> */}
//           {/* <h2 className="text-4xl sm:text-7xl text-center md:text-left font-bold text-white max-w-2xl mt-8">
//             <span className="animate-fadeIn">Full-Stack Developer</span>
//           </h2> */}
//           <h2 className="text-4xl sm:text-7xl text-center md:text-left font-bold text-white max-w-2xl mt-8">
//             <span className="animate-fadeInOut">Full-Stack Developer</span>
//           </h2>

//           <p className="text-gray-500 text-center md:text-left py-4 max-w-xl md:max-w-md">
//             Hello, I'm Marvin Wandati Kinyanjui, a Full-stack Developer with a
//             focus on backend technologies. My software development journey has
//             been an exciting exploration of languages, frameworks, and the
//             intricate dance between the front and back ends of web applications
//           </p>
//           <div className="flex justify-center md:justify-start mb-4">
//             <Link
//               to="portfolio"
//               smooth
//               duration={500}
//               className="group w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-purple-500 to-violet-800 cursor-pointer  hover:scale-110 duration-300 ">
//               Portfolio
//               <span className="group-hover:rotate-90 duration-300 ml-1">
//                 <LuArrowRight size={25} />
//               </span>
//             </Link>
//           </div>
//         </div>
//         <div>
//           <img
//             src={HeroImage}
//             alt="my profile"
//             className="md:rounded-2xl rounded-full shadow-md  shadow-gray-800 md:mx-auto w-72 md:w-2/3 md:h-3/4 h-72 mb-8"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;
import React, { useEffect, useState } from "react";
import HeroImage from "../assets/Hero9.jpg";
import { LuArrowRight } from "react-icons/lu";
import { Link } from "react-scroll";

const Home = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "Full-Stack Developer";
  const typingSpeed = 100; // milliseconds per character

  useEffect(() => {
    const typeWriter = () => {
      let i = 0;
      const typingInterval = setInterval(() => {
        setTypedText(fullText.substring(0, i));
        i++;
        if (i > fullText.length) clearInterval(typingInterval);
      }, typingSpeed);
    };

    typeWriter();

    return () => clearInterval();
  }, []);

  return (
    <div
      name="Home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white overflow-y-auto">
      <div className="max-w-screen-lg mx-auto flex flex-col-reverse justify-end py-32 items-center md:justify-between h-full px-4 md:gap-16 md:flex-row">
        <div className="flex flex-col justify-center gap-6 md:h-full">
          <h2 className="text-4xl sm:text-7xl text-center md:text-left font-bold text-white max-w-2xl mt-8">
            {typedText}
          </h2>
          <p className="text-gray-500 text-center md:text-left py-4 max-w-xl md:max-w-md">
            Hello, I'm Marvin Wandati Kinyanjui, a Full-stack Developer with a
            focus on backend technologies. My software development journey has
            been an exciting exploration of languages, frameworks, and the
            intricate dance between the front and back ends of web applications
          </p>
          <div className="flex justify-center md:justify-start mb-4">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-purple-500 to-violet-800 cursor-pointer  hover:scale-110 duration-300">
              Portfolio
              <span className="group-hover:rotate-90 duration-300 ml-1">
                <LuArrowRight size={25} />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="md:rounded-2xl rounded-full shadow-md  shadow-gray-800 md:mx-auto w-72 md:w-2/3 md:h-3/4 h-72 mb-8"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
