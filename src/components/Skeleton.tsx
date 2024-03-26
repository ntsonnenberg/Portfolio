import React from "react";
import classNames from "classnames";

interface SkeletonProps {
  className: string;
}

export default function ({ className }: SkeletonProps): JSX.Element {
  const outerClassNames = classNames(
    "relative overflow-hidden bg-neutral-300 rounded mb-2.5",
    className
  );
  const innerClassNames = classNames(
    "animate-shimmer absolute inset-0 -translate-x-full bg-gradient-to-r from-neutral-300 via-surface to-neutral-300"
  );

  return (
    <div className={outerClassNames}>
      <div className={innerClassNames} />
    </div>
  );
}
