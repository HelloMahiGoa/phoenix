import type { Metadata } from "next";
import { Mail, Clock, Calendar } from "lucide-react";
import Container from "@/components/layout/Container";
import AnimatedSection from "@/components/shared/AnimatedSection";
import ContactForm from "./ContactForm";
import MarketingHero from "@/components/layout/MarketingHero";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Phoenix Cloud Technologies to discuss your Oracle Cloud HCM or Payroll program. We respond within 1 business day.",
};

export default function ContactPage() {
  return (
    <>
      <MarketingHero
        eyebrow="Get in Touch"
        title="Let’s Talk"
        subtitle="Tell us about your Oracle Cloud program. We’ll respond within 1 business day."
      />

      <section className="py-24 bg-[#020617]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form - 3 cols */}
            <AnimatedSection direction="left" className="lg:col-span-3">
              <h2 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                Discuss Your Program
              </h2>
              <ContactForm />
            </AnimatedSection>

            {/* Info - 2 cols */}
            <AnimatedSection direction="right" delay={0.1} className="lg:col-span-2">
              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <div className="w-10 h-10 rounded-lg bg-teal/15 text-teal flex items-center justify-center mb-4">
                    <Mail className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-white mb-1.5 text-sm" style={{ fontFamily: "var(--font-plus-jakarta)" }}>Email Us Directly</h3>
                  <a href="mailto:info@phoenixcloudtech.com" className="text-teal-300 font-medium text-sm hover:underline">
                    info@phoenixcloudtech.com
                  </a>
                  <p className="text-xs text-white/50 mt-1.5">For immediate inquiries or sensitive program details.</p>
                </div>

                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <div className="w-10 h-10 rounded-lg bg-teal/15 text-teal flex items-center justify-center mb-4">
                    <Clock className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-white mb-1.5 text-sm" style={{ fontFamily: "var(--font-plus-jakarta)" }}>Response Time</h3>
                  <p className="text-teal-300 font-medium text-sm">Within 1 business day</p>
                  <p className="text-xs text-white/50 mt-1.5">We review every inquiry personally. No automated responses or sales queue.</p>
                </div>

                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <div className="w-10 h-10 rounded-lg bg-teal/15 text-teal flex items-center justify-center mb-4">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-white mb-1.5 text-sm" style={{ fontFamily: "var(--font-plus-jakarta)" }}>Schedule a Call</h3>
                  <p className="text-xs text-white/60 mb-3">Prefer to talk directly? Use the link below to schedule a 30-minute introductory call with a Phoenix practitioner.</p>
                  <a
                    href="mailto:info@phoenixcloudtech.com?subject=Schedule%20a%20Call"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-300 hover:underline"
                  >
                    <Calendar className="w-4 h-4" />
                    Request a Meeting
                  </a>
                </div>

                <div className="p-6 rounded-2xl bg-navy text-white">
                  <h3 className="font-bold text-white mb-3 text-sm" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                    What to Expect
                  </h3>
                  <ul className="space-y-2 text-xs text-white/65">
                    {[
                      "Response from a senior Phoenix practitioner",
                      "No sales pitch — a genuine program conversation",
                      "Clear next steps if there&apos;s a mutual fit",
                      "Honest assessment of what your program needs",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-teal mt-1.5 flex-shrink-0" />
                        <span dangerouslySetInnerHTML={{ __html: item }} />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>
    </>
  );
}
