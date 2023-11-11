import { graphql, useStaticQuery } from "gatsby";
import React from "react";

type Props = {
  className?: string;
};

export default function VideoPlayer({ className }: Props): JSX.Element {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "coding-video.mp4" }) {
        publicURL
      }
    }
  `);

  return (
    <video width="100%" height="auto" autoPlay muted loop className={className}>
      <source src={data.file.publicURL} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
