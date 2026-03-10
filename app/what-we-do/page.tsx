import type { Metadata } from "next";
import Link from "next/link";
import { Users, Calculator, Settings, Briefcase, ArrowRight } from "lucide-react";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { SERVICES } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import MarketingHero from "@/components/layout/MarketingHero";

export const metadata: Metadata = {
  title: "What We Do",
  description:
    "Oracle Cloud HCM Implementation, Payroll Implementation, GLIDE™ Managed Services, and Professional Services. End-to-end Oracle Cloud delivery.",
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Users, Calculator, Settings, Briefcase,
};

export default function WhatWeDoPage() {
  return (
    <>
      <MarketingHero
        eyebrow="Services"
        title="What We Do"
        subtitle="End-to-end Oracle Cloud HCM & Payroll services — from implementation through ongoing managed services."
      />

      <section className="py-24 bg-white">
        <Container>
          <AnimatedSection className="mb-14">
            <SectionHeading
              badge="Our Services"
              title="Specialist Oracle Cloud Services"
              subtitle="Every service we offer is focused exclusively on Oracle Cloud HCM & Payroll. We don't dilute our expertise across other platforms."
            />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SERVICES.map((service, i) => {
              const Icon = iconMap[service.icon];
              return (
                <AnimatedSection key={service.title} delay={i * 0.1}>
                  <Link href={service.href} className="group block h-full p-8 rounded-2xl border border-gray-100 bg-white hover:border-teal/40 hover:shadow-xl transition-all">
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-14 h-14 rounded-xl bg-navy/5 text-navy flex items-center justify-center group-hover:bg-teal group-hover:text-white transition-all">
                        <Icon className="w-7 h-7" />
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-gray-bg text-xs font-semibold text-text-muted">{service.badge}</span>
                    </div>
                    <h2 className="text-2xl font-bold text-navy mb-3 group-hover:text-teal transition-colors" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                      {service.title}
                    </h2>
                    <p className="text-text-muted leading-relaxed mb-6">{service.description}</p>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-teal group-hover:gap-3 transition-all">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                </AnimatedSection>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="py-20 bg-navy">
        <Container className="text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
              Not Sure Where to Start?
            </h2>
            <p className="text-white/60 mb-8 max-w-lg mx-auto">
              Talk to a Phoenix practitioner. We&apos;ll quickly assess where your program stands and what it needs.
            </p>
            <Button asChild size="lg" variant="primary">
              <Link href="/contact">Discuss Your Program <ArrowRight className="w-4 h-4" /></Link>
            </Button>
          </AnimatedSection>
        </Container>
      </section>
    </>
  );
}
