import React from "react";
import { MacbookScroll } from "./aceternity-ui/macbook-scroll";
import { Link } from "gatsby";

export function MacbookScrollView() {
  return (
    <div className="overflow-hidden dark:bg-[#0B0B0F] bg-white w-full">
      <MacbookScroll
        title={
          <span>
            Boost Your Brand Online <br /> Exceptional Web Design!
          </span>
        }
        src="https://firebasestorage.googleapis.com/v0/b/portfolio-401812.appspot.com/o/home-images%2Fgo-enlite-landing.png?alt=media&token=3aa18edb-a4e6-4862-9584-608a5b4cb45b"
        showGradient={false}
      />
    </div>
  );
}
