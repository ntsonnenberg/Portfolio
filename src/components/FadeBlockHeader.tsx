import React, { useRef } from "react";
import useScrollObserver from "../hooks/use-scroll-observer";
import { motion } from "framer-motion";

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
  // const blockRef = useRef<HTMLDivElement | null>(null);
  // const headerRef = useRef<HTMLDivElement | null>(null);

  // useScrollObserver(blockRef, { animationClass: "animate-block" });
  // useScrollObserver(headerRef, { animationClass: "animate-fade-in" });

  const variants = {
    block: {
      initial: { width: "0%", left: 0 },
      animate: {
        width: ["0%", "100%", "0%"],
        left: [0, 0, "100%"],
        transition: {
          duration: 2,
          ease: "easeInOut",
          time: [0, 0.5, 1],
        },
      },
    },
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.5,
        delay: 1.6,
        ease: "linear",
      },
    },
  };

  return (
    <div className={`flex ${className}`}>
      <div className="relative">
        <motion.div
          // ref={blockRef}
          variants={variants.block}
          initial="initial"
          whileInView="animate"
          className={`absolute h-full bg-${color}`}
        ></motion.div>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          variants={variants}
          // ref={headerRef}
          className={`opacity-0 text-${color} font-bold phone:text-3xl tablet:text-5xl laptop:text-7xl`}
        >
          {children}
        </motion.h2>
      </div>
    </div>
  );
}
