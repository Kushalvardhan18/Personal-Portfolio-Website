import React from "react";
import Navigations from "../components/Navigations";
import { myPic } from "../assets/images";
const About = () => {
  return (
    <div className="mx-5 my-2">
        <Navigations />
      {/* <div className="flex gap-50"> */}
        <div className=" mb-5 flex flex-col justify-center items-center gap-5 mx-5">
          <h1 className="mb-5 !text-[#c778dd] text-4xl ">About Me</h1>
          <div className="flex gap-10">
            <p className="text-xl">
              Hi, I'm Kushal Vardhan, a 24-year-old{" "}
              <span className="!text-amber-600">Software Developer</span> with a
              passion for problem-solving and exploring the intricacies of
              technology. I specialize in Java programming, with expertise in{" "}
              <span className="!text-amber-600"> Algorithms </span>,
              <span className="!text-amber-600"> Data Structures </span> ,{" "}
              <span className="!text-amber-600">JAVA</span> and{" "}
              <span className="!text-amber-600">Web Development </span> . With a
              strong foundation in software development. In my free time, you
              might find me experimenting with projects or enhancing my GitHub
              portfolio. I believe in constantly experimenting and learning by
              building projects that challenge my creativity and problem-solving
              skills. <br /> <br />
              At the same time, I have a strong desire to serve society and make
              a difference in people's lives.I aim to combine my technical
              knowledge and leadership qualities to contribute meaningfully to
              both the digital world and the social landscape. <br />
              My journey reflects a balance between innovation, responsibility,
              and growth—and I am always eager to connect, collaborate, and
              create something valuable.
            </p>
            <img src={myPic} alt="myPic"  width={350} className="rounded-xl"/>
          </div>
            <span className="text-xl !text-amber-600">
              Let's Connect and Create Something Impactful Together!
            </span>
          <div className="flex gap-5 m-2">
            <button className="!bg-blue-500 py-2 px-5 rounded-md hover:!bg-blue-800 cursor-pointer duration-500">Hire Me</button>
            <button className="!bg-blue-500 py-2 px-5 rounded-md hover:!bg-blue-800 cursor-pointer duration-500">Download Resume</button>
          </div>
        </div>
      </div>
    // </div>
  );
};

export default About;
