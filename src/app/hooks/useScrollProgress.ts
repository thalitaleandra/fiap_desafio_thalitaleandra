import { useEffect, useState, RefObject } from "react";

export default function useScrollProgress(ref: RefObject<HTMLElement>) {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ref.current) return;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          const rect = ref.current!.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          const elementHeight = rect.height;

          const progress = Math.min(Math.max(0, (windowHeight - rect.top) / (windowHeight + elementHeight)), 1);
          setScrollProgress(progress);

          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [ref]);

  return scrollProgress;
}