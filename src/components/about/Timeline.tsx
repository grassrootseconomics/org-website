"use client";

import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { timelineEntries } from "@/data/timeline";

export function Timeline() {
  return (
    <div className="relative max-w-3xl mx-auto">
      {/* Vertical line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 md:-translate-x-px" />

      <div className="space-y-12">
        {timelineEntries.map((entry, i) => (
          <ScrollReveal key={entry.year} delay={i * 0.05}>
            <div
              className={`relative flex flex-col md:flex-row gap-8 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-green-600 -translate-x-1.5 md:-translate-x-1.5 mt-2 ring-4 ring-white z-10" />

              {/* Content */}
              <div
                className={`ml-12 md:ml-0 md:w-1/2 ${
                  i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                }`}
              >
                <span className="inline-block text-sm font-semibold text-green-600 bg-green-50 px-3 py-1 rounded-full mb-2">
                  {entry.year}
                </span>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {entry.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {entry.description}
                </p>
              </div>

              {/* Spacer for other side */}
              <div className="hidden md:block md:w-1/2" />
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
