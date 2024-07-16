import React from "react";

type Props = {
  video: string;
  className?: string;
};

export default function VideoPlayer({ video, className }: Props): JSX.Element {
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
      <source src={video} />
      Your browser does not support the video tag.
    </video>
  );
}
