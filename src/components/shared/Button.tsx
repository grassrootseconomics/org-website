import Link from "next/link";
import { type ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  external?: boolean;
  className?: string;
}

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  external = false,
  className = "",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-full transition-all duration-200";

  const variants = {
    primary:
      "bg-green-600 text-white hover:bg-green-700 shadow-sm hover:shadow-md",
    secondary:
      "bg-slate-900 text-white hover:bg-slate-800 shadow-sm hover:shadow-md",
    outline:
      "border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white",
  };

  const sizes = {
    sm: "px-5 py-2 text-sm",
    md: "px-7 py-3 text-base",
    lg: "px-9 py-4 text-lg",
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
