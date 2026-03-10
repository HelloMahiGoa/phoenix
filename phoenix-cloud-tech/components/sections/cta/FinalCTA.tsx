"use client";

import Link from "next/link";
import { ArrowRight, Mail, Briefcase, ChevronRight } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import Container from "@/components/layout/Container";

export default function FinalCTA() {
  return (
    <section className="py-24 bg-[#0A1929] relative overflow-hidden border-t border-white/5">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-teal-500/10 via-blue-500/10 to-purple-500/10 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />
      </div>

      <Container className="relative">
        <AnimatedSection className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight max-w-3xl mx-auto"
            style={{ fontFamily: "var(--font-plus-jakarta)" }}
          >
            Ready to Move Forward
          </h2>
          <p className="text-white/70 text-lg leading-relaxed max-w-2xl mx-auto font-medium">
            If your Oracle Cloud program demands precision, governance, and accountable execution, Phoenix is ready to partner with you.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Card 1 */}
          <AnimatedSection delay={0.1}>
            <Link href="/what-we-do" className="group block h-full bg-[#0d2137]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-[#0d2137] hover:border-white/20 transition-all duration-300 relative overflow-hidden text-center">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-14 h-14 rounded-full bg-teal-500/10 flex items-center justify-center text-teal-400 mx-auto mb-6 group-hover:scale-110 transition-transform">
                <ChevronRight className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                Transform Your Oracle HCM & Payroll
              </h3>
              <p className="text-white/60 text-sm mb-6">Explore Our Services</p>
              <div className="inline-flex items-center gap-2 text-teal-400 text-sm font-semibold group-hover:text-teal-300">
                Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </AnimatedSection>

          {/* Card 2 (Primary) */}
          <AnimatedSection delay={0.2}>
            <Link href="/contact" className="group block h-full bg-gradient-to-b from-[#00A89C] to-[#008a80] border border-white/20 rounded-3xl p-8 hover:shadow-[0_10px_40px_rgba(0,168,156,0.3)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden text-center">
              {/* Shine sweep */}
              <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              
              <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                Speak with an Oracle Expert
              </h3>
              <p className="text-white/80 text-sm mb-6">Request a Consultation</p>
              <div className="inline-flex items-center gap-2 text-white text-sm font-semibold bg-white/20 px-4 py-2 rounded-full">
                Contact Us <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </AnimatedSection>

          {/* Card 3 */}
          <AnimatedSection delay={0.3}>
            <Link href="/careers" className="group block h-full bg-[#0d2137]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-[#0d2137] hover:border-white/20 transition-all duration-300 relative overflow-hidden text-center">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-14 h-14 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                Build Your Career with Phoenix
              </h3>
              <p className="text-white/60 text-sm mb-6">View Open Roles</p>
              <div className="inline-flex items-center gap-2 text-blue-400 text-sm font-semibold group-hover:text-blue-300">
                Careers <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
