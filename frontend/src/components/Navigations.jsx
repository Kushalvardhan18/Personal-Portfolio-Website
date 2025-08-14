import React from "react";
import { home, user, contact, hireme } from "../assets/Icons.js";
import { signature } from "../assets/images.js";
const Navigations = () => {
  return (
    <div className="flex flex-col my-2">
      <div className="cursor-pointer">
        <img src={signature} alt="logo" width="150px" />
      </div>
      <nav className="flex flex-col gap-10 font-medium text-1xl h-100 justify-center">
        <a className="cursor-pointer flex">
          <img
            src={home}
            alt="Home"
            className="p-1.5 rounded-md  hover:!bg-[#941bb6] w-9 "   
          />
        </a>
        <a className="cursor-pointer">
          <img
            src={user}
            alt=""
            className="p-1.5 rounded-md  hover:!bg-[#941bb6] w-9"
          />
        </a>
        <a className="cursor-pointer ">
          <img
            src={contact}
            alt=""
            className="p-1.5 rounded-md  hover:!bg-[#941bb6] w-9"
          />
        </a>
        <a className="cursor-pointer ">
          <img
            src={hireme}
            alt=""
            className="p-1.5 rounded-md  hover:!bg-[#941bb6] w-9"
          />
        </a>
      </nav>
    </div>
  );
};

export default Navigations;
