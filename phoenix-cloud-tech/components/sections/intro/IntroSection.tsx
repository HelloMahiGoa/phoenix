"use client";

import { Target, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionHeading from "@/components/shared/SectionHeading";
import Container from "@/components/layout/Container";
import Link from "next/link";
import { motion } from "framer-motion";

function AbstractGraphic() {
  return (
    <div className="relative w-full aspect-square max-w-md mx-auto flex items-center justify-center">
      {/* Background glowing gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00A89C]/10 to-blue-500/10 rounded-full blur-3xl" />
      
      <svg viewBox="0 0 400 400" className="w-full h-full drop-shadow-2xl overflow-visible">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00A89C" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#008a80" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="grad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#00A89C" stopOpacity="0.1" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Outer rotating rings */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "200px 200px" }}
        >
          <circle cx="200" cy="200" r="160" fill="none" stroke="url(#grad2)" strokeWidth="2" strokeDasharray="10 15" filter="url(#glow)" />
          <circle cx="200" cy="200" r="120" fill="none" stroke="rgba(0,168,156,0.4)" strokeWidth="3" strokeDasharray="30 15" />
          
          {/* Orbiting data packets */}
          <circle cx="360" cy="200" r="4" fill="#3B82F6" filter="url(#glow)" />
          <circle cx="40" cy="200" r="4" fill="#00A89C" filter="url(#glow)" />
        </motion.g>

        {/* Counter rotating elements */}
        <motion.g
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "200px 200px" }}
        >
          {/* Inner ring */}
          <circle cx="200" cy="200" r="95" fill="none" stroke="url(#grad1)" strokeWidth="1" strokeDasharray="5 5" />
          
          {/* Nodes */}
          {[0, 1, 2, 3, 4, 5].map((i) => {
            const angle = (i * 60 * Math.PI) / 180;
            const cx = 200 + 160 * Math.cos(angle);
            const cy = 200 + 160 * Math.sin(angle);
            return (
              <g key={i}>
                <motion.circle 
                  cx={cx} cy={cy} r="6" 
                  fill="#00A89C" 
                  filter="url(#glow)"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                />
                <line x1="200" y1="200" x2={cx} y2={cy} stroke="url(#grad2)" strokeWidth="1.5" strokeDasharray="4 6" opacity="0.6" />
              </g>
            );
          })}
        </motion.g>

        {/* Central Core with heavy pulse */}
        <motion.circle 
          cx="200" cy="200" r="60" 
          fill="url(#grad1)" 
          filter="url(#glow)"
          animate={{ scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle 
          cx="200" cy="200" r="40" 
          fill="none"
          stroke="#fff"
          strokeWidth="2"
          animate={{ scale: [1, 1.8, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
        />
        
        {/* Inner geometric structure */}
        <motion.path 
          d="M200 140 L250 230 L150 230 Z" 
          fill="none" 
          stroke="rgba(255,255,255,0.9)" 
          strokeWidth="2.5"
          filter="url(#glow)"
          animate={{ rotateY: [0, 180, 360], rotateZ: [0, 90, 180, 270, 360] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "200px 200px" }}
        />
        
        <circle cx="200" cy="200" r="80" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
      </svg>
    </div>
  );
}

export default function IntroSection() {
  return (
    <section className="py-24 bg-[#0A1929] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none" />
      
      {/* Decorative top border glow */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-500/30 to-transparent" />

      <Container>
        {/* Top Section: Enterprise Transformation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-32">
          <AnimatedSection direction="left" className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-bold tracking-widest uppercase mb-6">
              <Target className="w-3.5 h-3.5" />
              Delivery Excellence
            </div>
            
            <h2 
              className="text-4xl md:text-5xl font-extrabold text-white mb-8 leading-[1.1] tracking-tight"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              Enterprise Transformation, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">Clearly Controlled</span>
            </h2>
            
            <div className="space-y-6 text-white/70 text-lg leading-relaxed font-medium">
              <p>
                Enterprise transformations fail not because of ambition, but because execution lacks structure.
              </p>
              <p>
                Phoenix Cloud Technologies is an Oracle Cloud HCM and Payroll Implementation partner delivering <strong className="text-white font-semibold">outcome-led implementations</strong> with <strong className="text-white font-semibold">measured governance</strong> and <strong className="text-white font-semibold">payroll-grade precision</strong>. We specialize in complex enterprise environments where compliance, payroll accuracy, data integrity, and production stability are non-negotiable.
              </p>
              <p>
                From Oracle HCM implementation and Payroll transformation to testing, cutover, and post go-live stabilization, we bring disciplined delivery and evidence-based readiness, so what gets approved is what runs in production.
              </p>
              <p className="text-teal-300/90 font-semibold italic">
                If you want a partner who measures success by outcome achievement, not module completion, Phoenix is the team to call.
              </p>
            </div>
            
            <div className="mt-10">
              <Link
                href="/what-we-do"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 hover:border-white/20 transition-all group"
              >
                Learn More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.2} className="lg:col-span-5">
            <AbstractGraphic />
          </AnimatedSection>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/5 mb-24" />

        {/* Bottom Section: Who We Are */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <AnimatedSection direction="up" delay={0.1}>
            <h3 
              className="text-3xl font-extrabold text-white mb-6"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              Who We Are
            </h3>
            <div className="space-y-5 text-white/60 text-base leading-relaxed">
              <p>
                Phoenix Cloud Technologies is a team of experienced Oracle Cloud HCM practitioners operating with precision, intent, and accountability.
              </p>
              <p>
                Phoenix is built by professionals who bring decades of collective experience across Oracle Cloud HCM and Payroll programs. We are specialists by choice focused squarely on Oracle Cloud HCM, allowing us to develop true depth across functional domains, delivery patterns, and enterprise realities.
              </p>
              <p>
                What defines Phoenix is how we work. We value structure, clear ownership, and transparency. Our teams bring hands-on experience from complex programs, ask the right questions early, and stay closely engaged through execution. Clients work with seasoned professionals who are invested in outcomes, not just milestones.
              </p>
            </div>
            <Link
              href="/who-we-are"
              className="inline-flex items-center gap-2 mt-8 text-teal-400 font-semibold hover:text-teal-300 transition-colors group"
            >
              Learn more about our team
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.2}>
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 lg:p-10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl group-hover:bg-teal-500/20 transition-colors duration-500" />
              
              <h3 
                className="text-3xl font-extrabold text-white mb-6 relative z-10"
                style={{ fontFamily: "var(--font-plus-jakarta)" }}
              >
                Success in Practice
              </h3>
              <p className="text-white/60 text-base leading-relaxed mb-8 relative z-10">
                Our success stories reflect consistent execution across diverse enterprise programs. Clients partner with Phoenix when they need Oracle Cloud programs delivered with confidence, stability, and measurable outcomes. Each engagement is governed, tracked, and executed with accountability from start to finish.
              </p>
              
              <Link
                href="/results"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-teal-500 to-teal-600 text-white font-bold shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 hover:-translate-y-0.5 transition-all relative z-10"
              >
                View Success Stories
                <ArrowRight className="w-4.5 h-4.5" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
