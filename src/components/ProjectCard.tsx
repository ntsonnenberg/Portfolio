import React from "react";
import { Project } from "../lib/projects";
import Image from "./Image";
import { Link } from "gatsby";

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props): JSX.Element {
  const projectPageSlug = project.title.toLowerCase().replaceAll(" ", "-");

  return (
    <Link to={`/projects/${projectPageSlug}`} className="relative">
      <Image
        src={project.heroImage}
        alt={project.title}
        className="object-cover w-full h-5/6 rounded-md shadow-stand-out"
      />
      <p className="absolute top-0 left-0 m-1.5 py-1 px-2 text-lg bg-background rounded-sm">
        {project.title}
      </p>
    </Link>
  );
}
