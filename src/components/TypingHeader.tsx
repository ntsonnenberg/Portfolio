import React, { useRef } from "react";
import { motion } from "framer-motion";

interface HeaderProps {
  color?: string;
  children: string;
}

export default function FadeBlockHeader({
  color,
  children,
}: HeaderProps): JSX.Element {
  const characters = children.split("");

  return (
    <p
      className={`py-4 text-${color} font-bold overflow-hidden whitespace-nowrap phone:text-2xl tablet:text-4xl laptop:text-7xl`}
    >
      {characters.map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: index * 0.2, duration: 0.2 }}
        >
          {char}
        </motion.span>
      ))}
    </p>
  );
}
