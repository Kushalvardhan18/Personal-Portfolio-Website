import React from "react";
import Navigations from "../components/Navigations";
import AllProjects from "../components/AllProjects.jsx";
const Projects = () => {
  return (
    <div className="flex flex-col m-3">
      <div className=" gap-5 flex flex-col items-center justify-center ">
      <Navigations />
        <h1 className="mb-5 !text-[#c778dd] text-4xl mt-5">Projects</h1>
        <AllProjects />
      </div>
    </div>
  );
};

export default Projects;
