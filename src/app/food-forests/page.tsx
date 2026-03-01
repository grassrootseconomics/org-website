import type { Metadata } from "next";
import Image from "next/image";
import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Button } from "@/components/shared/Button";

export const metadata: Metadata = {
  title: "Food Forests — Shamba ya Jamii",
  description:
    "Syntropic Agroforestry and Community Asset Vouchers — regenerating soil and building food security across Kenya.",
};

const syntropicPrinciples = [
  {
    title: "Ensure Soil is Covered",
    description:
      "So that water and nutrients don't evaporate and that roots and mycorrhizal fungi can absorb and move around those nutrients.",
  },
  {
    title: "Maximize Photosynthesis",
    description:
      "Plants requiring different amounts of sunlight can be planted above, below and around each other to ensure that sunlight isn't wasted.",
  },
  {
    title: "Succession",
    description:
      "Ensure that there is a clear succession of plants. As a cassava grows it can give shelter to a fruit tree.",
  },
  {
    title: "Stratification",
    description:
      "Fill each layer of vegetation and maintain diversity for system health. Space has to be harmonized over time.",
  },
  {
    title: "Management",
    description:
      "Keeping balance, reducing excess growth to maintain a healthy and productive system.",
  },
];

export default function FoodForestsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <Image
          src="/images/food-forests/foodfore-img1.webp"
          alt="Syntropic agroforestry food forest in Kenya"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-green-300 mb-3">
              Shamba ya Jamii
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight font-serif">
              Food Forests
            </h1>
            <p className="mt-4 text-xl text-white/80">
              Syntropic Agroforestry &amp; Community Asset Vouchers
            </p>
          </div>
        </div>
      </section>

      {/* Intro with inline images */}
      <Section>
        <ScrollReveal>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-slate-600 leading-relaxed">
              Having worked on a myriad farming techniques, we&apos;ve never been more
              inspired by the practicality and theory behind Syntropic Agroforestry.
              Regenerating soil while practically providing crops and long term food
              forests is actually possible! It captures all the good of permaculture
              and organic farming and is easy for people to copy and put to use.
            </p>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              Across Kenya, the farm schedule has been adapted and duplicated in
              hundreds of farms using traditional rotational labor practices —
              the same Mwerya system that communities use to build houses and
              support each other.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-12">
          <ScrollReveal direction="left">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/food-forests/foodfore-img2.webp"
                alt="Community members working in a food forest"
                fill
                className="object-cover"
              />
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/food-forests/foodfore-img3.webp"
                alt="Syntropic agroforestry crops growing in layers"
                fill
                className="object-cover"
              />
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* Mycorrhizal metaphor */}
      <Section background="warm">
        <ScrollReveal direction="none">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-2xl sm:text-3xl font-serif italic text-slate-700 leading-relaxed">
              The circulation of CAVs in a community mirrors mycorrhizal
              association — the underground fungal networks that connect trees in
              a forest, sharing nutrients where they are needed most.
            </p>
          </div>
        </ScrollReveal>
      </Section>

      {/* Syntropic Principles */}
      <Section>
        <SectionHeading
          eyebrow="Five Principles"
          subtitle="The foundation of regenerative agriculture"
          serif
        >
          Syntropic Agroforestry
        </SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {syntropicPrinciples.map((principle, i) => (
            <ScrollReveal key={principle.title} delay={i * 0.1}>
              <div className="bg-earth-50 rounded-2xl p-8 h-full">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-100 text-green-600 font-semibold text-lg mb-4">
                  {i + 1}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {principle.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {principle.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* Poster + CTA */}
      <Section background="green">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto items-center">
          <ScrollReveal direction="left">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/food-forests/shamba-ya-jamii-poster.webp"
                alt="Shamba ya Jamii — community food forest poster"
                fill
                className="object-cover"
              />
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <div>
              <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-slate-900 mb-4">
                CAVs &amp; Food Forests
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-4">
                Using Community Asset Vouchers to budget for the creation and
                maintenance of food forests is as natural as the syntropic principles
                themselves. Communities coordinate labor through Mwerya, track
                contributions through vouchers, and share the harvest.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed mb-8">
                This could be the carbon sequestration, water harvesting, and food
                system we need to heal our ecosystems — and it&apos;s already
                working in hundreds of farms across Kenya.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="/pdfs/Syntropic agroforestry handbook.pdf" external>
                  Download Handbook
                </Button>
                <Button href="/contact" variant="outline">
                  Work With Us
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Section>
    </>
  );
}
