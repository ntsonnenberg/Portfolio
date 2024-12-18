import React from "react";
import { FlipWords } from "./aceternity-ui/flip-words";

export function FlipWordsView() {
  const words = ["advanced", "tailored", "state-of-the-art", "modern"];

  return (
    <div className="h-[40rem] flex justify-center items-center px-4">
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        Built with
        <FlipWords words={words} /> <br />
        frameworks for your brand
      </div>
    </div>
  );
}
