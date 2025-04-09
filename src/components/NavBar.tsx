import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import Image from "./Image";
import useScrollFromTop from "../hooks/use-scroll-from-top";

type Props = {
  openDrawer: () => void;
};

export default function NavBar({ openDrawer }: Props): JSX.Element {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { isStyleOn } = useScrollFromTop();

  const runMenuAnimation = () => {
    openDrawer();
    setIsDrawerOpen(!isDrawerOpen);
  };

  const renderedMenuButton = (
    <div
      className="flex flex-col gap-1 justify-center items-center z-50 cursor-pointer laptop:hidden"
      onClick={runMenuAnimation}
    >
      <span
        className={`bg-on-background rounded-full h-0.5 w-7 ${
          isDrawerOpen ? "animate-spin-top-in" : "animate-spin-top-out"
        }`}
      ></span>
      <span
        className={`bg-on-background rounded-full transition-all ease-in-out h-0.5 ${
          isDrawerOpen ? "w-0" : "delay-500 w-7"
        }`}
      ></span>
      <span
        className={`bg-on-background rounded-full h-0.5 w-7 ${
          isDrawerOpen ? "animate-spin-bottom-in" : "animate-spin-bottom-out"
        }`}
      ></span>
    </div>
  );

  return (
    <nav
      className={`transition-all ease-in ${
        isStyleOn
          ? "bg-background/70 backdrop-blur-lg border-b border-on-background/20 shadow-xl"
          : "bg-transparent"
      } h-20 w-full text-on-primary fixed top-0 z-50`}
    >
      <div className="flex flex-row justify-between px-4 h-full items-center">
        <Link to="/" className="cursor-pointer phone:text-2xl tablet:text-4xl">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/portfolio-401812.appspot.com/o/bespoke-code-no-bg.svg?alt=media&token=4f2c6717-e0e4-49ba-baae-5a4e9b1a57ee"
            alt="Bespoke Code"
            className="phone:w-48 phone:h-auto tablet:w-52 tablet:h-auto"
          />
        </Link>
        {renderedMenuButton}
        <div className="hidden laptop:flex flex-row gap-24 text-xl items-center">
          <Link
            to="/projects"
            className="transition-transform duration-100 hover:scale-125 hover:ease-in hover:text-primary"
          >
            Projects
          </Link>
          <Link
            to="/aboutme"
            className="transition-transform duration-100 hover:scale-125 hover:ease-in hover:text-primary"
          >
            About Me
          </Link>
          <Link
            to="/articles"
            className="transition-transform duration-100 hover:scale-125 hover:ease-in hover:text-primary"
          >
            Articles
          </Link>
          <Link
            to="/contact"
            className="transition-transform duration-100 hover:scale-125 hover:ease-in hover:text-primary"
          >
            Contact
          </Link>
        </div>
        <Link
          to="/contact"
          className="primary filled hidden py-1 px-2 text-xl phone:hidden laptop:block laptop:mr-10"
        >
          Book a Call
        </Link>
      </div>
    </nav>
  );
}
