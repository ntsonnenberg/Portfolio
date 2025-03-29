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
      className={`fixed inset-0 bg-background text-on-background flex flex-col items-center transition-all duration-300 ${
        isOpen ? "translate-y-0 z-10 visible" : "-translate-y-full invisible"
      }`}
    >
      <div className="pt-32 flex flex-col gap-20 text-3xl">
        <Link to="/projects">Projects</Link>
        <Link to="/aboutme">About Me</Link>
        <Link to="/blogs">Blogs</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
}
