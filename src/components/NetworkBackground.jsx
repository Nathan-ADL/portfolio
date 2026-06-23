import { useEffect, useRef } from "react";

// Background de constelação com camadas de profundidade.
// Partículas "próximas" (depth ~0) puxam pro vermelho e reagem mais ao scroll.
// Partículas "distantes" (depth ~1) puxam pro rosa e quase não se movem.
export default function NetworkBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = 0;
    let height = 0;
    let particles = [];
    let animationId = null;
    let lastScrollY = window.scrollY;
    let scrollVelocity = 0;

    const CONNECTION_DISTANCE = 130;
    const NEAR_COLOR = [255, 28, 28]; // rgb(255,28,28)
    const FAR_COLOR = [243, 98, 178]; // rgb(243,98,178)
    const BG_COLOR = "#121212";

    function colorAtDepth(depth, alpha) {
      const r = Math.round(NEAR_COLOR[0] + (FAR_COLOR[0] - NEAR_COLOR[0]) * depth);
      const g = Math.round(NEAR_COLOR[1] + (FAR_COLOR[1] - NEAR_COLOR[1]) * depth);
      const b = Math.round(NEAR_COLOR[2] + (FAR_COLOR[2] - NEAR_COLOR[2]) * depth);
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }

    function resize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }

    function createParticles() {
      const isMobile = window.innerWidth < 768;
      const count = isMobile ? 45 : 95;
      particles = Array.from({ length: count }, () => {
        const depth = Math.random(); // 0 = perto/vermelho, 1 = longe/rosa
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.18,
          vy: (Math.random() - 0.5) * 0.18,
          depth,
          radius: 2.2 - depth * 1.3,
        };
      });
    }

    function handleScroll() {
      const currentY = window.scrollY;
      const delta = currentY - lastScrollY;
      lastScrollY = currentY;
      scrollVelocity += delta * 0.035;
    }

    function handleResize() {
      resize();
      createParticles();
    }

    function step() {
      ctx.fillStyle = BG_COLOR;
      ctx.fillRect(0, 0, width, height);

      scrollVelocity *= 0.93;

      if (!prefersReducedMotion) {
        particles.forEach((p) => {
          const parallax = (1 - p.depth) * scrollVelocity * 0.8;
          p.x += p.vx;
          p.y += p.vy + parallax;

          if (p.x < -20) p.x = width + 20;
          if (p.x > width + 20) p.x = -20;
          if (p.y < -20) p.y = height + 20;
          if (p.y > height + 20) p.y = -20;
        });
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          if (Math.abs(a.depth - b.depth) > 0.35) continue;
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECTION_DISTANCE) {
            const proximity = 1 - dist / CONNECTION_DISTANCE;
            const opacity = proximity * 0.3 * (1 - (a.depth + b.depth) / 2.5);
            ctx.strokeStyle = colorAtDepth((a.depth + b.depth) / 2, Math.max(opacity, 0));
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = colorAtDepth(p.depth, 0.85 - p.depth * 0.35);
        ctx.fill();
      });

      if (!prefersReducedMotion) {
        animationId = requestAnimationFrame(step);
      }
    }

    resize();
    createParticles();
    step();

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-screen h-screen pointer-events-none -z-10"
      aria-hidden="true"
    />
  );
}