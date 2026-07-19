import { useEffect, useState } from "react";

const MouseGlow = () => {
  const [pos, setPos] = useState({ x: -200, y: -200 });

  useEffect(() => {
    const handler = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-[1] transition-transform duration-75"
      style={{
        left: pos.x - 200,
        top: pos.y - 200,
        width: 400,
        height: 400,
        background:
          "radial-gradient(circle, hsla(var(--primary) / 0.07) 0%, transparent 70%)",
        borderRadius: "50%",
      }}
    />
  );
};

export default MouseGlow;
