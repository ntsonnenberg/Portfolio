import { Link } from "gatsby";
import React, { useEffect } from "react";

type Props = {
  isOpen: boolean;
  closeDrawer: () => void;
};

export default function NavDrawer({ isOpen, closeDrawer }: Props): JSX.Element {
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as Node;
      if (!document.getElementById("navDrawer")?.contains(target)) {
        closeDrawer();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isOpen, closeDrawer]);

  return (
    <div
      id="navDrawer"
      className={`fixed inset-y-0 right-0 px-20 z-50 bg-primary-variant text-on-background drop-shadow-drawer flex flex-col transition-all duration-300 ${
        isOpen ? "translate-x-0 drop-shadow-over" : "translate-x-full"
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
