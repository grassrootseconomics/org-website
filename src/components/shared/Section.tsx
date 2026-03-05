import { type ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: "white" | "gray" | "warm" | "dark" | "green";
}

const bgClasses: Record<NonNullable<SectionProps["background"]>, string> = {
  white: "bg-white",
  gray: "bg-slate-50",
  warm: "bg-earth-50",
  dark: "bg-slate-900 text-white",
  green: "bg-green-50",
};

export function Section({
  children,
  className = "",
  id,
  background = "white",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-20 md:py-32 ${bgClasses[background]} ${className}`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">{children}</div>
    </section>
  );
}
