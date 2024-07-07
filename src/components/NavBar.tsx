import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

type Props = {
  openDrawer: () => void;
};

export default function NavBar({ openDrawer }: Props): JSX.Element {
  const [showNav, setShowNav] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== undefined && window.scrollY >= 500) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    };

    const path = window.location.pathname;
    if (path === "/") {
      window.addEventListener("scroll", controlNavbar);
    } else {
      setShowNav(true);
    }

    return () => {
      if (path === "/") window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

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
    <div
      className={`transition-all duration-500 ${
        showNav ? "opacity-100" : "opacity-0"
      } h-28 w-full bg-primary-variant/70 text-on-primary backdrop-blur-lg fixed top-0 z-50 shadow-xl border-b border-on-background/20`}
    >
      <div className="flex flex-row justify-around h-full items-center align-center">
        <Link to="/" className="cursor-pointer phone:text-2xl tablet:text-4xl">
          <StaticImage
            src="../images/bespoke-white-no-bg.png"
            alt="Bespoke Dev Solutions"
            placeholder="blurred"
            className="phone:w-48 phone:h-auto tablet:w-40 tablet:h-auto"
          />
        </Link>
        {renderedMenuButton}
        <div className="hidden laptop:flex flex-row gap-24 text-xl cursor-pointer">
          <Link
            to="/projects"
            className="transition-transform duration-100 hover:-translate-y-2 hover:ease-in hover:text-secondary hover:font-bold"
          >
            Projects
          </Link>
          <Link
            to="/aboutme"
            className="transition-transform duration-100 hover:-translate-y-2 hover:ease-in hover:text-secondary hover:font-bold"
          >
            About Me
          </Link>
          <Link
            to="/contact"
            className="transition-transform duration-100 hover:-translate-y-2 hover:ease-in hover:text-secondary hover:font-bold"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
