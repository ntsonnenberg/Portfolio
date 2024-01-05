import React, { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

type Props = {
  openDrawer: () => void;
};

export default function NavBar({ openDrawer }: Props): JSX.Element {
  const [showNav, setShowNav] = useState(false);

  const controlNavbar = () => {
    if (typeof window !== undefined && window.scrollY >= 500) {
      setShowNav(true);
    } else {
      setShowNav(false);
    }
  };

  useEffect(() => {
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

  return (
    <div
      className={`transition-all duration-500 ${
        showNav ? "opacity-100" : "opacity-0"
      } h-28 w-full bg-primary-variant/80 text-on-primary backdrop-blur-lg drop-shadow-2xl fixed top-0 z-50`}
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
        <FiMenu
          className="cursor-pointer phone:h-6 phone:w-6 tablet:h-10 tablet:w-10 laptop:hidden"
          onClick={openDrawer}
        />
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
