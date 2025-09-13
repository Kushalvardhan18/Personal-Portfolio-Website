import React from "react";
import Navigations from "../components/Navigations";
import Skills from "../components/Skills"
const HireMe = () => {
  return (
    <div className="flex flex-col m-3">
        <Navigations />
      <div className="flex gap-50">
        <h1>Hire Me</h1>
        <Skills/>
      </div>
    </div>
  );
};

export default HireMe;
