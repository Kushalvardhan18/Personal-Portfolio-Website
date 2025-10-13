import React from "react";
import Navigations from "../components/Navigations";
import AllProjects from "../components/AllProjects.jsx";
const Projects = () => {
  return (
    <div className="flex flex-col m-3">
      <Navigations />
      <div className="flex flex-col items-center justify-center gap-15">
        <h1 className="mb-5 !text-[#c778dd] text-4xl ">Projects</h1>
        <AllProjects />
      </div>
    </div>
  );
};

export default Projects;
