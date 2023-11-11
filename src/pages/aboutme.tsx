import React, { useRef } from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import Button from "../components/Button";
import Carousel from "../components/Carousel";
import ContactForm from "../components/ContactForm";
import useFadeInObserver from "../hooks/use-fade-in-observer";
import scrollTo from "gatsby-plugin-smoothscroll";
import Image from "../components/Image";

export default function AboutMePage(): JSX.Element {
  const gradRef = useRef<HTMLDivElement>(null);
  const summerRef = useRef<HTMLImageElement>(null);
  const goEnliteRef = useRef<HTMLImageElement>(null);

  useFadeInObserver(gradRef, { fadeIn: "animate-fade-in-down" });
  useFadeInObserver(summerRef, { fadeIn: "animate-fade-in-right" });
  useFadeInObserver(goEnliteRef, { fadeIn: "animate-fade-in-left" });

  const images = [
    {
      src: "rome.jpeg",
      alt: "Rome",
      overlayText: "Rome, Italy",
    },
    {
      src: "scotland-castle.jpeg",
      alt: "Edinburugh Castle",
      overlayText: "Edinburgh Castle, Scotland",
    },
    {
      src: "interlaken.jpeg",
      alt: "Interlaken",
      overlayText: "Interlaken, Switzerland",
    },
    {
      src: "grand-tetons.JPEG",
      alt: "Grand Tetons",
      overlayText: "Grand Tetons, WY",
    },
    {
      src: "uintas-hike.jpg",
      alt: "Unitas",
      overlayText: "High Uintas, WY",
    },
    {
      src: "b-and-n-at-beach.jpeg",
      alt: "Pacific Coast Highway",
      overlayText: "Pacific Coast Highway",
    },
    {
      src: "edinburugh.jpeg",
      alt: "Edinburugh",
      overlayText: "Edinburgh, Scotland",
    },
  ];

  return (
    <Layout>
      <>
        <div className="relative phone:min-h-fit tablet:min-h-screen">
          <StaticImage
            src="../images/cardiff-castle.jpeg"
            alt="cardiff castle"
            placeholder="blurred"
            className="phone:mt-20 tablet:mt-0"
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
          <div className="font-bold phone: phone:text-4xl phone:h-[30vh] tablet:text-6xl laptop:h-[20vh]">
            My story begins...
          </div>
          <div className="flex justify-evenly phone:flex-col laptop:flex-row">
            <div className="font-bold self-center phone:text-center phone:mx-4 phone:text-2xl tablet:text-start tablet:mx-0 tablet:text-4xl tablet:w-5/6 laptop:w-1/3">
              Graduated with a{" "}
              <span className="text-secondary-variant">
                Master's in Information Systems Management
              </span>{" "}
              from BYU
            </div>
            <div
              ref={gradRef}
              className="relative w-1/3 h-screen phone:ml-14 tablet:ml-40 laptop:ml-0"
            >
              <Image
                src="grad-maeser.JPG"
                alt="Grad Maeser"
                placeholder="Grad Maeser"
                className="h-min absolute inset-y-1/4 left-0 rounded-lg phone:w-40 tablet:w-72"
              />
              <Image
                src="grad-tanner.JPG"
                alt="Grad Tanner"
                placeholder="Grad Tanner"
                className="h-min absolute inset-y-1/3 rounded-lg phone:w-40 phone:left-32 tablet:w-72 tablet:left-60"
              />
            </div>
          </div>
          <div className="font-bold text-center phone:text-4xl tablet:text-6xl tablet:w-11/12 laptop:w-3/4">
            Working for Enlite as their VP of Technology
          </div>
          <div ref={summerRef}>
            <Image
              src="summer-sales-2021.JPG"
              alt="Summer Sales"
              placeholder="Summmer Sales"
              className="h-auto rounded-lg phone:w-5/6 phone:inset-x-8 tablet:w-full tablet:inset-x-0"
            />
          </div>
          <div className="font-bold text-center pt-40 phone:text-4xl tablet:text-6xl tablet:w-11/12 laptop:w-3/4">
            Building a Sales Portal for Enlite's sales department
          </div>
          <div ref={goEnliteRef}>
            <Image
              src="go-enlite-hero.png"
              alt="Go Enlite"
              placeholder="Go Enlite"
              className="h-auto rounded-lg phone:w-5/6 phone:inset-x-8 tablet:w-full tablet:inset-x-0"
            />
          </div>
          <div className="font-bold text-center pt-40 phone:text-4xl tablet:text-6xl tablet:w-11/12 laptop:w-3/4">
            I love programming, but I also love adventures
          </div>
          <Carousel images={images} />
        </div>
        <ContactForm />
      </>
    </Layout>
  );
}
