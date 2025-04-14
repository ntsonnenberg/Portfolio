import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "./aceternity-ui/aurora-background";
import { Link } from "gatsby";

export default function AuroraBackgroundView() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
          Custom Web Apps Tailored to Local Business
        </div>
        <p className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4 w-2/3 self-center">
          Our custom software development services include cost analysis,
          architecture design, agile development, and ongoing maintenance. We
          specialize in creating scalable solutions for local businesses in
          Utah.
        </p>
        <Link to="/contact" className="light outlined w-fit px-4 py-2">
          Book Consultation
        </Link>
      </motion.div>
    </AuroraBackground>
  );
}
