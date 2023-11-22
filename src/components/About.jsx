import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full  flex items-center h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
        <div className="pb-8 flex justify-center flex-col items-center md:block ">
          <p className="text-4xl font-bold inline border-b-4">About</p>
          <p className="mt-10 text-center md:text-left text-xl max-w-xl md:max-w-full">
            Backend Expertise: I thrive in the realm of server-side development,
            specializing in Python and NodeJS. From crafting robust APIs to
            optimizing database interactions, I ensure that the heart of every
            application beats with efficiency. Tech Explorer: With a foundation
            in Python, React, and VanillaJs, I've led and contributed to diverse
            projects. Each line of code represents a curiosity-driven quest for
            solutions and a commitment to continuous improvement. Collaborative
            Spirit: I believe in the power of collaboration. Whether it's
            syncing with UX designers, leading development teams, or
            contributing to open-source projects, I value teamwork and shared
            knowledge. Come explore the projects that define my journey, from
            crafting destination review apps to architecting seamless bus
            booking experiences. Join me in the world of code, where innovation
            meets functionality.
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
