import type { Metadata } from "next";
import Link from "next/link";
import { Target, Shield, LayoutGrid, Building2, ArrowRight, Users, Award, Clock } from "lucide-react";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { CORE_BELIEFS } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import MarketingHero from "@/components/layout/MarketingHero";
import LeadershipTeam from "@/components/sections/leadership/LeadershipTeam";

export const metadata: Metadata = {
  title: "Who We Are",
  description:
    "Phoenix Cloud Technologies — built by Oracle Cloud HCM & Payroll practitioners, led by precision. Learn about our philosophy, principles, and approach.",
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Target, Shield, LayoutGrid, Building2,
};

const stats = [
  { icon: Clock, value: "Decades", label: "Collective Oracle Cloud Experience" },
  { icon: Users, value: "Enterprise", label: "Program Focus Only" },
  { icon: Award, value: "100%", label: "Practitioner-Led Teams" },
];

const principles = [
  {
    belief: "Results Over Activity",
    guide: "Every workstream we set up, every task we assign, every milestone we track is tied to a measurable program outcome — not consultant hours. We close engagements when objectives are achieved, not when the contract expires.",
  },
  {
    belief: "Integrity in Execution",
    guide: "We surface risks early, communicate blockers honestly, and never manufacture status. Our governance through ZentoH™ means every piece of evidence, every approval, every test result is visible — to us and to you.",
  },
  {
    belief: "Structured Delivery",
    guide: "FLIGHT™ isn't a sales slide — it's how we actually run programs. Every phase has defined entry and exit criteria. Every go-live has a ZentoH™ readiness checklist. Structure is what makes delivery predictable.",
  },
  {
    belief: "Enterprise Responsibility",
    guide: "We take full ownership of program outcomes. Our team leads carry accountability that goes beyond task completion. When the program succeeds, we succeed — and that alignment drives everything we do.",
  },
];

export default function WhoWeArePage() {
  return (
    <>
      <MarketingHero
        eyebrow="About Phoenix"
        title="Who We Are"
        subtitle="Built by practitioners, led by precision."
      />

      {/* Philosophy */}
      <section className="py-24 bg-[#020617]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <SectionHeading
                badge="Our Philosophy"
                title="Practitioners First, Always"
                align="left"
              />
              <div className="mt-6 space-y-4 text-white/70 leading-relaxed">
                <p>
                  Phoenix Cloud Technologies was founded on a straightforward premise: Oracle Cloud HCM & Payroll implementations fail not because of technology, but because of how they&apos;re managed. Status theatre replaces honest progress. Activity replaces outcomes. Governance becomes a checkbox rather than a control mechanism.
                </p>
                <p>
                  We built Phoenix to be different. Our team is composed entirely of seasoned Oracle Cloud HCM & Payroll practitioners — people who have run these programs from discovery through go-live and beyond. We know where implementations break down, and we&apos;ve built our methodology, tooling, and operating model specifically to prevent it.
                </p>
                <p>
                  Every engagement is led by a practitioner who carries genuine ownership of program outcomes. We don&apos;t staff junior consultants to run your program while seniors collect credit.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.1}>
              <div className="grid grid-cols-1 gap-4">
                {stats.map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <div key={stat.label} className="flex items-center gap-5 p-5 rounded-xl bg-white/5 border border-white/10">
                      <div className="w-12 h-12 rounded-xl bg-teal/15 text-teal flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-2xl font-extrabold text-white" style={{ fontFamily: "var(--font-plus-jakarta)" }}>{stat.value}</div>
                        <div className="text-sm text-white/60">{stat.label}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* Leadership Principles */}
      <section className="py-24 bg-[#020617] border-t border-white/5">
        <Container>
          <AnimatedSection className="mb-14">
            <SectionHeading
              badge="Leadership Principles"
              title="How Our Beliefs Guide Every Engagement"
              subtitle="These four principles aren't aspirational — they're operational. Each one shapes how we structure, govern, and execute your program."
            />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {principles.map((p, i) => {
              const belief = CORE_BELIEFS.find((b) => b.title === p.belief)!;
              const Icon = iconMap[belief.icon];
              return (
                <AnimatedSection key={p.belief} delay={i * 0.1}>
                  <div className="h-full bg-white/5 rounded-2xl border border-white/10 p-8 hover:border-teal/40 hover:shadow-[0_18px_45px_rgba(15,23,42,0.7)] transition-all">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-teal/15 text-teal flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-bold text-white" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                        {p.belief}
                      </h3>
                    </div>
                    <p className="text-white/70 text-sm leading-relaxed">{p.guide}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </Container>
      </section>

      {/* How we work day to day */}
      <section className="py-24 bg-[#020617] border-t border-white/5">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-14">
            <AnimatedSection>
              <SectionHeading
                badge="How We Work"
                title="What It Feels Like to Work With Us"
                subtitle="Beyond frameworks and acronyms, this is what day‑to‑day collaboration with Phoenix looks like."
                light
              />
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <AnimatedSection>
              <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col">
                <h3 className="text-lg font-bold text-white mb-3" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                  Clear, uncomplicated communication
                </h3>
                <p className="text-sm text-white/70 leading-relaxed flex-1">
                  We keep conversations straightforward and practical. Status updates are grounded in facts, not jargon, and we are explicit about risks, trade‑offs, and decisions.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col">
                <h3 className="text-lg font-bold text-white mb-3" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                  Pragmatic recommendations
                </h3>
                <p className="text-sm text-white/70 leading-relaxed flex-1">
                  We share options with pros and cons rather than one “perfect” answer. Our guidance balances design purity with what is realistic for your timelines, teams, and constraints.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col">
                <h3 className="text-lg font-bold text-white mb-3" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                  Shared ownership of outcomes
                </h3>
                <p className="text-sm text-white/70 leading-relaxed flex-1">
                  When a decision is made, we carry it with you. We do not distance ourselves from difficult calls or blame process. If something is not working, we address it openly and adjust.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* Right fit */}
      <section className="py-24 bg-[#020617] border-t border-white/5">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection>
              <SectionHeading
                badge="Fit Matters"
                title="When Phoenix Is a Good Match"
                subtitle="The best outcomes happen when both sides know what they are signing up for."
                align="left"
                light
              />
              <p className="mt-6 text-white/70 text-sm md:text-base leading-relaxed max-w-xl">
                We work best with teams who value structure, clear accountability, and honest dialogue. You do not need everything to be defined on day one, but you do need to be comfortable making informed decisions and standing behind them.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-6">
                  <h3 className="text-sm font-semibold text-emerald-300 mb-3 tracking-widest uppercase" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                    A good fit if…
                  </h3>
                  <ul className="space-y-2 text-sm text-white/80">
                    <li>• your program is high‑stakes or highly visible</li>
                    <li>• you prefer practitioners to lead rather than only advise</li>
                    <li>• you are open to structured governance and evidence‑based decisions</li>
                    <li>• you want a partner who will challenge assumptions respectfully</li>
                  </ul>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5/10 p-6">
                  <h3 className="text-sm font-semibold text-white/70 mb-3 tracking-widest uppercase" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                    Not the best fit if…
                  </h3>
                  <ul className="space-y-2 text-sm text-white/60">
                    <li>• you are looking for short‑term staff augmentation only</li>
                    <li>• project decisions are made mainly for optics</li>
                    <li>• you want minimal change to existing processes regardless of risk</li>
                    <li>• you prefer low‑touch oversight from your delivery partner</li>
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* Team Philosophy */}
      <section className="py-24 bg-[#020617] border-t border-white/5">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedSection>
              <SectionHeading
                badge="Our Team"
                title="A Team Built Around Accountability"
                subtitle="We don't have a bench of generalist consultants. Phoenix is a specialist firm — every person on your program is deeply experienced in Oracle Cloud HCM or Payroll, or both."
                light
              />
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
                {[
                  { title: "Specialist Focus", desc: "Oracle Cloud HCM & Payroll only. No generalist cloud consulting." },
                  { title: "Practitioner-Led", desc: "Program leads are senior practitioners, not relationship managers." },
                  { title: "Outcome-Aligned", desc: "Team incentives are tied to program success, not billable hours." },
                ].map((item) => (
                  <div key={item.title} className="p-5 rounded-xl bg-white/5 border border-white/10">
                    <div className="w-2 h-2 rounded-full bg-teal mb-3" />
                    <h4 className="font-bold text-white text-sm mb-1.5" style={{ fontFamily: "var(--font-plus-jakarta)" }}>{item.title}</h4>
                    <p className="text-xs text-white/65 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* Global leadership visual */}
      <LeadershipTeam />

      {/* CTA */}
      <section className="py-20 bg-navy border-t border-white/10">
        <Container className="text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
              Ready to see if we are a fit?
            </h2>
            <p className="text-white/60 mb-8 max-w-lg mx-auto">
              If this sounds like the way you want your Oracle Cloud HCM or Payroll program to be run, we would be glad to have a conversation.
            </p>
            <Button asChild size="lg" variant="primary">
              <Link href="/contact">
                Talk with a practitioner <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </AnimatedSection>
        </Container>
      </section>
    </>
  );
}
