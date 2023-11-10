import { graphql } from "gatsby";
import React from "react";

export default function VideoPlayer(): JSX.Element {
  return <div>Video Player</div>;
}

const pageQuery = graphql`
  {
    file(relativePath: { eq: "../assets/coding-video.mp4" }) {
      childVideoFfmpeg {
        mp4: transcode(
          maxWidth: 900
          maxHeight: 480
          fileExtension: "mp4"
          codec: "libx264"
        ) {
          width
          src
          presentationMaxWidth
          presentationMaxHeight
          originalName
          height
          fileExtension
          aspectRatio
        }
      }
    }
  }
`;
