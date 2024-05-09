import { Link } from "gatsby";
import React from "react";

type Props = {
  isOpen: boolean;
  closeDrawer: () => void;
};

export default function NavDrawer({ isOpen }: Props): JSX.Element {
  return (
    <div
      id="navDrawer"
      className={`fixed inset-0 top-28 bg-primary-variant text-on-background flex flex-col items-center transition-all duration-300 ${
        isOpen ? "translate-y-0 z-10 visible" : "-translate-y-full invisible"
      }`}
    >
      <div className="pt-32 flex flex-col gap-20 text-3xl">
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
  );
}
