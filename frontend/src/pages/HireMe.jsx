import React from "react";
import Navigations from "../components/Navigations";
import Skills from "../components/Skills"
const HireMe = () => {
  return (
    <div className="flex flex-col m-3">
      <div className="flex flex-col items-center justify-center gap-5">
        <Navigations />
        <h1 className="mb-5 !text-[#c778dd] text-4xl mt-5">Hire Me</h1>
        <Skills/>
      </div>
    </div>
  );
};

export default HireMe;
