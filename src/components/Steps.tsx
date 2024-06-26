import React from "react";
import StepCard from "./StepCard";
import Connector from "./Connector";
import Header from "./Header";

export default function Steps(): JSX.Element {
  return (
    <div className="flex flex-col text-center items-center py-52 phone:px-1 phone:mx-6 tablet:mx-0 tablet:px-6">
      <div className="pb-20">
        <Header color="background">How it works</Header>
      </div>
      <h3 className="tablet:w-1/2 phone:w-11/12">
        <span className="text-secondary font-extrabold">
          My proven methodology ensures a structured and efficient approach
        </span>{" "}
        to building high-quality software tailored to your needs.
      </h3>
      <div className="relative my-28 flex laptop:flex-row phone:flex-col gap-5 -z-10">
        <StepCard step={1} title="Discovery">
          Identify goals and scope precisely and succinctly.
        </StepCard>
        <StepCard step={2} title="Prototyping">
          Craft a rapid and clear prototype that aligns with your brand.
        </StepCard>
        <StepCard step={3} title="Implementation">
          Execute the blueprint with precise and agile coding.
        </StepCard>
        <StepCard step={4} title="Acceptance">
          Consistently evaluate the deliverables for client validation.
        </StepCard>
        <Connector />
      </div>
    </div>
  );
}
