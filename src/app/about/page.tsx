import type { Metadata } from "next";
import Image from "next/image";
import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { YouTubeEmbed } from "@/components/shared/YouTubeEmbed";
import { Timeline } from "@/components/about/Timeline";
import { TeamGrid } from "@/components/about/TeamGrid";
import { PullQuote } from "@/components/shared/PullQuote";
import { StoryCallout } from "@/components/shared/StoryCallout";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Grassroots Economics is a non-profit foundation partnering with communities across Kenya since 2010.",
};

const partnerLogos = [
  { src: "/images/about/spons-blockscience.webp", alt: "BlockScience" },
  { src: "/images/about/spons-commons.webp", alt: "Commons" },
  { src: "/images/about/spons-da-redcross.webp", alt: "Danish Red Cross" },
  { src: "/images/about/spons-forge.webp", alt: "Forge" },
  { src: "/images/about/spons-green-world.webp", alt: "Green World Campaign" },
  { src: "/images/about/spons-iflas.webp", alt: "IFLAS" },
  { src: "/images/about/spons-lush.webp", alt: "Lush" },
  { src: "/images/about/spons-redcross.webp", alt: "Red Cross" },
  { src: "/images/about/spons-rotary.webp", alt: "Rotary" },
  { src: "/images/about/spons-schumacher.webp", alt: "Schumacher Center" },
  { src: "/images/about/spons-segal.webp", alt: "Segal Family Foundation" },
  { src: "/images/about/spons-stichting.webp", alt: "Stichting" },
  { src: "/images/about/spons-tridos.webp", alt: "Triodos" },
];

export default function AboutPage() {
  return (
    <>
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <ScrollReveal>
            <SectionHeading centered={false} serif>
              About Us
            </SectionHeading>
            <p className="text-lg text-slate-600 leading-relaxed">
              We are a small team based in Mombasa and Nairobi. We build tools
              and train communities to create their own economic systems — not
              imposed from outside, but grown from the indigenous practices that
              have sustained East African communities for generations.
            </p>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              Our founder Will Ruddick started this work in 2010 with Eco-Pesa,
              a complementary currency in three informal settlements near
              Kongowea, Mombasa. When we launched Bangla-Pesa in 2013, we were
              charged with forgery of currency — the case was eventually thrown
              out, but the story says something about what it means to challenge
              existing systems.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/about/aboutus-img1.webp"
                alt="Grassroots Economics community gathering"
                fill
                className="object-cover"
                priority
              />
            </div>
          </ScrollReveal>
        </div>
      </Section>

      <Section background="warm">
        <StoryCallout
          title="The Bangla-Pesa Arrests"
          location="BANGLADESH SETTLEMENT, MOMBASA"
          story="In May 2013, six people — including founder Will Ruddick — were arrested for launching Bangla-Pesa, a community currency in Bangladesh informal settlement near Mombasa. The charge: forgery of currency. The case drew international attention from BBC, HuffPost, Al Jazeera, and Quartz. Charges were eventually dropped, and the attention only amplified the movement."
          imageSrc="/images/how-it-works/bangla-pesa-launch1.webp"
        />
      </Section>

      <Section background="gray">
        <SectionHeading
          eyebrow="OUR STORY"
          serif
          subtitle="From a single settlement in Mombasa to a network spanning rural and urban Kenya."
        >
          Our History
        </SectionHeading>
        <Timeline />
        <PullQuote
          quote="They charged us with forging currency. We were creating community."
          attribution="Will Ruddick, Founder"
          location="Bangladesh Settlement, Mombasa"
        />
      </Section>

      <Section>
        <ScrollReveal>
          <div className="max-w-4xl mx-auto">
            <YouTubeEmbed
              url="https://www.youtube.com/embed/ojFPrVvpraU"
              title="Grassroots Economics Overview"
            />
          </div>
        </ScrollReveal>
      </Section>

      <Section background="gray">
        <SectionHeading eyebrow="THE TEAM" serif>
          Meet the Team
        </SectionHeading>
        <TeamGrid />
      </Section>

      <Section background="warm">
        <SectionHeading eyebrow="OUR PARTNERS" serif>
          Organizations We Work With
        </SectionHeading>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-8 max-w-4xl mx-auto items-center">
          {partnerLogos.map((logo) => (
            <ScrollReveal key={logo.alt}>
              <div className="relative h-16 w-full grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-contain"
                />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>
    </>
  );
}
