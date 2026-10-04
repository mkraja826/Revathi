"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [label, setLabel] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const move = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
      setVisible(true);
      const target = (event.target as HTMLElement)?.closest<HTMLElement>("[data-cursor]");
      setLabel(target?.dataset.cursor ?? "");
    };
    const leave = () => setVisible(false);

    window.addEventListener("mousemove", move);
    document.documentElement.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      document.documentElement.removeEventListener("mouseleave", leave);
    };
  }, []);

  const classes = "custom-cursor " + (label ? "custom-cursor--active " : "") + (visible ? "is-visible" : "");
  return (
    <div
      className={classes}
      style={{ transform: "translate3d(" + position.x + "px," + position.y + "px,0)" }}
      aria-hidden="true"
    >
      <span>{label}</span>
    </div>
  );
}
