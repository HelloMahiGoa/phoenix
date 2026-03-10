import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight, Users } from "lucide-react";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { Button } from "@/components/ui/button";
import MarketingHero from "@/components/layout/MarketingHero";

export const metadata: Metadata = {
  title: "Oracle Cloud HCM Implementation",
  description:
    "End-to-end Oracle Cloud HCM implementation governed by FLIGHT™ methodology and powered by CloudifAI™ delivery model.",
};

const modules = [
  "Core HR & Workforce Management",
  "Talent Management & Recruitment",
  "Learning & Development",
  "Compensation & Benefits",
  "Performance & Goals",
  "HR Help Desk & Service Center",
  "Absence Management",
  "Work Life Solutions",
];

const deliverables = [
  { phase: "Foundation", items: ["Program governance setup", "ZentoH™ environment configuration", "Stakeholder alignment"] },
  { phase: "Discovery", items: ["Current-state process mapping", "Requirements documentation", "Gap analysis"] },
  { phase: "Design & Build", items: ["Solution design sign-off", "Configuration & integration build", "Data migration strategy"] },
  { phase: "Test & Validate", items: ["UAT governance", "Parallel run management", "Compliance validation"] },
  { phase: "Go-Live", items: ["Readiness assessment", "Cutover execution", "Hypercare support"] },
];

export default function HCMImplementationPage() {
  return (
    <>
      <MarketingHero
        eyebrow="Core Service · HCM"
        title={<>Oracle Cloud HCM<br />Implementation</>}
        subtitle="Governed HCM implementation from discovery through go-live — built on FLIGHT™, powered by CloudifAI™."
        icon={<Users className="w-7 h-7" />}
      />

      <section className="py-24 bg-[#020617]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <AnimatedSection direction="left">
              <SectionHeading badge="The Engagement" title="How We Deliver HCM" align="left" />
              <div className="mt-6 space-y-4 text-text-muted leading-relaxed">
                <p>
                  Phoenix delivers Oracle Cloud HCM implementations using FLIGHT™ — our structured, phase-based methodology that ensures every deliverable is governed, evidenced, and connected to your program outcomes.
                </p>
                <p>
                  Unlike activity-based engagements, our HCM implementations are outcome-led from day one. You know exactly what will be delivered, when, and how it will be validated — captured and tracked in ZentoH™.
                </p>
              </div>
              <div className="mt-8 space-y-3">
                {deliverables.map((phase) => (
                  <div key={phase.phase} className="p-4 rounded-xl bg-gray-bg border border-gray-100 hover:border-teal/30 transition-colors">
                    <div className="text-xs font-bold text-teal uppercase tracking-widest mb-2">{phase.phase}</div>
                    <div className="flex flex-wrap gap-2">
                      {phase.items.map((item) => (
                        <span key={item} className="text-xs text-slate px-2 py-1 bg-white rounded-md border border-gray-100">{item}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.1}>
              <SectionHeading badge="Module Coverage" title="Oracle Cloud HCM Modules" align="left" />
              <div className="mt-6 grid grid-cols-1 gap-2">
                {modules.map((mod) => (
                  <div key={mod} className="flex items-center gap-3 py-3 border-b border-gray-100 last:border-0">
                    <CheckCircle className="w-4 h-4 text-teal flex-shrink-0" />
                    <span className="text-sm text-slate font-medium">{mod}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-6 rounded-xl bg-teal/8 border border-teal/20">
                <div className="text-sm font-bold text-navy mb-2" style={{ fontFamily: "var(--font-plus-jakarta)" }}>Governed by ZentoH™</div>
                <p className="text-xs text-text-muted leading-relaxed">
                  Every phase of your HCM implementation is tracked in ZentoH™. Plans, evidence, approvals, and readiness checks — fully auditable, always visible to your team.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      <section className="py-20 bg-navy">
        <Container className="text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
              Ready to Discuss Your HCM Program?
            </h2>
            <p className="text-white/60 mb-8 max-w-lg mx-auto">Talk to a Phoenix HCM specialist today.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" variant="primary"><Link href="/contact">Contact Us <ArrowRight className="w-4 h-4" /></Link></Button>
              <Button asChild size="lg" variant="outline"><Link href="/how-we-deliver">How We Deliver</Link></Button>
            </div>
          </AnimatedSection>
        </Container>
      </section>
    </>
  );
}
