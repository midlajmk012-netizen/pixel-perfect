import { useEffect, useState } from "react";

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;
    setEnabled(true);

    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      const el = e.target as HTMLElement | null;
      setActive(Boolean(el?.closest("a, button, [data-cursor]")));
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, []);

  if (!enabled) return null;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[100]">
      <div
        className="absolute rounded-full bg-primary transition-[width,height,opacity] duration-300"
        style={{
          left: pos.x,
          top: pos.y,
          width: active ? 10 : 6,
          height: active ? 10 : 6,
          transform: "translate(-50%, -50%)",
        }}
      />
      <div
        className="absolute rounded-full border border-primary/60 transition-all duration-300 ease-out"
        style={{
          left: pos.x,
          top: pos.y,
          width: active ? 52 : 28,
          height: active ? 52 : 28,
          opacity: active ? 1 : 0.5,
          transform: "translate(-50%, -50%)",
        }}
      />
    </div>
  );
}
