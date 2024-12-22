import { graphql, useStaticQuery } from "gatsby";

export interface Project {
  id: string;
  title: string;
  link: string;
  image: string;
}

export const getProjects = () => {
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

  return projects;
};
