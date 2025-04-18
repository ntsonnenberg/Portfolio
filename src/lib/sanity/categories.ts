import { useStaticQuery, graphql } from "gatsby";

export interface Category {
  id: string;
  title: string;
  description?: string;
}

export const getCategories = (): Category[] => {
  const query = useStaticQuery(graphql`
    query {
      allSanityCategory {
        nodes {
          id
          title
        }
      }
    }
  `);

  const {
    allSanityCategory: { nodes: categories },
  } = query;

  return categories;
};
