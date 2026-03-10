import { cn } from "@/lib/utils";

interface GradientBadgeProps {
  children: React.ReactNode;
  className?: string;
}

export default function GradientBadge({ children, className }: GradientBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide",
        "bg-teal/15 text-teal border border-teal/25",
        className
      )}
    >
      {children}
    </span>
  );
}
