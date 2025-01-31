import React from "react";
import { HeroParallax } from "./aceternity-ui/hero-parallax";
import { getProjects } from "../lib/projects";

export function HeroParallaxView() {
  const projects = getProjects();

  return <HeroParallax projects={projects} />;
}
