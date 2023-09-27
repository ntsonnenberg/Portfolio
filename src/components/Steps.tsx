import * as React from "react";
import StepCard from "./StepCard";
import Connector from "./Connector";

export default function Steps(): JSX.Element {
  return (
    <div className="flex flex-col text-center items-center py-52 phone:px-1 tablet:px-6">
      <h1 className="mb-20 font-bold phone:text-6xl tablet:text-7xl">
        How it works
      </h1>
      <h3 className="tablet:w-1/2 phone:w-11/12">
        <span className="text-secondary font-extrabold">
          Lorem Ipsum is simply dummy text
        </span>{" "}
        of the printing and typesetting industry. Lorem Ipsum has been the
        industry's
      </h3>
      <div className="relative my-28 flex laptop:flex-row phone:flex-col gap-5 -z-10">
        <StepCard step={1} title="Discovery">
          Lorem Ipsum dolor sit amet, consectetur adipiscing elit.
        </StepCard>
        <StepCard step={2} title="Prototyping">
          Lorem Ipsum dolor sit amet, consectetur adipiscing elit.
        </StepCard>
        <StepCard step={3} title="Implementation">
          Lorem Ipsum dolor sit amet, consectetur adipiscing elit.
        </StepCard>
        <StepCard step={4} title="Acceptance">
          Lorem Ipsum dolor sit amet, consectetur adipiscing elit.
        </StepCard>
        <Connector />
      </div>
    </div>
  );
}
