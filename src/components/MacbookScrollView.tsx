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
        src="https://firebasestorage.googleapis.com/v0/b/portfolio-401812.appspot.com/o/project-images%2Futah-auto.png?alt=media&token=5157ac86-ede1-4229-8ec5-5a138738f270"
        showGradient={false}
      />
    </div>
  );
}
