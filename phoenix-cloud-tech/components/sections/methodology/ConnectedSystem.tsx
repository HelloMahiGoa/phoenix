"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Layers, Cpu, Database, Headphones } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionHeading from "@/components/shared/SectionHeading";
import Container from "@/components/layout/Container";

const METHODOLOGY_CONTENT = [
  {
    id: "flight",
    icon: Layers,
    title: "FLIGHT™",
    subtitle: "Structured implementation methodology",
    desc: "Phoenix delivers Oracle HCM through FLIGHT, our structured implementation methodology.",
    color: "from-teal-400 to-teal-600",
    bgLight: "bg-teal-500/10",
    border: "border-teal-500/30"
  },
  {
    id: "cloudifai",
    icon: Cpu,
    title: "CloudifAI™",
    subtitle: "Enterprise cloud transformation",
    desc: "Executed via a CloudifAI™ based delivery model that standardizes work, connects delivery to outcomes, and enforces governance with real-time visibility — not spreadsheets and status theatre.",
    color: "from-blue-400 to-blue-600",
    bgLight: "bg-blue-500/10",
    border: "border-blue-500/30"
  },
  {
    id: "zentoh",
    icon: Database,
    title: "ZentoH™",
    subtitle: "Orchestration Hub",
    desc: "Powering both is ZentoH™, our orchestration hub that unifies plans, evidence, approvals, and readiness into a single system of record so execution is consistent and auditable.",
    color: "from-purple-400 to-purple-600",
    bgLight: "bg-purple-500/10",
    border: "border-purple-500/30"
  },
  {
    id: "glide",
    icon: Headphones,
    title: "GLIDE™",
    subtitle: "From cutover to steady-state",
    desc: "After go-live, GLIDE™ Managed Services takes over with a steady operating cadence for monitoring, releases, issue triage, and continuous optimization — keeping outcomes stable as the business evolves.",
    color: "from-emerald-400 to-emerald-600",
    bgLight: "bg-emerald-500/10",
    border: "border-emerald-500/30"
  }
];

export default function ConnectedSystem() {
  const [active, setActive] = useState<string>("cloudifai"); // default active

  return (
    <section className="py-24 bg-[#0d2137] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02] mix-blend-overlay pointer-events-none" />
      
      {/* Background glow elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-teal-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <Container>
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <AnimatedSection>
            <div className="inline-flex items-center justify-center px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-widest uppercase mb-4">
              How We Deliver
            </div>
            <h2 
              className="text-4xl md:text-5xl font-extrabold text-white mb-6"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              The Integrated Model
            </h2>
            <p className="text-white/70 text-lg leading-relaxed">
              CloudifAI™, PayPerfect™, and GLIDE™ aren't separate frameworks. We deliver a connected system where decisions, proof, and controls flow forward across every phase.
            </p>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Interactive list */}
          <div className="lg:col-span-5 space-y-4">
            {METHODOLOGY_CONTENT.map((item, i) => {
              const isActive = active === item.id;
              const Icon = item.icon;
              return (
                <AnimatedSection key={item.id} delay={i * 0.1}>
                  <button
                    onClick={() => setActive(item.id)}
                    className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 relative overflow-hidden group ${
                      isActive 
                        ? `bg-[#0A1929] ${item.border} shadow-[0_8px_30px_rgba(0,0,0,0.5)]` 
                        : "bg-white/5 border-white/5 hover:border-white/15 hover:bg-white/10"
                    }`}
                  >
                    {/* Active highlight background */}
                    {isActive && (
                      <motion.div 
                        layoutId="active-bg"
                        className={`absolute inset-0 ${item.bgLight} opacity-50`}
                        initial={false}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    
                    <div className="relative z-10 flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                        isActive ? `bg-gradient-to-br ${item.color} text-white` : "bg-white/10 text-white/50 group-hover:text-white/80"
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className={`text-lg font-bold transition-colors ${isActive ? "text-white" : "text-white/80 group-hover:text-white"}`} style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                          {item.title}
                        </h3>
                        <p className={`text-xs mt-1 transition-colors ${isActive ? "text-white/70" : "text-white/40"}`}>
                          {item.subtitle}
                        </p>
                      </div>
                    </div>
                  </button>
                </AnimatedSection>
              );
            })}
          </div>

          {/* Right: Dynamic Content / Motion Graphic Area */}
          <AnimatedSection delay={0.3} className="lg:col-span-7">
            <div className="h-full min-h-[400px] rounded-3xl border border-white/10 bg-[#0A1929]/80 backdrop-blur-xl p-8 lg:p-12 relative overflow-hidden flex flex-col justify-center">
              
              <AnimatePresence mode="wait">
                {METHODOLOGY_CONTENT.map((item) => (
                  active === item.id && (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
                      transition={{ duration: 0.4 }}
                      className="relative z-10"
                    >
                      <div className="mb-8 relative inline-block">
                        <div className={`absolute inset-0 bg-gradient-to-r ${item.color} blur-2xl opacity-20`} />
                        <h3 className={`text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r ${item.color} relative z-10`} style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                          {item.title}
                        </h3>
                      </div>
                      
                      <p className="text-white/70 text-lg leading-relaxed font-medium">
                        {item.desc}
                      </p>

                      <div className="mt-12">
                        {/* Abstract motion graphic representing the active state */}
                        <div className="w-full h-32 relative flex items-center justify-center">
                          {item.id === "flight" && (
                            <div className="flex items-center gap-4">
                              {[1, 2, 3, 4, 5].map((step) => (
                                <motion.div 
                                  key={step}
                                  initial={{ opacity: 0, scale: 0 }}
                                  animate={{ opacity: [0.5, 1, 0.5], scale: [0.9, 1.1, 0.9] }}
                                  transition={{ delay: step * 0.2, duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                  className="w-12 h-12 rounded-lg border border-teal-500/30 bg-teal-500/10 flex items-center justify-center relative shadow-[0_0_15px_rgba(20,184,166,0.3)]"
                                >
                                  <div className="w-3 h-3 rounded-full bg-teal-400" />
                                  {step < 5 && (
                                    <motion.div 
                                      className="absolute left-[calc(100%+8px)] top-1/2 -translate-y-1/2 h-px bg-teal-400 origin-left" 
                                      initial={{ scaleX: 0 }}
                                      animate={{ scaleX: 1 }}
                                      transition={{ delay: step * 0.2 + 0.1, duration: 0.5 }}
                                      style={{ width: "16px" }}
                                    />
                                  )}
                                </motion.div>
                              ))}
                            </div>
                          )}
                          {item.id === "cloudifai" && (
                            <div className="relative flex items-center justify-center">
                              <motion.div 
                                animate={{ rotate: 360 }}
                                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                                className="relative w-32 h-32"
                              >
                                <div className="absolute inset-0 border-[3px] border-dashed border-blue-500/30 rounded-full" />
                                <div className="absolute inset-4 border-2 border-blue-400/40 rounded-full" />
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-5 h-5 bg-blue-400 rounded-full shadow-[0_0_30px_rgba(59,130,246,1)]" />
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-blue-300 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.8)]" />
                              </motion.div>
                              {/* Inner pulse */}
                              <motion.div 
                                animate={{ scale: [1, 1.5, 1], opacity: [0.8, 0, 0.8] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute w-12 h-12 bg-blue-500/50 rounded-full blur-md"
                              />
                            </div>
                          )}
                          {item.id === "zentoh" && (
                            <div className="relative w-full h-32 flex items-center justify-center">
                              {/* Core hub */}
                              <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                                className="relative w-28 h-28"
                              >
                                {/* Orbital rings */}
                                {[0, 1, 2].map((i) => (
                                  <motion.div
                                    key={i}
                                    className="absolute inset-0 border border-purple-500/30 rounded-full"
                                    style={{ rotate: i * 60 }}
                                    animate={{ 
                                      scale: [1, 1.15, 1], 
                                      opacity: [0.3, 0.8, 0.3],
                                      rotateX: [0, 180, 360]
                                    }}
                                    transition={{ 
                                      duration: 4, 
                                      repeat: Infinity, 
                                      delay: i * 0.5, 
                                      ease: "easeInOut" 
                                    }}
                                  />
                                ))}
                                
                                {/* Central glowing core */}
                                <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-xl" />
                                <div className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-purple-500 rounded-full shadow-[0_0_30px_rgba(168,85,247,0.8)] flex items-center justify-center z-10">
                                  <motion.div
                                    animate={{ scale: [1, 1.8, 1], opacity: [1, 0, 1] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                    className="w-4 h-4 bg-white rounded-full blur-[2px]"
                                  />
                                </div>
                              </motion.div>
                              
                              {/* Fast Orbiting Data Particles */}
                              <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                                className="absolute w-36 h-36"
                              >
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-purple-300 rounded-full shadow-[0_0_15px_rgba(216,180,254,1)]" />
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-purple-400 rounded-full shadow-[0_0_10px_rgba(192,132,252,1)]" />
                                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-purple-200 rounded-full shadow-[0_0_12px_rgba(233,213,255,1)]" />
                              </motion.div>
                            </div>
                          )}
                          {item.id === "glide" && (
                            <div className="relative w-full max-w-[280px] h-24 flex items-center justify-center">
                              {/* Background grid */}
                              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]" />
                              
                              <motion.svg viewBox="0 0 280 80" className="w-full h-full overflow-visible relative z-10">
                                {/* Soft background line */}
                                <motion.path
                                  d="M0 40 Q 35 10, 70 40 T 140 40 T 210 40 T 280 40"
                                  fill="none"
                                  stroke="rgba(16,185,129,0.15)"
                                  strokeWidth="6"
                                  strokeLinecap="round"
                                />
                                {/* Glowing animated line */}
                                <motion.path
                                  d="M0 40 Q 35 10, 70 40 T 140 40 T 210 40 T 280 40"
                                  fill="none"
                                  stroke="#10B981"
                                  strokeWidth="4"
                                  strokeLinecap="round"
                                  filter="drop-shadow(0 0 8px rgba(16,185,129,0.8))"
                                  initial={{ strokeDasharray: "0 1000" }}
                                  animate={{ 
                                    strokeDasharray: ["0 1000", "280 1000"],
                                    d: [
                                      "M0 40 Q 35 10, 70 40 T 140 40 T 210 40 T 280 40",
                                      "M0 40 Q 35 70, 70 40 T 140 40 T 210 40 T 280 40",
                                      "M0 40 Q 35 10, 70 40 T 140 40 T 210 40 T 280 40"
                                    ]
                                  }}
                                  transition={{ 
                                    strokeDasharray: { duration: 2, repeat: Infinity, repeatType: "loop" },
                                    d: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                                  }}
                                />
                                {/* Scanning dot */}
                                <motion.circle 
                                  r="6" 
                                  fill="#fff"
                                  filter="drop-shadow(0 0 10px #10B981)"
                                  animate={{
                                    cx: [0, 280],
                                    cy: [40, 40, 40, 40] // Simplified math for the dot to just scan across
                                  }}
                                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                />
                              </motion.svg>
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )
                ))}
              </AnimatePresence>

            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
