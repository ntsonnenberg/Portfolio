import React, { useMemo } from "react";
import { graphql, useStaticQuery } from "gatsby";

type Props = {
  video: string;
  className?: string;
};

interface FileNode {
  file: {
    publicURL: string;
  };
  id: string;
  videoUrl: string;
}

export default function VideoPlayer({
  video,
  className,
}: Props): JSX.Element | null {
  const data = useStaticQuery(query);

  // TODO: Change query to only pull one image based on video prop
  const match = useMemo(
    () =>
      data.allFirebaseVideo.nodes.find(
        (fileNode: FileNode) => video === fileNode.videoUrl
      ),
    [data, video]
  );

  if (!match) {
    return null;
  }

  const {
    file: { publicURL },
  } = match;

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
      <source src={publicURL} />
      Your browser does not support the video tag.
    </video>
  );
}

const query = graphql`
  query getVideoFiles {
    allFirebaseVideo {
      nodes {
        id
        videoUrl
        file {
          publicURL
        }
      }
    }
  }
`;
