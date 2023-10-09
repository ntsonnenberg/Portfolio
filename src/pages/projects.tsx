import React from "react";
import Layout from "../components/Layout";
import ProjectCard from "../components/ProjectCard";

export default function ProjectsPage(): JSX.Element {
  return (
    <Layout>
      <div className="my-60 min-h-screen grid justify-items-center phone:grid-col-1 phone:gap-12 tablet:grid-cols-2 tablet:gap-12 tablet:mx-12 laptop:grid-cols-3 laptop:gap-16 laptop:mx-52 desktop:mx-60">
        <ProjectCard
          image="/go-enlite-landing.svg"
          title="Go Enlite"
          link="https://goenlite.com"
        />
        <ProjectCard
          image="/go-enlite-landing.svg"
          title="Go Enlite"
          link="https://goenlite.com"
        />
        <ProjectCard
          image="/go-enlite-landing.svg"
          title="Go Enlite"
          link="https://goenlite.com"
        />
        <ProjectCard
          image="/go-enlite-landing.svg"
          title="Go Enlite"
          link="https://goenlite.com"
        />
        <ProjectCard
          image="/go-enlite-landing.svg"
          title="Go Enlite"
          link="https://goenlite.com"
        />
      </div>
    </Layout>
  );
}
