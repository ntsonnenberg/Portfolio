import React, { useRef } from "react";
import useScrollObserver from "../hooks/use-scroll-observer";

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
    <p
      ref={headerRef}
      className={`py-4 text-${color} font-bold overflow-hidden whitespace-nowrap border-r-4 phone:text-2xl tablet:text-4xl laptop:text-7xl`}
    >
      {children}
    </p>
  );
}
