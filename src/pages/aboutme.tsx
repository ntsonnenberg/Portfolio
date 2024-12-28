import React, { useRef } from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import Button from "../components/Button";
import ContactForm from "../components/ContactForm";
import useScrollObserver from "../hooks/use-scroll-observer";
import scrollTo from "gatsby-plugin-smoothscroll";
import Image from "../components/Image";
import CarouselView from "../components/CarouselView";
import { TimelineView } from "../components/TimelineView";

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
      src: "https://firebasestorage.googleapis.com/v0/b/portfolio-401812.appspot.com/o/about-me-images%2Fedinburugh.jpeg?alt=media&token=4f41a4b7-f995-4d46-b51f-e53acb350364",
      alt: "Edinburugh",
      overlayText: "Edinburgh, Scotland",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/portfolio-401812.appspot.com/o/about-me-images%2Feiffel-tower.png?alt=media&token=fa3b965e-5cd6-4f4e-a1d7-cb83f3d3185d",
      alt: "Eiffel Tower",
      overlayText: "Paris, France",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/portfolio-401812.appspot.com/o/about-me-images%2Fnice-airbnb.png?alt=media&token=1e5f6858-3c4c-44bc-9375-5c3cd7d246d0",
      alt: "Nice, France",
      overlayText: "Nice, France",
    },
  ];

  return (
    <Layout>
      <>
        <div className="relative phone:min-h-fit tablet:min-h-screen">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/portfolio-401812.appspot.com/o/about-me-images%2Fcardiff-castle.jpeg?alt=media&token=6d19ac22-0d1d-4e04-8dba-a286c486d933"
            alt="Cardiff Castle in Wales on Study Abroad Trip"
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
          <TimelineView />

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
