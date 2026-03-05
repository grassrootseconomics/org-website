import Image from "next/image";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SectionHeading } from "@/components/shared/SectionHeading";

const problems = [
  { icon: "/images/how-it-works/cic-img1.webp", label: "Lack of money" },
  { icon: "/images/how-it-works/cic-img2.webp", label: "Market instability" },
  { icon: "/images/how-it-works/cic-img3.webp", label: "Lack of investment" },
  { icon: "/images/how-it-works/cic-img4.webp", label: "Excess capital" },
  { icon: "/images/how-it-works/cic-img5.webp", label: "Lack of local industries" },
];

const solutions = [
  { icon: "/images/how-it-works/cic-img6.webp", label: "Interest-free credit" },
  { icon: "/images/how-it-works/cic-img7.webp", label: "Market stability" },
  { icon: "/images/how-it-works/cic-img8.webp", label: "Increase in local trade" },
  { icon: "/images/how-it-works/cic-img9.webp", label: "Build trust and social services" },
  { icon: "/images/how-it-works/cic-img11.webp", label: "Increase in jobs & development" },
];

function IconGrid({
  items,
  accent,
  delay,
}: {
  items: typeof problems;
  accent: "red" | "green";
  delay: number;
}) {
  const borderColor = accent === "red" ? "border-red-200" : "border-green-200";
  const bgColor = accent === "red" ? "bg-red-50" : "bg-green-50";

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6">
      {items.map((item, i) => (
        <ScrollReveal key={item.label} delay={delay + i * 0.05}>
          <div className={`${bgColor} ${borderColor} border rounded-2xl p-4 text-center`}>
            <div className="relative w-16 h-16 md:w-20 md:h-20 mx-auto rounded-full overflow-hidden border-2 border-slate-200 bg-white">
              <Image
                src={item.icon}
                alt=""
                fill
                className="object-cover p-1"
              />
            </div>
            <p className="mt-3 text-sm font-medium text-slate-700">{item.label}</p>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}

export function ProblemsSolutions() {
  return (
    <div>
      <SectionHeading serif>
        As a socio-economic development tool, Community Asset Vouchers offer an innovative way to improve living standards
      </SectionHeading>

      <div className="space-y-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-red-500 mb-6 text-center">
            Challenges
          </p>
          <IconGrid items={problems} accent="red" delay={0} />
        </div>

        <div className="flex justify-center py-4">
          <svg
            className="w-8 h-8 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-green-600 mb-6 text-center">
            Solutions through CAVs
          </p>
          <IconGrid items={solutions} accent="green" delay={0.3} />
        </div>
      </div>
    </div>
  );
}
