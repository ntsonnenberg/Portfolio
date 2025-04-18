import { graphql, useStaticQuery } from "gatsby";
import { Category } from "./categories";
import { SanityImage } from "./images";

export interface Post {
  id: string;
  title: string;
  subtitle: string;
  slug: {
    current: string;
    source: string | null;
  };
  tags: {
    label: string;
    value: string;
  }[];
  categories: Category[];
  author: {
    id: string;
    name: string;
    image: SanityImage | null;
  };
  _rawBody: {
    _key: string;
    _type: string;
    asset?: {
      _ref: string;
      _type: string;
    };
    children?: {
      _key: string;
      _type: string;
      text: string;
    }[];
    style?: string;
  }[];
  mainImage: SanityImage | null;
  publishedAt: Date;
}

export const getPosts = (): Post[] => {
  const query = useStaticQuery(graphql`
    query {
      allSanityPost {
        nodes {
          id
          title
          slug {
            current
          }
          tags {
            label
            value
          }
          categories {
            id
          }
          author {
            id
            name
          }
          mainImage {
            asset {
              id
              altText
              url
            }
          }
        }
      }
    }
  `);

  const {
    allSanityPost: { nodes: posts },
  } = query;

  return posts;
};
