import React from "react";
import ShowLabelIcons from "./ShowLabelIcons.jsx";
import { home, user, contact, hireme } from "../assets/Icons.js";
import { signature } from "../assets/images.js";

const Navigations = () => {
  return (
    <div className="flex flex-col justify-center gap-10 absolute w-50 z-50">
      <img src={signature} alt="logo"  />
      <nav className="flex flex-col gap-10 font-medium text-1xl justify-center ">
        <div className="cursor-pointer flex items-center relative">
          <ShowLabelIcons icon={home} label="Home" link="/" />
        </div>
        <div className="cursor-pointer flex items-center relative">
          <ShowLabelIcons icon={user} label="About" link="/about" />
        </div>
        <div className="cursor-pointer flex items-center relative">
          <ShowLabelIcons icon={contact} label="Contact Me" link="/contact" />
        </div>
        <div className="cursor-pointer flex items-center relative ">
          <ShowLabelIcons icon={hireme} label="Hire Me" link="/hireme" />
        </div>
        <div className="cursor-pointer flex items-center relative ">
          <ShowLabelIcons icon={hireme} label="Hire Me" link="/hireme" />
        </div>
        <div className="cursor-pointer flex items-center relative ">
          <ShowLabelIcons icon={hireme} label="Hire Me" link="/hireme" />
        </div>
      </nav>
    </div>
  );
};

export default Navigations;
