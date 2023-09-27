import React from "react";

interface Props {
  source: string;
  className?: string;
}

export default function Image({ source, className }: Props): JSX.Element {
  return <img src={source} alt="" className={className} />;
}
