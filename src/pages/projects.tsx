import Layout from "../components/Layout";
import ProjectCard from "../components/ProjectCard";
import { Spotlight } from "../components/ui-layouts/spotlight-card";
import { getProjects } from "../lib/projects";
import React from "react";
import SEO from "../components/Seo";

export default function ProjectsPage(): JSX.Element {
  const projects = getProjects();

  if (!projects) {
    return (
      <Layout>
        <h2 className="p-40 min-h-screen text-2xl font-bold">
          No Projects Available
        </h2>
      </Layout>
    );
  }

  return (
    <Layout>
      <Spotlight className="py-60 min-h-screen grid justify-items-center phone:grid-col-1 phone:gap-12 tablet:grid-cols-2 tablet:gap-12 tablet:mx-12 laptop:grid-cols-3 laptop:gap-16 laptop:mx-52 desktop:mx-60">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </Spotlight>
    </Layout>
  );
}

export function Head(): JSX.Element {
  return (
    <SEO
      title="Projects We Have Built"
      description="Explore the diverse projects and applications we have built in the past."
      pathname="/projects"
    />
  );
}
