import Link from "next/link";
import { Mail, Linkedin } from "lucide-react";

const FOOTER_LINKS = {
  Company: [
    { label: "Who We Are", href: "/who-we-are" },
    { label: "Results", href: "/results" },
    { label: "Contact", href: "/contact" },
  ],
  Services: [
    { label: "Oracle Cloud HCM", href: "/what-we-do/hcm-implementation" },
    { label: "Oracle Cloud Payroll", href: "/what-we-do/payroll-implementation" },
    { label: "Managed Services", href: "/what-we-do/managed-services" },
    { label: "Professional Services", href: "/what-we-do/professional-services" },
  ],
  Methodology: [
    { label: "How We Deliver", href: "/how-we-deliver" },
    { label: "FLIGHT™ Methodology", href: "/how-we-deliver#flight" },
    { label: "CloudifAI™", href: "/how-we-deliver#cloudifai" },
    { label: "ZentoH™ Hub", href: "/how-we-deliver#zentoh" },
    { label: "GLIDE™ Services", href: "/how-we-deliver#glide" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-navy text-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-teal flex items-center justify-center flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L4 7v10l8 5 8-5V7L12 2z" fill="white" fillOpacity="0.9"/>
                  <path d="M12 2L4 7l8 5 8-5-8-5z" fill="white" fillOpacity="0.4"/>
                </svg>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-base font-bold text-white tracking-tight" style={{ fontFamily: "var(--font-plus-jakarta)" }}>Phoenix</span>
                <span className="text-xs text-white/60">Cloud Technologies</span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-white/60 mb-6">
              Disciplined Oracle Cloud HCM & Payroll delivery. Structured methodology. Measurable outcomes.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/phoenixcloudtech"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-teal transition-colors flex items-center justify-center"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:info@phoenixcloudtech.com"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-teal transition-colors flex items-center justify-center"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(FOOTER_LINKS).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-sm font-semibold text-white tracking-widest uppercase mb-4">
                {section}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 hover:text-teal transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="py-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Phoenix Cloud Technologies. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="text-xs text-white/40 hover:text-white/60 transition-colors">
              Privacy Policy
            </Link>
            <span className="text-white/20 text-xs">|</span>
            <a
              href="mailto:info@phoenixcloudtech.com"
              className="text-xs text-white/40 hover:text-teal transition-colors"
            >
              info@phoenixcloudtech.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
