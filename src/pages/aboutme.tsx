import React, { useRef } from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import Button from "../components/Button";
import ContactForm from "../components/ContactForm";
import useScrollObserver from "../hooks/use-scroll-observer";
import scrollTo from "gatsby-plugin-smoothscroll";
import Image from "../components/Image";
import CarouselView from "../components/CarouselView";

export default function AboutMePage(): JSX.Element {
  const gradRef = useRef<HTMLDivElement>(null);
  const summerRef = useRef<HTMLImageElement>(null);
  const goEnliteRef = useRef<HTMLImageElement>(null);

  useScrollObserver(gradRef, {
    animationClass: "animate-fade-in-down",
    handleOpacity: true,
  });
  useScrollObserver(summerRef, {
    animationClass: "animate-fade-in-right",
    handleOpacity: true,
  });
  useScrollObserver(goEnliteRef, {
    animationClass: "animate-fade-in-left",
    handleOpacity: true,
  });

  const images = [
    {
      src: "https://firebasestorage.googleapis.com/v0/b/portfolio-401812.appspot.com/o/about-me-images%2Frome.jpeg?alt=media&token=664cf711-50a0-4b61-9443-e8e3e652486e",
      alt: "Rome",
      overlayText: "Rome, Italy",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/portfolio-401812.appspot.com/o/about-me-images%2Fscotland-castle.jpeg?alt=media&token=2fb63ae3-3575-4877-9146-0a3f08205617",
      alt: "Edinburugh Castle",
      overlayText: "Edinburgh Castle, Scotland",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/portfolio-401812.appspot.com/o/about-me-images%2Finterlaken.jpeg?alt=media&token=b3179522-772f-4af9-97e4-8ea930b1ef9d",
      alt: "Interlaken",
      overlayText: "Interlaken, Switzerland",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/portfolio-401812.appspot.com/o/about-me-images%2Fgrand-tetons.JPEG?alt=media&token=20b8484f-31da-4837-a6c3-4489353b57ca",
      alt: "Grand Tetons",
      overlayText: "Grand Tetons, WY",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/portfolio-401812.appspot.com/o/about-me-images%2Fuintas-hike.jpg?alt=media&token=771f4d72-6777-4081-8895-d2512cd3ca38",
      alt: "Unitas",
      overlayText: "High Uintas, WY",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/portfolio-401812.appspot.com/o/about-me-images%2Fb-and-n-at-beach.jpeg?alt=media&token=0d2ddf3b-837f-4f31-b769-6c9d4db53ddb",
      alt: "Pacific Coast Highway",
      overlayText: "Pacific Coast Highway",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/portfolio-401812.appspot.com/o/about-me-images%2Fedinburugh.jpeg?alt=media&token=4f41a4b7-f995-4d46-b51f-e53acb350364",
      alt: "Edinburugh",
      overlayText: "Edinburgh, Scotland",
    },
  ];

  return (
    <Layout>
      <>
        <div className="relative phone:min-h-fit tablet:min-h-screen">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/portfolio-401812.appspot.com/o/about-me-images%2Fcardiff-castle.jpeg?alt=media&token=6d19ac22-0d1d-4e04-8dba-a286c486d933"
            alt="cardiff-castle"
            className="phone:mt-20 tablet:mt-0"
          />
          <div className="absolute bg-primary/40 phone:w-52 phone:h-40 phone:right-2 phone:top-44 tablet:w-1/2 tablet:h-80 tablet:right-10 tablet:top-48 laptop:h-96 laptop:right-16 laptop:top-80">
            <div className="absolute bg-surface phone:p-2 phone:inset-2 tablet:p-10 tablet:inset-5">
              <h2 className="text-on-surface font-bold phone:text-md tablet:text-2xl laptop:text-4xl">
                Your{" "}
                <span className="text-secondary">Personalized Consultant</span>{" "}
                for Web Applications
              </h2>
              <p className="text-on-surface/50 phone:hidden tablet:block tablet:mt-2 tablet:mx-0 tablet:text-sm laptop:mt-6 laptop:mx-4 laptop:text-lg">
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
              className="relative opacity-0 w-1/3 h-screen phone:ml-14 tablet:ml-40 laptop:ml-0"
            >
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/portfolio-401812.appspot.com/o/about-me-images%2Fgrad-maeser.JPG?alt=media&token=386745e0-7124-4372-9b96-1de567c74e31"
                alt="Grad Maeser"
                className="h-min absolute shadow-stand-out border border-slate-600 inset-y-1/4 left-0 rounded-lg phone:w-40 tablet:w-72"
              />
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/portfolio-401812.appspot.com/o/about-me-images%2Fgrad-tanner.JPG?alt=media&token=c59a900d-9972-4ba5-93c1-e1dc7884f13e"
                alt="Grad Tanner"
                className="h-min absolute shadow-stand-out border border-slate-600 inset-y-1/3 rounded-lg phone:w-40 phone:left-32 tablet:w-72 tablet:left-60"
              />
            </div>
          </div>
          <div className="font-bold text-center phone:text-4xl phone:mx-6 tablet:text-6xl tablet:mx-0 tablet:w-11/12 laptop:w-3/4">
            Working for Enlite as their VP of Technology
          </div>
          <div
            ref={summerRef}
            className="opacity-0 tablet:flex tablet:justify-center"
          >
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/portfolio-401812.appspot.com/o/about-me-images%2Fsummer-sales-2021.JPG?alt=media&token=8176a746-5394-46a2-8976-c75e250a8c9d"
              alt="Summer Sales"
              className="h-auto rounded-lg shadow-stand-out border border-slate-600 phone:w-5/6 phone:inset-x-8 tablet:w-1/2"
            />
          </div>
          <div className="font-bold text-center pt-40 phone:text-4xl phone:mx-6 tablet:text-6xl tablet:mx-0 tablet:w-11/12 laptop:w-3/4">
            Building a Sales Portal for Enlite's sales department
          </div>
          <div
            ref={goEnliteRef}
            className="opacity-0 tablet:flex tablet:justify-center"
          >
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/portfolio-401812.appspot.com/o/about-me-images%2Fgo-enlite-leaderboard.PNG?alt=media&token=519ef15b-e89a-442b-984d-c89829951edc"
              alt="Go Enlite"
              className="h-auto rounded-lg shadow-stand-out border border-slate-600 phone:w-5/6 phone:inset-x-8 tablet:w-1/2"
            />
          </div>
          <div className="font-bold text-center pt-40 phone:text-4xl phone:mx-6 tablet:text-6xl tablet:mx-0 tablet:w-11/12 laptop:w-3/4">
            I love programming, but I also love adventures
          </div>
          <div className="phone:w-full tablet:w-3/4">
            <CarouselView images={images} />
          </div>
        </div>
        <ContactForm />
      </>
    </Layout>
  );
}
