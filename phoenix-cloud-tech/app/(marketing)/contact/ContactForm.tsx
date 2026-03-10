"use client";

import { useActionState, useEffect, useRef } from "react";
import { CheckCircle, AlertCircle, Send } from "lucide-react";
import { submitContactForm, ContactFormState } from "@/app/actions/contact";
import { Button } from "@/components/ui/button";

const SERVICE_OPTIONS = [
  "Oracle Cloud HCM Implementation",
  "Oracle Cloud Payroll Implementation",
  "GLIDE™ Managed Services",
  "Professional Services / Advisory",
  "Program Health Assessment",
  "Other",
];

const initialState: ContactFormState = { status: "idle", message: "" };

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
    }
  }, [state.status]);

  const inputClass =
    "w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-sm text-navy placeholder:text-gray-400 focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/15 transition-all";
  const labelClass = "block text-xs font-semibold text-navy mb-1.5 tracking-wide";

  return (
    <form ref={formRef} action={formAction} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className={labelClass}>
            Full Name <span className="text-red-400">*</span>
          </label>
          <input id="name" name="name" type="text" required placeholder="Jane Smith" className={inputClass} />
        </div>
        <div>
          <label htmlFor="company" className={labelClass}>
            Company <span className="text-red-400">*</span>
          </label>
          <input id="company" name="company" type="text" required placeholder="Acme Corporation" className={inputClass} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className={labelClass}>
            Email Address <span className="text-red-400">*</span>
          </label>
          <input id="email" name="email" type="email" required placeholder="jane@acme.com" className={inputClass} />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone <span className="text-text-muted font-normal">(optional)</span>
          </label>
          <input id="phone" name="phone" type="tel" placeholder="+1 (555) 000-0000" className={inputClass} />
        </div>
      </div>

      <div>
        <label htmlFor="serviceInterest" className={labelClass}>
          Service Interest
        </label>
        <select id="serviceInterest" name="serviceInterest" className={inputClass}>
          <option value="">Select a service...</option>
          {SERVICE_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Message <span className="text-red-400">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us about your Oracle Cloud program — current stage, key challenges, what you need..."
          className={`${inputClass} resize-none`}
        />
      </div>

      {state.status === "success" && (
        <div className="flex items-start gap-3 p-4 rounded-lg bg-success/8 border border-success/20">
          <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
          <p className="text-sm text-success font-medium">{state.message}</p>
        </div>
      )}

      {state.status === "error" && (
        <div className="flex items-start gap-3 p-4 rounded-lg bg-red-50 border border-red-200">
          <AlertCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
          <p className="text-sm text-red-600 font-medium">{state.message}</p>
        </div>
      )}

      <Button
        type="submit"
        size="lg"
        variant="primary"
        disabled={isPending}
        className="w-full sm:w-auto"
      >
        {isPending ? (
          <>
            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            Send Message
          </>
        )}
      </Button>

      <p className="text-xs text-text-muted">
        We respond within 1 business day. Your information is kept confidential.
      </p>
    </form>
  );
}
