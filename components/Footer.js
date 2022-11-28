import React from "react";

import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub, FaBlog, FaMediumM } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div
        className="flex flex-col items-start justify-around w-full h-auto pt-20 md:flex-row"
        id="contact"
      >
        <div className="p-5 ">
          <ul>
            <p className="pb-6 font-serif text-3xl text-center text-gray-800 cursor-pointer">
              Developer Journal
            </p>
            <div className="flex gap-6 pb-5">
              <a href="mailto:jasonmadruga25@gmail.com">
                {" "}
                <AiOutlineMail className="text-2xl cursor-pointer hover:text-gray-600" />
              </a>
              <a
                href="www.linkedin.com/in/jason-madruga-developer"
                target="_blank"
              >
                {" "}
                <FaLinkedinIn className="text-2xl cursor-pointer hover:text-blue-600" />
              </a>
              <a href="https://github.com/FoundnotLost" target="_blank">
                {" "}
                <FaGithub className="text-2xl cursor-pointer hover:text-gray-600" />
              </a>
              
            </div>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center p-5 text-center bg-gray-50">
        <h1 className="font-semibold text-gray-800 ">
          © 2022 All rights reserved | Built with passion by{" "}
          <span className="font-semibold cursor-pointer hover:text-blue-600">
            Jason Madruga{" "}
          </span>
        </h1>
      </div>
    </>
  );
}

export default Footer;
