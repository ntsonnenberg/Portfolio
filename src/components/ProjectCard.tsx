import React from "react";
import { FiArrowRight } from "react-icons/fi";

type Props = {
  image: string;
  title: string;
};

export default function ProjectCard({ image, title }: Props): JSX.Element {
  return (
    <div className="w-80 h-96 border border-background/50 rounded-xl overflow-hidden cursor-pointer hover:bg-gray-300">
      <img src={image} className="object-cover w-full h-3/5 hover:object-top" />
      <div className="m-6 flex flex-col gap-5">
        <h1 className="text-2xl font-bold">{title}</h1>
        <a
          href="https://goenlite.com"
          className="flex flex-row gap-4 text-on-surface stroke-on-surface"
        >
          Check it out <FiArrowRight className="h-6 w-6" />
        </a>
      </div>
    </div>
  );
}
