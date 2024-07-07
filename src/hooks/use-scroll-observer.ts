import { RefObject, useEffect } from "react";

type Config = {
  animationClass?: string;
  handleOpacity?: boolean;
};

export default function useScrollObserver(
  ref: RefObject<Element>,
  { animationClass, handleOpacity }: Config,
  animateIn?: () => void,
  animateOut?: () => void
): void {
  useEffect(() => {
    if (typeof window !== undefined || !ref.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              if (handleOpacity) {
                entry.target.classList.remove("opacity-0");
              }
              if (animationClass) {
                entry.target.classList.add(animationClass);
              }
              if (animateIn) {
                animateIn();
              }
            }
            // else {
            //   if (handleOpacity) {
            //     entry.target.classList.add("opacity-0");
            //   }
            //   if (animationClass) {
            //     entry.target.classList.remove(animationClass);
            //   }

            //   if (animateOut) {
            //     animateOut();
            //   }
            // }
          });
        },
        {
          root: null,
          rootMargin: "0px",
          threshold: 0.1,
        }
      );

      if (ref.current) {
        if (handleOpacity) {
          ref.current.classList.add("opacity-0");
        }
        observer.observe(ref.current);
      }

      return () => observer.disconnect();
    }
  }, [ref, animationClass]);
}
