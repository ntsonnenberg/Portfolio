import React from "react";

export default function Connector(): JSX.Element {
  return (
    <div className="bg-red-500 h-6 w-40 z-50">
      <div className="flex flex-row bg-clip-border">
        <div className="bg-blue-300 h-1 w-20 rotate-45"></div>
      </div>
    </div>
  );
}
