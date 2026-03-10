import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}

export default function SectionHeading({
  badge,
  title,
  subtitle,
  align = "center",
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn(align === "center" ? "text-center" : "text-left", className)}>
      {badge && (
        <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase rounded-full bg-teal/10 text-teal mb-4">
          {badge}
        </span>
      )}
      <h2
        className={cn(
          "text-3xl md:text-4xl font-bold leading-tight",
          light ? "text-white" : "text-navy"
        )}
        style={{ fontFamily: "var(--font-plus-jakarta)" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-lg leading-relaxed max-w-2xl",
            align === "center" && "mx-auto",
            light ? "text-white/75" : "text-text-muted"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
