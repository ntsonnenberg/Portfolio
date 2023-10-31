import React, { useState } from "react";

import alpineLoop from "../images/alpine-loop.JPG";
import bAndNAtBeach from "../images/b-and-n-at-beach.jpeg";
import edinburugh from "../images/edinburugh.jpeg";

const images = [
  { src: alpineLoop, alt: "Alpine Loop", overlayText: "This is Alpine Loop" },
  {
    src: bAndNAtBeach,
    alt: "At the Beach",
    overlayText: "This is at the beach",
  },
  { src: edinburugh, alt: "Edinburugh", overlayText: "This is Edinburugh" },
];

export default function Carousel(): JSX.Element {
  const [activeIndex, setActiveIndex] = useState(0);

  const goLeft = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goRight = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full h-64 overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
            activeIndex === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <img src={image.src} alt={image.alt} className="w-full h-full" />
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
            <span className="text-white font-bold">{image.overlayText}</span>
          </div>
        </div>
      ))}
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black p-2 text-white"
        onClick={goLeft}
      >
        &lt;
      </button>
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black p-2 text-white"
        onClick={goRight}
      >
        &gt;
      </button>
    </div>
  );
}
