import React from "react";
import Navigations from "../components/Navigations";
const About = () => {
  return (
    <div className="mx-5 my-2">
      <div className="flex gap-50">
        <Navigations />
        <div className="mt-15 mb-5 flex flex-col justify-center items-center gap-5">
          <span className="mb-5 !text-[#c778dd] text-4xl ">About Me</span>
          <p className="text-xl">
            Hi, I'm Kushal Vardhan, a 24-year-old{" "}
            <span className="!text-[#c778dd]">Software Developer</span> with a
            passion for problem-solving and exploring the intricacies of
            technology. I specialize in Java programming, with expertise in{" "}
            <span className="!text-[#c778dd]"> Algorithms </span>,
            <span className="!text-[#c778dd]"> Data Structures </span> ,{" "}
            <span className="!text-[#c778dd]">JAVA</span> and{" "}
            <span className="!text-[#c778dd]">Web Development </span> . With a
            strong foundation in software development. In my free time, you
            might find me experimenting with projects or enhancing my GitHub
            portfolio.
          </p>
          <span>Let's connect and createsomething impactful together!</span>
          <br />
          <div className="flex gap-5 m-2">
            <button className="border-1 p-2 rounded-md">Hire Me</button>
            <button className="border-1 p-2 rounded-md">Download Resume</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
