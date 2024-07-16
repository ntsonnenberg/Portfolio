import React, { useRef } from "react";
import VideoPlayer from "./VideoPlayer";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CodeExample(): JSX.Element {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.from("#code-header", {
        scrollTrigger: "#code-header",
        y: 50,
        opacity: 0,
        ease: "power2.inOut",
        delay: 1,
        duration: 1,
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="flex flex-col">
      <h1
        id="code-header"
        className="m-8 tablet:self-end font-bold phone:text-2xl tablet:text-4xl laptop:text-6xl"
      >
        Bringing your app to life
      </h1>
      <div className="my-16 h-screen flex phone:flex-col phone:mx-2 tablet:mx-6 tablet:flex-row laptop:mx-10">
        <VideoPlayer
          video="https://firebasestorage.googleapis.com/v0/b/portfolio-401812.appspot.com/o/videos%2Fmobile-demo.mp4?alt=media&token=9961ea36-4c23-4efe-aa7f-5d1e82482a8e"
          className="basis-1/3 phone:w-full tablet:w-1/2 laptop:w-1/3 h-4/5"
        />
        <VideoPlayer
          video="https://firebasestorage.googleapis.com/v0/b/portfolio-401812.appspot.com/o/videos%2Fcoding-react.mp4?alt=media&token=e2bc1bd0-4f79-41eb-93e2-bb455c4ddef6"
          className="basis-2/3 shadow-stand-out phone:hidden tablet:block tablet:h-2/3 laptop:h-3/4"
        />
      </div>
    </div>
  );
}
