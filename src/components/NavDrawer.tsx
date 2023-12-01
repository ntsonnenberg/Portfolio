import { Link } from "gatsby";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { FiX } from "react-icons/fi";

type Props = {
  closeDrawer: () => void;
};

export default function NavDrawer({ closeDrawer }: Props): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.classList.add("relative");
    document.body.classList.add("overflow-hidden");

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 100);

    return () => {
      clearTimeout(timer);
      setIsOpen(false);
      document.body.classList.remove("relative");
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return createPortal(
    <>
      <div
        className="fixed inset-0 bg-background opacity-80"
        onClick={closeDrawer}
      ></div>
      <div
        className={`fixed inset-y-0 right-0 z-50 bg-primary-variant text-on-background drop-shadow-drawer flex flex-col phone:w-4/5 tablet:w-1/2 transition-all duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <FiX
          className="w-10 h-10 self-end m-6 cursor-pointer"
          onClick={closeDrawer}
        />
        <div className="pl-20 pt-32 flex flex-col gap-20 text-3xl">
          <Link
            to="/projects"
            className="cursor-pointer transition-transform duration-100 hover:-translate-y-2 hover:ease-in hover:text-secondary hover:font-bold"
          >
            Projects
          </Link>
          <Link
            to="/aboutme"
            className="cursor-pointer transition-transform duration-100 hover:-translate-y-2 hover:ease-in hover:text-secondary hover:font-bold"
          >
            About Me
          </Link>
          <Link
            to="/contact"
            className="cursor-pointer transition-transform duration-100 hover:-translate-y-2 hover:ease-in hover:text-secondary hover:font-bold"
          >
            Contact
          </Link>
        </div>
      </div>
    </>,
    document.body
  );
}
