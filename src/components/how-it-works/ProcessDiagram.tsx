import Image from "next/image";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SectionHeading } from "@/components/shared/SectionHeading";

const steps = [
  {
    image: "/images/how-it-works/manyimgs-3.webp",
    alt: "People unable to trade due to lack of money",
    text: "Due to economic instability, people often lack money with which to purchase from each other",
  },
  {
    image: "/images/how-it-works/manyimgs-5.webp",
    alt: "Commitment Pools creating stable exchange",
    text: "Commitment Pools, seeded with national currencies and Community Asset Vouchers create a stable medium of exchange tied to local products",
  },
  {
    image: "/images/how-it-works/manyimgs-8.webp",
    alt: "Thriving community economy",
    text: "Thriving communities build their own prospering economies",
  },
];

export function ProcessDiagram() {
  return (
    <div>
      <SectionHeading eyebrow="THE PROCESS" serif>
        How Community Asset Vouchers Work
      </SectionHeading>

      <ScrollReveal>
        <div className="flex justify-center mb-16">
          <div className="relative w-full max-w-md aspect-square">
            <Image
              src="/images/how-it-works/manyimgs1resized.gif"
              alt="Animated diagram showing how Community Asset Vouchers circulate"
              fill
              className="object-contain"
              unoptimized
            />
          </div>
        </div>
      </ScrollReveal>

      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-green-200 hidden md:block" />

        <div className="space-y-12">
          {steps.map((step, i) => (
            <ScrollReveal key={i} delay={i * 0.15}>
              <div className="grid grid-cols-1 md:grid-cols-[80px_1fr] gap-6 items-start">
                <div className="hidden md:flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-lg z-10">
                    {i + 1}
                  </div>
                </div>
                <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                  <div className="relative aspect-[16/9]">
                    <Image
                      src={step.image}
                      alt={step.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <span className="md:hidden inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-600 text-white font-bold text-sm mr-3">
                      {i + 1}
                    </span>
                    <p className="inline text-lg text-slate-700 leading-relaxed">
                      {step.text}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
