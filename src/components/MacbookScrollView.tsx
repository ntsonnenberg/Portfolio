import React from "react";
import { MacbookScroll } from "./aceternity-ui/macbook-scroll";
import { Link } from "gatsby";

export function MacbookScrollView() {
  return (
    <div className="overflow-hidden dark:bg-[#0B0B0F] bg-white w-full mt-20">
      <MacbookScroll
        title={
          <span>
            Boost Your Brand Online <br /> Exceptional Web Design!
          </span>
        }
        src="/go-enlite-landing.svg"
        showGradient={false}
      />
    </div>
  );
}
