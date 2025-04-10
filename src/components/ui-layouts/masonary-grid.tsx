"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "../Image";

interface Item {
  id: number;
  url: string;
  title: string;
}

interface Props {
  items: Item[];
}

export default function MasonaryGrid({ items }: Props) {
  const [selected, setSelected] = useState(null);

  return (
    <div className="container mx-auto p-4 ">
      <div className="phone:columns-2 laptop:columns-3 gap-2">
        <>
          {items.map((item, index) => (
            <ImageItem
              key={item.id}
              item={item}
              index={index}
              setSelected={setSelected}
            />
          ))}
        </>
      </div>
    </div>
  );
}

interface ImageItemProps {
  item: Item;
  index: number | string;
  setSelected: any;
}

function ImageItem({ item, index, setSelected }: ImageItemProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.figure
      whileTap={{ scale: 0.9 }}
      initial="hidden"
      animate={isInView && "visible"}
      ref={ref}
      className="inline-block group w-full rounded-md relative dark:bg-black bg-white overflow-hidden before:absolute before:top-0 before:content-[''] before:h-full before:w-full hover:before:bg-gradient-to-t dark:before:from-gray-900  before:from-gray-200/90 before:from-5% before:to-transparent before:to-90% cursor-pointer"
      onClick={() => setSelected(item)}
    >
      <Image
        src={item.url}
        alt={item.title}
        className="w-auto bg-base-100 shadow-xl image-full cursor-pointer"
      />
      <div className="flex flex-wrap mt-2 absolute bottom-0 left-0 h-60 right-0 p-2 group-hover:opacity-100 opacity-0 font-semibold bg-gradient-to-t from-background">
        <h1 className="self-end">{item.title}</h1>
      </div>
    </motion.figure>
  );
}
