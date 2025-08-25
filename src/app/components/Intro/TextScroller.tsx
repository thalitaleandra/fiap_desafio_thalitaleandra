import React from "react";
import type { TextScrollerProps } from "@/types/intro";

export default function TextScroller({
  texts,
  className,
  scrollProgress,
  multiplier,
}: TextScrollerProps) {
  const transform = `translateX(calc(-50% + ${multiplier * scrollProgress}%))`;

  return (
    <>
      {texts.map((text, index) => (
        <div key={index} className={className} style={{ transform }}>
          {text}
        </div>
      ))}
    </>
  );
}
