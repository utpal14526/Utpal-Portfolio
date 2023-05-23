import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          As an experienced competitive programmer and web developer, I thrive
          on challenges and seek roles in organizations where I can make
          meaningful contributions while continuously learning and growing. With
          a proven track record of delivering high-quality code and innovative
          solutions, I am adept at solving complex problems and creating dynamic
          web applications.
        </p>

        <br />

        <p className="text-xl">
          I am passionate about staying up-to-date with the latest technologies
          and trends in the industry, and I am eager to collaborate with
          talented teams to create impactful digital experiences. I am committed
          to leveraging my expertise and skills to drive success while embracing
          opportunities for personal and professional development.
        </p>
      </div>
    </div>
  );
};

export default About;
