import React from "react";
import { MacbookScroll } from "./aceternity-ui/macbook-scroll";

export function MacbookScrollView() {
  return (
    <div className="overflow-hidden dark:bg-[#0B0B0F] bg-white w-full">
      <MacbookScroll
        title={
          <span>
            Boost Your Brand Online <br /> Exceptional Web Design!
          </span>
        }
        src="https://firebasestorage.googleapis.com/v0/b/portfolio-401812.appspot.com/o/bespoke-code-no-bg.svg?alt=media&token=4f2c6717-e0e4-49ba-baae-5a4e9b1a57ee"
        showGradient={false}
      />
    </div>
  );
}
