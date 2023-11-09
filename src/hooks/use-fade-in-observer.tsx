import { RefObject, useEffect } from "react";

type classes = {
  fadeIn: string;
};

export default function useFadeInObserver(
  ref: RefObject<Element>,
  { fadeIn }: classes
): void {
  useEffect(() => {
    if (typeof window !== undefined || !ref.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.remove("opacity-0");
              entry.target.classList.add(fadeIn);
            } else {
              entry.target.classList.add("opacity-0");
              entry.target.classList.remove(fadeIn);
            }
          });
        },
        {
          root: null,
          rootMargin: "0px",
          threshold: 0.1,
        }
      );

      if (ref.current) {
        ref.current.classList.add("opacity-0");
        observer.observe(ref.current);
      }

      return () => observer.disconnect();
    }
  }, [ref, fadeIn]);
}
