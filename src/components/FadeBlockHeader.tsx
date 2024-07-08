import React, { useRef } from "react";
import useScrollObserver from "../hooks/use-scroll-observer";

interface HeaderProps {
  color?: string;
  children: string;
  className?: string;
}

export default function FadeBlockHeader({
  color,
  children,
  className,
}: HeaderProps): JSX.Element {
  const blockRef = useRef<HTMLDivElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);

  useScrollObserver(blockRef, { animationClass: "animate-block" });
  useScrollObserver(headerRef, { animationClass: "animate-fade-in" });

  return (
    <div className={`flex ${className}`}>
      <div className="relative">
        <div ref={blockRef} className={`absolute h-full bg-${color}`}></div>
        <h1
          ref={headerRef}
          className={`opacity-0 text-${color} font-bold phone:text-3xl tablet:text-7xl`}
        >
          {children}
        </h1>
      </div>
    </div>
  );
}
