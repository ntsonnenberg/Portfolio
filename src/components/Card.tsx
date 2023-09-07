import React from "react";

interface Props {
  children: string;
  imageUrl: string;
  title: string;
}

export default function Card({
  imageUrl,
  title,
  children,
}: Props): JSX.Element {
  return (
    <div className="bg-primary w-72 h-auto p-4 rounded-md">
      <div className="flex flex-col">
        <div className="flex flex-row items-center gap-2 mb-4">
          <img src={imageUrl} alt="gmail logo" className="w-10 h-10" />
          <h2>{title}</h2>
        </div>
        <p className="text-start text-xs mb-8 mx-4">{children}</p>
      </div>
    </div>
  );
}
