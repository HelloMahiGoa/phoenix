"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronRight, CheckCircle } from "lucide-react";

{/* Enhanced animation variants for orchestrated entrance */}
const orchestratedStagger: Variants = {
  hidden: {},
  show: { 
    transition: { 
      staggerChildren: 0.15, 
      delayChildren: 0.3,
      staggerDirection: -1 // Reverse order for dramatic effect
    } 
  },
};

const orchestratedFadeUp: Variants = {
  hidden: { opacity: 0, y: 40, filter: "blur(4px)" },
  show: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { 
      duration: 0.8, 
      ease: [0.22, 1, 0.36, 1],
      type: "spring",
      stiffness: 100
    } 
  },
};

const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -60, filter: "blur(4px)" },
  show: { 
    opacity: 1, 
    x: 0, 
    filter: "blur(0px)",
    transition: { 
      duration: 0.9, 
      ease: [0.22, 1, 0.36, 1],
      type: "spring",
      stiffness: 80
    } 
  },
};

const slideInRight: Variants = {
  hidden: { opacity: 0, x: 60, filter: "blur(4px)" },
  show: { 
    opacity: 1, 
    x: 0, 
    filter: "blur(0px)",
    transition: { 
      duration: 0.9, 
      ease: [0.22, 1, 0.36, 1],
      type: "spring",
      stiffness: 80
    } 
  },
};

/* ─── methodology nodes ─── */
const nodes = [
  { id: "flight",    label: "FLIGHT™",    sub: "Methodology",    angle: -90,  r: 110, color: "#00A89C" },
  { id: "cloudifai", label: "CloudifAI™", sub: "Delivery",       angle: 0,    r: 110, color: "#3B82F6" },
  { id: "zentoh",    label: "ZentoH™",    sub: "Orchestration",  angle: 90,   r: 110, color: "#8B5CF6" },
  { id: "glide",     label: "GLIDE™",     sub: "Managed Svc",    angle: 180,  r: 110, color: "#10B981" },
];

function toRad(deg: number) { return (deg * Math.PI) / 180; }

function SystemDiagram() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [pulse, setPulse] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setPulse((p) => (p + 1) % nodes.length), 1400);
    return () => clearInterval(t);
  }, []);

  const cx = 160;
  const cy = 160;

  return (
    <div className="relative w-full flex items-center justify-center">
      <svg
        viewBox="0 0 320 320"
        className="w-full max-w-sm mx-auto drop-shadow-2xl"
        style={{ overflow: "visible" }}
      >
        <defs>
          <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00A89C" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#00A89C" stopOpacity="0" />
          </radialGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          {nodes.map((n) => (
            <radialGradient key={n.id} id={`grad-${n.id}`} cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor={n.color} stopOpacity="0.25" />
              <stop offset="100%" stopColor={n.color} stopOpacity="0.05" />
            </radialGradient>
          ))}
        </defs>

        {/* Outer ring */}
        <circle cx={cx} cy={cy} r={115} fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
        <circle cx={cx} cy={cy} r={115} fill="none" stroke="rgba(0,168,156,0.12)" strokeWidth="0.5" strokeDasharray="6 4" />

        {/* Spoke lines */}
        {nodes.map((n) => {
          const x2 = cx + n.r * Math.cos(toRad(n.angle));
          const y2 = cy + n.r * Math.sin(toRad(n.angle));
          return (
            <line key={n.id}
              x1={cx} y1={cy} x2={x2} y2={y2}
              stroke={hovered === n.id || pulse === nodes.indexOf(n) ? n.color : "rgba(255,255,255,0.1)"}
              strokeWidth={hovered === n.id ? "1.5" : "0.75"}
              strokeDasharray={hovered === n.id ? "none" : "3 3"}
              style={{ transition: "stroke 0.3s, stroke-width 0.3s" }}
            />
          );
        })}

        {/* Center glow */}
        <circle cx={cx} cy={cy} r={52} fill="url(#centerGlow)" />

        {/* Center ring */}
        <circle cx={cx} cy={cy} r={46} fill="rgba(10,25,41,0.9)" stroke="rgba(0,168,156,0.4)" strokeWidth="1.5" />
        <circle cx={cx} cy={cy} r={38} fill="rgba(0,168,156,0.08)" />

        {/* Pulse rings from center */}
        {[0, 1, 2].map((i) => (
          <motion.circle key={i}
            cx={cx} cy={cy} r={46}
            fill="none" stroke="rgba(0,168,156,0.3)" strokeWidth="1"
            initial={{ scale: 1, opacity: 0.4 }}
            animate={{ scale: [1, 1.6, 2], opacity: [0.4, 0.1, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: i * 1 }}
            style={{ transformOrigin: `${cx}px ${cy}px` }}
          />
        ))}

        {/* Center label */}
        <text x={cx} y={cy - 8} textAnchor="middle" fill="#00A89C" fontSize="10" fontWeight="800" fontFamily="var(--font-plus-jakarta)">
          PHOENIX
        </text>
        <text x={cx} y={cy + 7} textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="7" fontFamily="var(--font-plus-jakarta)">
          CONNECTED
        </text>
        <text x={cx} y={cy + 17} textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="7" fontFamily="var(--font-plus-jakarta)">
          SYSTEM
        </text>

        {/* Orbiting dot */}
        <motion.circle
          cx={cx}
          cy={cy - 115}
          r={3}
          fill="#00A89C"
          style={{ transformOrigin: `${cx}px ${cy}px` }}
          animate={{ rotate: 360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          filter="url(#glow)"
        />

        {/* Nodes */}
        {nodes.map((n, i) => {
          const nx = cx + n.r * Math.cos(toRad(n.angle));
          const ny = cy + n.r * Math.sin(toRad(n.angle));
          const isHovered = hovered === n.id;
          const isPulsing = pulse === i;
          const nodeR = 32;

          return (
            <g key={n.id}
              onMouseEnter={() => setHovered(n.id)}
              onMouseLeave={() => setHovered(null)}
              style={{ cursor: "pointer" }}
            >
              {/* Outer glow on hover/pulse */}
              <circle cx={nx} cy={ny} r={nodeR + 8} fill={`url(#grad-${n.id})`}
                opacity={isHovered || isPulsing ? 1 : 0}
                style={{ transition: "opacity 0.3s" }} />

              {/* Node bg */}
              <circle cx={nx} cy={ny} r={nodeR}
                fill={isHovered ? n.color : "rgba(10,25,41,0.95)"}
                stroke={isHovered || isPulsing ? n.color : "rgba(255,255,255,0.12)"}
                strokeWidth={isHovered ? "2" : "1"}
                style={{ transition: "all 0.25s" }}
                filter={isPulsing ? "url(#glow)" : undefined}
              />

              {/* Icon ring */}
              <circle cx={nx} cy={ny} r={nodeR - 6}
                fill="none"
                stroke={isHovered ? "rgba(255,255,255,0.2)" : `${n.color}30`}
                strokeWidth="1"
              />

              {/* Label */}
              <text x={nx} y={ny - 7} textAnchor="middle"
                fill={isHovered ? "white" : n.color}
                fontSize="8.5" fontWeight="800"
                fontFamily="var(--font-plus-jakarta)"
                style={{ transition: "fill 0.2s" }}
              >
                {n.label}
              </text>
              <text x={nx} y={ny + 5} textAnchor="middle"
                fill={isHovered ? "rgba(255,255,255,0.75)" : "rgba(255,255,255,0.4)"}
                fontSize="6.5"
                fontFamily="var(--font-plus-jakarta)"
                style={{ transition: "fill 0.2s" }}
              >
                {n.sub}
              </text>
            </g>
          );
        })}
      </svg>

      {/* Glow orb behind diagram */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-64 h-64 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(0,168,156,0.12) 0%, transparent 70%)" }} />
      </div>
    </div>
  );
}

/* Seeded RNG for deterministic SSR/client parity (avoids hydration mismatch) */
function createSeededRng(seed: number) {
  return function next() {
    seed = (seed * 1103515245 + 12345) & 0x7fffffff;
    return seed / 0x7fffffff;
  };
}

/* Precomputed particle config so server and client render the same HTML */
const AURORA_PARTICLES = (() => {
  const out: Array<{ left: number; top: number; color: string; x: number; y: number; duration: number; delay: number }> = [];
  for (let i = 0; i < 30; i++) {
    const rng = createSeededRng(42 + i);
    out.push({
      left: rng() * 100,
      top: rng() * 100,
      color: i % 3 === 0 ? "#00A89C" : i % 3 === 1 ? "#3B82F6" : "#8B5CF6",
      x: rng() * 100 - 50,
      y: rng() * 100 - 50,
      duration: 3 + rng() * 4,
      delay: rng() * 5,
    });
  }
  return out;
})();

/* ─── Enhanced Aurora background with particles ─── */
function AuroraBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated gradient base */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "linear-gradient(135deg, #060e18 0%, #0A1929 40%, #0a1f2e 100%)",
            "linear-gradient(135deg, #060e18 0%, #0A1929 45%, #0d1929 100%)",
            "linear-gradient(135deg, #060e18 0%, #0A1929 40%, #0a1f2e 100%)"
          ]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Particle system - deterministic positions for hydration safety */}
      <div className="absolute inset-0">
        {AURORA_PARTICLES.map((p, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              backgroundImage: `radial-gradient(circle, ${p.color} 0%, transparent 70%)`,
            }}
            animate={{
              x: [0, p.x, 0],
              y: [0, p.y, 0],
              opacity: [0, 0.8, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Enhanced Aurora layers */}
      <motion.div
        className="absolute -top-40 -left-40 w-[800px] h-[600px] rounded-full opacity-30"
        style={{ 
          background: "radial-gradient(ellipse, rgba(0,168,156,0.8) 0%, transparent 70%)", 
          filter: "blur(90px)",
          mixBlendMode: "screen"
        }}
        animate={{ 
          x: [0, 80, 0], 
          y: [0, -40, 0], 
          scale: [1, 1.2, 1],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/4 -right-40 w-[700px] h-[500px] rounded-full opacity-20"
        style={{ 
          background: "radial-gradient(ellipse, rgba(59,130,246,0.8) 0%, transparent 70%)", 
          filter: "blur(100px)",
          mixBlendMode: "screen"
        }}
        animate={{ 
          x: [0, -60, 0], 
          y: [0, 60, 0], 
          scale: [1, 1.25, 1],
          rotate: [0, -5, 0]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <motion.div
        className="absolute -bottom-20 left-1/3 w-[600px] h-[400px] rounded-full opacity-20"
        style={{ 
          background: "radial-gradient(ellipse, rgba(139,92,246,0.8) 0%, transparent 70%)", 
          filter: "blur(90px)",
          mixBlendMode: "screen"
        }}
        animate={{ 
          x: [0, 40, 0], 
          y: [0, -50, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 5 }}
      />

      {/* Geometric pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 30%, rgba(0,168,156,0.8) 1px, transparent 1px),
            radial-gradient(circle at 80% 70%, rgba(59,130,246,0.8) 1px, transparent 1px),
            radial-gradient(circle at 50% 50%, rgba(139,92,246,0.8) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px, 80px 80px, 100px 100px",
          backgroundPosition: "0% 0%, 30% 30%, 60% 60%",
          animation: "patternFloat 20s ease-in-out infinite"
        }}
      />

      {/* Top edge glow line with pulse */}
      <motion.div 
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent 0%, rgba(0,168,156,0.8) 50%, transparent 100%)" }}
        animate={{ opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Diagonal light beam with movement */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-full opacity-[0.04]"
        style={{
          background: "linear-gradient(115deg, transparent 40%, rgba(0,168,156,0.4) 50%, transparent 60%)",
        }}
        animate={{ x: [0, 20, 0], rotate: [0, 1, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

/* ─── Mouse-parallax layer ─── */
function ParallaxLayer({ children, strength = 0.02 }: { children: React.ReactNode; strength?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      const { innerWidth: w, innerHeight: h } = window;
      mx.set((e.clientX - w / 2) * strength);
      my.set((e.clientY - h / 2) * strength);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mx, my, strength]);

  return (
    <motion.div ref={ref} style={{ x: sx, y: sy }} className="w-full h-full">
      {children}
    </motion.div>
  );
}

/* ─── Stat pill ─── */
function StatPill({ value, label, icon }: { value: string; label: string; icon: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      className="flex items-center gap-2.5 px-4 py-2.5 rounded-full"
      style={{
        background: "rgba(255,255,255,0.06)",
        border: "1px solid rgba(255,255,255,0.12)",
        backdropFilter: "blur(12px)",
      }}
    >
      <span className="text-lg">{icon}</span>
      <div>
        <div className="text-sm font-extrabold text-white leading-none" style={{ fontFamily: "var(--font-plus-jakarta)" }}>{value}</div>
        <div className="text-[10px] text-white/45 mt-0.5 leading-none">{label}</div>
      </div>
    </motion.div>
  );
}

/* ─── Main component ─── */
export default function HeroSection() {
  const [titleIndex, setTitleIndex] = useState(0);
  const titles = ["Precision", "Excellence", "Accountability"];

  useEffect(() => {
    const t = setInterval(() => setTitleIndex((i) => (i + 1) % titles.length), 3000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-x-hidden" style={{ paddingTop: "calc(32px + 4px + 64px)" }}>
      <AuroraBackground />
      
      {/* Floating geometric elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Abstract 3D shapes */}
        <motion.div
          animate={{ 
            rotateX: [0, 180, 360], 
            rotateY: [0, 90, 180], 
            rotateZ: [0, 45, 90],
            x: [0, 30, 0], 
            y: [0, -20, 0] 
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-10 w-32 h-32"
          style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
        >
          <div className="relative w-full h-full">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-teal/20 to-transparent blur-xl" />
            <div className="absolute inset-4 rounded-lg border border-teal/30 transform rotate-45" />
            <div className="absolute inset-8 rounded-full bg-teal/10 blur-md" />
          </div>
        </motion.div>

        <motion.div
          animate={{ 
            rotateX: [0, -180, 360], 
            rotateY: [0, -90, 180], 
            rotateZ: [0, -45, -90],
            x: [0, -20, 0], 
            y: [0, 30, 0] 
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 right-10 w-40 h-40"
          style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
        >
          <div className="relative w-full h-full">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue/20 to-transparent blur-xl" />
            <div className="absolute inset-6 border-2 border-blue/30 transform rotate-12" />
            <div className="absolute inset-12 rounded-lg bg-blue/10 blur-md" />
          </div>
        </motion.div>

        {/* Additional floating geometric shapes */}
        <motion.div
          animate={{ 
            rotate: [0, 360, 720], 
            scale: [1, 1.2, 1],
            x: [0, 40, 0], 
            y: [0, -30, 0] 
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 right-1/4 w-24 h-24"
        >
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-purple/20 to-transparent blur-lg transform rotate-45" />
            <div className="absolute inset-4 border border-purple/30" />
          </div>
        </motion.div>

        {/* Low-poly triangle shape */}
        <motion.div
          animate={{ 
            rotate: [0, -360, 0], 
            y: [0, -50, 0],
            x: [0, 20, 0] 
          }}
          transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/3 left-1/4 w-20 h-20"
        >
          <div 
            className="w-0 h-0 border-l-[40px] border-l-transparent border-r-[40px] border-r-transparent border-b-[70px] border-b-teal/20"
            style={{ filter: "blur(8px)" }}
          />
        </motion.div>
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">

          {/* ── LEFT: Main content (8 columns) ── */}
          <motion.div variants={orchestratedStagger} initial="hidden" animate="show" className="lg:col-span-7 space-y-8">
            
            {/* Unique badge design */}
            <motion.div variants={orchestratedFadeUp} className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-teal/20 to-blue/20 blur-xl rounded-full" />
              <div className="relative inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/20 backdrop-blur-sm">
                <div className="relative">
                  <div className="absolute inset-0 bg-teal rounded-full animate-ping" />
                  <div className="relative w-2 h-2 bg-teal rounded-full" />
                </div>
                <span className="text-sm font-bold text-white tracking-wide">
                  Oracle Cloud HCM & Payroll Specialists
                </span>
              </div>
            </motion.div>

            {/* Asymmetrical headline with enhanced effects */}
            <motion.div variants={orchestratedFadeUp} className="space-y-6">
              <div className="relative">
                <h1 className="font-extrabold text-white leading-[1.1] relative tracking-tight"
                  style={{ fontFamily: "var(--font-plus-jakarta)", fontSize: "clamp(3.5rem, 7vw, 5.5rem)" }}>
                  <span className="block relative">
                    Outcome-Led
                    {/* Gradient stroke effect */}
                    <motion.span 
                      className="absolute inset-0 bg-gradient-to-r from-teal-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
                      animate={{ opacity: [0.3, 0.7, 0.3] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                      Outcome-Led
                    </motion.span>
                  </span>
                  <span className="block relative">
                    <span className="bg-gradient-to-r from-teal-400 via-blue-400 to-purple-400 bg-clip-text text-transparent relative z-10">
                      Delivery.
                    </span>
                    {/* Animated glow effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-teal-400 via-blue-400 to-purple-400 bg-clip-text text-transparent blur-2xl"
                      animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </span>
                </h1>
                <div className="absolute -top-6 -right-6 w-32 h-32 hidden lg:block">
                  <motion.div 
                    className="w-full h-full rounded-full bg-gradient-to-br from-teal-400/20 to-transparent blur-3xl"
                    animate={{ scale: [1, 1.3, 1], rotate: [0, 180, 360] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>
              </div>
              
              <div className="relative text-3xl lg:text-4xl font-bold flex flex-wrap items-center gap-x-3 min-h-[1.5em] pb-2">
                <span className="text-white/90 relative z-10">
                  Engineered for 
                </span>
                <div className="relative inline-flex items-center">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={titleIndex}
                      initial={{ y: 40, opacity: 0, filter: "blur(8px)" }}
                      animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                      exit={{ y: -40, opacity: 0, filter: "blur(8px)" }}
                      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute left-0 whitespace-nowrap"
                    >
                      <span className="bg-gradient-to-r from-teal-300 to-blue-400 bg-clip-text text-transparent relative">
                        {titles[titleIndex]}
                        {/* Text glow effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-teal-300 to-blue-400 bg-clip-text text-transparent blur-lg"
                          animate={{ opacity: [0.4, 0.8, 0.4] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        />
                      </span>
                    </motion.span>
                  </AnimatePresence>
                  {/* Invisible placeholder to reserve layout space */}
                  <span className="invisible whitespace-nowrap" aria-hidden="true">
                    Accountability
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Sub */}
            <motion.div variants={orchestratedFadeUp}>
              <p className="text-lg text-white/70 leading-relaxed mb-8 max-w-xl font-medium"
                style={{ fontFamily: "var(--font-inter)" }}>
                We don&apos;t just implement Oracle Cloud — we own the outcome. Through{" "}
                <span className="text-teal font-semibold">FLIGHT™ methodology</span>,{" "}
                <span className="text-blue-400 font-semibold">CloudifAI™ delivery</span>, and{" "}
                <span className="text-purple-400 font-semibold">ZentoH™ governance</span> — every program is controlled, measured, and accountable.
              </p>
            </motion.div>

            {/* Enhanced CTA buttons */}
            <motion.div variants={orchestratedFadeUp} className="flex flex-col sm:flex-row gap-5">
              <Link
                href="/contact"
                className="group relative flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-bold text-white overflow-hidden transition-all duration-300"
                style={{
                  background: "linear-gradient(135deg, #00A89C, #008a80)",
                  boxShadow: "0 12px 30px -10px rgba(0,168,156,0.7), inset 0 1px 0 rgba(255,255,255,0.3)",
                }}
              >
                <span className="relative z-10 flex items-center gap-2 text-[15px] tracking-wide">
                  Discuss Your Program
                  <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-1.5 transition-transform duration-300" />
                </span>
                
                {/* Liquid fill effect */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
                
                {/* Gradient overlay */}
                <span className="absolute inset-0 bg-gradient-to-t from-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                {/* Shine sweep */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                />
                
                {/* Pulse effect on hover */}
                <motion.div 
                  className="absolute inset-0 rounded-2xl border-2 border-white/30"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileHover={{ scale: 1.1, opacity: 0.3 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>

              <Link
                href="/how-we-deliver"
                className="group relative flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-white transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  backdropFilter: "blur(20px)",
                }}
              >
                <span className="relative z-10 flex items-center gap-2 text-[15px] tracking-wide text-white/90 group-hover:text-white transition-colors">
                  Explore Our Approach
                  <ChevronRight className="w-4.5 h-4.5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                
                {/* Liquid fill effect for secondary button */}
                <motion.div 
                  className="absolute inset-0 bg-white/5"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
                
                <span className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                
                {/* Border glow effect */}
                <motion.div 
                  className="absolute inset-0 rounded-2xl border border-white/30"
                  initial={{ scale: 0.95, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </motion.div>

            {/* Enhanced stats */}
            <motion.div variants={orchestratedFadeUp} className="space-y-6">
              <div className="flex flex-col gap-4">
                <p className="text-[11px] text-white/30 uppercase tracking-widest font-semibold">
                  What we deliver
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { value: "100%", label: "Delivery Ownership", icon: "🎯", color: "from-teal/20 to-teal/5" },
                    { value: "24x7", label: "Support Coverage", icon: "⚡", color: "from-blue/20 to-blue/5" },
                    { value: "99.9%", label: "Payroll Compliance", icon: "✅", color: "from-purple/20 to-purple/5" },
                  ].map((s, i) => (
                    <motion.div
                      key={s.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * i }}
                      whileHover={{ scale: 1.05 }}
                      className="relative group"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${s.color} rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity`} />
                      <div className="relative flex items-center gap-3 p-4 rounded-2xl border border-white/10 backdrop-blur-sm">
                        <span className="text-2xl">{s.icon}</span>
                        <div>
                          <div className="text-lg font-extrabold text-white leading-none" style={{ fontFamily: "var(--font-plus-jakarta)" }}>{s.value}</div>
                          <div className="text-[10px] text-white/45 mt-1 leading-none">{s.label}</div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Trust items */}
            <motion.div variants={orchestratedFadeUp} className="mt-7 flex flex-wrap gap-x-5 gap-y-2">
              {["FLIGHT™ Methodology", "CloudifAI™ Delivery", "ZentoH™ Governance", "GLIDE™ Managed Services"].map((item) => (
                <div key={item} className="flex items-center gap-1.5 text-xs text-white/35">
                  <CheckCircle className="w-3.5 h-3.5 text-teal/60 flex-shrink-0" />
                  {item}
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── RIGHT: Visual elements (4 columns) ── */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative flex items-center justify-center mt-12 lg:mt-0 lg:-mt-36"
          >
            <div className="relative w-full max-w-md">
              {/* Background glow */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-teal-400/20 via-blue-400/15 to-purple-400/20 rounded-3xl blur-3xl"
                animate={{ scale: [1, 1.05, 1], opacity: [0.6, 0.9, 0.6] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
              
              {/* Main diagram container */}
              <div className="relative bg-[#0A1929]/40 backdrop-blur-2xl rounded-[2rem] border border-white/10 p-8 shadow-[0_0_40px_rgba(0,168,156,0.15)]">
                {/* Subtle inner highlight */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none rounded-[2rem]" />
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                
                <ParallaxLayer strength={0.02}>
                  <SystemDiagram />
                </ParallaxLayer>
              </div>
              
              {/* Floating cards */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 }}
                className="absolute -top-4 -right-4 p-4 rounded-2xl border border-white/20 backdrop-blur-xl"
                style={{
                  background: "linear-gradient(135deg, rgba(0,168,156,0.1), rgba(0,168,156,0.05))",
                }}
              >
                <div className="text-white/40 text-[10px] mb-2">Go-Live Status</div>
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <div className="absolute inset-0 bg-emerald-400 rounded-full animate-ping" />
                    <div className="relative w-2 h-2 bg-emerald-400 rounded-full" />
                  </div>
                  <span className="font-bold text-white text-sm">On Track</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5 }}
                className="absolute -bottom-4 -left-4 p-4 rounded-2xl border border-white/20 backdrop-blur-xl"
                style={{
                  background: "linear-gradient(135deg, rgba(59,130,246,0.1), rgba(59,130,246,0.05))",
                }}
              >
                <div className="text-white/40 text-[10px] mb-2">Payroll Accuracy</div>
                <div className="font-extrabold text-white text-xl" style={{ fontFamily: "var(--font-plus-jakarta)" }}>99.9%</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full flex items-start justify-center pt-1.5"
          style={{ border: "1.5px solid rgba(255,255,255,0.15)" }}
        >
          <div className="w-1 h-2 rounded-full bg-teal" />
        </motion.div>
      </motion.div>
    </section>
  );
}
