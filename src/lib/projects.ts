import { graphql, useStaticQuery } from "gatsby";

export interface Project {
  id: string;
  title: string;
  link: string;
  image: string;
  heroImage: string;
  images: string[];
  catchPhrase: string;
  subtitle: string;
  description: string;
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
            heroImage
            images
            catchPhrase
            subtitle
            description
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
      heroImage: node.heroImage,
      images: node.images,
      catchPhrase: node.catchPhrase,
      subtitle: node.subtitle,
      description: node.description,
    })
  );

  return projects;
};
