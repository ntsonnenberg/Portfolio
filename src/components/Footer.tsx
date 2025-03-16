import React, { useState } from "react";
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              className="stroke-1 hover:scale-110 transition-transform duration-100 ease-in tablet:w-11 tablet:h-11 phone:w-6 phone:h-6 hover:stroke-[#0077B5] hover:shadow-stand-out"
            >
              <path
                d="M26.111,3H5.889c-1.595,0-2.889,1.293-2.889,2.889V26.111c0,1.595,1.293,2.889,2.889,2.889H26.111c1.595,0,2.889-1.293,2.889-2.889V5.889c0-1.595-1.293-2.889-2.889-2.889ZM10.861,25.389h-3.877V12.87h3.877v12.519Zm-1.957-14.158c-1.267,0-2.293-1.034-2.293-2.31s1.026-2.31,2.293-2.31,2.292,1.034,2.292,2.31-1.026,2.31-2.292,2.31Zm16.485,14.158h-3.858v-6.571c0-1.802-.685-2.809-2.111-2.809-1.551,0-2.362,1.048-2.362,2.809v6.571h-3.718V12.87h3.718v1.686s1.118-2.069,3.775-2.069,4.556,1.621,4.556,4.975v7.926Z"
                fill-rule="evenodd"
              ></path>
            </svg>
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              className="stroke-1 hover:scale-110 transition-transform duration-100 ease-in tablet:w-11 tablet:h-11 phone:w-6 phone:h-6 hover:text-[#08A0E9] hover:shadow-stand-out"
            >
              <path d="M18.42,14.009L27.891,3h-2.244l-8.224,9.559L10.855,3H3.28l9.932,14.455L3.28,29h2.244l8.684-10.095,6.936,10.095h7.576l-10.301-14.991h0Zm-3.074,3.573l-1.006-1.439L6.333,4.69h3.447l6.462,9.243,1.006,1.439,8.4,12.015h-3.447l-6.854-9.804h0Z"></path>
            </svg>
          </a>
          <a
            title="Facebook"
            href="https://www.facebook.com/nathan.sonnenberg.14"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              className="stroke-1 hover:scale-110 transition-transform duration-100 ease-in tablet:w-11 tablet:h-11 phone:w-6 phone:h-6 hover:stroke-[#4267B2] hover:shadow-stand-out"
            >
              <path d="M16,2c-7.732,0-14,6.268-14,14,0,6.566,4.52,12.075,10.618,13.588v-9.31h-2.887v-4.278h2.887v-1.843c0-4.765,2.156-6.974,6.835-6.974,.887,0,2.417,.174,3.043,.348v3.878c-.33-.035-.904-.052-1.617-.052-2.296,0-3.183,.87-3.183,3.13v1.513h4.573l-.786,4.278h-3.787v9.619c6.932-.837,12.304-6.74,12.304-13.897,0-7.732-6.268-14-14-14Z"></path>
            </svg>
          </a>
          <a
            title="GitHub"
            href="https://github.com/ntsonnenberg"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              className="stroke-1 hover:scale-110 transition-transform duration-100 ease-in tablet:w-11 tablet:h-11 phone:w-6 phone:h-6 hover:stroke-[#2DBA4E] hover:shadow-stand-out"
            >
              <path d="M16,2.345c7.735,0,14,6.265,14,14-.002,6.015-3.839,11.359-9.537,13.282-.7,.14-.963-.298-.963-.665,0-.473,.018-1.978,.018-3.85,0-1.312-.437-2.152-.945-2.59,3.115-.35,6.388-1.54,6.388-6.912,0-1.54-.543-2.783-1.435-3.762,.14-.35,.63-1.785-.14-3.71,0,0-1.173-.385-3.85,1.435-1.12-.315-2.31-.472-3.5-.472s-2.38,.157-3.5,.472c-2.677-1.802-3.85-1.435-3.85-1.435-.77,1.925-.28,3.36-.14,3.71-.892,.98-1.435,2.24-1.435,3.762,0,5.355,3.255,6.563,6.37,6.913-.403,.35-.77,.963-.893,1.872-.805,.368-2.818,.963-4.077-1.155-.263-.42-1.05-1.452-2.152-1.435-1.173,.018-.472,.665,.017,.927,.595,.332,1.277,1.575,1.435,1.978,.28,.787,1.19,2.293,4.707,1.645,0,1.173,.018,2.275,.018,2.607,0,.368-.263,.787-.963,.665-5.719-1.904-9.576-7.255-9.573-13.283,0-7.735,6.265-14,14-14Z"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
