import { FiLinkedin, FiFacebook, FiGithub } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import React, { useState } from "react";
import { Link } from "gatsby";

export default function SocialLinks(): JSX.Element {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="relative flex mt-60 phone:px-8 laptop:px-0">
      <div className="flex justify-evenly grow items-center">
        <a
          title="LinkedIn"
          href="https://www.linkedin.com/in/nathan-sonnenberg/"
          target="_blank"
        >
          <FiLinkedin className="stroke-white stroke-1 hover:scale-110 transition-transform duration-100 ease-in tablet:w-20 tablet:h-20 phone:w-10 phone:h-10 hover:stroke-[#0077B5]" />
        </a>
        <a
          title="Instagram"
          href="https://www.instagram.com/nate.sonny/"
          target="_blank"
        >
          <svg
            id="ig-svg"
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="stroke-1 hover:scale-110 transition-transform duration-100 ease-in tablet:w-20 tablet:h-20 phone:w-10 phone:h-10"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
            onMouseOver={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ stroke: isHovered ? "url(#gradient)" : "white" }}
          >
            <defs>
              <linearGradient id="gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: "#405DE6" }} />
                <stop offset="50%" style={{ stopColor: "#F77737" }} />
                <stop offset="100%" style={{ stopColor: "#C13584" }} />
              </linearGradient>
            </defs>
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path
              style={{ stroke: isHovered ? "url(#gradient)" : "white" }}
              d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
            ></path>
            <line
              style={{ stroke: isHovered ? "url(#gradient)" : "white" }}
              x1="17.5"
              y1="6.5"
              x2="17.51"
              y2="6.5"
            ></line>
          </svg>
        </a>
        <a title="X" href="https://twitter.com/nate_sonnenberg" target="_blank">
          <FaXTwitter className="text-white stroke-1 hover:scale-110 transition-transform duration-100 ease-in tablet:w-20 tablet:h-20 phone:w-10 phone:h-10 hover:text-[#08A0E9]" />
        </a>
        <a
          title="Facebook"
          href="https://www.facebook.com/nathan.sonnenberg.14"
          target="_blank"
        >
          <FiFacebook className="stroke-white stroke-1 hover:scale-110 transition-transform duration-100 ease-in tablet:w-20 tablet:h-20 phone:w-10 phone:h-10 hover:stroke-[#4267B2]" />
        </a>
        <a
          title="GitHub"
          href="https://github.com/ntsonnenberg"
          target="_blank"
        >
          <FiGithub className="stroke-white stroke-1 hover:scale-110 transition-transform duration-100 ease-in tablet:w-20 tablet:h-20 phone:w-10 phone:h-10 hover:stroke-[#2DBA4E]" />
        </a>
      </div>
    </div>
  );
}
