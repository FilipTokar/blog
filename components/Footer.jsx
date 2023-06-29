import Image from "next/image";
import React from "react";
import linkedin from "../public/linkedin.svg";
import github from "../public/github.svg";

function Footer() {
  return (
    <footer className="flex justify-between items-center h-14 text-sm text-gray-300 font-normal">
      <div>@2023 Filip Tokar. All right reserved.</div>
      <div className="flex gap-6">
          <a href="https://www.linkedin.com/in/filiptokar/" target="_blank" rel="noreferrer">
            <Image src={linkedin} width={20} height={20} alt="linkedin" />
          </a>
          <a href="https://github.com/FilipTokar" target="_blank" rel="noreferrer">
            <Image src={github} width={20} height={20} alt="linkedin" />
          </a>
      </div>
    </footer>
  );
}

export default Footer;
