import React from "react";
import Layout from "../../components/Layout";
import { graphql } from "gatsby";
import { Project } from "../../lib/projects";

interface Props {
  data: {
    project: Project;
  };
  children?: React.ReactNode;
}

export default function ProjectPage({ data: { project }, children }: Props) {
  return (
    <Layout>
      <p className="my-40">This is a project page for {project.title}</p>
    </Layout>
  );
}

export const query = graphql`
  query ($id: String) {
    project(id: { eq: $id }) {
      id
      title
      link
      image
    }
  }
`;
