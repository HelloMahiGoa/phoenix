import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Briefcase, CheckCircle } from "lucide-react";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { Button } from "@/components/ui/button";
import MarketingHero from "@/components/layout/MarketingHero";

export const metadata: Metadata = {
  title: "Professional Services",
  description:
    "On-demand Oracle Cloud HCM & Payroll expertise. Program advisory, data & integrations, payroll audits, remediation, and controls strengthening.",
};

const services = [
  {
    title: "Program & Delivery Advisory",
    desc: "Expert advisory for Oracle Cloud HCM & Payroll programs that need governance strengthening, risk remediation, or delivery restructuring.",
    items: ["Program health assessments", "Governance framework design", "Delivery recovery planning", "Executive reporting & oversight"],
  },
  {
    title: "Data, Integrations & Reporting",
    desc: "Specialist support for Oracle Cloud HCM data architecture, integration design, and reporting strategy.",
    items: ["Data migration support", "Integration architecture", "HCM Extract & BI reporting", "Data quality remediation"],
  },
  {
    title: "Payroll Audits & Remediation",
    desc: "Structured payroll audits to identify compliance gaps, configuration errors, and process risks in your Oracle Cloud Payroll environment.",
    items: ["Payroll compliance audits", "Configuration review & gap analysis", "Remediation roadmap", "Controls strengthening"],
  },
  {
    title: "On-Demand Specialists",
    desc: "Access to senior Oracle Cloud HCM & Payroll practitioners when you need them — for specific workstreams, knowledge gaps, or surge capacity.",
    items: ["Senior HCM consultants", "Payroll specialists", "Testing & QA resources", "Functional leads"],
  },
];

export default function ProfessionalServicesPage() {
  return (
    <>
      <MarketingHero
        eyebrow="Advisory Services"
        title={<>Professional<br />Services</>}
        subtitle="On-demand Oracle Cloud HCM & Payroll expertise when your program needs it most."
        icon={<Briefcase className="w-7 h-7" />}
      />

      <section className="py-24 bg-[#020617]">
        <Container>
          <AnimatedSection className="mb-14">
            <SectionHeading
              badge="Advisory Services"
              title="Expert Support for Every Stage"
              subtitle="Whether you need a program health check, payroll audit, integration support, or senior specialist capacity, Phoenix has the expertise."
            />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((svc, i) => (
              <AnimatedSection key={svc.title} delay={i * 0.1}>
                <div className="h-full p-8 rounded-2xl border border-gray-100 bg-white hover:border-teal/30 hover:shadow-lg transition-all">
                  <h3 className="text-xl font-bold text-navy mb-3" style={{ fontFamily: "var(--font-plus-jakarta)" }}>{svc.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed mb-5">{svc.desc}</p>
                  <div className="space-y-2">
                    {svc.items.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-sm text-slate">
                        <CheckCircle className="w-4 h-4 text-teal flex-shrink-0" />{item}
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 bg-navy">
        <Container className="text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
              Need Expert Support?
            </h2>
            <p className="text-white/60 mb-8 max-w-lg mx-auto">Tell us what your program needs. We&apos;ll scope the right engagement.</p>
            <Button asChild size="lg" variant="primary"><Link href="/contact">Get in Touch <ArrowRight className="w-4 h-4" /></Link></Button>
          </AnimatedSection>
        </Container>
      </section>
    </>
  );
}
