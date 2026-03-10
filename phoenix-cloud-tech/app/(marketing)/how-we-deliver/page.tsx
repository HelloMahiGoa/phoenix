import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight, Layers, Cpu, Database, Headphones } from "lucide-react";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { FLIGHT_PHASES, METHODOLOGY_COMPONENTS } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import MarketingHero from "@/components/layout/MarketingHero";

export const metadata: Metadata = {
  title: "How We Deliver",
  description:
    "Phoenix delivers Oracle Cloud HCM & Payroll through FLIGHT™ methodology, CloudifAI™ delivery model, ZentoH™ orchestration hub, and GLIDE™ managed services.",
};

export default function HowWeDeliverPage() {
  return (
    <>
      <MarketingHero
        eyebrow="Our Methodology"
        title="How We Deliver"
        subtitle="Structured methodology, connected execution."
      />

      {/* FLIGHT */}
      <section id="flight" className="py-24 bg-white scroll-mt-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection direction="left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal/10 text-teal text-xs font-semibold tracking-widest uppercase mb-4">
                <Layers className="w-3.5 h-3.5" /> Implementation Methodology
              </div>
              <h2 className="text-4xl font-extrabold text-navy mb-6" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                FLIGHT™ Methodology
              </h2>
              <p className="text-text-muted leading-relaxed mb-6">
                FLIGHT is Phoenix&apos;s structured implementation framework for Oracle Cloud HCM & Payroll. Each phase has defined entry criteria, governance checkpoints, and exit sign-offs — ensuring delivery is controlled, auditable, and always connected to program outcomes.
              </p>
              <p className="text-text-muted leading-relaxed">
                Unlike activity-based consulting, FLIGHT connects every workstream to a measurable deliverable. No phase completes without evidence of completion captured in ZentoH™.
              </p>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.1}>
              <div className="space-y-3">
                {FLIGHT_PHASES.map((phase, i) => (
                  <div key={phase.letter} className="flex items-start gap-4 p-4 rounded-xl bg-gray-bg border border-gray-100 hover:border-teal/30 transition-colors group">
                    <div className="w-10 h-10 rounded-lg bg-teal text-white flex items-center justify-center font-extrabold text-lg flex-shrink-0 group-hover:scale-105 transition-transform" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                      {phase.letter}
                    </div>
                    <div>
                      <div className="font-bold text-navy text-sm mb-1" style={{ fontFamily: "var(--font-plus-jakarta)" }}>{phase.name}</div>
                      <div className="text-xs text-text-muted leading-relaxed">{phase.description}</div>
                    </div>
                    <div className="ml-auto text-xs text-text-muted font-medium flex-shrink-0">Phase {i + 1}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* CloudifAI */}
      <section id="cloudifai" className="py-24 bg-gray-bg scroll-mt-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left" delay={0.1}>
              <div className="bg-navy rounded-2xl p-8 text-white">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {["Standardized Work Templates", "AI-Augmented Reviews", "Real-Time Governance", "Outcome Tracking", "Evidence Capture", "Automated Reporting"].map((feat) => (
                    <div key={feat} className="flex items-center gap-2 text-sm text-white/75">
                      <CheckCircle className="w-4 h-4 text-teal flex-shrink-0" />
                      {feat}
                    </div>
                  ))}
                </div>
                <div className="text-xs text-white/40 text-center">CloudifAI™ Delivery Platform</div>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal/10 text-teal text-xs font-semibold tracking-widest uppercase mb-4">
                <Cpu className="w-3.5 h-3.5" /> AI-Augmented Delivery
              </div>
              <h2 className="text-4xl font-extrabold text-navy mb-6" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                CloudifAI™ Delivery Model
              </h2>
              <p className="text-text-muted leading-relaxed mb-4">
                CloudifAI™ is the delivery model that powers how Phoenix executes FLIGHT phases. It standardizes how work is done, replacing improvised consultant approaches with governed, repeatable delivery patterns.
              </p>
              <p className="text-text-muted leading-relaxed mb-6">
                AI augmentation accelerates reviews, identifies configuration risks, and ensures delivery documentation is consistent across every engagement — giving you real-time visibility instead of status theatre.
              </p>
              <div className="flex flex-col gap-3">
                {["Replaces spreadsheets with structured delivery", "Connects every task to program outcomes", "Enforces governance without slowing delivery"].map((b) => (
                  <div key={b} className="flex items-center gap-2 text-sm text-navy font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal flex-shrink-0" />
                    {b}
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* ZentoH */}
      <section id="zentoh" className="py-24 bg-white scroll-mt-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal/10 text-teal text-xs font-semibold tracking-widest uppercase mb-4">
                <Database className="w-3.5 h-3.5" /> Orchestration Hub
              </div>
              <h2 className="text-4xl font-extrabold text-navy mb-6" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                ZentoH™ Orchestration Hub
              </h2>
              <p className="text-text-muted leading-relaxed mb-4">
                ZentoH™ is Phoenix&apos;s single system of record for all delivery. Plans, evidence, approvals, decisions, and readiness checks — all unified in one auditable platform.
              </p>
              <p className="text-text-muted leading-relaxed mb-6">
                Whether you&apos;re in a FLIGHT implementation or a GLIDE™ managed services engagement, ZentoH™ ensures execution is always consistent, fully documented, and available for client review at any time.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {["Program plans & workstreams", "Evidence & documentation", "Approval workflows", "Readiness checklists", "Issue & risk registers", "Audit trail"].map((feat) => (
                  <div key={feat} className="flex items-center gap-2 text-sm text-slate">
                    <CheckCircle className="w-4 h-4 text-teal flex-shrink-0" />
                    {feat}
                  </div>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.1}>
              {/* Dashboard mockup */}
              <div className="bg-navy rounded-2xl overflow-hidden shadow-2xl">
                <div className="bg-slate px-4 py-3 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400 opacity-70" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400 opacity-70" />
                    <div className="w-3 h-3 rounded-full bg-green-400 opacity-70" />
                  </div>
                  <span className="text-xs text-white/40 ml-2">ZentoH™ — Program Dashboard</span>
                </div>
                <div className="p-6 space-y-4">
                  {[
                    { label: "Foundation Phase", status: "Complete", pct: 100 },
                    { label: "Discovery & Design", status: "Complete", pct: 100 },
                    { label: "Configuration Build", status: "In Progress", pct: 72 },
                    { label: "UAT Governance", status: "Pending", pct: 0 },
                  ].map((item) => (
                    <div key={item.label}>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-white/70">{item.label}</span>
                        <span className={item.status === "Complete" ? "text-success" : item.status === "In Progress" ? "text-teal" : "text-white/30"}>
                          {item.status}
                        </span>
                      </div>
                      <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${item.status === "Complete" ? "bg-success" : item.status === "In Progress" ? "bg-teal" : "bg-white/5"}`}
                          style={{ width: `${item.pct}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* GLIDE */}
      <section id="glide" className="py-24 bg-gray-bg scroll-mt-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left" delay={0.1}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: "24x7 Monitoring", desc: "Continuous Oracle Cloud environment monitoring with proactive alerting." },
                  { title: "Quarterly Releases", desc: "Managed Oracle quarterly update assessments and coordinated releases." },
                  { title: "Issue Triage", desc: "Structured issue intake, prioritization, and resolution tracking." },
                  { title: "Continuous Optimization", desc: "Ongoing configuration improvements as your business evolves." },
                ].map((item) => (
                  <div key={item.title} className="bg-white rounded-xl border border-gray-100 p-5 hover:border-teal/30 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-teal mb-3" />
                    <h4 className="text-sm font-bold text-navy mb-1.5" style={{ fontFamily: "var(--font-plus-jakarta)" }}>{item.title}</h4>
                    <p className="text-xs text-text-muted leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal/10 text-teal text-xs font-semibold tracking-widest uppercase mb-4">
                <Headphones className="w-3.5 h-3.5" /> Post Go-Live
              </div>
              <h2 className="text-4xl font-extrabold text-navy mb-6" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                GLIDE™ Managed Services
              </h2>
              <p className="text-text-muted leading-relaxed mb-4">
                Go-live is not the finish line — it&apos;s the start of a new phase. GLIDE™ is Phoenix&apos;s post go-live managed services model, designed to maintain long-term stability and optimization of your Oracle Cloud HCM & Payroll environment.
              </p>
              <p className="text-text-muted leading-relaxed mb-6">
                GLIDE™ operates on a structured cadence: monthly service reviews, quarterly release management, 24x7 monitoring, and a dedicated issue resolution process — all governed through ZentoH™.
              </p>
              <Button asChild size="md" variant="primary">
                <Link href="/what-we-do/managed-services">
                  Explore GLIDE™ Services <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* Connected recap */}
      <section className="py-20 bg-navy">
        <Container>
          <AnimatedSection className="text-center mb-12">
            <SectionHeading
              badge="The Full Picture"
              title="One Connected System"
              subtitle="FLIGHT™, CloudifAI™, ZentoH™, and GLIDE™ are not separate products — they are four components of one integrated delivery system."
              light
            />
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              {["FLIGHT™\nMethodology", "CloudifAI™\nDelivery Model", "ZentoH™\nOrchestration", "GLIDE™\nManaged Services"].map((label, i) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="bg-white/8 border border-white/15 rounded-xl px-6 py-4 text-center min-w-32">
                    <div className="text-teal font-bold text-sm whitespace-pre-line" style={{ fontFamily: "var(--font-plus-jakarta)" }}>{label}</div>
                  </div>
                  {i < 3 && <ArrowRight className="w-5 h-5 text-teal/40 flex-shrink-0 rotate-0 md:rotate-0" />}
                </div>
              ))}
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.3} className="text-center mt-10">
            <Button asChild size="lg" variant="primary">
              <Link href="/contact">
                Discuss Your Program <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </AnimatedSection>
        </Container>
      </section>
    </>
  );
}
