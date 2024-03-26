import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import ProjectCard from "../components/ProjectCard";
import { getProjects, Project } from "../api/Projects";
import Skeleton from "../components/Skeleton";

export default function ProjectsPage(): JSX.Element {
  const [projects, setProjects] = useState<Project[] | null>(null);

  useEffect(() => {
    getProjects().then((projects) =>
      setProjects(
        projects.sort((a, b) => {
          if (a.title === "Go Enlite") return -1;
          if (b.title === "Go Enlite") return 1;
          return 0;
        })
      )
    );
  }, []);

  if (!projects) {
    return (
      <Layout>
        <div className="py-60 min-h-screen grid justify-items-center phone:grid-col-1 phone:gap-12 tablet:grid-cols-2 tablet:gap-12 tablet:mx-12 laptop:grid-cols-3 laptop:gap-16 laptop:mx-52 desktop:mx-60">
          {Array(6)
            .fill(0)
            .map((_, i) => (
              <Skeleton key={i} className="w-80 h-96" />
            ))}
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="py-60 min-h-screen grid justify-items-center phone:grid-col-1 phone:gap-12 tablet:grid-cols-2 tablet:gap-12 tablet:mx-12 laptop:grid-cols-3 laptop:gap-16 laptop:mx-52 desktop:mx-60">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            link={project.link}
            image={project.image}
          />
        ))}
      </div>
    </Layout>
  );
}
