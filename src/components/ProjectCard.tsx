import React from "react";
import { FiArrowRight } from "react-icons/fi";

type Props = {
  image: string;
  title: string;
  link: string;
};

export default function ProjectCard({
  image,
  title,
  link,
}: Props): JSX.Element {
  return (
    <a
      href={link}
      target="_blank"
      className="w-80 h-96 group/card border border-background/50 rounded-md overflow-hidden cursor-pointer hover:bg-neutral-100"
    >
      <img
        src={image}
        className="object-cover w-full h-3/5 transition-all ease-in-out delay-150 duration-500 group-hover/card:object-top group-hover/card:h-2/3"
      />
      <div className="m-6 flex flex-col gap-5">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="flex flex-row gap-4 text-on-surface stroke-on-surface transitione ease-in-out delay-150 duration-500 group/link hover:font-bold">
          Check it out{" "}
          <FiArrowRight className="h-6 w-6 transition ease-in-out delay-150 duration-500 group-hover/link:translate-x-20" />
        </p>
      </div>
    </a>
  );
}
