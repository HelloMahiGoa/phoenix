"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ArrowRight, Users, Calculator, Settings, Briefcase, Layers, Cpu, Database, Headphones } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/lib/constants";

const serviceItems = [
  { label: "Oracle Cloud HCM", desc: "End-to-end HCM implementation", href: "/what-we-do/hcm-implementation", icon: Users },
  { label: "Oracle Cloud Payroll", desc: "PayPerfect™ payroll delivery", href: "/what-we-do/payroll-implementation", icon: Calculator },
  { label: "Managed Services", desc: "GLIDE™ post go-live model", href: "/what-we-do/managed-services", icon: Settings },
  { label: "Professional Services", desc: "Advisory & on-demand experts", href: "/what-we-do/professional-services", icon: Briefcase },
];

const methodologyItems = [
  { label: "FLIGHT™ Methodology", desc: "Structured implementation phases", href: "/how-we-deliver#flight", icon: Layers },
  { label: "CloudifAI™", desc: "AI-augmented delivery model", href: "/how-we-deliver#cloudifai", icon: Cpu },
  { label: "ZentoH™ Hub", desc: "Single system of record", href: "/how-we-deliver#zentoh", icon: Database },
  { label: "GLIDE™ Services", desc: "Post go-live cadence", href: "/how-we-deliver#glide", icon: Headphones },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpenDropdown(null), 120);
  };

  const getDropdownItems = (label: string) => {
    if (label === "What We Do") return serviceItems;
    if (label === "How We Deliver") return methodologyItems;
    return null;
  };

  return (
    <>
      {/* Announcement bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-8 flex items-center justify-center"
        style={{ background: "linear-gradient(90deg, #0A1929 0%, #0d2a1e 50%, #0A1929 100%)" }}>
        <p className="text-xs text-white/50 tracking-widest">
          <span className="text-teal font-semibold">Oracle Cloud HCM & Payroll Specialists</span>
          <span className="mx-3 text-white/20">·</span>
          Outcome-Led. Governance-First. Always Accountable.
        </p>
      </div>

      <header
        className="fixed top-8 left-0 right-0 z-40 transition-all duration-300"
      >
        <div className={cn(
          "transition-all duration-500 rounded-2xl mx-4",
          scrolled
            ? "bg-[#0A1929]/85 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] mt-2"
            : "bg-transparent border-transparent mt-4"
        )}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">

              {/* Logo */}
              <Link href="/" className="group flex items-center gap-3 flex-shrink-0">
                <div className="relative w-10 h-10 flex-shrink-0">
                  <div className={cn(
                    "absolute inset-0 rounded-xl transition-all duration-300",
                    scrolled ? "bg-gradient-to-br from-teal/20 to-blue/20 border border-white/30" : "bg-gradient-to-br from-white/20 to-teal/10 backdrop-blur-sm border border-white/30"
                  )} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      <div className="absolute inset-0 bg-teal/20 rounded-lg blur-sm animate-pulse" />
                      <svg width="22" height="22" viewBox="0 0 32 32" fill="none" className="relative z-10">
                        <path d="M16 3L5 9.5V22.5L16 29L27 22.5V9.5L16 3Z" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-teal"/>
                        <path d="M16 3L5 9.5L16 16L27 9.5L16 3Z" fill="currentColor" fillOpacity="0.3" className="text-teal"/>
                        <path d="M16 16L5 9.5V22.5L16 29V16Z" fill="currentColor" fillOpacity="0.15" className="text-teal"/>
                        <path d="M16 16L27 9.5V22.5L16 29V16Z" fill="currentColor" fillOpacity="0.08" className="text-teal"/>
                        <circle cx="16" cy="16" r="3" fill="currentColor" className="text-teal"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col leading-none">
                  <span
                    className={cn(
                      "text-lg font-extrabold tracking-tight transition-colors duration-300",
                      scrolled ? "text-white" : "text-white"
                    )}
                    style={{ fontFamily: "var(--font-plus-jakarta)" }}
                  >
                    Phoenix
                  </span>
                  <span className={cn(
                    "text-[10px] font-bold tracking-[0.15em] uppercase transition-colors duration-300",
                    scrolled ? "text-teal-400" : "text-teal/90"
                  )}>
                    Cloud Technologies
                  </span>
                </div>
              </Link>

              {/* Desktop Nav */}
              <nav className="hidden lg:flex items-center">
                {NAV_LINKS.map((link) => {
                  const dropItems = getDropdownItems(link.label);
                  const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
                  return (
                    <div
                      key={link.href}
                      className="relative"
                      onMouseEnter={() => dropItems && handleMouseEnter(link.label)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <Link
                        href={link.href}
                        className={cn(
                          "relative flex items-center gap-1 px-4 py-2 text-sm font-semibold transition-all duration-200 group rounded-lg",
                          scrolled
                            ? isActive ? "text-white bg-white/10" : "text-white/70 hover:text-white hover:bg-white/5"
                            : isActive ? "text-white bg-white/10" : "text-white/70 hover:text-white hover:bg-white/5"
                        )}
                      >
                        {link.label}
                        {dropItems && (
                          <ChevronDown className={cn(
                            "w-3.5 h-3.5 transition-transform duration-200",
                            openDropdown === link.label && "rotate-180"
                          )} />
                        )}
                        {/* Active underline */}
                        {isActive && (
                          <motion.div
                            layoutId="nav-active"
                            className="absolute inset-0 bg-gradient-to-r from-teal/20 to-blue/20 rounded-lg"
                          />
                        )}
                        {/* Hover underline */}
                        {!isActive && (
                          <span className={cn(
                            "absolute inset-0 rounded-lg scale-95 group-hover:scale-100 transition-transform duration-200 opacity-0 group-hover:opacity-100",
                            "bg-gradient-to-r from-white/5 to-white/10"
                          )} />
                        )}
                      </Link>

                      {/* Rich dropdown */}
                      <AnimatePresence>
                        {dropItems && openDropdown === link.label && (
                          <motion.div
                            initial={{ opacity: 0, y: 12, scale: 0.97 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 8, scale: 0.97 }}
                            transition={{ duration: 0.18, ease: [0.25, 0.1, 0.25, 1] }}
                            onMouseEnter={() => handleMouseEnter(link.label)}
                            onMouseLeave={handleMouseLeave}
                            className="absolute top-full left-0 mt-2 w-80 rounded-2xl overflow-hidden"
                            style={{
                              background: "rgba(255,255,255,0.98)",
                              boxShadow: "0 20px 60px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.06)",
                            }}
                          >
                            <div className="p-2">
                              {dropItems.map((item) => {
                                const Icon = item.icon;
                                return (
                                  <Link
                                    key={item.href}
                                    href={item.href}
                                    className="flex items-center gap-3.5 px-3 py-3 rounded-xl hover:bg-gray-50 transition-colors group/item"
                                  >
                                    <div className="w-9 h-9 rounded-lg bg-navy/5 flex items-center justify-center text-navy/50 group-hover/item:bg-teal group-hover/item:text-white transition-all flex-shrink-0">
                                      <Icon className="w-4 h-4" />
                                    </div>
                                    <div>
                                      <div className="text-sm font-semibold text-navy group-hover/item:text-teal transition-colors">{item.label}</div>
                                      <div className="text-xs text-text-muted mt-0.5">{item.desc}</div>
                                    </div>
                                    <ArrowRight className="w-3.5 h-3.5 text-text-muted ml-auto opacity-0 group-hover/item:opacity-100 -translate-x-1 group-hover/item:translate-x-0 transition-all" />
                                  </Link>
                                );
                              })}
                            </div>
                            <div className="border-t border-gray-100 px-4 py-3 bg-gray-50/80 flex items-center justify-between">
                              <span className="text-xs text-text-muted">View all {link.label === "What We Do" ? "services" : "methodology"}</span>
                              <Link href={link.href} className="text-xs font-semibold text-teal hover:underline flex items-center gap-1">
                                See overview <ArrowRight className="w-3 h-3" />
                              </Link>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </nav>

              {/* CTA */}
              <div className="hidden lg:flex items-center gap-4">
                <Link
                  href="/contact"
                  className={cn(
                    "relative group flex items-center gap-2 px-6 py-2.5 rounded-xl text-[13px] tracking-wide font-bold overflow-hidden transition-all duration-300",
                    "bg-gradient-to-r from-[#00A89C] to-[#008a80] text-white shadow-[0_8px_20px_-6px_rgba(0,168,156,0.5)] hover:shadow-[0_12px_25px_-8px_rgba(0,168,156,0.7)] hover:-translate-y-0.5"
                  )}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Discuss Your Program
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  {/* Shine sweep */}
                  <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                  {/* Gradient overlay */}
                  <span className="absolute inset-0 bg-gradient-to-t from-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  {/* Border glow */}
                  <span className="absolute inset-0 rounded-xl border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </div>

              {/* Mobile toggle */}
              <button
                className={cn(
                  "lg:hidden relative w-10 h-10 rounded-xl flex items-center justify-center transition-all",
                  scrolled
                    ? "bg-white/10 text-white hover:bg-white/20 border border-white/10"
                    : "bg-white/5 text-white hover:bg-white/15 backdrop-blur-sm border border-white/10"
                )}
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                <AnimatePresence mode="wait">
                  {mobileOpen
                    ? <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}><X className="w-5 h-5" /></motion.span>
                    : <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}><Menu className="w-5 h-5" /></motion.span>
                  }
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden mx-4 mt-2 rounded-2xl overflow-hidden"
              style={{
                background: "rgba(10,25,41,0.97)",
                backdropFilter: "blur(20px)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.08)",
              }}
            >
              <div className="p-4 space-y-1">
                {NAV_LINKS.map((link) => {
                  const dropItems = getDropdownItems(link.label);
                  return (
                    <div key={link.href}>
                      <div
                        className={cn(
                          "flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-semibold cursor-pointer transition-colors",
                          pathname === link.href ? "text-teal bg-teal/10" : "text-white/80 hover:text-white hover:bg-white/8"
                        )}
                        onClick={() => {
                          if (dropItems) {
                            setOpenDropdown(openDropdown === link.label ? null : link.label);
                          } else {
                            setMobileOpen(false);
                          }
                        }}
                      >
                        {dropItems ? <span>{link.label}</span> : <Link href={link.href} className="flex-1">{link.label}</Link>}
                        {dropItems && (
                          <ChevronDown className={cn("w-4 h-4 transition-transform text-white/40", openDropdown === link.label && "rotate-180")} />
                        )}
                      </div>
                      <AnimatePresence>
                        {dropItems && openDropdown === link.label && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden ml-3 mt-1 pl-3 border-l border-teal/20"
                          >
                            {dropItems.map((item) => {
                              const Icon = item.icon;
                              return (
                                <Link
                                  key={item.href}
                                  href={item.href}
                                  onClick={() => setMobileOpen(false)}
                                  className="flex items-center gap-3 px-2 py-2.5 rounded-lg hover:bg-white/5 group/m transition-colors"
                                >
                                  <Icon className="w-4 h-4 text-teal/60 flex-shrink-0" />
                                  <span className="text-sm text-white/65 group-hover/m:text-white transition-colors">{item.label}</span>
                                </Link>
                              );
                            })}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
                <div className="pt-3 mt-2 border-t border-white/10">
                  <Link
                    href="/contact"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl bg-teal text-white font-bold text-sm"
                  >
                    Discuss Your Program <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
