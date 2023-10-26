import React from "react";

export default function BouncingArrow(): JSX.Element {
  return (
    <div className="animate-bounce">
      <svg
        width="24"
        height="24"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 5v14M5 12l7 7 7-7"></path>
      </svg>
    </div>
  );
}
