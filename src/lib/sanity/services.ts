import { graphql, useStaticQuery } from "gatsby";
import { SanityImage } from "./images";

export interface Service {
  id: string;
  title: string;
  packageOffer: string;
  slug: {
    current: string;
    source: string | null;
  };
  description: string;
  image: SanityImage;
}

export const getServices = (): Service[] => {
  const query = useStaticQuery(graphql`
    query {
      allSanityService {
        nodes {
          id
          title
          packageOffer
          slug {
            source
            current
          }
          description
          image {
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
    allSanityService: { nodes: services },
  } = query;

  return services;
};
