import React, { useMemo } from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";

type Props = {
  src: string;
  alt: string;
  placeholder?: string;
  className?: string;
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
    file: { childImageSharp, publicUrl },
  } = match;

  if (!childImageSharp) {
    return <img src={publicUrl} {...rest} />;
  }

  const image = getImage(childImageSharp.gatsbyImageData);

  if (
    src ===
    "https://firebasestorage.googleapis.com/v0/b/portfolio-401812.appspot.com/o/about-me-images%2Fgrad-maeser.JPG?alt=media&token=386745e0-7124-4372-9b96-1de567c74e31"
  ) {
    console.log(image);
  }

  if (!image) {
    return null;
  }

  return <GatsbyImage image={image} {...rest} />;
}

const query = graphql`
  query {
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
