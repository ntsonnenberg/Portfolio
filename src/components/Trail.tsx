import React from "react";
import { useTrail, a } from "@react-spring/web";

interface TrailProps {
  isOpen: boolean;
  children: JSX.Element | JSX.Element[];
}

export default function Trail({ isOpen, children }: TrailProps): JSX.Element {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 1500, friction: 400 },
    opacity: isOpen ? 1 : 0,
    x: isOpen ? 0 : 20,
    height: isOpen ? 110 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });

  return (
    <div className="h-vh">
      {trail.map(({ height, ...style }, index) => (
        <a.div key={index} style={style}>
          <a.div style={{ height }} className="font-bold text-2xl">
            {items[index]}
          </a.div>
        </a.div>
      ))}
    </div>
  );
}
