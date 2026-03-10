import type { Metadata } from "next";
import Link from "next/link";
import { Quote, ArrowRight, TrendingUp } from "lucide-react";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { TESTIMONIALS, CASE_STUDIES } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import MarketingHero from "@/components/layout/MarketingHero";

export const metadata: Metadata = {
  title: "Results & Proof",
  description:
    "Phoenix Cloud Technologies client results, case studies, and testimonials from enterprise Oracle Cloud HCM & Payroll programs.",
};

export default function ResultsPage() {
  return (
    <>
      <MarketingHero
        eyebrow="Client Outcomes"
        title="Results & Proof"
        subtitle="Success stories from enterprise Oracle Cloud programs."
      />

      {/* Case Studies */}
      <section className="py-24 bg-[#020617]">
        <Container>
          <AnimatedSection className="mb-14">
            <SectionHeading
              badge="Case Studies"
              title="Programs Delivered with Precision"
              subtitle="Real programs. Measurable outcomes. Enterprise accountability."
            />
          </AnimatedSection>
          <div className="space-y-6">
            {CASE_STUDIES.map((study, i) => (
              <AnimatedSection key={study.title} delay={i * 0.1}>
                <div className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden hover:border-teal/40 hover:shadow-[0_18px_45px_rgba(15,23,42,0.7)] transition-all">
                  <div className="grid grid-cols-1 lg:grid-cols-4">
                    <div className="bg-gradient-to-br from-teal-500/20 to-blue-500/20 p-8 flex flex-col justify-center">
                      <span className="text-xs text-teal-200 font-semibold uppercase tracking-widest mb-3">{study.industry}</span>
                      <h3 className="text-xl font-bold text-white" style={{ fontFamily: "var(--font-plus-jakarta)" }}>{study.title}</h3>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {study.metrics.map((m) => (
                          <span key={m} className="text-xs px-2 py-1 rounded-full bg-black/20 text-teal-100 border border-teal-300/50 backdrop-blur-sm">{m}</span>
                        ))}
                      </div>
                    </div>
                    <div className="lg:col-span-3 p-8 grid grid-cols-1 md:grid-cols-3 gap-6 bg-[#020617]">
                      <div>
                        <div className="text-xs font-bold text-red-400 uppercase tracking-widest mb-2">Challenge</div>
                        <p className="text-sm text-white/70 leading-relaxed">{study.challenge}</p>
                      </div>
                      <div>
                        <div className="text-xs font-bold text-teal uppercase tracking-widest mb-2">Solution</div>
                        <p className="text-sm text-white/70 leading-relaxed">{study.solution}</p>
                      </div>
                      <div>
                        <div className="text-xs font-bold text-success uppercase tracking-widest mb-2">Result</div>
                        <p className="text-sm text-teal-100 font-medium leading-relaxed">{study.result}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonials Gallery */}
      <section className="py-24 bg-gray-bg">
        <Container>
          <AnimatedSection className="mb-14">
            <SectionHeading
              badge="Client Testimonials"
              title="What Clients Say About Phoenix"
            />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {TESTIMONIALS.map((t, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="h-full bg-white rounded-2xl border border-gray-100 p-6 hover:border-teal/30 hover:shadow-md transition-all flex flex-col">
                  <Quote className="w-8 h-8 text-teal/40 mb-4 flex-shrink-0" />
                  <blockquote className="text-sm text-slate leading-relaxed flex-1 mb-5 italic">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <div className="border-t border-gray-100 pt-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-teal/15 flex items-center justify-center text-teal font-bold text-sm flex-shrink-0">
                        {t.author[0]}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-navy">{t.author}</div>
                        <div className="text-xs text-text-muted">{t.company}</div>
                      </div>
                      <span className="ml-auto px-2 py-0.5 rounded-full bg-gray-bg text-xs text-text-muted border border-gray-200 flex-shrink-0">
                        {t.industry}
                      </span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* Client Logo Wall placeholder */}
      <section className="py-16 bg-white border-t border-gray-100">
        <Container>
          <AnimatedSection>
            <div className="text-center mb-8">
              <p className="text-xs font-semibold text-text-muted uppercase tracking-widest">
                Trusted by enterprise organizations across industries
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-8">
              {["Financial Services", "Healthcare", "Manufacturing", "Retail", "Professional Services"].map((industry) => (
                <div key={industry} className="px-6 py-3 rounded-xl bg-gray-bg border border-gray-100 text-sm font-semibold text-text-muted hover:border-teal/30 hover:text-navy transition-colors">
                  {industry}
                </div>
              ))}
            </div>
          </AnimatedSection>
        </Container>
      </section>

      <section className="py-20 bg-navy">
        <Container className="text-center">
          <AnimatedSection>
            <TrendingUp className="w-12 h-12 text-teal mx-auto mb-5" />
            <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
              Add Your Program to Our Track Record
            </h2>
            <p className="text-white/60 mb-8 max-w-lg mx-auto">
              Discuss what precision delivery could mean for your Oracle Cloud program.
            </p>
            <Button asChild size="lg" variant="primary">
              <Link href="/contact">Contact Our Team <ArrowRight className="w-4 h-4" /></Link>
            </Button>
          </AnimatedSection>
        </Container>
      </section>
    </>
  );
}
