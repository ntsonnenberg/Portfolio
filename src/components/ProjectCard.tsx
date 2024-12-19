import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { SpotLightItem } from "./ui-layouts/spotlight-card";

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
    <a href={link} target="_blank">
      <SpotLightItem className="w-80 h-96 border-2 border-slate-700 cursor-pointer shadow-stand-out transition-all ease-in-out delay-150 duration-500 hover:scale-110">
        <img src={image} className="object-cover w-full h-3/5 p-1 rounded-md" />
        <h1 className="p-6 text-2xl font-bold text-on-background">{title}</h1>
      </SpotLightItem>
    </a>
  );
}
