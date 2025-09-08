import React from "react";
import Navigations from "../components/Navigations";
import Skills from "../components/Skills"
const HireMe = () => {
  return (
    <div className="mx-5 my-2">
      <div className="flex gap-50">
        <Navigations />
        <h1>Hire Me</h1>
        <Skills/>
      </div>
    </div>
  );
};

export default HireMe;
