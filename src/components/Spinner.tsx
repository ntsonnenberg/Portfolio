import React from "react";

type Props = {
  size: Number;
  color: string;
  className?: string;
};

export default function Spinner({
  size,
  color,
  className,
}: Props): JSX.Element {
  return (
    <div
      className={`inline-blcok h-${size} w-${size} animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] text-${color} ${className}`}
      role="status"
    >
      <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
        Loading...
      </span>
    </div>
  );
}
