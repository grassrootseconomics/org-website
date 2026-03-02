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
      "So that water and nutrients don't evaporate and that roots and mycorrhizal fungi can absorb and move around those nutrients. (Don't even step on bare soil).",
  },
  {
    title: "Maximize Photosynthesis",
    description:
      "Plants requiring different amounts of sunlight can be planted above, below and around each other to ensure that sunlight isn't wasted on the soil and at least twice the amount of energy can be consumed by plants.",
  },
  {
    title: "Succession",
    description:
      "Ensure that there is a clear succession of plants. E.g. As a cassava grows it can give shelter to a fruit tree.",
  },
  {
    title: "Stratification",
    description:
      "Fill each layer of vegetation and maintain diversity for system health. Space (stratification) has to be harmonized over time (life cycle), respecting the successional steps within each of the systems.",
  },
  {
    title: "Management",
    description: "Keeping balance, reducing excess growth.",
  },
];

const mutualAidPrinciples = [
  {
    title: "Ensure basic needs are covered",
    description:
      "Using Community Asset Vouchers to account for this and reduce dependency on foreign currencies or aid.",
  },
  {
    title: "Maximize resources",
    description:
      "The benefits of foreign and local resources are best consumed by an entire supply chain in order to produce local productive capacity. Ensure CAVs are being utilized among and by each level of production, services and value addition.",
  },
  {
    title: "Succession",
    description:
      "Ensure that there is a clear succession of mutual aid via CAV utilization and jubilees. Braiding the network: as the usage for CAV among trade for food, moves into education, and haircuts and so on.",
  },
  {
    title: "Stratification",
    description:
      "Ensure a diversity of types and usages for CAVs (many types of products) — any gaps in diversity can lead toward extraction of local resources and eventual stagnation.",
  },
  {
    title: "Management/Coordination",
    description:
      "Ensure that the supply and usage growth of a CAV is clearly bounded by the issuers capacity for redemption. When promises, commitments (and vouchers) accumulate and stop flowing or dissipate into another ecosystem, coordination is key to regain healthy flow.",
  },
];

export default function FoodForestsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <Image
          src="/images/food-forests/foodfore-img1.webp"
          alt="Food Forest Heritage - Vihunga"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight font-serif">
              Food Forest Heritage - Vihunga
            </h1>
          </div>
        </div>
      </section>

      {/* Intro */}
      <Section>
        <ScrollReveal>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-slate-600 leading-relaxed">
              Having worked on a myriad farming techniques, we&apos;ve never been
              more inspired by the practicality and theory behind Syntropic
              Agroforestry. Regenerating soil while practically providing crops
              and long term food forests is actually possible! Syntropic
              Agroforestry is amazing. It captures all the good of permaculture
              and organic farming and is easy for people to copy and put to use!
            </p>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              We&apos;ve had the pleasure of hosting Roland van Reenen from
              Curacao, as well as James Thiong&apos;o from Central Kenya and many
              other specialists. We are convinced that food forestry via Syntropic
              Agroforestry and regenerative organic agriculture programs will
              solve problems of food insecurity. The following farm schedule has
              already been adapted and duplicated in hundreds of farms using
              traditional rotational labor practices.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="max-w-3xl mx-auto mt-12">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/food-forests/shamba-ya-jamii-poster.webp"
                alt="Shamba ya Jamii — community food forest poster"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </ScrollReveal>
      </Section>

      {/* Syntropic Principles */}
      <Section background="warm">
        <SectionHeading serif>
          Core Syntropic Principals
        </SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {syntropicPrinciples.map((principle, i) => (
            <ScrollReveal key={principle.title} delay={i * 0.1}>
              <div className="bg-white rounded-2xl p-8 h-full shadow-sm">
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

      {/* CAV & Food Forest connection */}
      <Section>
        <ScrollReveal>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-slate-600 leading-relaxed mb-4">
              Using Community Asset Vouchers (CAV) to budget for the creation and
              maintenance of food forests seems as natural as the syntropic
              principals themselves. Indeed the circulation of CAVs mirrors the
              concepts of mutual aid practices as well as mycorrhizal association
              and{" "}
              <a
                href="https://en.wikipedia.org/wiki/Mycorrhiza"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:underline"
              >
                hyphal networks
              </a>
              . In some more complex relationships, mycorrhizal fungi do not just
              collect immobilized soil nutrients, but connect individual plants
              together by mycorrhizal networks that transport water, carbon, and
              other nutrients directly from plant to plant through underground
              hyphal networks.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-4">
              In this sense CAVs connected through membranes enable communities
              to transport vital resources. Further a CAV is a promise for a
              particular group of resources identified by a village. One can
              hardly think of a better source of primary production than the food
              from a food forest being the anchor (backing of last resort) for a
              CAV.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Syntropic Agroforestry is the best candidate we have seen for
              regenerating rich soil, and developing sustainable fertile crops in
              a way that can be integrated into traditional farming here in Kenya.
              This could be the carbon sequestration, water harvesting and food
              system we need to heal our ecosystems. We&apos;re excited that
              Community Asset Vouchers could be the way to both fund their
              development and maintenance.
            </p>
          </div>
        </ScrollReveal>
      </Section>

      {/* Syntropic Principals applied to Mutual Aid */}
      <Section background="gray">
        <SectionHeading serif>
          Syntropic Principals Applied to Mutual Aid
        </SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {mutualAidPrinciples.map((principle, i) => (
            <ScrollReveal key={principle.title} delay={i * 0.1}>
              <div className="bg-white rounded-2xl p-8 h-full shadow-sm">
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

      {/* CAV Usage Flow */}
      <Section>
        <ScrollReveal>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              For usage with Community Asset Vouchers (CAVs): (1) CAVs are issued
              by a local population as a commitment against their goods and
              services, then (2) the CAV is collected by a community group and
              used to pay community members for farm inputs and labor, then (3)
              the CAV can be redeemed for the food produced on the farm and reused
              again for labor and other projects. Note that using CAV as a way to
              track the rotation of labor in traditional methods like Mwerya is
              extremely common.
            </p>
            <p className="text-slate-600 mb-2">
              Here is a simple illustrated handbook for Syntropic Agroforestry:{" "}
              <a
                href="/pdfs/Syntropic agroforestry handbook.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:underline"
              >
                Syntropic agroforestry handbook.pdf
              </a>
            </p>
            <p className="text-slate-600">
              We can&apos;t underestimate the importance of grass! Here is a
              brief on why grass is so important:{" "}
              <a
                href="https://grassecon.org/mombasa-grass.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:underline"
              >
                Mombasa Grass
              </a>
            </p>
          </div>
        </ScrollReveal>
      </Section>

      {/* CTA */}
      <Section background="green">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-slate-900 mb-4">
              Let&apos;s Work Together
            </h2>
            <p className="text-lg text-slate-700 mb-8">
              <a
                href="/contact"
                className="text-green-600 hover:underline"
              >
                Contact us
              </a>
              , so we can start working together. We are seeking communities that
              are ready to start a Community Farm = CAV + Food Forest and feed
              their community in a fair and equitable way while regenerating soil
              for future generations!
            </p>
            <Button href="/contact">Contact Us</Button>
          </div>
        </ScrollReveal>
      </Section>
    </>
  );
}
