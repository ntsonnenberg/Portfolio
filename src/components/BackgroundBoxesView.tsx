"use client";

import React from "react";
import { Boxes } from "./aceternity-ui/background-boxes";
import { cn } from "../lib/utils";

export function BackgroundBoxesView() {
  return (
    <div className="h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <h1 className={cn("md:text-4xl text-6xl text-white relative z-20")}>
        Consulting with Code
      </h1>
      <p className="text-center mt-2 text-neutral-300 relative z-20">
        Expert Guideance for Your Digital Presence
      </p>
    </div>
  );
}
