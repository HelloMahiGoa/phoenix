"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/shared/AnimatedSection";
import Container from "@/components/layout/Container";
import { Target, Shield, LayoutGrid, Building2 } from "lucide-react";

const CORE_BELIEFS = [
  {
    title: "Results Over Activity",
    description: "We measure success by outcomes achieved, not effort expended.",
    icon: Target,
    color: "from-[#00A89C] to-teal-400"
  },
  {
    title: "Integrity in Execution",
    description: "We do what we commit to, with transparency at every stage of delivery.",
    icon: Shield,
    color: "from-blue-500 to-blue-400"
  },
  {
    title: "Structured Delivery",
    description: "Predictable outcomes come from repeatable, governed processes.",
    icon: LayoutGrid,
    color: "from-purple-500 to-purple-400"
  },
  {
    title: "Enterprise Responsibility",
    description: "We treat every system as mission-critical, because it is.",
    icon: Building2,
    color: "from-emerald-500 to-emerald-400"
  },
];

export default function CoreBeliefs() {
  return (
    <section className="py-24 bg-[#0A1929] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <AnimatedSection direction="left" className="lg:col-span-5">
            <h2 
              className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              Core Beliefs
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              These aren't marketing values — they're operational commitments embedded in how we structure, govern, and execute every Oracle Cloud program.
            </p>
          </AnimatedSection>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {CORE_BELIEFS.map((belief, i) => {
              const Icon = belief.icon;
              return (
                <AnimatedSection key={belief.title} delay={i * 0.1}>
                  <div className="group h-full bg-[#0d2137]/50 backdrop-blur-sm rounded-2xl border border-white/5 p-6 hover:bg-[#0d2137] hover:border-white/10 transition-all duration-300 relative overflow-hidden">
                    
                    <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none group-hover:scale-110 group-hover:opacity-10 transition-all duration-500">
                      <Icon className="w-24 h-24 text-white" />
                    </div>

                    <div className="relative z-10">
                      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-3" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                        {belief.title}
                      </h3>
                      <p className="text-white/60 text-sm leading-relaxed">
                        {belief.description}
                      </p>
                    </div>

                    {/* Bottom gradient line */}
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className={`w-full h-full bg-gradient-to-r ${belief.color}`} />
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>

        </div>
      </Container>
    </section>
  );
}
