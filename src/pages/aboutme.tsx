import React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import Button from "../components/Button";

export default function AboutMePage(): JSX.Element {
  return (
    <Layout>
      <>
        <div className="relative min-h-screen">
          <StaticImage
            src="../images/cardiff-castle.jpeg"
            alt="cardiff castle"
            placeholder="blurred"
          />
          <div className="absolute w-1/2 h-96 bg-primary/40 right-16 top-80">
            <div className="absolute bg-white inset-5 p-10">
              <h1 className="font-bold text-4xl">
                Your{" "}
                <span className="text-secondary">Personalized Consultant</span>{" "}
                for Web Applications
              </h1>
              <p className="mt-6 mx-4 text-lg">
                I'm Nathan Sonnenberg, here for your web development & IT
                consulting needs.
              </p>
              <Button
                secondary
                filled
                large
                className="p-2 absolute right-28 bottom-16 rounded-sm"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
        <div className="relative min-h-screen">
          <div className="absolute bottom-32 inset-x-60 font-bold text-3xl">
            My story begins when I first learned how to program in High School
          </div>
        </div>
      </>
    </Layout>
  );
}
