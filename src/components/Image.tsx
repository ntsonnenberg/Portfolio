import React, { useMemo } from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";

type Props = {
  src: string;
  alt: string;
  placeholder?: string;
  className?: string;
};

export default function Image({ src, ...rest }: Props): JSX.Element | null {
  const data = useStaticQuery(graphql`
    query {
      images: allFile(
        filter: { internal: { mediaType: { regex: "/image/" } } }
      ) {
        edges {
          node {
            relativePath
            extension
            publicURL
            childImageSharp {
              gatsbyImageData(
                width: 600
                placeholder: TRACED_SVG
                formats: [AUTO, WEBP]
              )
            }
          }
        }
      }
    }
  `);

  const match = useMemo(
    () =>
      data.images.edges.find(
        ({ node }: { node: { relativePath: string } }) =>
          src === node.relativePath
      ),
    [data, src]
  );

  if (!match) return null;

  const {
    node: { childImageSharp, publicURL, extension },
  } = match;

  if (extension === "svg" || !childImageSharp)
    return <img src={publicURL} {...rest} />;

  const image = getImage(childImageSharp.gatsbyImageData);

  if (!image) return null;

  return (
    <GatsbyImage style={{ position: "absolute" }} image={image} {...rest} />
  );
}
