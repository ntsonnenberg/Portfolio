import React from "react";

export default function ParallaxFeature(): JSX.Element {
  return (
    <div className="min-h-screen flex justify-center text-center items-center bg-code bg-no-repeat bg-center bg-fixed phone:bg-[length:500px_600px] tablet:bg-[length:850px_900px] laptop:bg-cover">
      <h1 className="text-white font-bold phone:text-5xl tablet:text-7xl">
        Web Solutions that Work
      </h1>
    </div>
  );
}
