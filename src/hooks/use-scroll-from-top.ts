import { useEffect, useState } from "react";

export default function useScrollFromTop() {
  const [isStyleOn, setIsStyleOn] = useState(false);

  useEffect(() => {
    const flipStyling = () => {
      if (typeof window !== undefined && window.scrollY >= 1) {
        setIsStyleOn(true);
      } else {
        setIsStyleOn(false);
      }
    };

    window.addEventListener("scroll", flipStyling, { passive: true });

    return () => window.removeEventListener("scroll", flipStyling);
  }, []);

  return { isStyleOn };
}
