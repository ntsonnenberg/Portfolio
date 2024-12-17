// @ts-nocheck
"use client";

import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { useEffect, useRef } from "react";
import { animate, scroll, spring } from "framer-motion";
import { ReactLenis } from "lenis/react";

export default function HorizontalScroll(): JSX.Element {
  const ulRef = useRef<HTMLUListElement | null>();

  useEffect(() => {
    const items = document.querySelectorAll("li");

    if (ulRef.current) {
      const controls = animate(
        ulRef.current,
        {
          transform: ["none", `translateX(-${items.length - 1}00vw)`],
        },
        { easing: spring() }
      );
      scroll(controls, { target: document.querySelector("section") });
    }

    const segmentLength = 1 / items.length;
    items.forEach((item, i) => {
      const header = item.querySelector("h2");

      scroll(animate([header], { x: [800, -800] }), {
        target: document.querySelector("section"),
        offset: [
          [i * segmentLength, 1],
          [(i + 1) * segmentLength, 0],
        ],
      });
    });
  }, []);

  return (
    <ReactLenis root>
      <main>
        <article>
          <header className="text-white relative  w-full bg-slate-950  grid place-content-center  h-[80vh]">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

            <h1 className="text-6xl font-bold text-center tracking-tight">
              I know You Love to Scroll <br />
              So Scroll
            </h1>
          </header>
          <section className="h-[500vh] relative">
            <ul ref={ulRef} className="flex sticky top-0">
              <li className="h-screen w-screen bg-red-400 flex flex-col justify-center overflow-hidden  items-center">
                <h2 className="text-[20vw] font-semibold relative bottom-5 inline-block text-black">
                  PASSION
                </h2>
                <img
                  src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
                  className="2xl:w-[550px] w-[380px] absolute bottom-0"
                  width={500}
                  height={500}
                  alt="image"
                />
              </li>
              <li className="h-screen w-screen bg-blue-400 flex flex-col justify-center overflow-hidden  items-center">
                <h2 className="text-[20vw] font-semibold relative bottom-5 inline-block text-black">
                  WORK
                </h2>
                <img
                  src="https://res.cloudinary.com/dzl9yxixg/image/upload/v1713532202/ui-layout/team_gsu8ej.png"
                  className="2xl:w-[550px] w-[380px] absolute bottom-0"
                  width={500}
                  height={500}
                  alt="image"
                />
              </li>
              <li className="h-screen w-screen bg-orange-400 flex flex-col justify-center overflow-hidden  items-center">
                <h2 className="text-[20vw] font-semibold relative bottom-5 inline-block text-black">
                  MOTIVATION
                </h2>
                <img
                  src="https://res.cloudinary.com/dzl9yxixg/image/upload/v1713532202/ui-layout/team_gsu8ej.png"
                  className="2xl:w-[550px] w-[380px] absolute bottom-0"
                  width={500}
                  height={500}
                  alt="image"
                />
              </li>
              <li className="h-screen w-screen bg-yellow-400 flex flex-col justify-center overflow-hidden  items-center">
                <h2 className="text-[20vw] font-semibold relative bottom-5 inline-block text-black">
                  INSPIRATION
                </h2>
                <img
                  src="https://res.cloudinary.com/dzl9yxixg/image/upload/v1713532202/ui-layout/team_gsu8ej.png"
                  className="2xl:w-[550px] w-[380px] absolute bottom-0"
                  width={500}
                  height={500}
                  alt="image"
                />
              </li>
              <li className="h-screen w-screen bg-green-400 flex flex-col justify-center overflow-hidden  items-center">
                <h2 className="text-[20vw] font-semibold relative bottom-5 inline-block text-black">
                  BELIVE
                </h2>
                <img
                  src="https://res.cloudinary.com/dzl9yxixg/image/upload/v1713532202/ui-layout/team_gsu8ej.png"
                  className="2xl:w-[550px] w-[380px] absolute bottom-0"
                  width={500}
                  height={500}
                  alt="image"
                />
              </li>
            </ul>
          </section>
          <footer className="bg-red-600 text-white grid place-content-center h-[80vh]">
            <p>
              Created By{" "}
              <a target="_blank" href="https://twitter.com/mattgperry">
                Matt Perry
              </a>
            </p>
          </footer>
        </article>
        <div className="progress fixed left-0 right-0  h-2 rounded-full bg-red-600 bottom-[50px] scale-x-0"></div>
      </main>
    </ReactLenis>
  );
}
