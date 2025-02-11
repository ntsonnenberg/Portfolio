import React from "react";
import { SpotLightItem } from "./ui-layouts/spotlight-card";
import { Project } from "../lib/projects";
import Image from "./Image";
import { Link } from "gatsby";

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props): JSX.Element {
  const projectPageSlug = project.title.toLowerCase().replaceAll(" ", "-");

  return (
    <Link to={`/projects/${projectPageSlug}`}>
      <SpotLightItem className="w-80 h-96 border-2 border-slate-700 cursor-pointer shadow-stand-out transition-all ease-in-out duration-500 hover:scale-105">
        <Image
          src={project.images[0]}
          alt={project.title}
          className="object-cover w-full h-3/5 p-1 rounded-md"
        />
        <p className="p-6 text-2xl font-bold text-on-background">
          {project.title}
        </p>
      </SpotLightItem>
    </Link>
  );
}
