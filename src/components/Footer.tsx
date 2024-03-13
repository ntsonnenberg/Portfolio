import { StaticImage } from "gatsby-plugin-image";
import React, { useState } from "react";
import { FiLinkedin, FiFacebook, FiGithub } from "react-icons/fi";
import { RiTwitterXLine } from "react-icons/ri";

export default function Footer(): JSX.Element {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="bottom-0 w-full bg-primary-variant text-on-primary phone:h-auto laptop:h-32">
      <div className="flex h-full items-center phone:flex-col phone:py-8 phone:gap-6 laptop:flex-row laptop:py-0 laptop:gap-0">
        <div className="flex gap-6 tablet:basis-1/3 tablet:text-2xl laptop:ml-40 phone:text-lg phone:ml-4">
          <p className="text-md">&copy; 2024</p>
          <StaticImage
            src="../images/bespoke-white-no-bg.png"
            alt="Bespoke Dev Solutions"
            placeholder="blurred"
            className="phone:w-48 phone:h-auto"
          />
        </div>
        <div className="basis-2/3 grow flex flex-row justify-evenly phone:mr-4 phone:gap-4 laptop:mr-20 laptop:gap-0">
          <a
            href="https://www.linkedin.com/in/nathan-sonnenberg/"
            target="_blank"
          >
            <FiLinkedin className="transition-transform duration-100 tablet:w-11 tablet:h-11 phone:w-6 phone:h-6 hover:transform hover:-translate-y-2 hover:ease-in hover:stroke-[#0077B5]" />
          </a>
          <a href="https://www.instagram.com/nate.sonny/" target="_blank">
            <svg
              id="ig-svg"
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-100 tablet:w-11 tablet:h-11 phone:w-6 phone:h-6 hover:transform hover:-translate-y-2 hover:ease-in"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
              onMouseOver={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{ stroke: isHovered ? "url(#gradient)" : "white" }}
            >
              <defs>
                <linearGradient
                  id="gradient"
                  x1="0%"
                  y1="100%"
                  x2="100%"
                  y2="0%"
                >
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
          <a href="https://twitter.com/nate_sonnenberg" target="_blank">
            <RiTwitterXLine className="transition-transform duration-100 tablet:w-11 tablet:h-11 phone:w-6 phone:h-6 hover:transform hover:-translate-y-2 hover:ease-in hover:text-[#08A0E9]" />
          </a>
          <a
            href="https://www.facebook.com/nathan.sonnenberg.14"
            target="_blank"
          >
            <FiFacebook className="transition-transform duration-100 tablet:w-11 tablet:h-11 phone:w-6 phone:h-6 hover:transform hover:-translate-y-2 hover:ease-in hover:stroke-[#4267B2]" />
          </a>
          <a href="https://github.com/ntsonnenberg" target="_blank">
            <FiGithub className="transition-transform duration-100 tablet:w-11 tablet:h-11 phone:w-6 phone:h-6 hover:transform hover:-translate-y-2 hover:ease-in hover:stroke-[#2DBA4E]" />
          </a>
        </div>
      </div>
    </div>
  );
}
