"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import AnimatedSection from "@/components/shared/AnimatedSection";

function Counter({ target, suffix, duration = 2000 }: { target: number | null; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView || target === null) return;
    const start = performance.now();
    const animate = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [inView, target, duration]);

  if (target === null) return <span ref={ref}>24x7</span>;
  return <span ref={ref}>{count}{suffix}</span>;
}

const stats = [
  { value: 100, suffix: "%", label: "Delivery Ownership", description: "Full program accountability from day one." },
  { value: null, suffix: "", label: "Operational Support", description: "Round-the-clock managed services coverage." },
  { value: 99.9, suffix: "%", label: "Payroll Compliance", description: "Precision-engineered for enterprise payroll." },
];

export default function TrustStrip() {
  return (
    <section className="bg-[#0A1929] py-16 relative overflow-hidden border-y border-white/5">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-teal-500 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-48 h-48 rounded-full bg-blue-500 blur-3xl" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 md:divide-x md:divide-white/10">
          {stats.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={i * 0.15} className="text-center md:px-8">
              <div
                className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70 mb-2 tabular-nums inline-block"
                style={{ fontFamily: "var(--font-plus-jakarta)" }}
              >
                <Counter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-teal-400 font-semibold text-lg mb-2">{stat.label}</div>
              <div className="text-white/50 text-sm max-w-xs mx-auto">{stat.description}</div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.5} className="text-center mt-12">
          <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <span className="text-white/60 text-sm font-medium tracking-wide">
              Measured performance.
            </span>
            <span className="w-1 h-1 rounded-full bg-teal-500" />
            <span className="text-white text-sm font-semibold tracking-wide">
              No surprises.
            </span>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
