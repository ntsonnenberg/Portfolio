import React from "react";
import { BackgroundBeamsWithCollision } from "../components/aceternity-ui/background-beams";

export function BackgroundBeamsView() {
  return (
    <BackgroundBeamsWithCollision>
      <h2 className="relative z-20 phone:text-2xl tablet:text-3xl laptop:text-5xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
        Responsible, Reliable, and Ready{" "}
        <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
          <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
            <span className="">to Elevate Your Brand!</span>
          </div>
          <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
            <span className="">to Elevate Your Brand!</span>
          </div>
        </div>
      </h2>
    </BackgroundBeamsWithCollision>
  );
}
