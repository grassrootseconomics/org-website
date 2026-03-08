import Image from "next/image";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SectionHeading } from "@/components/shared/SectionHeading";

const steps = [
  {
    image: "/images/how-it-works/manyimgs-3.webp",
    alt: "People unable to trade due to lack of money",
    text: "Due to economic instability, people often lack money with which to purchase from each other. Yet they can make commitments to provide goods and services in the future - in the form of Community Asset Vouchers - which are recorded on Sarafu.Network and can be traded with others in the community",
  },
  {
    image: "/images/how-it-works/manyimgs-5.webp",
    alt: "Commitment Pools creating stable exchange",
    text: "Commitment Pools, are digital shops where national currencies (stable coins) and Community Asset Vouchers create a credit system as stable medium of exchange tied to local goods and services. This allows people to trade with each other, and earn credit by providing goods and services to others in the community.",
  },
  {
    image: "/images/how-it-works/manyimgs-8.webp",
    alt: "Thriving community economy",
    text: "Thriving communities build their own prospering economies with the tools to meet their needs, and are more resilient to economic shocks. By supporting local trade, we can help communities meet their needs and build a more inclusive and sustainable economy.",
  },
];

export function ProcessDiagram() {
  return (
    <div>
      <SectionHeading eyebrow="THE PROCESS" serif>
        How Community Asset Vouchers Work
      </SectionHeading>

      <ScrollReveal>
        <div className="flex justify-center mb-12">
          <div className="relative w-full max-w-[220px] aspect-square">
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

        <div className="space-y-8">
          {steps.map((step, i) => (
            <ScrollReveal key={i} delay={i * 0.15}>
              <div className="grid grid-cols-1 md:grid-cols-[72px_1fr] gap-4 items-start">
                <div className="hidden md:flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-lg z-10">
                    {i + 1}
                  </div>
                </div>
                <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 md:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className="relative h-20 w-28 flex-shrink-0 rounded-xl overflow-hidden border border-slate-200 bg-slate-50">
                      <Image
                        src={step.image}
                        alt={step.alt}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <span className="md:hidden inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-600 text-white font-bold text-sm mr-3 mb-2">
                        {i + 1}
                      </span>
                      <p className="inline text-base md:text-lg text-slate-700 leading-relaxed">
                        {step.text}
                      </p>
                    </div>
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
