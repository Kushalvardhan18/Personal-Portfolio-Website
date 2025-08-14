import React from "react";
import linkedin from "../assets/linkedIn.svg";
import github from "../assets/github.svg";
import email from "../assets/email.svg";
import code from "../assets/code.svg";
import twitter from "../assets/twitter.svg";
import discord from "../assets/discord.svg";
import hashnode from "../assets/hashnode.svg";

const Footer = () => {
  return (
    <div className="flex items-center justify-between border-1 border-[#c778dd] p-3">
      <span className="text-2xl">Software Engineer and Web Developer</span>
      <div className="flex items-center gap-5">
        <a href="https://x.com/Kuvar2941" target="_blank" aria-label="Twitter">
          <img src={twitter} alt="Twitter" width={"35px"} />
        </a>

        <a
          href="https://www.linkedin.com/in/kushalvardhan1804/"
          target="_blank"
          aria-label="LinkedIn"
        >
          <img src={linkedin} alt="LinkedIn" width={"35px"} />
        </a>

        <a
          href="https://github.com/Kushalvardhan18"
          target="_blank"
          aria-label="GitHub"
        >
          <img src={github} alt="GitHub" width={"35px"} />
        </a>

        <a
          href="https://leetcode.com/u/Kuvar2941/"
          target="_blank"
          aria-label="LeetCode"
        >
          <img src={code} alt="LeetCode" width={"35px"} />
        </a>

        <a
          href="https://discord.gg/5vy8sWr4Nd"
          target="_blank"
          aria-label="Discord"
        >
          <img src={discord} alt="Discord" width={"35px"} />
        </a>

        <a
          href="https://hashnode.com/@kuvar2941"
          target="_blank"
          aria-label="HashNode"
        >
          <img src={hashnode} alt="HashNode" width={"35px"} />
        </a>

        <a href="" target="_blank" aria-label="Email">
          <img src={email} alt="Email" width={"35px"} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
