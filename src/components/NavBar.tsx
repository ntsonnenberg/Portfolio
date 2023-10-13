import React, { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import { Link } from "gatsby";

type Props = {
  openDrawer: () => void;
};

export default function NavBar({ openDrawer }: Props): JSX.Element {
  // const [showNav, setShowNav] = useState(
  //   window.location.pathname === "/" ? false : true
  // );
  const [showNav, setShowNav] = useState(false);
  const [path, setPath] = useState<string | undefined>();

  const controlNavbar = () => {
    if (typeof window !== undefined && window.scrollY >= 500) {
      setShowNav(true);
    } else {
      setShowNav(false);
    }
  };

  useEffect(() => {
    setPath(window.location.pathname);

    if (path === "/") {
      window.addEventListener("scroll", controlNavbar);

      return () => window.removeEventListener("scroll", controlNavbar);
    }
  }, [path]);

  useEffect(() => {
    if (path !== "/") {
      setShowNav(true);
    }
  }, [path]);

  return (
    <div
      className={`transition-all duration-500 ${
        showNav ? "opacity-100" : "opacity-0"
      } h-40 w-full bg-primary-variant/80 text-on-primary backdrop-blur-lg drop-shadow-2xl fixed top-0 z-10`}
    >
      <div className="flex flex-row justify-around h-full items-center align-center">
        <Link
          to="/"
          className="tablet:text-4xl phone:text-2xl cursor-pointer transition-transform duration-100 hover:-translate-y-2 hover:ease-in hover:text-secondary hover:font-bold"
        >
          Nathan Sonnenberg
        </Link>
        <FiMenu
          className="cursor-pointer phone:h-6 phone:w-6 tablet:h-10 tablet:w-10 laptop:hidden"
          onClick={openDrawer}
        />
        <div className="hidden laptop:flex flex-row gap-24">
          <Link
            to="/projects"
            className="text-2xl cursor-pointer transition-transform duration-100 hover:-translate-y-2 hover:ease-in hover:text-secondary hover:font-bold"
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className="text-2xl cursor-pointer transition-tranform duration-100 hover:-translate-y-2 hover:ease-in hover:text-secondary hover:font-bold"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
