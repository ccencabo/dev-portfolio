import { useEffect, useState } from "react";

const ParticleField = () => {
  // We can include a subtle grid of floating sparkles too!
  const [sparkles, setSparkles] = useState<Array<{ id: number; x: number; y: number; size: number; delay: number }>>([]);

  useEffect(() => {
    // Generate a few tiny ambient sparkles in the background
    const list = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      delay: Math.random() * 5,
    }));
    setSparkles(list);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Styles for organic aurora animation */}
      <style>{`
        @keyframes aurora-blob-1 {
          0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); }
          33% { transform: translate(8vw, -10vh) scale(1.15) rotate(120deg); }
          66% { transform: translate(-5vw, 6vh) scale(0.9) rotate(240deg); }
        }
        @keyframes aurora-blob-2 {
          0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); }
          40% { transform: translate(-10vw, 8vh) scale(0.85) rotate(-90deg); }
          75% { transform: translate(6vw, -8vh) scale(1.1) rotate(180deg); }
        }
        @keyframes aurora-blob-3 {
          0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); }
          50% { transform: translate(12vw, 10vh) scale(1.05) rotate(180deg); }
        }
        @keyframes ambient-sparkle {
          0%, 100% { opacity: 0.1; transform: scale(0.8); }
          50% { opacity: 0.6; transform: scale(1.2) rotate(15deg); }
        }
        .aurora-blob {
          will-change: transform;
        }
      `}</style>

      {/* Aurora Blob 1 - Rose Gold */}
      <div
        className="aurora-blob absolute top-[-10%] left-[-15%] w-[60vw] h-[60vw] md:w-[45vw] md:h-[45vw] rounded-full filter blur-[100px] md:blur-[140px] opacity-[0.25] dark:opacity-[0.16]"
        style={{
          background: "radial-gradient(circle, hsl(343, 70%, 78%) 0%, transparent 70%)",
          animation: "aurora-blob-1 25s ease-in-out infinite",
        }}
      />

      {/* Aurora Blob 2 - Lavender */}
      <div
        className="aurora-blob absolute bottom-[-10%] right-[-10%] w-[70vw] h-[70vw] md:w-[50vw] md:h-[50vw] rounded-full filter blur-[100px] md:blur-[140px] opacity-[0.25] dark:opacity-[0.18]"
        style={{
          background: "radial-gradient(circle, hsl(270, 75%, 85%) 0%, transparent 70%)",
          animation: "aurora-blob-2 30s ease-in-out infinite",
        }}
      />

      {/* Aurora Blob 3 - Soft Peach */}
      <div
        className="aurora-blob absolute top-[25%] right-[10%] w-[55vw] h-[55vw] md:w-[40vw] md:h-[40vw] rounded-full filter blur-[100px] md:blur-[140px] opacity-[0.18] dark:opacity-[0.12]"
        style={{
          background: "radial-gradient(circle, hsl(25, 80%, 75%) 0%, transparent 70%)",
          animation: "aurora-blob-3 28s ease-in-out infinite",
        }}
      />

      {/* Ambient background sparkles */}
      <div className="absolute inset-0 opacity-40 dark:opacity-20">
        {sparkles.map((sp) => (
          <div
            key={sp.id}
            className="absolute rounded-full bg-primary"
            style={{
              left: `${sp.x}%`,
              top: `${sp.y}%`,
              width: `${sp.size}px`,
              height: `${sp.size}px`,
              boxShadow: "0 0 10px hsl(var(--primary))",
              animation: `ambient-sparkle 6s ease-in-out infinite`,
              animationDelay: `${sp.delay}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ParticleField;
