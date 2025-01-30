"use client";

import React from "react";
import { Boxes } from "./aceternity-ui/background-boxes";
import { cn } from "../lib/utils";
import { Link } from "gatsby";

export function BackgroundBoxesView() {
  return (
    <div className="h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <h3
        className={cn(
          "phone:text-3xl tablet:text-4xl laptop:text-6xl text-white relative z-20"
        )}
      >
        Consulting with Code
      </h3>
      <p className="text-center mt-6 text-neutral-300 relative z-20 phone:w-5/6 tablet:w-2/3">
        Choose our web development agency for strategic solutions that drive
        growth and enhance user satisfaction. Our application deveelopment
        services ensure custom solutions that fit your unique business
        requirements. Learn about our competitive website design costs and
        discover how we maximize value for your investment.
      </p>
      <Link
        to="/contact"
        className="font-bold outline outline-2 outline-white rounded-sm bg-white text-background px-2 py-1 self-center text-xl mt-10 z-20"
      >
        Talk to Us Now
      </Link>
    </div>
  );
}
