import React from "react";
import { Boxes } from "./aceternity-ui/background-boxes";
import { Link } from "gatsby";

export default function BackgroundBoxesView() {
  return (
    <div className="h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      <h3 className="phone:text-3xl tablet:text-4xl laptop:text-6xl text-white relative z-20">
        Consulting with Code
      </h3>
      <p className="text-center mt-6 text-neutral-300 relative z-20 phone:w-5/6 tablet:w-2/3">
        Choose our web development agency for strategic solutions that drive
        growth and enhance user satisfaction. Our application deveelopment
        services ensure custom solutions that fit your unique business
        requirements. Learn about our competitive website design costs and
        discover how we maximize value for your investment.
      </p>
      <Link
        to="/contact"
        className="light filled px-4 py-2 self-center text-xl mt-10 z-20"
      >
        Get Started Now
      </Link>
    </div>
  );
}
