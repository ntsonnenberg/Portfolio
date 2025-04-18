import React from "react";

interface Props {
  children: string;
  title: string;
  step: number;
  className?: string;
}

export default function StepCard({
  title,
  step,
  children,
  className,
}: Props): JSX.Element {
  return (
    <div
      className={`bg-slate-950 border border-slate-700 text-on-background w-60 h-auto p-3 rounded-xl ${className}`}
    >
      <div className="flex flex-col">
        <div className="flex flex-row">
          <div className="bg-white text-black text-xl font-extrabold mr-2 px-3 pt-0.5 rounded-md">
            {step}
          </div>
          <p className="text-xl font-extrabold">{title}</p>
        </div>
        <p className="text-start my-4">{children}</p>
      </div>
    </div>
  );
}
