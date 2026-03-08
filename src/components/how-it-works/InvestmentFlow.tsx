import Image from "next/image";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/shared/Button";

const steps = [
  {
    image: "/images/how-it-works/drawing1.webp",
    alt: "Seed funding and investment illustration",
    text: "Investments and donations provide seed funding and liquidity to develop Commitment Pools for local industries and infrastructure",
    gif: false,
  },
  {
    image: "/images/how-it-works/long-torch.gif",
    alt: "Torch passing representing CAV issuance",
    text: "These community groups, business networks and industries issue Community Asset Vouchers which enter circulation as interest-free credit access to Commitment Pools with community services funds and payments for operational costs",
    gif: true,
  },
  {
    image: "/images/how-it-works/manyimgs1resized.gif",
    alt: "Trade acceleration through CAVs",
    text: "Community Asset Vouchers within Commitment Pools accelerate trade and provide funding for social and environmental services",
    gif: true,
  },
  {
    image: "/images/how-it-works/long-torch.gif",
    alt: "Torch passing representing market incubation",
    text: "Commitment Pools provide markets and incubate local industries",
    gif: true,
  },
  {
    image: "/images/how-it-works/home-on-globe.webp",
    alt: "Globe with home representing mature industries",
    text: "These local industries provide essential goods and services to communities, while generating social and financial returns for investors",
    gif: false,
  },
];

const outcomes = [
  "Social and financial return in liquidity investments",
  "Social enterprise development",
];

export function InvestmentFlow() {
  return (
    <div>
      <SectionHeading eyebrow="THE CYCLE" serif>
        From Investment to Impact
      </SectionHeading>

      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-green-200 hidden md:block" />

        <ol className="space-y-10 list-none">
          {steps.map((step, i) => (
            <li key={i}>
              <ScrollReveal delay={i * 0.1}>
                <div className="grid grid-cols-1 md:grid-cols-[80px_1fr] gap-6 items-start">
                  <div className="hidden md:flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-lg z-10">
                      {i + 1}
                    </div>
                  </div>
                  <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
                      <div className="relative aspect-square sm:aspect-auto">
                        <Image
                          src={step.image}
                          alt={step.alt}
                          fill
                          className="object-contain p-4"
                          unoptimized={step.gif}
                        />
                      </div>
                      <div className="p-6 flex items-center">
                        <div>
                          <span className="md:hidden inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-600 text-white font-bold text-sm mr-3 mb-2">
                            {i + 1}
                          </span>
                          <p className="text-base text-slate-700 leading-relaxed">
                            {step.text}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </li>
          ))}
        </ol>

        <ScrollReveal delay={0.5}>
          <div className="mt-10 md:ml-20 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {outcomes.map((outcome) => (
              <div
                key={outcome}
                className="bg-green-50 border border-green-200 rounded-2xl p-5 text-center"
              >
                <p className="font-semibold text-green-800">{outcome}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.6}>
          <div className="mt-10 text-center">
            <Button
              href="https://www.youtube.com/playlist?list=PLPUExzwZAUpbHaJU7TIku7vpZ6q_yggQZ"
              external
              variant="outline"
            >
              Learn how to use Sarafu.Network
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
