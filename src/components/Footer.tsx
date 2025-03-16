import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React, { useState } from "react";
import { FiLinkedin, FiFacebook, FiGithub } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import Image from "./Image";

export default function Footer(): JSX.Element {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="bottom-0 mt-20 w-full border-t border-on-background/20 text-on-primary phone:h-auto laptop:h-32">
      <div className="flex h-full items-center phone:flex-col phone:py-8 phone:gap-6 laptop:flex-row laptop:py-0 laptop:gap-0">
        <div className="flex flex-col tablet:basis-1/3 tablet:text-2xl laptop:ml-40 phone:text-lg phone:ml-4">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/portfolio-401812.appspot.com/o/bespoke-code-no-bg.svg?alt=media&token=4f2c6717-e0e4-49ba-baae-5a4e9b1a57ee"
            alt="Bespoke Code"
            className="phone:w-48 phone:h-auto laptop:w-72"
          />
          <p className="text-sm text-gray-700">
            &copy; 2025. All rights reserved.
          </p>
        </div>
        <div className="basis-2/3 grow flex flex-row justify-evenly phone:mr-4 phone:gap-4 tablet:gap-6 laptop:mr-20 laptop:gap-0">
          <a
            title="LinkedIn"
            href="https://www.linkedin.com/in/nathan-sonnenberg/"
            target="_blank"
          >
            <FiLinkedin className="stroke-1 hover:scale-110 transition-transform duration-100 ease-in tablet:w-11 tablet:h-11 phone:w-6 phone:h-6 hover:stroke-[#0077B5] hover:shadow-stand-out" />
          </a>
          <a
            title="Instagram"
            href="https://www.instagram.com/nate.sonny/"
            target="_blank"
          >
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="stroke-1 hover:scale-110 transition-transform duration-100 ease-in tablet:w-11 tablet:h-11 phone:w-6 phone:h-6 hover:shadow-stand-out"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
              onMouseOver={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{ stroke: isHovered ? "url(#gradient-footer)" : "white" }}
            >
              <defs>
                <linearGradient
                  id="gradient-footer"
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
                style={{
                  stroke: isHovered ? "url(#gradient-footer)" : "white",
                }}
                d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
              ></path>
              <line
                style={{
                  stroke: isHovered ? "url(#gradient-footer)" : "white",
                }}
                x1="17.5"
                y1="6.5"
                x2="17.51"
                y2="6.5"
              ></line>
            </svg>
          </a>
          <a
            title="X"
            href="https://twitter.com/nate_sonnenberg"
            target="_blank"
          >
            <FaXTwitter className="stroke-1 hover:scale-110 transition-transform duration-100 ease-in tablet:w-11 tablet:h-11 phone:w-6 phone:h-6 hover:text-[#08A0E9] hover:shadow-stand-out" />
          </a>
          <a
            title="Facebook"
            href="https://www.facebook.com/nathan.sonnenberg.14"
            target="_blank"
          >
            <FiFacebook className="stroke-1 hover:scale-110 transition-transform duration-100 ease-in tablet:w-11 tablet:h-11 phone:w-6 phone:h-6 hover:stroke-[#4267B2] hover:shadow-stand-out" />
          </a>
          <a
            title="GitHub"
            href="https://github.com/ntsonnenberg"
            target="_blank"
          >
            <FiGithub className="stroke-1 hover:scale-110 transition-transform duration-100 ease-in tablet:w-11 tablet:h-11 phone:w-6 phone:h-6 hover:stroke-[#2DBA4E] hover:shadow-stand-out" />
          </a>
        </div>
      </div>
    </div>
  );
}
