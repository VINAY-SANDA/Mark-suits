// StarryNightBackground.jsx
// React component (default export) — a polished, customizable starry-night background.
// - Uses a <canvas> for performant animated stars + occasional shooting stars
// - Tailwind-compatible classes (no imports required)
// - Props: density, twinkleSpeed, shootingStars, nebulaColors, overlayOpacity
// - Usage: import StarryNightBackground from './components/StarryNightBackground';
//          <StarryNightBackground density={0.003}>{/* app UI */}</StarryNightBackground>

import React, { useRef, useEffect } from 'react';

export default function StarryNightBackground({
  children,
  density = 0.0025, // stars per pixel
  twinkleSpeed = 0.02, // speed multiplier for twinkling
  shootingStars = true,
  nebulaColors = ['#07103a', '#0b173f', '#061028'], // subtle gradient layers
  overlayOpacity = 0.35,
}) {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);
  const starsRef = useRef([]);
  const shootingRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let dpr = window.devicePixelRatio || 1;

    function resize() {
      dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = Math.max(1, Math.floor(rect.width * dpr));
      canvas.height = Math.max(1, Math.floor(rect.height * dpr));
      ctx.scale(dpr, dpr);
      initStars();
    }

    function initStars() {
      const rect = canvas.getBoundingClientRect();
      const area = rect.width * rect.height;
      const count = Math.max(40, Math.floor(area * density));
      const stars = [];

      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * rect.width,
          y: Math.random() * rect.height,
          r: Math.random() * 1.6 + 0.3, // radius
          baseAlpha: 0.5 + Math.random() * 0.5,
          phase: Math.random() * Math.PI * 2,
          twinkleRate: 0.5 + Math.random() * 1.5,
        });
      }
      starsRef.current = stars;
    }

    function spawnShootingStar() {
      const rect = canvas.getBoundingClientRect();
      const startX = Math.random() * rect.width;
      const startY = Math.random() * rect.height * 0.5;
      const len = 80 + Math.random() * 180;
      const speed = 6 + Math.random() * 8;
      const angle = (Math.PI / 4) + (Math.random() - 0.5) * 0.6; // diagonal

      shootingRef.current.push({ x: startX, y: startY, len, speed, angle, life: 0 });
    }

    let lastSpawn = 0;

    function draw(now) {
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      // Background gradient / nebula
      const g = ctx.createLinearGradient(0, 0, 0, rect.height);
      g.addColorStop(0, nebulaColors[0]);
      g.addColorStop(0.6, nebulaColors[1]);
      g.addColorStop(1, nebulaColors[2]);
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, rect.width, rect.height);

      // Soft vignette
      const vignette = ctx.createRadialGradient(
        rect.width / 2,
        rect.height / 2,
        Math.min(rect.width, rect.height) * 0.1,
        rect.width / 2,
        rect.height / 2,
        Math.max(rect.width, rect.height) * 0.8
      );
      vignette.addColorStop(0, 'rgba(0,0,0,0)');
      vignette.addColorStop(1, 'rgba(0,0,0,0.45)');
      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, rect.width, rect.height);

      // Stars
      const stars = starsRef.current;
      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];
        const tw = Math.sin((now * 0.001 * twinkleSpeed * s.twinkleRate) + s.phase) * 0.5 + 0.5; // 0..1
        const alpha = s.baseAlpha * (0.6 + 0.7 * tw);
        ctx.beginPath();
        ctx.globalAlpha = alpha;
        ctx.fillStyle = 'white';
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      // Shooting stars
      if (shootingStars) {
        if (now - lastSpawn > 2500 + Math.random() * 6000) {
          spawnShootingStar();
          lastSpawn = now;
        }
        const live = [];
        for (let i = 0; i < shootingRef.current.length; i++) {
          const st = shootingRef.current[i];
          st.life += st.speed;
          const sx = st.x + Math.cos(st.angle) * st.life;
          const sy = st.y + Math.sin(st.angle) * st.life;

          // Tail
          const tx = sx - Math.cos(st.angle) * st.len;
          const ty = sy - Math.sin(st.angle) * st.len;

          const grd = ctx.createLinearGradient(tx, ty, sx, sy);
          grd.addColorStop(0, 'rgba(255,255,255,0)');
          grd.addColorStop(0.6, 'rgba(255,255,255,0.25)');
          grd.addColorStop(1, 'rgba(255,255,255,0.9)');

          ctx.strokeStyle = grd;
          ctx.lineWidth = 1.2;
          ctx.beginPath();
          ctx.moveTo(tx, ty);
          ctx.lineTo(sx, sy);
          ctx.stroke();

          // bright head
          ctx.beginPath();
          ctx.fillStyle = 'rgba(255,255,255,0.9)';
          ctx.arc(sx, sy, 1.9, 0, Math.PI * 2);
          ctx.fill();

          if (st.life < st.len * 1.8 && sx < rect.width + 50 && sy < rect.height + 50) {
            live.push(st);
          }
        }
        shootingRef.current = live;
      }

      rafRef.current = requestAnimationFrame(draw);
    }

    resize();
    window.addEventListener('resize', resize);
    rafRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', resize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [density, twinkleSpeed, shootingStars, nebulaColors]);

  // Container styles: full-bleed background with content overlay
  return (
    <div className="relative w-full h-full min-h-screen overflow-hidden">
      {/* Canvas sits behind content */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full block"
        style={{ display: 'block' }}
        aria-hidden={true}
      />

      {/* subtle color overlay to tint stars and support text legibility */}
      <div
        aria-hidden={true}
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(180deg, rgba(8,10,25,0.0), rgba(2,6,18,0.6))', opacity: overlayOpacity }}
      />

      {/* content */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
}
