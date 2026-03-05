"use client";

import { useCountUp } from "@/hooks/useCountUp";
import { impactMetrics } from "@/data/impact-metrics";

function MetricCard({
  value,
  suffix,
  label,
  story,
}: {
  value: number;
  suffix: string;
  label: string;
  story: string;
}) {
  const { count, ref } = useCountUp(value);

  return (
    <div ref={ref} className="bg-white rounded-2xl p-6 text-center shadow-sm">
      <p className="text-4xl lg:text-5xl font-bold text-green-600 font-serif">
        {count}
        {suffix}
      </p>
      <p className="mt-2 text-sm font-medium text-slate-600">{label}</p>
      <p className="mt-2 text-xs leading-relaxed text-slate-500 italic">{story}</p>
    </div>
  );
}

export function ImpactMetrics() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {impactMetrics.map((metric) => (
        <MetricCard
          key={metric.label}
          value={metric.value}
          suffix={metric.suffix}
          label={metric.label}
          story={metric.story}
        />
      ))}
    </div>
  );
}
