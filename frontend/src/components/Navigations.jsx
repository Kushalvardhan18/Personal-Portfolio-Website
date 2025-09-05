import React from "react";
import ShowLabelIcons from "../assets/ShowLabelIcons.jsx";
import { home, user, contact, hireme } from "../assets/Icons.js";
import { signature } from "../assets/images.js";

const Navigations = () => {
  return (
    <div className="flex flex-col my-2">
      <div className="cursor-pointer">
        <img src={signature} alt="logo" width="150px" />
      </div>
      <nav className="flex flex-col gap-10 font-medium text-1xl h-100 justify-center w-50">
        <a className="cursor-pointer flex items-center relative">
          <ShowLabelIcons icon={home} label="Home" />
        </a>
        <a className="cursor-pointer flex items-center relative">
          <ShowLabelIcons icon={user} label="Profile" />
        </a>
        <a className="cursor-pointer flex items-center relative">
          <ShowLabelIcons icon={contact} label="Contact Me" />
        </a>
        <a className="cursor-pointer flex items-center relative ">
          <ShowLabelIcons icon={hireme} label="Hire Me" />
        </a>
      </nav>
    </div>
  );
};

export default Navigations;
