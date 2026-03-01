import { type ReactNode } from "react";

interface SectionHeadingProps {
  children: ReactNode;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  serif?: boolean;
  eyebrow?: string;
}

export function SectionHeading({
  children,
  subtitle,
  centered = true,
  className = "",
  serif = false,
  eyebrow,
}: SectionHeadingProps) {
  return (
    <div className={`mb-16 ${centered ? "text-center" : ""} ${className}`}>
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-widest text-green-600 mb-3">
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl ${
          serif ? "font-serif" : ""
        }`}
      >
        {children}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg leading-relaxed text-slate-600 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
