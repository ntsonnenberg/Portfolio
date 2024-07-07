import { graphql, useStaticQuery } from "gatsby";
import React from "react";

type Props = {
  video: string;
  className?: string;
};

export default function VideoPlayer({ video, className }: Props): JSX.Element {
  type QueryData = {
    allFile: {
      nodes: Array<{ relativePath: string; publicURL: string }>;
    };
  };

  const data: QueryData = useStaticQuery(graphql`
    query {
      allFile(filter: { extension: { eq: "mp4" } }) {
        nodes {
          relativePath
          publicURL
        }
      }
    }
  `);

  const videoFile = data.allFile.nodes.find((node) =>
    node.relativePath.includes(video)
  );

  if (!videoFile) {
    return <div>Video not found.</div>;
  }

  return (
    <video
      width="100%"
      height="auto"
      autoPlay
      muted
      loop
      playsInline
      className={className}
    >
      <source src={videoFile.publicURL} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
