"use client";

import Image from "next/image";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { teamMembers } from "@/data/team";

export function TeamGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
      {teamMembers.map((member, i) => (
        <ScrollReveal key={member.name} delay={i * 0.05}>
          <div className="text-center">
            <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-slate-100">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
                sizes="128px"
              />
            </div>
            <h3 className="font-semibold text-slate-900 text-sm">
              {member.name}
            </h3>
            <p className="text-sm text-slate-500 mt-1">{member.role}</p>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}
