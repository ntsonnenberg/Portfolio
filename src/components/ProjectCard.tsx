import React from "react";
import { SpotLightItem } from "./ui-layouts/spotlight-card";
import { Project } from "../lib/projects";
import Image from "./Image";

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props): JSX.Element {
  return (
    <a href={project.link} target="_blank">
      <SpotLightItem className="w-80 h-96 border-2 border-slate-700 cursor-pointer shadow-stand-out transition-all ease-in-out duration-500 hover:scale-105">
        <Image
          src={project.image}
          alt={project.title}
          className="object-cover w-full h-3/5 p-1 rounded-md"
        />
        <h2 className="p-6 text-2xl font-bold text-on-background">
          {project.title}
        </h2>
      </SpotLightItem>
    </a>
  );
}
