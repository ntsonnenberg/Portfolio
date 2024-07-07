import React, { useRef } from "react";
import StepCard from "./StepCard";
import FadeBlockHeader from "./FadeBlockHeader";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiArrowRight } from "react-icons/fi";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function Steps(): JSX.Element {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.from("#step-card", {
        scrollTrigger: "#step-card",
        scale: 0,
        duration: 1,
        ease: "power2.inOut",
        delay: 1,
        stagger: { each: 0.5 },
      });

      gsap.from("#arrow", {
        scrollTrigger: "#step-card",
        duration: 1,
        y: 20,
        opacity: 0,
        ease: "power2.inOut",
      });
    },
    { scope: containerRef }
  );

  return (
    <div className="flex flex-col text-center items-center py-52 phone:px-1 phone:mx-6 tablet:mx-0 tablet:px-6">
      <div className="pb-20">
        <FadeBlockHeader color="on-background">How it works</FadeBlockHeader>
      </div>
      <h3 className="tablet:w-1/2 phone:w-11/12">
        <span className="text-secondary font-extrabold">
          My proven methodology ensures a structured and efficient approach
        </span>{" "}
        to building high-quality software tailored to your needs.
      </h3>
      <div
        ref={containerRef}
        className="relative my-28 flex laptop:flex-row phone:flex-col items-center gap-5"
      >
        <StepCard id="step-card" step={1} title="Discovery">
          Identify goals and scope precisely and succinctly.
        </StepCard>
        <FiArrowRight
          id="arrow"
          className="w-10 h-10 phone:rotate-90 laptop:rotate-0"
        />
        <StepCard id="step-card" step={2} title="Prototyping">
          Craft a rapid and clear prototype that aligns with your brand.
        </StepCard>
        <FiArrowRight
          id="arrow"
          className="w-10 h-10 phone:rotate-90 laptop:rotate-0"
        />
        <StepCard id="step-card" step={3} title="Implementation">
          Execute the blueprint with precise and agile coding.
        </StepCard>
        <FiArrowRight
          id="arrow"
          className="w-10 h-10 phone:rotate-90 laptop:rotate-0"
        />
        <StepCard id="step-card" step={4} title="Acceptance">
          Consistently evaluate the deliverables for client validation.
        </StepCard>
      </div>
    </div>
  );
}
