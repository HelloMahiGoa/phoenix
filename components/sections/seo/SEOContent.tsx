"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/layout/Container";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { ChevronDown, Database, ShieldCheck, RefreshCw, Network, AlertCircle, Users, Scale, FileText, CheckCircle2 } from "lucide-react";

const faqs = [
  {
    q: "How long does a typical Oracle Cloud HCM implementation take?",
    a: "Implementation timelines vary based on the complexity of your organization, the number of modules, and data readiness. A standard mid-enterprise deployment typically ranges from 6 to 9 months, while complex global rollouts may take 12 to 18 months. We focus on realistic timelines rather than optimistic estimates."
  },
  {
    q: "What makes your PayPerfect™ methodology different?",
    a: "PayPerfect™ treats payroll as a high-risk compliance function, not just another software module. We run extensive parallel testing against real historical data, ensuring edge cases—like mid-cycle promotions or retroactive tax changes—are calculated perfectly before you ever go live."
  },
  {
    q: "Do you offer support after the system goes live?",
    a: "Yes. Our GLIDE™ Managed Services provide ongoing support. Rather than just acting as a traditional break-fix helpdesk, we proactively monitor your system, handle Oracle's quarterly updates, and continuously optimize configurations as your business processes evolve."
  },
  {
    q: "Can you rescue an implementation that is currently struggling?",
    a: "We frequently step in to realign projects that have gone off track. Our first step is a rapid health assessment to identify configuration gaps, data issues, and timeline risks. We then establish a remediation plan to stabilize the build and restore stakeholder confidence."
  }
];

export default function SEOContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="bg-[#0A1929] relative overflow-hidden">
      {/* Universal Ambient Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-[120px]" />
        <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-[20%] left-[20%] w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />
      </div>

      <Container className="relative z-10 py-24 space-y-32">
        
        {/* Section 1: The Specialist Partner */}
        <AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 leading-tight" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                Navigating Your Oracle Cloud Transformation
              </h2>
              <div className="space-y-4 text-white/70 text-lg leading-relaxed font-medium">
                <p>
                  Choosing a technology partner is a significant decision. Generalist consulting firms often stretch their teams across dozens of different software platforms, leading to a surface-level understanding of any single system.
                </p>
                <p>
                  We focus our expertise exclusively on Oracle Cloud HCM and Payroll. This specialization means our practitioners understand the nuanced architecture, the specific workarounds, and the practical realities of deploying Oracle in complex enterprise environments. We aren't learning on your time; we are applying proven strategies from day one.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative aspect-square max-w-md mx-auto w-full">
              {/* Eye-catching abstract sphere motion */}
              <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/20 to-transparent rounded-full blur-2xl" />
              <motion.div 
                animate={{ rotate: 360, scale: [1, 1.05, 1] }} 
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-full h-full border-2 border-teal-500/40 rounded-full border-dashed shadow-[inset_0_0_50px_rgba(20,184,166,0.2)]"
              />
              <motion.div 
                animate={{ rotate: -360, scale: [0.9, 1, 0.9] }} 
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-8 border-[3px] border-blue-500/40 rounded-full shadow-[0_0_30px_rgba(59,130,246,0.3)]"
              />
              <motion.div 
                animate={{ rotate: 180, scale: [1.1, 0.9, 1.1] }} 
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-16 border border-purple-500/40 rounded-full border-dotted"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ scale: [1, 1.2, 1], filter: ["blur(0px)", "blur(2px)", "blur(0px)"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Users className="w-20 h-20 text-teal-400 drop-shadow-[0_0_15px_rgba(20,184,166,0.8)]" />
                </motion.div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Section 2: Implementation Pitfalls */}
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
              Addressing Common Implementation Challenges
            </h2>
            <p className="text-white/70 text-lg">
              Enterprise transformations rarely fail due to software limitations; they struggle because of execution. We proactively manage the risks that commonly derail projects.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Data Readiness", desc: "Legacy data is often messy. We emphasize early data cleansing and mapping to prevent migration bottlenecks later in the project.", icon: Database },
              { title: "Scope Creep", desc: "Requirements can expand indefinitely if left unchecked. Our governance model anchors every decision to your core business objectives.", icon: Scale },
              { title: "Testing Fatigue", desc: "Manual testing exhausts internal teams. We utilize structured validation frameworks to make testing focused, realistic, and conclusive.", icon: AlertCircle }
            ].map((item, i) => (
              <motion.div whileHover={{ y: -10 }} key={i} className="bg-[#0d2137]/80 backdrop-blur-md border border-white/10 p-8 rounded-3xl group">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
                  <item.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: "var(--font-plus-jakarta)" }}>{item.title}</h3>
                <p className="text-white/60 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* Section 3: Payroll Precision */}
        <AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center bg-gradient-to-r from-teal-900/20 to-transparent p-10 md:p-16 rounded-[3rem] border border-white/5">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 leading-tight" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                The Tangible Impact of Payroll Accuracy
              </h2>
              <div className="space-y-4 text-white/70 text-lg leading-relaxed">
                <p>
                  A 99% accuracy rate might sound acceptable in many business contexts, but in enterprise payroll, a 1% error rate means hundreds of employees are paid incorrectly. This leads to broken trust, compliance penalties, and administrative nightmares.
                </p>
                <p>
                  We treat payroll implementation as an exercise in precision engineering. By running rigorous parallel tests and validating gross-to-net calculations against real historical data, we ensure the system behaves predictably under real-world conditions.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-6 relative">
              {/* Animated abstract background grid */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(20,184,166,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(20,184,166,0.1)_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
              
              {[
                { label: "Gross-to-Net Accuracy", val: 100, color: "bg-teal-400", shadow: "shadow-[0_0_20px_rgba(45,212,191,0.5)]" },
                { label: "Parallel Test Match", val: 99.9, color: "bg-teal-500", shadow: "shadow-[0_0_15px_rgba(20,184,166,0.4)]" },
                { label: "Tax Calculation Sync", val: 100, color: "bg-teal-600", shadow: "shadow-[0_0_10px_rgba(13,148,136,0.3)]" }
              ].map((item, i) => (
                <div key={i} className="relative z-10">
                  <div className="flex justify-between text-xs font-bold text-white/80 mb-2 tracking-wide uppercase">
                    <span>{item.label}</span>
                    <span className="text-teal-400">{item.val}%</span>
                  </div>
                  <div className="w-full bg-[#0A1929] rounded-full h-3 overflow-hidden border border-white/10 relative">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.val}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: i * 0.2, ease: "easeOut" }}
                      className={`h-full rounded-full ${item.color} ${item.shadow} relative`}
                    >
                      <motion.div 
                        animate={{ x: ["-100%", "200%"] }} 
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="absolute top-0 left-0 w-1/2 h-full bg-white/40 blur-[2px] skew-x-[-20deg]" 
                      />
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Section 4 & 5: Integration & Industry */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <AnimatedSection>
            <div className="relative w-20 h-20 mb-8">
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} className="absolute inset-0 border border-purple-500/30 rounded-full border-dashed" />
              <motion.div animate={{ rotate: -360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute inset-2 border border-purple-400/40 rounded-full" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Network className="w-8 h-8 text-purple-400" />
              </div>
              {/* Data dots */}
              <motion.div animate={{ x: [0, 20, 0], y: [0, -20, 0], opacity: [0, 1, 0] }} transition={{ duration: 3, repeat: Infinity }} className="absolute top-0 right-0 w-2 h-2 bg-purple-300 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
              <motion.div animate={{ x: [0, -20, 0], y: [0, 20, 0], opacity: [0, 1, 0] }} transition={{ duration: 3, repeat: Infinity, delay: 1.5 }} className="absolute bottom-0 left-0 w-2 h-2 bg-purple-400 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
              System Integration Architecture
            </h2>
            <p className="text-white/70 leading-relaxed text-lg">
              Human Resources does not operate in a vacuum. Your Oracle Cloud environment must communicate securely with active directories, legacy ERPs, timeclocks, and third-party benefit providers. We map out a comprehensive integration architecture to establish a single, secure source of truth for all employee data.
            </p>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2}>
            <div className="relative w-20 h-20 mb-8">
              <div className="absolute inset-0 bg-emerald-500/10 rounded-2xl rotate-12" />
              <motion.div animate={{ rotate: [0, 90, 180, 270, 360] }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} className="absolute inset-0 border border-emerald-500/30 rounded-2xl" />
              <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} className="absolute inset-0 flex items-center justify-center">
                <ShieldCheck className="w-8 h-8 text-emerald-400 drop-shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
              </motion.div>
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
              Industry-Specific Configurations
            </h2>
            <p className="text-white/70 leading-relaxed text-lg">
              A healthcare provider tracking certifications requires a vastly different setup than a manufacturing plant managing union seniority. We bring industry-specific templates and localized compliance knowledge to the table, accelerating the build phase while adapting the system to the realities of your sector.
            </p>
          </AnimatedSection>
        </div>

        {/* Section 6: Change Management */}
        <AnimatedSection>
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
              Prioritizing User Adoption
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-10">
              The most flawlessly configured system holds no value if managers avoid using it. Implementing new technology is fundamentally an exercise in change management. We integrate communication plans, customized training materials, and stakeholder alignment strategies directly into our delivery timeline. We ensure your team understands not just *how* to use the new system, but *why* it benefits them.
            </p>
            {/* Eye-catching abstract mesh line */}
            <div className="w-full h-1 bg-gradient-to-r from-transparent via-teal-500/50 to-transparent rounded-full shadow-[0_0_20px_rgba(0,168,156,0.5)]" />
          </div>
        </AnimatedSection>

        {/* Section 7 & 8: Support & Updates */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatedSection className="bg-[#0d2137]/50 border border-white/10 p-10 rounded-[2rem] relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative z-10">
              <h2 className="text-2xl font-extrabold text-white mb-4" style={{ fontFamily: "var(--font-plus-jakarta)" }}>Proactive Post-Go-Live Support</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                Traditional support desks measure success by how quickly they close tickets. We measure success by system stability. If a specific error keeps occurring, we don't just patch the symptom; we investigate the root configuration or integration causing the issue to prevent it from happening again.
              </p>
              <ul className="space-y-4">
                {['Root cause analysis', 'Continuous workflow optimization', 'Dedicated specialist teams'].map((item, i) => (
                  <motion.li 
                    key={i} 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.15 + 0.3 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 text-sm text-white/80"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                    >
                      <CheckCircle2 className="w-5 h-5 text-teal-400 drop-shadow-[0_0_8px_rgba(45,212,191,0.6)]" />
                    </motion.div>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="bg-[#0d2137]/50 border border-white/10 p-10 rounded-[2rem] relative overflow-hidden group">
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative z-10">
              <div className="relative w-16 h-16 mb-6">
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }} className="absolute inset-0 border-[3px] border-blue-500/20 border-t-blue-400 rounded-full" />
                <motion.div animate={{ rotate: -360 }} transition={{ duration: 12, repeat: Infinity, ease: "linear" }} className="absolute inset-2 border-2 border-blue-400/20 border-b-blue-300 rounded-full" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div animate={{ rotate: 180 }} transition={{ duration: 4, repeat: Infinity, ease: "anticipate" }}>
                    <RefreshCw className="w-6 h-6 text-blue-400" />
                  </motion.div>
                </div>
              </div>
              <h2 className="text-2xl font-extrabold text-white mb-4" style={{ fontFamily: "var(--font-plus-jakarta)" }}>Managing Quarterly Releases</h2>
              <p className="text-white/60 leading-relaxed">
                Oracle pushes major updates four times a year. While this delivers constant innovation, it also risks breaking your custom configurations. We absorb this burden by rigorously testing upcoming releases against your specific environment in a sandbox, ensuring a smooth transition to production every quarter without straining your internal IT resources.
              </p>
            </div>
          </AnimatedSection>
        </div>

        {/* Section 9: Security */}
        <AnimatedSection>
          <div className="max-w-4xl mx-auto border-l-4 border-teal-500 pl-8 py-4">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
              Ensuring Data Security and Compliance
            </h2>
            <p className="text-white/70 leading-relaxed text-lg">
              Human resources and payroll systems hold your organization's most sensitive data. Protecting this information is foundational. We meticulously configure role-based access controls, ensuring employees and managers have the exact permissions required to perform their duties—nothing more, nothing less. Furthermore, we maintain rigorous audit trails to satisfy internal compliance requirements and external regulatory bodies.
            </p>
          </div>
        </AnimatedSection>

        {/* Section 10: FAQ Accordion */}
        <AnimatedSection>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <FileText className="w-10 h-10 text-white/40 mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-extrabold text-white" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                Frequently Asked Questions
              </h2>
            </div>
            
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="border border-white/10 bg-white/5 rounded-2xl overflow-hidden transition-colors hover:bg-white/10">
                  <button 
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <span className="text-white font-semibold text-lg">{faq.q}</span>
                    <motion.div animate={{ rotate: openFaq === i ? 180 : 0 }} className="flex-shrink-0 ml-4">
                      <ChevronDown className="w-5 h-5 text-teal-400" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="p-6 pt-0 text-white/60 leading-relaxed">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

      </Container>
    </div>
  );
}