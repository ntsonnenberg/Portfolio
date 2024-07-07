import React, { useRef } from "react";
import useScrollObserver from "../hooks/use-scroll-observer";
import classNames from "classnames";

interface HeaderProps {
  color?: string;
  children: string;
}

export default function FadeBlockHeader({
  color,
  children,
}: HeaderProps): JSX.Element {
  const headerRef = useRef<HTMLDivElement | null>(null);

  useScrollObserver(headerRef, { animationClass: "animate-typing" });

  return (
    <h1
      ref={headerRef}
      className={`py-4 text-${color} font-bold overflow-hidden whitespace-nowrap border-r-4 phone:text-5xl tablet:text-7xl`}
    >
      {children}
    </h1>
  );
}
