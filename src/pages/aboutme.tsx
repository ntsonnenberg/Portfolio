import React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import Button from "../components/Button";
import Carousel from "../components/Carousel";

export default function AboutMePage(): JSX.Element {
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
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
        <div className="relative min-h-screen">
          <Carousel />
          {/* <div className="absolute bottom-32 inset-x-60 font-bold text-3xl">
            My story begins when I first learned how to program in High School
          </div> */}
        </div>
      </>
    </Layout>
  );
}
