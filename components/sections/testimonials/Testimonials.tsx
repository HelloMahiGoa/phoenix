"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import Container from "@/components/layout/Container";

const TESTIMONIALS = [
  {
    quote: "Post-implementation support was our biggest pain point. The Managed Services team at Phoenix doesn't just 'fix' tickets; they optimize our processes. Their deep expertise in Oracle HCM Cloud has turned our system into a strategic asset rather than just an administrative tool. They are a true extension of our internal team.",
    author: "VP",
    title: "HR Technology",
    company: "North American Financial Services Firm"
  },
  {
    quote: "Phoenix brought structure and clarity to a highly complex Oracle Cloud program, ensuring stability from day one. Their disciplined approach reduced risk, improved alignment, and delivered outcomes exactly as committed.",
    author: "Enterprise HR",
    title: "Technology Leader",
    company: ""
  },
  {
    quote: "Moving our legacy HRMS to Oracle Fusion seemed like a multi-year hurdle until we engaged Phoenix. They accelerated our deployment significantly, keeping us on track and in budget. Unlike larger firms where you get junior staff, Phoenix provided us with seasoned experts who understood the technical nuances of Redwood UI and OIC from day one.",
    author: "CIO",
    title: "Large Listed Chemical Manufacturing Company",
    company: ""
  },
  {
    quote: "We struggled with payroll discrepancies for two years following our initial migration. Phoenix Cloud Technologies stepped in and utilized their PayPerfect™ methodology to audit and stabilize our environment. For the first time since going live, we achieved 100% payroll accuracy across four different legal entities. Their senior-led approach truly sets the 'Phoenix Standard'.",
    author: "CHRO",
    title: "Global Automotive Parts Manufacturer",
    company: ""
  }
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((c) => (c + 1) % TESTIMONIALS.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, 7000);
    return () => clearInterval(t);
  }, [paused, next]);

  return (
    <section className="py-24 bg-[#0A1929] relative overflow-hidden">
      {/* Dynamic background mesh */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
        backgroundImage: `radial-gradient(at 20% 30%, rgba(0, 168, 156, 0.4) 0px, transparent 50%),
                          radial-gradient(at 80% 70%, rgba(59, 130, 246, 0.4) 0px, transparent 50%)`
      }} />

      <Container className="relative">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <AnimatedSection>
            <div className="inline-flex items-center justify-center px-3 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-bold tracking-widest uppercase mb-4">
              Client Testimonials
            </div>
            <h2 
              className="text-4xl md:text-5xl font-extrabold text-white"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              Proven in Production
            </h2>
          </AnimatedSection>
        </div>

        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="relative overflow-hidden min-h-[300px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                initial={{ opacity: 0, x: direction * 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -40 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full absolute inset-0"
              >
                <div className="bg-[#0d2137]/80 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 md:p-12 h-full flex flex-col justify-center text-center">
                  <Quote className="w-12 h-12 text-teal-500/40 mx-auto mb-6" />
                  
                  <blockquote className="text-white/90 text-lg md:text-xl leading-relaxed mb-8 font-medium px-4">
                    "{TESTIMONIALS[current].quote}"
                  </blockquote>
                  
                  <div>
                    <div className="text-white font-bold text-lg" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                      {TESTIMONIALS[current].author}
                    </div>
                    <div className="text-teal-400 text-sm font-medium mt-1">
                      {TESTIMONIALS[current].title}
                    </div>
                    {TESTIMONIALS[current].company && (
                      <div className="text-white/40 text-xs mt-1 uppercase tracking-wider">
                        {TESTIMONIALS[current].company}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center mt-8 gap-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 hover:bg-white/10 transition-all"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2.5">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                  className={`rounded-full transition-all duration-300 ${i === current ? "w-8 h-2 bg-teal-400" : "w-2 h-2 bg-white/20 hover:bg-white/40"}`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 hover:bg-white/10 transition-all"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
