import { useStaticQuery, graphql } from "gatsby";

export interface Category {
  id: string;
  title: string;
  description?: string;
}

export const getCategories = () => {
  const query = useStaticQuery(graphql`
    query {
      allSanityCategory {
        edges {
          node {
            id
            title
            description
          }
        }
      }
    }
  `);

  const { allSanityCategory } = query;

  const categories: Category[] = allSanityCategory.edges.map(
    ({ node }: { node: Category }) => ({
      id: node.id,
      title: node.title,
      description: node.description,
    })
  );

  return categories;
};
