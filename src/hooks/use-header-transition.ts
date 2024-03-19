import { TransitionFn, useTransition } from "@react-spring/web";
import { useRef, useCallback, useState } from "react";

interface useHeaderTransitionArgs {
  items: string[];
  config?: { delay?: number };
}

interface ReturnObject {
  transitions: TransitionFn<
    string,
    { opacity: number; height: number; innerHeight: number; transform: string }
  >;
  clearItems: () => void;
  runTransition: () => void;
}

export default function useHeaderTransition({
  items: currentItems,
  config,
}: useHeaderTransitionArgs): ReturnObject {
  const [items, setItems] = useState<string[]>([]);
  const ref = useRef<ReturnType<typeof setTimeout>[]>([]);

  const transitions = useTransition(items, {
    from: {
      opacity: 0,
      height: 0,
      innerHeight: 0,
      transform: "perspective(900px) rotateX(0deg)",
    },
    enter: [
      { opacity: 1, height: 80, innerHeight: 80 },
      { transform: "perspective(600px) rotateX(180deg)" },
      { transform: "perspective(600px) rotateX(0deg)" },
    ],
    leave: [{ innerHeight: 0 }, { opacity: 0, height: 0 }],
  });

  const clearItems = () => {
    ref.current.forEach(clearTimeout);
    ref.current = [];
    setItems([]);
  };

  const runTransition = useCallback(() => {
    clearItems();
    ref.current.push(setTimeout(() => setItems(currentItems), config?.delay));
    return () => ref.current.forEach(clearTimeout);
  }, []);

  return { transitions, clearItems, runTransition };
}
