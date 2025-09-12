import React from "react";
import ShowLabelIcons from "./ShowLabelIcons.jsx";
import { home, user, contact, hireme } from "../assets/Icons.js";
import { signature } from "../assets/images.js";
import { NavLink } from "react-router-dom";


const Navigations = () => {
  return (
    <div className="flex my-2 justify-between items-center mx-5">
      <div className="cursor-pointer">
        <NavLink to={"/"}>
        <img src={signature} alt="logo" className="w-[150px]"  />
        </NavLink>
      </div>

      <nav className="flex gap-15 font-medium text-xl justify-center items-center ">
        <div className="cursor-pointer flex flex-col items-center relative h-[30px]">
          <ShowLabelIcons icon={home} label="Home" link="/" />
        </div>

        <div className="cursor-pointer flex flex-col items-center relative h-[30px]">
          <ShowLabelIcons icon={user} label="About" link="/about" />
        </div>

        <div className="cursor-pointer flex flex-col items-center relative h-[30px]">
          <ShowLabelIcons icon={contact} label="Contact Me" link="/contact" />
        </div>

        <div className="cursor-pointer flex flex-col items-center relative h-[30px]">
          <ShowLabelIcons icon={hireme} label="Hire Me" link="/hireme" />
        </div>
      </nav>
    </div>
  );
};

export default Navigations;
