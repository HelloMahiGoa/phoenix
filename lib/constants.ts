export const NAV_LINKS = [
  { label: "Who We Are", href: "/who-we-are" },
  {
    label: "What We Do",
    href: "/what-we-do",
    children: [
      { label: "Oracle Cloud HCM Implementation", href: "/what-we-do/hcm-implementation" },
      { label: "Oracle Cloud Payroll Implementation", href: "/what-we-do/payroll-implementation" },
      { label: "Managed Services (GLIDE™)", href: "/what-we-do/managed-services" },
      { label: "Professional Services", href: "/what-we-do/professional-services" },
    ],
  },
  {
    label: "How We Deliver",
    href: "/how-we-deliver",
    children: [
      { label: "FLIGHT™ Methodology", href: "/how-we-deliver#flight" },
      { label: "CloudifAI™ Delivery Model", href: "/how-we-deliver#cloudifai" },
      { label: "ZentoH™ Orchestration Hub", href: "/how-we-deliver#zentoh" },
      { label: "GLIDE™ Managed Services", href: "/how-we-deliver#glide" },
    ],
  },
  { label: "Results", href: "/results" },
  { label: "Contact", href: "/contact" },
];

export const TRUST_STATS = [
  { value: "100%", label: "Delivery Ownership", numeric: 100, suffix: "%" },
  { value: "24x7", label: "Operational Support", numeric: null, suffix: "" },
  { value: "99.9%", label: "Payroll Compliance", numeric: 99.9, suffix: "%" },
];

export const CORE_BELIEFS = [
  {
    title: "Results Over Activity",
    description:
      "We measure success by outcomes achieved, not effort expended. Every action we take is tied to a deliverable that moves your program forward.",
    icon: "Target",
  },
  {
    title: "Integrity in Execution",
    description:
      "We do what we commit to, with transparency at every stage of delivery. No surprises. No status theatre. Just honest, accountable progress.",
    icon: "Shield",
  },
  {
    title: "Structured Delivery",
    description:
      "Governance isn't overhead — it's what makes delivery predictable. Our structured approach ensures every phase is controlled, documented, and auditable.",
    icon: "LayoutGrid",
  },
  {
    title: "Enterprise Responsibility",
    description:
      "We take full ownership of program outcomes. When you partner with Phoenix, you get a team that carries your objectives as their own.",
    icon: "Building2",
  },
];

export const SERVICES = [
  {
    title: "Oracle Cloud HCM Implementation",
    description:
      "End-to-end Oracle Cloud HCM delivery — from discovery and design through configuration, testing, and go-live — governed by FLIGHT and powered by CloudifAI™.",
    icon: "Users",
    href: "/what-we-do/hcm-implementation",
    badge: "Core Service",
  },
  {
    title: "Oracle Cloud Payroll Implementation",
    description:
      "Precision payroll delivery for enterprise complexity. Our PayPerfect™ approach ensures payroll is configured correctly, tested exhaustively, and compliant at launch.",
    icon: "Calculator",
    href: "/what-we-do/payroll-implementation",
    badge: "Core Service",
  },
  {
    title: "Managed Services (GLIDE™)",
    description:
      "Post go-live stability through a structured operating model. GLIDE™ provides 24x7 monitoring, issue triage, quarterly releases, and continuous optimization.",
    icon: "Settings",
    href: "/what-we-do/managed-services",
    badge: "Post Go-Live",
  },
  {
    title: "Professional Services",
    description:
      "On-demand Oracle Cloud HCM & Payroll expertise. Program advisory, data and integrations support, payroll audits, remediation, and controls strengthening.",
    icon: "Briefcase",
    href: "/what-we-do/professional-services",
    badge: "Advisory",
  },
];

export const METHODOLOGY_COMPONENTS = [
  {
    id: "flight",
    acronym: "FLIGHT™",
    name: "Structured Methodology",
    shortDesc: "Governance-first implementation framework",
    description:
      "FLIGHT is Phoenix's structured implementation methodology for Oracle Cloud HCM & Payroll. Each phase enforces governance checkpoints, ensuring delivery is controlled, auditable, and outcome-connected — not driven by activity metrics.",
    color: "from-teal to-teal-dark",
    phases: [
      { label: "F", name: "Foundation", desc: "Program setup, governance, and baseline" },
      { label: "L", name: "Learn", desc: "Discovery, current-state mapping, requirements" },
      { label: "I", name: "Implement", desc: "Configuration, build, and integration" },
      { label: "G", name: "Govern", desc: "Testing governance and quality assurance" },
      { label: "H", name: "Handover", desc: "Go-live readiness and cutover execution" },
      { label: "T", name: "Transition", desc: "Stabilization and managed services handoff" },
    ],
  },
  {
    id: "cloudifai",
    acronym: "CloudifAI™",
    name: "Delivery Model",
    shortDesc: "AI-augmented, standards-driven delivery",
    description:
      "CloudifAI™ is Phoenix's delivery model that standardizes how work is done, connects every task to program outcomes, and enforces governance with real-time visibility — replacing spreadsheets and status theatre with structured, AI-augmented execution.",
    color: "from-blue-500 to-blue-700",
  },
  {
    id: "zentoh",
    acronym: "ZentoH™",
    name: "Orchestration Hub",
    shortDesc: "Single system of record for all delivery",
    description:
      "ZentoH™ is Phoenix's orchestration hub that unifies plans, evidence, approvals, and readiness into one system of record. It powers both FLIGHT implementations and GLIDE™ managed services, ensuring execution is always consistent and fully auditable.",
    color: "from-purple-500 to-purple-700",
  },
  {
    id: "glide",
    acronym: "GLIDE™",
    name: "Managed Services",
    shortDesc: "Post go-live operating cadence",
    description:
      "GLIDE™ is Phoenix's post go-live managed services model. It maintains long-term stability through a structured operating cadence covering monitoring, quarterly releases, issue triage, and continuous optimization as your business evolves.",
    color: "from-emerald-500 to-emerald-700",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Phoenix brought a level of structure and accountability we hadn't seen from previous implementation partners. Their FLIGHT methodology gave us full visibility throughout the program, and go-live was the smoothest we've experienced.",
    author: "VP of HR Technology",
    company: "Global Financial Services Firm",
    industry: "Financial Services",
  },
  {
    quote:
      "The ZentoH™ platform was a game-changer for our governance requirements. Every decision, every approval, every test result was tracked and auditable. Our compliance team was impressed.",
    author: "Chief People Officer",
    company: "Enterprise Healthcare Organization",
    industry: "Healthcare",
  },
  {
    quote:
      "We moved to Phoenix after a failed implementation with another partner. Their structured approach and honest communication was exactly what we needed. Payroll went live on time with zero compliance issues.",
    author: "Director of Payroll Operations",
    company: "Multinational Manufacturing Company",
    industry: "Manufacturing",
  },
  {
    quote:
      "GLIDE™ managed services has kept our Oracle Cloud environment stable and optimized for over two years. The team is proactive, responsive, and genuinely understands our business context.",
    author: "IT Director",
    company: "Large Retail Enterprise",
    industry: "Retail",
  },
  {
    quote:
      "Phoenix's CloudifAI™ approach meant our delivery was standardized from day one. No reinventing the wheel, no guesswork — just disciplined execution that delivered what was promised.",
    author: "Program Director",
    company: "Professional Services Firm",
    industry: "Professional Services",
  },
];

export const CASE_STUDIES = [
  {
    title: "Global Payroll Stabilization",
    industry: "Financial Services",
    challenge:
      "A global financial services firm faced persistent payroll errors and compliance risks after a self-managed Oracle Cloud Payroll rollout left critical configuration gaps.",
    solution:
      "Phoenix deployed a structured remediation program using PayPerfect™ protocols and ZentoH™ to audit, document, and resolve over 200 configuration issues across 12 pay groups.",
    result: "99.9% payroll accuracy achieved within 90 days. Zero compliance exceptions in subsequent quarters.",
    metrics: ["99.9% payroll accuracy", "200+ issues resolved", "90-day turnaround"],
  },
  {
    title: "Enterprise HCM Implementation",
    industry: "Healthcare",
    challenge:
      "A large healthcare organization needed to migrate 15,000 employees from a legacy HRIS to Oracle Cloud HCM while maintaining compliance with complex healthcare workforce regulations.",
    solution:
      "Phoenix executed a full FLIGHT methodology engagement, deploying CloudifAI™ for standardized configuration and ZentoH™ for governance across 18 months of structured delivery.",
    result: "On-time, on-budget go-live with 100% data migration accuracy and full regulatory compliance.",
    metrics: ["15,000 employees migrated", "On-time & on-budget", "100% data accuracy"],
  },
  {
    title: "Post Go-Live Managed Services",
    industry: "Manufacturing",
    challenge:
      "A multinational manufacturer needed ongoing Oracle Cloud HCM & Payroll support that could scale with quarterly updates, compliance changes, and business growth.",
    solution:
      "Phoenix transitioned the client to GLIDE™ managed services, establishing a structured operating cadence with 24x7 monitoring, monthly service reviews, and proactive release management.",
    result: "Zero critical incidents in first year. 40% reduction in support ticket resolution time.",
    metrics: ["Zero critical incidents", "24x7 coverage", "40% faster resolution"],
  },
];

export const FLIGHT_PHASES = [
  {
    letter: "F",
    name: "Foundation",
    description:
      "Establish program governance, define delivery standards, configure the ZentoH™ environment, and align stakeholders on outcomes and accountability.",
  },
  {
    letter: "L",
    name: "Learn",
    description:
      "Conduct structured discovery sessions to map current-state processes, document requirements, and identify risks — all evidence-captured in ZentoH™.",
  },
  {
    letter: "I",
    name: "Implement",
    description:
      "Build, configure, and integrate Oracle Cloud HCM & Payroll against approved design documents. All work governed by CloudifAI™ delivery standards.",
  },
  {
    letter: "G",
    name: "Govern",
    description:
      "Execute testing cycles with full governance — UAT, parallel runs, and compliance validation — with sign-off approvals tracked in ZentoH™.",
  },
  {
    letter: "H",
    name: "Handover",
    description:
      "Execute go-live readiness assessments, cutover planning, and hypercare. No go-live without a complete ZentoH™ readiness checklist sign-off.",
  },
  {
    letter: "T",
    name: "Transition",
    description:
      "Stabilize the new environment, transfer knowledge, and transition to GLIDE™ Managed Services for ongoing optimization and support.",
  },
];
