import React from "react";

interface Props {
  children: string;
  title: string;
  id: string;
  step: number;
}

export default function StepCard({
  title,
  step,
  id,
  children,
}: Props): JSX.Element {
  return (
    <div
      id={id}
      className="bg-slate-950 border border-slate-700 text-on-background w-60 h-auto p-3 rounded-xl"
    >
      <div className="flex flex-col">
        <div className="flex flex-row">
          <div className="bg-white text-black text-xl font-extrabold mr-2 px-3 pt-0.5 rounded-md">
            {step}
          </div>
          <h1 className="text-xl font-extrabold">{title}</h1>
        </div>
        <p className="text-start my-4">{children}</p>
      </div>
    </div>
  );
}
