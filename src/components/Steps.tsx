import * as React from "react";
import StepCard from "./StepCard";
import Connector from "./Connector";

export default function Steps(): JSX.Element {
  return (
    <div className="flex flex-col text-center items-center py-52 px-6">
      <h1 className="mb-20 text-7xl font-bold">How it works</h1>
      <h3 className="w-1/2">
        <span className="text-secondary font-extrabold">
          Lorem Ipsum is simply dummy text
        </span>
        of the printing and typesetting industry. Lorem Ipsum has been the
        industry's
      </h3>
      <div className="my-28 flex flex-row phone:flex-col items-center relative gap-5">
        <StepCard step={1} title="Discovery" className="z-10">
          Lorem Ipsum dolor sit amet, consectetur adipiscing elit.
        </StepCard>
        <StepCard step={2} title="Prototyping" className="z-10">
          Lorem Ipsum dolor sit amet, consectetur adipiscing elit.
        </StepCard>
        <StepCard step={3} title="Implementation" className="z-10">
          Lorem Ipsum dolor sit amet, consectetur adipiscing elit.
        </StepCard>
        <StepCard step={4} title="Acceptance" className="z-10">
          Lorem Ipsum dolor sit amet, consectetur adipiscing elit.
        </StepCard>
        <Connector />
      </div>
    </div>
  );
}
