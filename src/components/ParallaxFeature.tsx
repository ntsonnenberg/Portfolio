import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export default function ParallaxFeature(): JSX.Element {
  return (
    <div className="relative min-h-screen flex flex-col justify-start text-center items-center bg-code bg-no-repeat bg-center bg-cover phone:px-8 laptop:px-0 laptop:bg-fixed">
      <StaticImage
        src="../images/bespoke-white-no-bg.png"
        alt="Bespoke Dev Solutions"
        placeholder="blurred"
        className="mt-60 phone:w-60 phone:h-auto tablet:w-auto"
      />
      <div className="phone:pt-20 tablet:pt-40">
        <h1 className="text-on-background font-bold phone:text-5xl tablet:text-7xl">
          Solutions that Drive Sales
        </h1>
      </div>
      <div className="absolute bg-surface w-full h-12 bottom-0 rounded-t-full"></div>
    </div>
  );
}
