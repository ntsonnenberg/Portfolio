"use client";

import HackerBackground from "./eldora-ui/hackerbg";
import React from "react";

export function HackerBackgroundView() {
  return (
    <div className="relative z-10 w-full h-screen overflow-hidden bg-background">
      <HackerBackground />
    </div>
  );
}
