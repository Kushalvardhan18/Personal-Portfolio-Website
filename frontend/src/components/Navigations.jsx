import React from "react";
import ShowLabelIcons from "./ShowLabelIcons.jsx";
import { home, user, contact, hireme } from "../assets/Icons.js";
import { signature } from "../assets/images.js";

const Navigations = () => {
  return (
    <div className="flex flex-col my-2">
      <div className="cursor-pointer fixed">
        <img src={signature} alt="logo" width="150px" />
      </div>
      <nav className="flex flex-col gap-10 font-medium text-1xl h-100 justify-center w-50 fixed top-25">
        <div className="cursor-pointer flex items-center relative">
          <ShowLabelIcons icon={home} label="Home" link ="/" />
        </div>
        <div className="cursor-pointer flex items-center relative">
          <ShowLabelIcons icon={user} label="About" link ="/about" />
        </div>
        <div className="cursor-pointer flex items-center relative">
          <ShowLabelIcons icon={contact} label="Contact Me" link ="/contact"/>
        </div>
        <div className="cursor-pointer flex items-center relative ">
          <ShowLabelIcons icon={hireme} label="Hire Me" link ="/hireme" />
        </div>
      </nav>
    </div>
  );
};

export default Navigations;
