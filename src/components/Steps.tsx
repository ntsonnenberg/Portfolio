import React from "react";
import StepCard from "./StepCard";
import FadeBlockHeader from "./FadeBlockHeader";

export default function Steps(): JSX.Element {
  return (
    <div className="flex flex-col text-center items-center py-40 phone:px-1 phone:mx-6 tablet:mx-0 tablet:px-6">
      <div className="pb-20">
        <FadeBlockHeader color="on-background">How it works</FadeBlockHeader>
      </div>
      <p className="tablet:w-1/2 phone:w-11/12">
        <span className="text-secondary font-extrabold">
          Our proven methodology ensures a structured and efficient approach
        </span>{" "}
        to building high-quality software tailored to your needs.
      </p>
      <div className="relative my-28 flex laptop:flex-row phone:flex-col items-center gap-5">
        <StepCard step={1} title="Discovery" className="grow">
          Identify goals and scope to understand value proposition.
        </StepCard>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10 phone:rotate-90 laptop:rotate-0"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
          />
        </svg>
        <StepCard step={2} title="Prototyping">
          Craft a rapid and clear prototype that aligns with your brand.
        </StepCard>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10 phone:rotate-90 laptop:rotate-0"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
          />
        </svg>{" "}
        <StepCard step={3} title="Implementation">
          Execute the blueprint with precise and agile coding with a clean
          architecture.
        </StepCard>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10 phone:rotate-90 laptop:rotate-0"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
          />
        </svg>{" "}
        <StepCard step={4} title="Acceptance">
          Consistently evaluate the deliverables for client validation.
        </StepCard>
      </div>
    </div>
  );
}
