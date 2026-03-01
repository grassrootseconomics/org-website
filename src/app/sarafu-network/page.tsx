import type { Metadata } from "next";
import Image from "next/image";
import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Button } from "@/components/shared/Button";

export const metadata: Metadata = {
  title: "Sarafu Network",
  description:
    "Sarafu Network is an open-source, community-run decentralized application for creating and managing Community Asset Vouchers.",
};

const features = [
  {
    title: "USSD Technology",
    description:
      "Most people in the communities we serve don\u2019t have smartphones or reliable internet. USSD works on any phone \u2014 you dial a code, and you can send vouchers, check your balance, or join a Commitment Pool. No app download, no data plan needed.",
    image: "/images/sarafu/sarafu-img2.webp",
    imageAlt: "A community member using USSD on a basic mobile phone",
  },
  {
    title: "Open Source",
    description:
      "Every line of code is public. Every transaction is auditable. Communities can verify, modify, and run the platform themselves.",
    image: "/images/sarafu/sarafu-img4.webp",
    imageAlt: "Open-source collaboration on the Sarafu Network platform",
  },
  {
    title: "Celo Blockchain",
    description:
      "Built on Celo \u2014 a mobile-first blockchain designed for financial inclusion. Transaction records are transparent and tamper-proof, but the technology stays in the background where it belongs.",
    image: "/images/sarafu/sarafu-img5.webp",
    imageAlt: "Transparent and secure blockchain transactions on Celo",
  },
  {
    title: "Economic Commons",
    description:
      "Communities design their own vouchers, set their own rules, and manage their own Commitment Pools. This is not a product built for communities \u2014 it is infrastructure built by them.",
    image: "/images/sarafu/sarafu-img7.webp",
    imageAlt: "Community members managing their own economic tools",
  },
];

export default function SarafuNetworkPage() {
  return (
    <>
      <Section>
        <SectionHeading
          eyebrow="SARAFU \u2014 CURRENCY IN SWAHILI"
          serif
          subtitle="An open-source, community-run platform for creating and managing Community Asset Vouchers and Commitment Pools."
        >
          Sarafu Network
        </SectionHeading>
      </Section>

      <Section>
        <div className="space-y-24 md:space-y-32">
          {features.map((feature, i) => {
            const imageOnLeft = i % 2 === 0;
            return (
              <div
                key={feature.title}
                className={`flex flex-col ${imageOnLeft ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-10 md:gap-16`}
              >
                <ScrollReveal direction={imageOnLeft ? "left" : "right"} className="w-full md:w-1/2">
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                    <Image
                      src={feature.image}
                      alt={feature.imageAlt}
                      fill
                      className="object-cover"
                    />
                  </div>
                </ScrollReveal>
                <ScrollReveal direction={imageOnLeft ? "right" : "left"} delay={0.15} className="w-full md:w-1/2">
                  <h3 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </ScrollReveal>
              </div>
            );
          })}
        </div>
      </Section>

      <Section background="warm">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-4">
              Get Started
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              See existing Community Asset Vouchers and create your own for free.
              Connect different vouchers and national currencies together through
              Commitment Pools.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="https://sarafu.network" external>
                Visit Sarafu Network
              </Button>
              <Button href="/how-it-works" variant="outline">
                Learn How It Works
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </Section>
    </>
  );
}
