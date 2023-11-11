import React from "react";

export default function ParallaxFeature(): JSX.Element {
  return (
    <div className="min-h-screen flex justify-center text-center items-center bg-code bg-no-repeat bg-center bg-cover laptop:bg-fixed">
      <h1 className="text-white font-bold phone:text-5xl tablet:text-7xl">
        Dev Solutions that Drive Sales
      </h1>
    </div>
  );
}
