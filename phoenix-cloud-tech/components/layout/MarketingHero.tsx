"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import Container from "@/components/layout/Container";

type MarketingHeroProps = {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  icon?: ReactNode;
};

export default function MarketingHero({ eyebrow, title, subtitle, icon }: MarketingHeroProps) {
  return (
    <section
      className="relative pt-32 pb-24 overflow-hidden"
      style={{ background: "radial-gradient(circle at top, #0f172a 0, #020617 45%, #020617 100%)" }}
    >
      {/* Animated background glows */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute -top-40 -left-32 w-[420px] h-[420px] rounded-full bg-teal-500/20 blur-[120px]"
          animate={{ x: [0, 20, 0], y: [0, -10, 0], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-48 right-0 w-[460px] h-[460px] rounded-full bg-blue-500/25 blur-[140px]"
          animate={{ x: [0, -30, 0], y: [0, 20, 0], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div
          className="absolute top-1/3 left-1/2 w-[260px] h-[260px] -translate-x-1/2 rounded-full border border-white/5"
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Subtle diagonal beam */}
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background: "linear-gradient(120deg, transparent 0%, rgba(15,118,110,0.35) 35%, transparent 65%)",
        }}
        animate={{ x: ["-15%", "15%", "-15%"] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      <Container className="relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-[0.22em] uppercase text-white/80 mb-6 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
            <span>{eyebrow}</span>
          </div>

          <div className="flex items-start gap-4">
            {icon && (
              <div className="hidden sm:flex w-14 h-14 rounded-2xl bg-white/5 border border-white/10 items-center justify-center text-teal-300 mr-1">
                {icon}
              </div>
            )}
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight"
                style={{ fontFamily: "var(--font-plus-jakarta)" }}
              >
                {title}
              </motion.h1>

              {subtitle && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mt-5 text-lg md:text-xl text-white/70 max-w-xl leading-relaxed"
                >
                  {subtitle}
                </motion.p>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

