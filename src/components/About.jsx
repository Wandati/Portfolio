import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full flex items-center h-screen bg-gradient-to-b from-gray-800 to-black text-white overflow-y-auto "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
        <div className="pb-8 flex justify-center flex-col items-center md:block ">
          <p className="text-4xl font-bold inline border-b-4 mt-16">About Me</p>
          <p className="text-center md:text-left text-xl mt-4 max-w-xl md:max-w-full">
            I excel in server-side development, specializing in Python and
            Django/Flask Frameworks. My expertise ranges from building robust APIs to optimizing
            database interactions, ensuring efficiency in every application.
            With a foundation in Python, React, and VanillaJs, I've led diverse
            projects, driven by curiosity and a commitment to continuous
            improvement. I embrace collaboration, whether it's syncing with UX
            designers, leading development teams, or contributing to open-source
            projects. Explore my journey through projects, from crafting
            destination review apps to architecting seamless bus booking
            experiences. Join me in the world of code, where innovation meets
            functionality.
          </p>

          <br />

          <p className="text-xl text-center md:text-left max-w-xl md:max-w-6xl">
            Let's build something extraordinary together!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
