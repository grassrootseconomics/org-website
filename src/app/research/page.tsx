import type { Metadata } from "next";
import Image from "next/image";
import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Button } from "@/components/shared/Button";
import { PublicationCard } from "@/components/research/PublicationCard";
import { publications } from "@/data/publications";

export const metadata: Metadata = {
  title: "Research & Education",
  description:
    "Peer-reviewed research on community currencies, Community Asset Vouchers, and their impact — published in Nature and beyond.",
};

export default function ResearchPage() {
  return (
    <>
      <section className="relative h-[40vh] min-h-[320px] overflow-hidden">
        <Image
          src="/images/research/research-img1.webp"
          alt="Grassroots Economics research and data collection in the field"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-green-300 mb-3">
              Published in Nature
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight font-serif">
              Research &amp; Education
            </h1>
          </div>
        </div>
      </section>

      <Section>
        <ScrollReveal>
          <div className="max-w-3xl mx-auto mb-16">
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Our research explores the design, development, and impact of community
              currencies and Commitment Pooling systems. We partner with universities
              including Copenhagen Business School, Vienna University of Economics,
              and Central European University.
            </p>
            <div className="bg-green-50 rounded-2xl p-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">
                Open Data
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                We publish pseudonymized transaction data from Community Inclusion
                Currency users for research purposes. Our datasets have been used by
                researchers worldwide to study economic networks, community
                currencies, and monetary systems.
              </p>
              <Button
                href="https://reshare.ukdataservice.ac.uk/856593"
                external
                variant="outline"
                size="sm"
              >
                Access Datasets
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </Section>

      <Section background="gray">
        <SectionHeading eyebrow="PEER-REVIEWED" serif>Publications</SectionHeading>
        <div className="max-w-4xl mx-auto space-y-4">
          {publications.map((pub, i) => (
            <ScrollReveal key={pub.title} delay={Math.min(i * 0.05, 0.3)}>
              <PublicationCard pub={pub} />
            </ScrollReveal>
          ))}
        </div>
      </Section>

      <Section>
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4 font-serif">
              Collaborate on Research
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              We welcome researchers interested in community currencies, economic
              networks, and alternative financial systems.
            </p>
            <Button href="/contact">Get in Touch</Button>
          </div>
        </ScrollReveal>
      </Section>
    </>
  );
}
