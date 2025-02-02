import React from "react";
import Layout from "../components/Layout";
import ContactForm from "../components/ContactForm";
import scrollTo from "gatsby-plugin-smoothscroll";
import Image from "../components/Image";
import { TimelineView } from "../components/TimelineView";
import MasonaryGrid from "../components/ui-layouts/masonary-grid";
import SEO from "../components/Seo";

export default function AboutMePage(): JSX.Element {
  const items = [
    {
      id: 1,
      url: "https://firebasestorage.googleapis.com/v0/b/portfolio-401812.appspot.com/o/about-me-images%2Frome.jpeg?alt=media&token=664cf711-50a0-4b61-9443-e8e3e652486e",
      title: "Rome, Italy",
    },
    {
      id: 2,
      url: "https://firebasestorage.googleapis.com/v0/b/portfolio-401812.appspot.com/o/about-me-images%2Fscotland-castle.jpeg?alt=media&token=2fb63ae3-3575-4877-9146-0a3f08205617",
      title: "Edinburgh Castle",
    },
    {
      id: 3,
      url: "https://firebasestorage.googleapis.com/v0/b/portfolio-401812.appspot.com/o/about-me-images%2Finterlaken.jpeg?alt=media&token=b3179522-772f-4af9-97e4-8ea930b1ef9d",
      title: "Interlaken, Switzerland",
    },
    {
      id: 4,
      url: "https://firebasestorage.googleapis.com/v0/b/portfolio-401812.appspot.com/o/about-me-images%2Fgrand-tetons.JPEG?alt=media&token=20b8484f-31da-4837-a6c3-4489353b57ca",
      title: "Grand Tetons, WY",
    },
    {
      id: 10,
      url: "https://firebasestorage.googleapis.com/v0/b/portfolio-401812.appspot.com/o/about-me-images%2Fantibes-billionares-bay.JPEG?alt=media&token=201ad3be-bdad-44dc-ad1e-4543d7bc3f5d",
      title: "Antibes, France",
    },
    {
      id: 5,
      url: "https://firebasestorage.googleapis.com/v0/b/portfolio-401812.appspot.com/o/about-me-images%2Fuintas-hike.jpg?alt=media&token=771f4d72-6777-4081-8895-d2512cd3ca38",
      title: "High Uintas, WY",
    },
    {
      id: 6,
      url: "https://firebasestorage.googleapis.com/v0/b/portfolio-401812.appspot.com/o/about-me-images%2Fedinburugh.jpeg?alt=media&token=4f41a4b7-f995-4d46-b51f-e53acb350364",
      title: "Edinburgh, Scotland",
    },
    {
      id: 7,
      url: "https://firebasestorage.googleapis.com/v0/b/portfolio-401812.appspot.com/o/about-me-images%2Feiffel-tower.png?alt=media&token=fa3b965e-5cd6-4f4e-a1d7-cb83f3d3185d",
      title: "Paris, France",
    },
    {
      id: 11,
      url: "https://firebasestorage.googleapis.com/v0/b/portfolio-401812.appspot.com/o/about-me-images%2Fclose-eiffel-tower.png?alt=media&token=0dfc5c6b-c5f4-4200-9f11-a4bbe2debb9e",
      title: "Eiffel Tower",
    },
    {
      id: 8,
      url: "https://firebasestorage.googleapis.com/v0/b/portfolio-401812.appspot.com/o/about-me-images%2Fnice-airbnb.png?alt=media&token=1e5f6858-3c4c-44bc-9375-5c3cd7d246d0",
      title: "Nice, France",
    },
    {
      id: 9,
      url: "https://firebasestorage.googleapis.com/v0/b/portfolio-401812.appspot.com/o/about-me-images%2Fversailles.JPEG?alt=media&token=650d5487-101d-44d4-9158-a365cdd225cc",
      title: "Palace of Versaillies",
    },
    {
      id: 12,
      url: "https://firebasestorage.googleapis.com/v0/b/portfolio-401812.appspot.com/o/about-me-images%2Fcolosseum.png?alt=media&token=5903793c-5de3-49a3-9dcf-bce4fa42a8a2",
      title: "The Colosseum",
    },
    {
      id: 13,
      url: "https://firebasestorage.googleapis.com/v0/b/portfolio-401812.appspot.com/o/about-me-images%2Flondon.png?alt=media&token=e2539c4a-5f49-41cc-87b3-53c2023735ed",
      title: "London, England",
    },
    {
      id: 14,
      url: "https://firebasestorage.googleapis.com/v0/b/portfolio-401812.appspot.com/o/about-me-images%2Fcliffs-of-dover.png?alt=media&token=0757007c-2c50-4f58-952c-9b04e1d89d0a",
      title: "Cliffs of Dover",
    },
    {
      id: 15,
      url: "https://firebasestorage.googleapis.com/v0/b/portfolio-401812.appspot.com/o/about-me-images%2Fstonehenge.png?alt=media&token=1f30a74e-28ed-4c46-ae70-b964cd54dbfd",
      title: "Stonehenge",
    },
    {
      id: 16,
      url: "https://firebasestorage.googleapis.com/v0/b/portfolio-401812.appspot.com/o/about-me-images%2FLauterbrunnen.png?alt=media&token=b848b53c-3771-42e6-a5a7-bfce8712c4e0",
      title: "Lauterbrunnen, Switzerland",
    },
    {
      id: 17,
      url: "https://firebasestorage.googleapis.com/v0/b/portfolio-401812.appspot.com/o/about-me-images%2Fmilan-italy.png?alt=media&token=f567ba01-c19d-4adf-90c0-e2134bc67440",
      title: "Milan, Italy",
    },
    {
      id: 18,
      url: "https://firebasestorage.googleapis.com/v0/b/portfolio-401812.appspot.com/o/about-me-images%2Fpiza-italy.png?alt=media&token=627e909a-5d65-4682-8c12-cf5c8e6f57f9",
      title: "Piza, Italy",
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
              <button
                className="primary filled absolute rounded-sm phone:p-1 phone:text-sm phone:right-4 phone:bottom-4 tablet:p-2 tablet:right-10 tablet:bottom-6 laptop:right-28 laptop:bottom-16 laptop:text-lg"
                onClick={() => scrollTo("#my-story")}
              >
                Learn More
              </button>
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
          <div className="phone:mx-0 tablet:mx-4 laptop:mx-10">
            <MasonaryGrid items={items} />
          </div>
        </div>
        <ContactForm />
      </>
    </Layout>
  );
}

export function Head(): JSX.Element {
  return (
    <SEO
      title="Learn About Nathan Sonnenberg"
      description="Get to know me more and my experience with building application."
      pathname="/aboutme"
    />
  );
}
