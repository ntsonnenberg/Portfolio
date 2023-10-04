import { Link } from "gatsby";
import React, { useEffect } from "react";
import { createPortal } from "react-dom";

type Props = {
  closeDrawer: () => void;
};

export default function NavDrawer({ closeDrawer }: Props): JSX.Element {
  useEffect(() => {
    document.body.classList.add("relative");
    document.body.classList.add("overflow-hidden");

    return () => {
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
      <div className="fixed inset-y-0 right-0 w-1/3 bg-primary-variant drop-shadow-drawer">
        <div className="place-items-center pt-32 flex flex-col gap-32 text-on-background text-2xl">
          <Link
            to="/portfolio"
            className="cursor-pointer transition-transform duration-100 hover:-translate-y-2 hover:ease-in hover:text-secondary hover:font-bold"
          >
            Portfolio
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
