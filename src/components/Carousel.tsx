import React, { useState } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import Image from "./Image";

type Props = {
  images: { src: string; alt: string; overlayText: string }[];
};

export default function Carousel({ images }: Props): JSX.Element {
  const [activeIndex, setActiveIndex] = useState(0);

  const goLeft = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goRight = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };
  return (
    <div className="relative w-1/2 h-[620px] overflow-x-hidden rounded-3xl">
      <div className="relative flex h-full">
        {images.map((image, index) => {
          const position =
            index === activeIndex
              ? ""
              : index < activeIndex
              ? "hidden"
              : "hidden";

          return (
            <div key={index} className={`relative w-full h-full ${position}`}>
              <Image
                src={image.src}
                alt={image.alt}
                className="w-full h-full bg-contain"
              />
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gray-600 bg-opacity-40">
                <span className="text-white font-bold text-3xl">
                  {image.overlayText}
                </span>
              </div>
              <div className="absolute bottom-4 left-2/4 z-10 flex -translate-x-2/4 gap-2">
                {new Array(images.length).fill("").map((_, i) => (
                  <span
                    key={i}
                    className={`block h-1 cursor-pointer rounded-2xl transition-all ${
                      activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
      <button
        className="absolute top-1/2 left-2 transform -translate-y-1/2 p-2 pl-1.5 text-white rounded-full hover:bg-white/20"
        onClick={goLeft}
      >
        <FiChevronLeft className="w-8 h-8" />
      </button>
      <button
        className="absolute top-1/2 right-2 transform -translate-y-1/2 p-2 pr-1.5 text-white rounded-full hover:bg-white/20"
        onClick={goRight}
      >
        <FiChevronRight className="w-8 h-8" />
      </button>
    </div>
  );
}
