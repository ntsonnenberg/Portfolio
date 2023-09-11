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
      className={`bg-[#969696] text-white w-60 h-auto p-3 rounded-xl ${className}`}
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
