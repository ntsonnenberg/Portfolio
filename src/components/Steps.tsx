import React from "react";
import StepCard from "./StepCard";
import FadeBlockHeader from "./FadeBlockHeader";

export default function Steps(): JSX.Element {
  return (
    <div className="flex flex-col text-center items-center py-40 phone:px-1 phone:mx-6 tablet:mx-0 tablet:px-6">
      <div className="pb-20">
        <FadeBlockHeader color="on-background">How We Operate</FadeBlockHeader>
      </div>
      <p className="tablet:w-1/2 phone:w-11/12">
        <span className="font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
          Our proven methodology ensures a structured and efficient approach
        </span>{" "}
        to building high-quality software tailored to your needs.
      </p>
      <div className="relative my-28 flex laptop:flex-row phone:flex-col items-center gap-5">
        <StepCard step={1} title="Discovery" className="grow">
          Identify goals and understand value proposition.
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
          Craft a rapid and clear prototype to deliver base value.
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
          Execute the blueprint with agile development.
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
          Consistently validate the deliverables.
        </StepCard>
      </div>
    </div>
  );
}
