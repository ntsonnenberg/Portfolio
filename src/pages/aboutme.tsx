import React, { useEffect, useRef } from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import Button from "../components/Button";
import Carousel from "../components/Carousel";
import ContactForm from "../components/ContactForm";
import useFadeInObserver from "../hooks/use-fade-in-observer";
import scrollTo from "gatsby-plugin-smoothscroll";

import uintasHike from "../images/uintas-hike.jpg";
import bAndNAtBeach from "../images/b-and-n-at-beach.jpeg";
import edinburugh from "../images/edinburugh.jpeg";
import gradMaeser from "../images/grad-maeser.jpg";
import gradTanner from "../images/grad-tanner.jpg";
import summerSales from "../images/summer-sales-2021.jpg";
import goEnlite from "../images/go-enlite-hero.png";
import grandTetons from "../images/grand-tetons.jpeg";
import scotlandCastle from "../images/scotland-castle.jpeg";
import interlaken from "../images/interlaken.jpeg";
import rome from "../images/rome.jpeg";

export default function AboutMePage(): JSX.Element {
  const gradRef = useRef<HTMLDivElement>(null);
  const summmerRef = useRef<HTMLImageElement>(null);
  const goEnliteRef = useRef<HTMLImageElement>(null);

  useFadeInObserver(gradRef, { fadeIn: "animate-fade-in-down" });
  useFadeInObserver(summmerRef, { fadeIn: "animate-fade-in-right" });
  useFadeInObserver(goEnliteRef, { fadeIn: "animate-fade-in-left" });

  const images = [
    {
      src: rome,
      alt: "Rome",
      overlayText: "Rome, Italy",
    },
    {
      src: scotlandCastle,
      alt: "Edinburugh Castle",
      overlayText: "Edinburgh Castle, Scotland",
    },
    {
      src: interlaken,
      alt: "Interlaken",
      overlayText: "Interlaken, Switzerland",
    },
    {
      src: grandTetons,
      alt: "Grand Tetons",
      overlayText: "Grand Tetons, WY",
    },
    {
      src: uintasHike,
      alt: "Unitas",
      overlayText: "High Uintas, WY",
    },
    {
      src: bAndNAtBeach,
      alt: "Pacific Coast Highway",
      overlayText: "Pacific Coast Highway",
    },
    { src: edinburugh, alt: "Edinburugh", overlayText: "Edinburgh, Scotland" },
  ];

  const scrollDown = () => {
    if (typeof document !== undefined) document;
  };

  return (
    <Layout>
      <>
        <div className="relative min-h-screen">
          <StaticImage
            src="../images/cardiff-castle.jpeg"
            alt="cardiff castle"
            placeholder="blurred"
            className="phone:mt-32"
          />
          <div className="absolute bg-primary/40 phone:w-52 phone:h-40 phone:right-2 phone:top-44 tablet:w-1/2 tablet:h-80 tablet:right-10 tablet:top-48 laptop:h-96 laptop:right-16 laptop:top-80">
            <div className="absolute bg-white phone:p-2 phone:inset-2 tablet:p-10 tablet:inset-5">
              <h1 className="font-bold phone:text-md tablet:text-2xl laptop:text-4xl">
                Your{" "}
                <span className="text-secondary">Personalized Consultant</span>{" "}
                for Web Applications
              </h1>
              <p className="phone:hidden tablet:block tablet:mt-2 tablet:mx-0 tablet:text-sm laptop:mt-6 laptop:mx-4 laptop:text-lg">
                I'm Nathan Sonnenberg, here for your web development & IT
                consulting needs.
              </p>
              <Button
                secondary
                filled
                large
                className="absolute rounded-sm phone:p-1 phone:text-sm phone:right-4 phone:bottom-4 tablet:p-2 tablet:right-10 tablet:bottom-6 laptop:right-28 laptop:bottom-16"
                onClick={() => scrollTo("#my-story")}
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
        <div
          id="my-story"
          className="min-h-screen flex flex-col items-center justify-center gap-20 py-40"
        >
          <div className="font-bold text-6xl h-[20vh]">My story begins...</div>
          <div className="flex justify-evenly">
            <div className="font-bold text-4xl w-1/3 self-center">
              Graduated with a{" "}
              <span className="text-secondary-variant">
                Master's in Information Systems Management
              </span>{" "}
              from BYU
            </div>
            <div ref={gradRef} className="relative w-1/3 h-screen">
              <img
                src={gradMaeser}
                className="w-72 h-auto absolute inset-y-1/4 left-0 rounded-lg"
              />
              <img
                src={gradTanner}
                className="w-72 h-auto absolute inset-y-1/3 left-60 rounded-lg"
              />
            </div>
          </div>
          <div className="font-bold text-6xl w-3/4 text-center">
            Working for Enlite as their VP of Technology
          </div>
          <img
            ref={summmerRef}
            src={summerSales}
            className="w-1/2 h-auto rounded-lg"
          />
          <div className="font-bold text-6xl w-3/4 text-center pt-40">
            Building a Sales Portal for Enlite's sales department
          </div>
          <img
            ref={goEnliteRef}
            src={goEnlite}
            className="w-1/2 h-auto rounded-lg"
          />
          <div className="font-bold text-6xl w-3/4 text-center pt-40">
            I love programming, but I also love adventures
          </div>
          <Carousel images={images} />
        </div>
        <ContactForm />
      </>
    </Layout>
  );
}
