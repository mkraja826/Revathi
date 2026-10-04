"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const frameRef = useRef<number | null>(null);
  const lastLabelRef = useRef("");

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!finePointer || reducedMotion) return;

    const cursor = cursorRef.current;
    const labelNode = labelRef.current;
    if (!cursor || !labelNode) return;

    let x = -100;
    let y = -100;

    const paint = () => {
      cursor.style.transform = `translate3d(${x}px,${y}px,0)`;
      frameRef.current = null;
    };

    const move = (event: MouseEvent) => {
      x = event.clientX;
      y = event.clientY;

      if (frameRef.current === null) {
        frameRef.current = requestAnimationFrame(paint);
      }

      cursor.classList.add("is-visible");
      const target = (event.target as HTMLElement)?.closest<HTMLElement>("[data-cursor]");
      const label = target?.dataset.cursor ?? "";

      if (label !== lastLabelRef.current) {
        lastLabelRef.current = label;
        labelNode.textContent = label;
        cursor.classList.toggle("custom-cursor--active", Boolean(label));
      }
    };

    const leave = () => cursor.classList.remove("is-visible");

    window.addEventListener("mousemove", move, { passive: true });
    document.documentElement.addEventListener("mouseleave", leave);

    return () => {
      window.removeEventListener("mousemove", move);
      document.documentElement.removeEventListener("mouseleave", leave);
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <div ref={cursorRef} className="custom-cursor" aria-hidden="true">
      <span ref={labelRef} />
    </div>
  );
}
