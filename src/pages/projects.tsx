import React, { useRef } from "react";
import Layout from "../components/Layout";
import ProjectCard from "../components/ProjectCard";
import { graphql, useStaticQuery } from "gatsby";
import {
  Spotlight,
  SpotLightItem,
} from "../components/ui-layouts/spotlight-card";

export interface Project {
  id: string;
  title: string;
  link: string;
  image: string;
}

export default function ProjectsPage(): JSX.Element {
  const containerRef = useRef(null);

  const projectNodes = useStaticQuery(graphql`
    query {
      allProject {
        edges {
          node {
            id
            title
            link
            image
          }
        }
      }
    }
  `);

  const projects: Project[] = projectNodes.allProject.edges.map(
    ({ node }: { node: Project }) => ({
      id: node.id,
      title: node.title,
      link: node.link,
      image: node.image,
    })
  );

  if (!projects) {
    return (
      <Layout>
        <h1 className="p-40 min-h-screen text-2xl font-bold">
          No Projects Available
        </h1>
      </Layout>
    );
  }

  return (
    <Layout>
      <Spotlight className="py-60 min-h-screen grid justify-items-center phone:grid-col-1 phone:gap-12 tablet:grid-cols-2 tablet:gap-12 tablet:mx-12 laptop:grid-cols-3 laptop:gap-16 laptop:mx-52 desktop:mx-60">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            link={project.link}
            image={project.image}
          />
        ))}
      </Spotlight>
    </Layout>
  );
}
