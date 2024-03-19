import { RefObject, useEffect } from "react";

type classes = {
  animationClass?: string;
};

export default function useScrollObserver(
  ref: RefObject<Element>,
  { animationClass }: classes,
  animateIn?: () => void,
  animateOut?: () => void
): void {
  useEffect(() => {
    if (typeof window !== undefined || !ref.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.remove("opacity-0");
              if (animationClass) {
                entry.target.classList.add(animationClass);
              }
              if (animateIn) {
                animateIn();
              }
            } else {
              entry.target.classList.add("opacity-0");
              if (animationClass) {
                entry.target.classList.remove(animationClass);
              }

              if (animateOut) {
                animateOut();
              }
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
  }, [ref, animationClass]);
}
