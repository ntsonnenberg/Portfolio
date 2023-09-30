import React from "react";
import { FiMenu } from "react-icons/fi";
import { Link } from "gatsby";
import { useState, useEffect } from "react";

export default function NavBar(): JSX.Element {
  const [showNav, setShowNav] = useState(false);

  const controlNavbar = () => {
    if (window.scrollY >= 500) {
      setShowNav(true);
    } else {
      setShowNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);

    return () => window.removeEventListener("scroll", controlNavbar);
  }, []);

  const renderedResponsiveNav =
    window.innerWidth < 1536 ? (
      <FiMenu className="tablet:h-10 tablet:w-10 phone:h-6 phone:w-6" />
    ) : (
      <div className="flex flex-row gap-24">
        <Link
          to="/portfolio"
          className="text-2xl cursor-pointer transition-transform duration-100 hover:-translate-y-2 hover:ease-in hover:text-secondary hover:font-bold"
        >
          Portfolio
        </Link>
        <Link
          className="text-2xl cursor-pointer transition-transform duration-100 hover:-translate-y-2 hover:ease-in hover:text-secondary hover:font-bold"
          to="/contact"
        >
          Contact
        </Link>
      </div>
    );

  return (
    <div
      className={`transition-all duration-500 ${
        showNav ? "opacity-100" : "opacity-0"
      } h-40 w-full bg-primary-variant/80 text-on-primary backdrop-blur-lg drop-shadow-2xl fixed top-0`}
    >
      <div className="flex flex-row justify-around h-full items-center align-center">
        <Link
          to="/"
          className="tablet:text-4xl phone:text-2xl cursor-pointer transition-transform duration-100 hover:-translate-y-2 hover:ease-in hover:text-secondary hover:font-bold"
        >
          Nathan Sonnenberg
        </Link>
        {renderedResponsiveNav}
      </div>
    </div>
  );
}
