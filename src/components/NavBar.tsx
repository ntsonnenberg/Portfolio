import React from "react";
import { FiMenu } from "react-icons/fi";

export default function NavBar(): JSX.Element {
  const renderedResponsiveNav =
    window.innerWidth < 1536 ? (
      <FiMenu className="tablet:h-10 tablet:w-10 phone:h-6 phone:w-6" />
    ) : (
      <div className="flex flex-row gap-24">
        <h2 className="text-2xl">Portfolio</h2>
        <h2 className="text-2xl">Contact</h2>
      </div>
    );

  return (
    <div className="h-40 w-full bg-primary-variant/80 text-on-primary backdrop-blur-lg drop-shadow-2xl sticky top-0">
      <div className="flex flex-row justify-around h-full items-center align-center">
        <h1 className="tablet:text-4xl phone:text-2xl">Nathan Sonnenberg</h1>
        {renderedResponsiveNav}
      </div>
    </div>
  );
}
