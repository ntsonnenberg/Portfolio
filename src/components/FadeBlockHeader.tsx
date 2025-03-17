import React from "react";
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
          variants={variants.block}
          initial="initial"
          whileInView="animate"
          className={`absolute h-full bg-${color}`}
        ></motion.div>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          variants={variants}
          className={`opacity-0 text-${color} font-bold phone:text-3xl tablet:text-5xl laptop:text-7xl`}
        >
          {children}
        </motion.h2>
      </div>
    </div>
  );
}
