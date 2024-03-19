import React, { useRef } from "react";
import { useScroll, animated, useSpring } from "@react-spring/web";

const X_LINES = 40;
const PAGE_COUNT = 5;
const INITIAL_WIDTH = 20;

export default function Wave(): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null!);
  const barContainerRef = useRef<HTMLDivElement>(null!);

  const [textStyles, textApi] = useSpring(() => ({
    y: "100%",
  }));

  const { scrollYProgress } = useScroll({
    container: containerRef,
    onChange: ({ value: { scrollYProgress } }) => {
      if (scrollYProgress > 0.7) {
        textApi.start({ y: "0" });
      } else {
        textApi.start({ y: "100%" });
      }
    },
    default: { immediate: true },
  });

  return (
    <div
      ref={containerRef}
      className="bg-[#171717] h-full w-full overflow-y-scroll"
    >
      <div className="w-full h-full fixed inset-0 pointer-events-none z-0">
        <animated.div
          ref={barContainerRef}
          className="pointer-events-none w-full h-full fixed inset-0 flex flex-col items-end z-2 justify-between"
        >
          {Array.from({ length: X_LINES }).map((_, i) => (
            <animated.div
              key={i}
              className="h-[1vh] bg-[rgba(255, 255, 255, 0.4)]"
              style={{
                width: scrollYProgress.to((scrollP) => {
                  const percentilePosition = (i + 1) / X_LINES;
                  return (
                    INITIAL_WIDTH / 4 +
                    40 *
                      Math.cos(
                        ((percentilePosition - scrollP) * Math.PI) / 1.5 ** 32
                      )
                  );
                }),
              }}
            />
          ))}
        </animated.div>
        <animated.div className="pointer-events-none w-full h-full fixed inset-0 flex flex-col justify-between items-start z-2">
          {Array.from({ length: X_LINES }).map((_, i) => (
            <animated.div
              key={i}
              className="h-[1vh] bg-[rgba(255, 255, 255, 0.4)]"
              style={{
                width: scrollYProgress.to((scrollP) => {
                  const percentilePosition = 1 - (i + 1) / X_LINES;
                  return (
                    INITIAL_WIDTH / 4 +
                    40 *
                      Math.cos(
                        ((percentilePosition - scrollP) * Math.PI) / 1.5 ** 32
                      )
                  );
                }),
              }}
            />
          ))}
        </animated.div>
        <animated.div
          className="pointer-events-none w-full h-full inset-0 bg-orange-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          style={{
            clipPath: scrollYProgress.to((val) => `circle(${val * 100}%)`),
          }}
        >
          <h1 className="text-[rgb(5,74,238)] text-[8vw] pl-[8vw]">
            <span className="block overflow-hidden">
              <animated.span className="block" style={textStyles}>
                Bespoke
              </animated.span>
            </span>
            <span className="block overflow-hidden">
              <animated.span className="block" style={textStyles}>
                Dev Solutions
              </animated.span>
            </span>
          </h1>
        </animated.div>
      </div>
      {/* {new Array(PAGE_COUNT).fill(null).map((_, index) => (
        <div key={index} className="w-screen h-screen" />
      ))} */}
    </div>
  );
}
