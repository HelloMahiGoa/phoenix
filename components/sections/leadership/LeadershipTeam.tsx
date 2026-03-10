"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/shared/AnimatedSection";
import Container from "@/components/layout/Container";
import Image from "next/image";
import { Linkedin } from "lucide-react";

const LEADERS = [
  {
    name: "Swami Nemmely",
    role: "Managing Director",
    initials: "SN",
    image: "/images/leaders/Leadership Team - Swami Pic.avif",
    accent: "from-teal-400 to-teal-600"
  },
  {
    name: "Sandeep Ghodgavakar",
    role: "Principal, Sales & Marketing",
    initials: "SG",
    image: "/images/leaders/Leadership-Team-Pic-Sandeep-Ghodgavakar.avif",
    accent: "from-blue-400 to-blue-600"
  },
  {
    name: "Shakthi Hegde",
    role: "Principal, Delivery Excellence",
    initials: "SH",
    image: "/images/leaders/Leadership-Team-Pic-Shakthi.avif",
    accent: "from-purple-400 to-purple-600"
  },
  {
    name: "Gopakumar C P",
    role: "Principal, HR & Talent Acquisition",
    initials: "GC",
    image: "/images/leaders/Leadership-Team-Pic-Gopa.avif",
    accent: "from-emerald-400 to-emerald-600"
  }
];

export default function LeadershipTeam() {
  return (
    <section className="py-32 bg-[#0A1929] relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none z-0" />
      <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(0,168,156,0.1)_0%,transparent_50%)] blur-3xl pointer-events-none z-0" />
      <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.1)_0%,transparent_50%)] blur-3xl pointer-events-none z-0" />

      <Container className="relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <AnimatedSection>
            <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/80 text-xs font-bold tracking-[0.2em] uppercase mb-6 backdrop-blur-sm">
              Our People
            </div>
            <h2 
              className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/50 mb-6 leading-tight"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              Accountability at the Top
            </h2>
            <p className="text-white/60 text-lg leading-relaxed font-medium">
              Phoenix is led by practitioner-leaders who have delivered Oracle HCM and enterprise programs in complex, high-stakes environments across industries and geographies. They stay actively involved to ensure decisions are made quickly and execution stays grounded in delivery reality.
            </p>
          </AnimatedSection>
        </div>

        {/* Unique Diagonal / Staggered Layout for Leaders */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {LEADERS.map((leader, i) => (
            <AnimatedSection 
              key={leader.name} 
              delay={i * 0.15}
              className={`flex flex-col ${i % 2 !== 0 ? 'lg:mt-16' : ''}`} // Staggered vertical layout on desktop
            >
              <div className="group relative w-full aspect-[3/4] rounded-[2rem] overflow-hidden bg-[#0d2137] border border-white/10 cursor-pointer">
                
                {/* Accent glow on hover */}
                <div className={`absolute inset-0 bg-gradient-to-b ${leader.accent} opacity-0 group-hover:opacity-20 transition-opacity duration-700 z-10 pointer-events-none mix-blend-overlay`} />

                {/* The Image */}
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />

                {/* Bottom gradient fade for text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1929] via-[#0A1929]/50 to-transparent opacity-80 z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1929] via-[#0A1929]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  
                  {/* Decorative line */}
                  <div className={`w-8 h-1 rounded-full bg-gradient-to-r ${leader.accent} mb-4 opacity-50 group-hover:opacity-100 group-hover:w-12 transition-all duration-500`} />

                  <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/70 transition-all" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                    {leader.name}
                  </h3>
                  
                  <p className="text-white/60 text-sm font-medium leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                    {leader.role}
                  </p>

                  {/* LinkedIn / Bio link that appears on hover */}
                  <div className="mt-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                    <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/80 hover:bg-white hover:text-[#0A1929] transition-colors">
                      <Linkedin className="w-4 h-4" />
                    </span>
                  </div>
                </div>

                {/* Corner border accents */}
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-white/0 group-hover:border-white/30 transition-colors duration-500 z-20 rounded-tr-xl" />
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-white/0 group-hover:border-white/30 transition-colors duration-500 z-20 rounded-bl-xl" />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
