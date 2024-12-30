import React, { useMemo } from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";

type Props = {
  src: string;
  alt: string;
  className?: string;
  loading?: "eager" | "lazy";
};

interface ImageData {
  backgroundColor: string;
  height: number;
  images: any;
  layout: string;
  width: string;
}
interface FileNode {
  file: {
    childImageSharp: null | {
      gatsbyImageData: ImageData;
    };
    publicURL: string;
  };
  id: string;
  imageUrl: string;
}

export default function Image({ src, ...rest }: Props): JSX.Element | null {
  const data = useStaticQuery(query);

  // TODO: Change query to only pull one image based on src prop
  const match = useMemo(
    () =>
      data.allFirebaseImage.nodes.find(
        (fileNode: FileNode) => src === fileNode.imageUrl
      ),
    [data, src]
  );

  if (!match) {
    return null;
  }

  const {
    file: { childImageSharp, publicURL },
  } = match;

  if (!childImageSharp) {
    return <img src={publicURL} {...rest} />;
  }

  const image = getImage(childImageSharp.gatsbyImageData);

  if (!image) {
    return null;
  }

  return <GatsbyImage image={image} {...rest} />;
}

const query = graphql`
  query getImageFiles {
    allFirebaseImage {
      nodes {
        id
        imageUrl
        file {
          publicURL
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
      }
    }
  }
`;
