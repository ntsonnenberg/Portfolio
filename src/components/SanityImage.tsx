import React, { useMemo } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { ImageData } from "./Image";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

type Props = {
  imageId?: string;
  alt?: string;
  className?: string;
  loading?: "eager" | "lazy";
};

interface FileNode {
  node: {
    filename: string;
    _id: string;
    gatsbyImageData: ImageData;
  };
}

export default function SanityImage({
  imageId = "",
  alt,
  ...rest
}: Props): JSX.Element | null {
  const data = useStaticQuery(query);

  const match = useMemo(
    () =>
      data.allSanityImageAsset.edges.find(
        (fileNode: FileNode) => imageId === fileNode.node._id
      ),
    [data, imageId]
  );

  if (!match) {
    return null;
  }

  const {
    node: { gatsbyImageData },
  } = match;

  const image = getImage(gatsbyImageData);

  if (!image) {
    return (
      <img
        src={gatsbyImageData.images.fallback.src}
        alt={alt || `${imageId} image`}
        {...rest}
      />
    );
  }

  return (
    <GatsbyImage image={image} alt={alt || `${imageId} image`} {...rest} />
  );
}

const query = graphql`
  query getSanityImages {
    allSanityImageAsset {
      edges {
        node {
          _id
          filename
          gatsbyImageData
        }
      }
    }
  }
`;
