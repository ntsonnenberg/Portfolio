import * as React from "react";

export default function NavBar(): JSX.Element {
  return (
    <div className="h-40 w-full bg-primary-variant/80 text-on-primary backdrop-blur-lg drop-shadow-2xl">
      <div className="container mx-auto h-full">
        <div className="flex flex-row justify-around h-full items-center">
          <h1 className="text-4xl">Nathan Sonnenberg</h1>
          <h2 className="text-lg">Portfolio</h2>
          <h2 className="text-lg">Contact</h2>
        </div>
      </div>
    </div>
  );
}
