import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Settings, CheckCircle } from "lucide-react";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { Button } from "@/components/ui/button";
import MarketingHero from "@/components/layout/MarketingHero";

export const metadata: Metadata = {
  title: "Managed Services (GLIDE™)",
  description:
    "GLIDE™ managed services for Oracle Cloud HCM & Payroll. Post go-live stability, 24x7 support, quarterly releases, and continuous optimization.",
};

const cadence = [
  { title: "Daily", items: ["Environment monitoring", "Alert triage & response", "Issue intake processing"] },
  { title: "Weekly", items: ["Service status review", "Open issue prioritization", "Change request assessment"] },
  { title: "Monthly", items: ["Service review meeting", "SLA reporting", "Optimization recommendations"] },
  { title: "Quarterly", items: ["Oracle update assessment", "Coordinated release management", "Strategic roadmap review"] },
];

export default function ManagedServicesPage() {
  return (
    <>
      <MarketingHero
        eyebrow="Post Go-Live · GLIDE™"
        title={<>GLIDE™<br />Managed Services</>}
        subtitle="Structured post go-live operating model. 24x7 support. Stable. Optimized. Accountable."
        icon={<Settings className="w-7 h-7" />}
      />

      <section className="py-24 bg-[#020617]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <AnimatedSection direction="left">
              <SectionHeading badge="GLIDE™ Model" title="Post Go-Live Done Right" align="left" />
              <div className="mt-6 space-y-4 text-text-muted leading-relaxed">
                <p>
                  Too many Oracle Cloud go-lives are followed by reactive, ad-hoc support arrangements that leave the environment degrading over time. GLIDE™ is different.
                </p>
                <p>
                  GLIDE™ operates on a structured, documented operating model — the same governance discipline as our implementations. Every service interaction is tracked in ZentoH™, every release is managed against a tested plan, and every quarter is reviewed against defined SLAs.
                </p>
                <p>
                  Go-live is the beginning of a long-term partnership. GLIDE™ keeps your Oracle Cloud HCM & Payroll environment stable, optimized, and current as your business evolves.
                </p>
              </div>
              <div className="mt-6 flex flex-col gap-2">
                {["Dedicated Oracle Cloud HCM & Payroll specialists", "All work tracked in ZentoH™", "Proactive — not just reactive", "Monthly SLA reporting with full transparency"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-slate">
                    <CheckCircle className="w-4 h-4 text-teal flex-shrink-0" />{item}
                  </div>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.1}>
              <SectionHeading badge="Operating Cadence" title="Structured Service Rhythm" align="left" />
              <div className="mt-6 space-y-4">
                {cadence.map((c) => (
                  <div key={c.title} className="p-4 rounded-xl bg-gray-bg border border-gray-100 hover:border-teal/30 transition-colors">
                    <div className="text-xs font-bold text-teal uppercase tracking-widest mb-2">{c.title}</div>
                    <div className="flex flex-wrap gap-2">
                      {c.items.map((item) => (
                        <span key={item} className="text-xs text-slate px-2 py-1 bg-white rounded-md border border-gray-100">{item}</span>
                      ))}
                    </div>
                  </div>
                ))}
                <div className="p-5 rounded-xl bg-navy text-white text-center">
                  <div className="text-3xl font-extrabold text-teal mb-1" style={{ fontFamily: "var(--font-plus-jakarta)" }}>24x7</div>
                  <div className="text-sm font-semibold mb-1">Operational Support</div>
                  <div className="text-xs text-white/50">Round-the-clock environment monitoring and critical issue response.</div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      <section className="py-20 bg-navy">
        <Container className="text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
              Ready for GLIDE™?
            </h2>
            <p className="text-white/60 mb-8 max-w-lg mx-auto">Whether post go-live or transitioning from another support arrangement, talk to Phoenix.</p>
            <Button asChild size="lg" variant="primary"><Link href="/contact">Discuss Managed Services <ArrowRight className="w-4 h-4" /></Link></Button>
          </AnimatedSection>
        </Container>
      </section>
    </>
  );
}
