import React from "react";
import {
  twitter,
  linkedin,
  github,
  code,
  hashnode,
  discord,
  email,
} from "../assets/Icons.js";

const Socials = () => {
  return (
    <div className="flex items-center m-3 justify-center">
      <div className="flex items-center gap-8">
        <a
          href="https://x.com/Kuvar2941"
          target="_blank"
          aria-label="Twitter"
           className="inline-block transform transition-all duration-700 hover:scale-150"
        >
          <img src={twitter} alt="Twitter" width={"35px"} />
        </a>

        <a
          href="https://www.linkedin.com/in/kushalvardhan1804/"
          target="_blank"
          aria-label="LinkedIn"
            className="inline-block transform transition-all duration-700 hover:scale-150 "
        >
          <img src={linkedin} alt="LinkedIn" width={"35px"} />
        </a>

        <a
          href="https://github.com/Kushalvardhan18"
          target="_blank"
          aria-label="GitHub"
           className="inline-block transform transition-all duration-700 hover:scale-150 "
        >
          <img src={github} alt="GitHub" width={"35px"} />
        </a>

        <a
          href="https://leetcode.com/u/Kuvar2941/"
          target="_blank"
          aria-label="LeetCode"
          className="inline-block transform transition-all duration-700 hover:scale-150 "
        >
          <img src={code} alt="LeetCode" width={"35px"} />
        </a>

        <a
          href="https://discord.gg/5vy8sWr4Nd"
          target="_blank"
          aria-label="Discord"
           className="inline-block transform transition-all duration-700 hover:scale-150 "
        >
          <img src={discord} alt="Discord" width={"35px"} />
        </a>

        <a
          href="https://hashnode.com/@kuvar2941"
          target="_blank"
          aria-label="HashNode"
            className="inline-block transform transition-all duration-700 hover:scale-150 "
        >
          <img src={hashnode} alt="HashNode" width={"35px"} />
        </a>

        <a
          href=""
          target="_blank"
          aria-label="Email"
          className="inline-block transform transition-all duration-700 hover:scale-150 "
        >
          <img src={email} alt="Email" width={"35px"} />
        </a>
      </div>
    </div>
  );
};

export default Socials;
