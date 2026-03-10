"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Users, Calculator, Settings, Briefcase } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import Container from "@/components/layout/Container";

const SERVICES_DATA = [
  {
    id: "hcm",
    title: "Oracle Cloud HCM Implementation",
    desc: "Phoenix delivers Oracle Cloud HCM implementations built for enterprise scale, strong governance, and sustained adoption. We help organizations modernize HR while maintaining control over data, integrations, security, and downstream operational impact.",
    bullets: [
      "End-to-end Oracle Cloud HCM implementations",
      "Core HR, Talent, Benefits, Absence, and Security",
      "Data migration, integrations, reporting, and analytics",
      "Adoption support and post–go-live stabilization"
    ],
    icon: Users,
    color: "from-teal-400 to-teal-600",
    glow: "bg-teal-500/20",
    href: "/what-we-do/hcm-implementation",
    badge: "HCM"
  },
  {
    id: "payroll",
    title: "Oracle Cloud Payroll Implementation",
    desc: "Payroll is mission-critical and Phoenix delivers it with that level of rigor. We specialize in Oracle Cloud Payroll for complex enterprise environments where accuracy, compliance, and repeatability are non-negotiable.",
    bullets: [
      "Oracle Cloud Absence, Time and Labor, Workforce scheduling",
      "Payroll controls, validations, and accuracy test runs",
      "Compliance alignment and audit-readiness",
      "Payroll stabilization and ongoing optimization"
    ],
    icon: Calculator,
    color: "from-blue-400 to-blue-600",
    glow: "bg-blue-500/20",
    href: "/what-we-do/payroll-implementation",
    badge: "Payroll"
  },
  {
    id: "managed",
    title: "Managed Services",
    desc: "Enterprise HCM doesn't pause after go-live and neither does Phoenix. Phoenix Managed Services delivers a disciplined operating model focused on stability, risk control, and uninterrupted business operations.",
    bullets: [
      "Post–go-live support, stabilization, and operations",
      "Incident triage, root-cause analysis, and durable fixes",
      "Release, patch, and change management support",
      "Proactive monitoring, optimization, and continuous improvement"
    ],
    icon: Settings,
    color: "from-purple-400 to-purple-600",
    glow: "bg-purple-500/20",
    href: "/what-we-do/managed-services",
    badge: "GLIDE™"
  },
  {
    id: "professional",
    title: "Professional Services",
    desc: "When you need targeted expertise without slowing the program down, Phoenix provides focused professional services that plug into your existing delivery model.",
    bullets: [
      "Program and delivery advisory",
      "Data, integrations, and reporting support",
      "Payroll audits, remediation, and controls strengthening",
      "On-demand Oracle Cloud HCM and Payroll specialists"
    ],
    icon: Briefcase,
    color: "from-emerald-400 to-emerald-600",
    glow: "bg-emerald-500/20",
    href: "/what-we-do/professional-services",
    badge: "Advisory"
  }
];

export default function ServicesGrid() {
  return (
    <section className="py-24 bg-[#0A1929] relative overflow-hidden">
      {/* Decorative background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <Container className="relative">
        <div className="max-w-3xl mb-20">
          <AnimatedSection>
            <div className="inline-flex items-center justify-center px-3 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-bold tracking-widest uppercase mb-6">
              What We Do
            </div>
            <h2 
              className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              Measured performance.<br/>
              <span className="text-white/50">No surprises.</span>
            </h2>
            <p className="text-white/65 text-lg leading-relaxed font-medium">
              Phoenix Cloud Technologies delivers end-to-end Oracle Cloud HCM and Payroll services for organizations that need accuracy, control, and production <strong className="text-white">stability</strong> — not just a completed implementation.
            </p>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {SERVICES_DATA.map((service, i) => {
            const Icon = service.icon;
            return (
              <AnimatedSection key={service.id} delay={i * 0.1}>
                <div className="group relative h-full bg-[#0d2137]/80 backdrop-blur-md rounded-[2rem] border border-white/5 p-8 md:p-10 overflow-hidden transition-all duration-500 hover:border-white/20 hover:bg-[#0d2137]">
                  
                  {/* Hover gradient glow */}
                  <div className={`absolute -top-24 -right-24 w-64 h-64 rounded-full blur-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none ${service.glow}`} />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-8">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-500`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-semibold tracking-wide">
                        {service.badge}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-4 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/60 transition-all" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                      {service.title}
                    </h3>
                    
                    <p className="text-white/60 text-[15px] leading-relaxed mb-8">
                      {service.desc}
                    </p>

                    <ul className="space-y-3 mb-10">
                      {service.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-white/70">
                          <div className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-gradient-to-r ${service.color}`} />
                          <span className="leading-snug">{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto pt-6 border-t border-white/5 group-hover:border-white/10 transition-colors">
                      <Link
                        href={service.href}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-white transition-colors group/link"
                      >
                        Explore Service
                        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
