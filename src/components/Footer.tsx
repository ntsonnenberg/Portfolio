import React, { useState } from "react";
import Image from "./Image";
import { Link } from "gatsby";

export default function Footer(): JSX.Element {
  return (
    <footer className="py-12 border-t border-on-background/20 text-on-primary phone:pt-16 laptop:pt-20 mt-40">
      <div className="px-4 mx-auto max-w-7xl phone:px-6 laptop:px-8">
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/portfolio-401812.appspot.com/o/bespoke-code-no-bg.svg?alt=media&token=4f2c6717-e0e4-49ba-baae-5a4e9b1a57ee"
          alt="Bespoke Code"
          className="phone:w-48 phone:h-auto laptop:w-72"
        />
        <div className="grid phone:grid-cols-2 mt-16 tablet:grid-cols-3 gap-y-16 laptop:grid-cols-6 gap-x-16">
          <div>
            <h6 className="text-sm font-bold tracking-widest uppercase">
              Company
            </h6>
            <ul className="mt-8 space-y-5">
              <li>
                <Link
                  to="/aboutme"
                  title="About Me"
                  className="inline-flex cursor-pointer text-sm font-normal transition-all duration-300 transform hover:text-primary hover:translate-x-1"
                >
                  {" "}
                  About Me{" "}
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  title="Projects"
                  className="inline-flex cursor-pointer text-sm font-normal transition-all duration-300 transform hover:text-primary hover:translate-x-1"
                >
                  {" "}
                  Projects{" "}
                </Link>
              </li>
              {/* <li>
                <a
                  href="#"
                  title=""
                  className="inline-flex text-sm font-normal transition-all duration-300 transform hover:text-primary hover:translate-x-1"
                >
                  {" "}
                  Works{" "}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title=""
                  className="inline-flex text-sm font-normal transition-all duration-300 transform hover:text-primary hover:translate-x-1"
                >
                  {" "}
                  Career{" "}
                </a>
              </li> */}
            </ul>
          </div>

          <div>
            <h6 className="text-sm font-bold tracking-widest uppercase">
              Help
            </h6>

            <ul className="mt-8 space-y-5">
              <li>
                <a
                  href="/contact"
                  title="Contact"
                  className="inline-flex cursor-pointer text-sm font-normal transition-all duration-300 transform hover:text-primary hover:translate-x-1"
                >
                  {" "}
                  Customer Support{" "}
                </a>
              </li>
              {/*
              <li>
                <a
                  href="#"
                  title=""
                  className="inline-flex text-sm font-normal transition-all duration-300 transform hover:text-primary hover:translate-x-1"
                >
                  {" "}
                  Delivery Details{" "}
                </a>
              </li> */}

              <li>
                <Link
                  to="/terms-and-conditions"
                  title="Terms & Conditions"
                  className="inline-flex cursor-pointer text-sm font-normal transition-all duration-300 transform hover:text-primary hover:translate-x-1"
                >
                  {" "}
                  Terms & Conditions{" "}
                </Link>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  className="inline-flex cursor-pointer text-sm font-normaltransition-all duration-300 transform hover:text-primary hover:translate-x-1"
                >
                  {" "}
                  Privacy Policy{" "}
                </a>
              </li>
            </ul>
          </div>

          <div className="phone:col-span-2 tablet:col-span-1">
            <h6 className="text-sm font-bold tracking-widest uppercase">
              Resources
            </h6>

            <ul className="mt-8 space-y-5">
              <li>
                <Link
                  to="/articles"
                  title="Articles"
                  className="inline-flex cursor-pointer text-sm font-normal transition-all duration-300 transform hover:text-primary hover:translate-x-1"
                >
                  {" "}
                  Articles{" "}
                </Link>
              </li>

              {/* <li>
                <a
                  href="#"
                  title=""
                  className="inline-flex text-sm font-normal transition-all duration-300 transform hover:text-primary hover:translate-x-1"
                >
                  {" "}
                  Development Tutorial{" "}
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  className="inline-flex text-sm font-normal transition-all duration-300 transform hover:text-primary hover:translate-x-1"
                >
                  {" "}
                  How to - Blog{" "}
                </a>
              </li> */}

              <li>
                <a
                  href="#"
                  title=""
                  className="inline-flex cursor-pointer text-sm font-normal transition-all duration-300 transform hover:text-primary hover:translate-x-1"
                >
                  {" "}
                  Youtube Channel{" "}
                </a>
              </li>
            </ul>
          </div>

          <div className="phone:col-span-2 tablet:col-span-1 laptop:col-span-3">
            <h6 className="text-sm font-bold tracking-widest">
              Subscribe to newsletter
            </h6>
            <iframe
              src="https://nathansonnenberg.substack.com/embed"
              width="360"
              height="120"
              frameBorder="0"
              scrolling="no"
            ></iframe>
            <div className="grid grid-cols-1 mt-8 gap-y-8 phone:gap-x-16 laptop:gap-x-0">
              <div>
                <h6 className="text-sm font-bold tracking-widest">Call us</h6>
                <p className="mt-2.5 text-xl font-bold">
                  <a href="#" title="">
                    {" "}
                    (805) 504-5262{" "}
                  </a>
                </p>
              </div>

              <div>
                <h6 className="text-sm font-bold tracking-widest">Email us</h6>
                <p className="mt-2.5 text-xl font-bold">
                  <a href="#" title="">
                    {" "}
                    nsonnenberg@bespokecode.io{" "}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr className="mt-16 border-gray-500" />
        <div className="mt-8 tablet:flex tablet:items-center tablet:justify-between">
          <ul className="flex items-center justify-start space-x-5 sm:order-2 sm:justify-end">
            <li>
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
                  className="stroke-1 hover:scale-110 transition-transform duration-100 ease-in tablet:w-8 tablet:h-8 phone:w-6 phone:h-6 hover:stroke-[#0077B5] hover:shadow-stand-out"
                >
                  <path
                    d="M26.111,3H5.889c-1.595,0-2.889,1.293-2.889,2.889V26.111c0,1.595,1.293,2.889,2.889,2.889H26.111c1.595,0,2.889-1.293,2.889-2.889V5.889c0-1.595-1.293-2.889-2.889-2.889ZM10.861,25.389h-3.877V12.87h3.877v12.519Zm-1.957-14.158c-1.267,0-2.293-1.034-2.293-2.31s1.026-2.31,2.293-2.31,2.292,1.034,2.292,2.31-1.026,2.31-2.292,2.31Zm16.485,14.158h-3.858v-6.571c0-1.802-.685-2.809-2.111-2.809-1.551,0-2.362,1.048-2.362,2.809v6.571h-3.718V12.87h3.718v1.686s1.118-2.069,3.775-2.069,4.556,1.621,4.556,4.975v7.926Z"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </a>
            </li>
            <li>
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
                  className="stroke-1 hover:scale-110 transition-transform duration-100 ease-in tablet:w-8 tablet:h-8 phone:w-6 phone:h-6 hover:shadow-stand-out hover:stroke-[url(#gradient-socials)]"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
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
                    d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
                    className="hover:stroke-[url(#gradient-socials)]"
                  ></path>
                  <line
                    className="hover:stroke-[url(#gradient-socials)]"
                    x1="17.5"
                    y1="6.5"
                    x2="17.51"
                    y2="6.5"
                  ></line>
                </svg>
              </a>
            </li>
            <li>
              <a
                title="X"
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
                  className="stroke-1 hover:scale-110 transition-transform duration-100 ease-in tablet:w-8 tablet:h-8 phone:w-6 phone:h-6 hover:text-[#08A0E9] hover:shadow-stand-out"
                >
                  <path d="M18.42,14.009L27.891,3h-2.244l-8.224,9.559L10.855,3H3.28l9.932,14.455L3.28,29h2.244l8.684-10.095,6.936,10.095h7.576l-10.301-14.991h0Zm-3.074,3.573l-1.006-1.439L6.333,4.69h3.447l6.462,9.243,1.006,1.439,8.4,12.015h-3.447l-6.854-9.804h0Z"></path>
                </svg>
              </a>
            </li>
            <li>
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
                  className="stroke-1 hover:scale-110 transition-transform duration-100 ease-in tablet:w-8 tablet:h-8 phone:w-6 phone:h-6 hover:stroke-[#4267B2] hover:shadow-stand-out"
                >
                  <path d="M16,2c-7.732,0-14,6.268-14,14,0,6.566,4.52,12.075,10.618,13.588v-9.31h-2.887v-4.278h2.887v-1.843c0-4.765,2.156-6.974,6.835-6.974,.887,0,2.417,.174,3.043,.348v3.878c-.33-.035-.904-.052-1.617-.052-2.296,0-3.183,.87-3.183,3.13v1.513h4.573l-.786,4.278h-3.787v9.619c6.932-.837,12.304-6.74,12.304-13.897,0-7.732-6.268-14-14-14Z"></path>
                </svg>
              </a>
            </li>
            <li>
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
                  className="stroke-1 hover:scale-110 transition-transform duration-100 ease-in tablet:w-8 tablet:h-8 phone:w-6 phone:h-6 hover:stroke-[#2DBA4E] hover:shadow-stand-out"
                >
                  <path d="M16,2.345c7.735,0,14,6.265,14,14-.002,6.015-3.839,11.359-9.537,13.282-.7,.14-.963-.298-.963-.665,0-.473,.018-1.978,.018-3.85,0-1.312-.437-2.152-.945-2.59,3.115-.35,6.388-1.54,6.388-6.912,0-1.54-.543-2.783-1.435-3.762,.14-.35,.63-1.785-.14-3.71,0,0-1.173-.385-3.85,1.435-1.12-.315-2.31-.472-3.5-.472s-2.38,.157-3.5,.472c-2.677-1.802-3.85-1.435-3.85-1.435-.77,1.925-.28,3.36-.14,3.71-.892,.98-1.435,2.24-1.435,3.762,0,5.355,3.255,6.563,6.37,6.913-.403,.35-.77,.963-.893,1.872-.805,.368-2.818,.963-4.077-1.155-.263-.42-1.05-1.452-2.152-1.435-1.173,.018-.472,.665,.017,.927,.595,.332,1.277,1.575,1.435,1.978,.28,.787,1.19,2.293,4.707,1.645,0,1.173,.018,2.275,.018,2.607,0,.368-.263,.787-.963,.665-5.719-1.904-9.576-7.255-9.573-13.283,0-7.735,6.265-14,14-14Z"></path>
                </svg>
              </a>
            </li>
          </ul>
          <p className="mt-8 text-sm font-normal text-gray-600 font-pj sm:order-1 sm:mt-0">
            © Copyright 2025, All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
