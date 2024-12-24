import React from "react";
import Image from "./Image";

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
    <div className="bg-slate-950 border border-slate-700 w-72 h-auto p-4 rounded-md transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:drop-shadow-lg hover:bg-slate-800">
      <div className="flex flex-col">
        <div className="flex flex-row items-center gap-2 mb-4">
          <Image src={imageUrl} alt="logo" className="w-10 h-auto" />
          <h2>{title}</h2>
        </div>
        <p className="text-start text-xs mb-8 mx-4">{children}</p>
      </div>
    </div>
  );
}
