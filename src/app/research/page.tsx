import type { Metadata } from "next";
import Image from "next/image";
import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Button } from "@/components/shared/Button";
import { PublicationCard } from "@/components/research/PublicationCard";
import {
  publications,
  researchQuestions,
  type PublicationCategory,
} from "@/data/publications";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Peer-reviewed research on community currencies, Community Asset Vouchers, and their impact — published in Nature and beyond.",
};

const questionCategoryLabels: Record<string, string> = {
  design: "Design",
  development: "Development",
  "predictive-modeling": "Predictive & Agent-Based Modeling",
  understanding: "Understanding",
};

const pubCategoryOrder: PublicationCategory[] = [
  "journal-article",
  "book",
  "dissertation",
  "dataset",
  "report",
  "survey",
  "working-paper",
  "conference-paper",
  "thesis",
  "seminar-paper",
  "grant",
];

const pubCategoryLabels: Record<PublicationCategory, string> = {
  "journal-article": "Peer-Reviewed Journal Articles",
  book: "Books",
  dissertation: "Dissertations",
  dataset: "Datasets",
  report: "Reports",
  survey: "Surveys",
  "working-paper": "Working Papers",
  "conference-paper": "Conference Papers",
  thesis: "Theses",
  "seminar-paper": "Seminar Papers",
  grant: "Research Grants",
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
              Published Documents
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight font-serif">
              Research
            </h1>
          </div>
        </div>
      </section>

      <Section>
        <ScrollReveal>
          <div className="max-w-3xl mx-auto mb-16">
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              We do regular monitoring and evaluation on the impact of our programs
              and collaborate with researchers from around the world. Data is collected
              through digital (blockchain-based) transaction data, journals and surveys.
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

      {/* Research Questions */}
      <Section background="warm">
        <SectionHeading eyebrow="OUR INQUIRY" serif>
          Research Questions
        </SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {(
            ["design", "development", "predictive-modeling", "understanding"] as const
          ).map((cat, catIdx) => {
            const questions = researchQuestions.filter(
              (q) => q.category === cat
            );
            return (
              <ScrollReveal key={cat} delay={catIdx * 0.1}>
                <div className="bg-white rounded-2xl p-8 shadow-sm h-full">
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">
                    {questionCategoryLabels[cat]}
                  </h3>
                  <ul className="space-y-3 text-slate-600 text-sm leading-relaxed">
                    {questions.map((q, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-green-600 mt-0.5 flex-shrink-0">
                          &bull;
                        </span>
                        <span>{q.question}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </Section>

      {/* Publications grouped by category */}
      <Section background="gray">
        <SectionHeading eyebrow="PUBLICATIONS" serif>
          Research &amp; Papers
        </SectionHeading>
        <div className="max-w-4xl mx-auto">
          {pubCategoryOrder.map((cat) => {
            const pubs = publications.filter(
              (p) => (p.category ?? "journal-article") === cat
            );
            if (pubs.length === 0) return null;
            return (
              <div key={cat} className="mb-12">
                <h3 className="text-xl font-semibold text-slate-900 mb-6 font-serif">
                  {pubCategoryLabels[cat]}
                </h3>
                <div className="space-y-4">
                  {pubs.map((pub, i) => (
                    <ScrollReveal
                      key={pub.title}
                      delay={Math.min(i * 0.05, 0.3)}
                    >
                      <PublicationCard pub={pub} />
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            );
          })}
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
