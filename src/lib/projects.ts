import { graphql, useStaticQuery } from "gatsby";

export interface Project {
  id: string;
  title: string;
  link?: string;
  image: string;
  heroImage: string;
  images: string[];
  catchPhrase: string;
  subtitle: string;
  description: string;
}

export const getProjects = (): Project[] => {
  const query = useStaticQuery(graphql`
    query {
      allProject {
        nodes {
          id
          title
          heroImage
        }
      }
    }
  `);

  const {
    allProject: { nodes: projects },
  } = query;

  return projects;
};
