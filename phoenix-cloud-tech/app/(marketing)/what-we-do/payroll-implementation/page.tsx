import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight, Calculator } from "lucide-react";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { Button } from "@/components/ui/button";
import MarketingHero from "@/components/layout/MarketingHero";

export const metadata: Metadata = {
  title: "Oracle Cloud Payroll Implementation",
  description:
    "Precision Oracle Cloud Payroll implementation for enterprise complexity. PayPerfect™ approach ensures compliance at launch and beyond.",
};

const payrollCapabilities = [
  "Multi-jurisdiction payroll configuration",
  "Payroll element and formula setup",
  "Parallel run management & reconciliation",
  "Tax compliance & regulatory setup",
  "Year-end processing setup",
  "Third-party disbursement configuration",
  "Costing & accounting integration",
  "Self-service payroll review setup",
];

export default function PayrollImplementationPage() {
  return (
    <>
      <MarketingHero
        eyebrow="Core Service · Payroll"
        title={<>Oracle Cloud Payroll<br />Implementation</>}
        subtitle="Precision payroll delivery engineered for enterprise complexity. PayPerfect™ approach. Zero compliance surprises."
        icon={<Calculator className="w-7 h-7" />}
      />

      <section className="py-24 bg-[#020617]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <AnimatedSection direction="left">
              <SectionHeading badge="PayPerfect™" title="Payroll Built for Precision" align="left" />
              <div className="mt-6 space-y-4 text-text-muted leading-relaxed">
                <p>
                  Oracle Cloud Payroll is complex. Multi-jurisdiction requirements, custom elements, integration with finance systems, and zero tolerance for errors at go-live — it demands a delivery approach that matches its complexity.
                </p>
                <p>
                  Phoenix&apos;s PayPerfect™ approach brings exhaustive testing governance, structured parallel run management, and compliance validation protocols that ensure payroll goes live correctly — and stays correct.
                </p>
                <p>
                  Every payroll configuration is built against documented design, tested against defined scenarios, and signed off through ZentoH™ before go-live approval is granted.
                </p>
              </div>
              <div className="mt-8 bg-gray-bg rounded-xl border border-gray-100 p-6">
                <div className="text-sm font-bold text-navy mb-3" style={{ fontFamily: "var(--font-plus-jakarta)" }}>The PayPerfect™ Commitment</div>
                <div className="space-y-2">
                  {["No go-live without reconciled parallel run", "Full compliance validation before cutover", "Documented test evidence in ZentoH™", "Post go-live payroll stabilization period"].map((c) => (
                    <div key={c} className="flex items-center gap-2 text-sm text-slate">
                      <CheckCircle className="w-4 h-4 text-teal flex-shrink-0" />{c}
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.1}>
              <SectionHeading badge="Capabilities" title="Payroll Delivery Scope" align="left" />
              <div className="mt-6 grid grid-cols-1 gap-2">
                {payrollCapabilities.map((cap) => (
                  <div key={cap} className="flex items-center gap-3 py-3 border-b border-gray-100 last:border-0">
                    <CheckCircle className="w-4 h-4 text-teal flex-shrink-0" />
                    <span className="text-sm text-slate font-medium">{cap}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-6 rounded-xl bg-success/8 border border-success/20">
                <div className="text-2xl font-extrabold text-navy mb-1" style={{ fontFamily: "var(--font-plus-jakarta)" }}>99.9%</div>
                <div className="text-sm font-semibold text-success mb-1">Payroll Compliance Rate</div>
                <p className="text-xs text-text-muted">Maintained across Phoenix-delivered payroll programs.</p>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      <section className="py-20 bg-navy">
        <Container className="text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
              Discuss Your Payroll Program
            </h2>
            <p className="text-white/60 mb-8 max-w-lg mx-auto">Talk to a Phoenix payroll specialist.</p>
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
