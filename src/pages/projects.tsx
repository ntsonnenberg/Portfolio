import Layout from "../components/Layout";
import ProjectCard from "../components/ProjectCard";
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
      <div className="py-60">
        <h1 className="phone:text-3xl tablet:text-5xl text-center mb-20 phone:w-full tablet:w-2/3 laptop:w-1/2 mx-auto">
          Web App Ideas Brought to Life: Our Project Portfolio
        </h1>
        <div className="min-h-screen grid justify-items-center phone:grid-cols-1 phone:mx-6 tablet:grid-cols-2 tablet:gap-6 tablet:mx-12 laptop:mx-52 desktop:mx-60">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export function Head(): JSX.Element {
  return (
    <SEO
      title="Insipiring Web App Ideas | Bespoke Code Project Portfolio"
      description="Looking for web app ideas? Explore Bespoke Code's portfolio of custom web apps, mobile solutions, and AI integrations. Get inspired and see what we can build for your business!"
      pathname="/projects"
    />
  );
}
