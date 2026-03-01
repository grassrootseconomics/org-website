import Image from "next/image";
import { Hero } from "@/components/home/Hero";
import { MediaFeatures } from "@/components/home/MediaFeatures";
import { Section } from "@/components/shared/Section";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Button } from "@/components/shared/Button";

const impactItems = [
  {
    stat: "78%",
    label: "Food Security",
    story:
      "Families like Jacob's went from eating ugali every day to buying rice, beans, and wheat flour.",
  },
  {
    stat: "1,637",
    label: "Mwerya Events",
    story:
      "Community members revived the ancestral practice of rotational labor — building houses and farms together.",
  },
  {
    stat: "347%",
    label: "Increase in Gifting",
    story:
      "Mutual aid surged as neighbors formalized their commitments to each other through vouchers.",
  },
  {
    stat: "60,000+",
    label: "People Reached",
    story:
      "Across 100+ communities in Kenya — from urban Mombasa and Nairobi to rural Kwale County.",
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* Section 1: The Story */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-serif font-semibold tracking-tight text-slate-900 mb-6">
              People have skills, goods, and time. What they lack is a way to
              exchange them.
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              In Bangladesh settlement, Mombasa, a hairdresser can braid hair. A
              fisherman can catch fish. A farmer can grow greens. But when
              Kenyan Shillings are scarce, none of them can trade. Community
              Asset Vouchers change that — they are commitments, backed by real
              goods and services, that circulate when national currency cannot.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-3 gap-4 mt-8">
            <ScrollReveal delay={0.1} direction="left">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/images/how-it-works/cic-img1.webp"
                  alt="Community members exchanging vouchers at a local market"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/images/how-it-works/cic-img5.webp"
                  alt="Grassroots Economists training a community group"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.3} direction="right">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/images/how-it-works/empowering-mothers1.webp"
                  alt="Mothers in a Commitment Pool meeting"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <div className="mt-10">
              <Button href="/how-it-works">See How It Works</Button>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* Section 2: Impact with soul */}
      <Section background="dark">
        <ScrollReveal direction="none">
          <p className="text-sm font-semibold uppercase tracking-widest text-green-400 mb-4 text-center">
            Real impact, real people
          </p>
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold tracking-tight text-white mb-16 text-center">
            Numbers only matter when they change lives.
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {impactItems.map((item, i) => (
            <ScrollReveal key={item.label} delay={i * 0.1}>
              <div className="border-l-2 border-green-500 pl-6">
                <p className="text-4xl font-serif font-bold text-green-400">
                  {item.stat}
                </p>
                <p className="text-sm font-semibold uppercase tracking-wide text-slate-400 mt-1">
                  {item.label}
                </p>
                <p className="text-slate-300 mt-3 leading-relaxed">
                  {item.story}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* Section 3: Join — with team photo */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/get-involved/ge-team-dec-2023_sm.jpeg"
            alt="Grassroots Economics team in Kenya"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/75" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <ScrollReveal direction="none">
            <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-white mb-6">
              This work is not ours to keep.
            </h2>
            <p className="text-lg text-slate-200 max-w-2xl mx-auto mb-10 leading-relaxed">
              Everything we build is open source. The protocols, the platform,
              the data, the training materials. If your community, your research
              group, or your organization wants to try Commitment Pooling, we
              want to help.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/support">Support Our Work</Button>
              <Button href="/contact" variant="outline">
                Get in Touch
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <MediaFeatures />
    </>
  );
}
