import type { Metadata } from "next";
import Image from "next/image";
import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { YouTubeEmbed } from "@/components/shared/YouTubeEmbed";
import { Button } from "@/components/shared/Button";
import { ImpactMetrics } from "@/components/how-it-works/ImpactMetrics";
import { StoryCallout } from "@/components/shared/StoryCallout";
import { PullQuote } from "@/components/shared/PullQuote";
import { FullWidthPhoto } from "@/components/shared/FullWidthPhoto";
import { ProcessDiagram } from "@/components/how-it-works/ProcessDiagram";
import { CommunityVouchers } from "@/components/how-it-works/CommunityVouchers";
import { InvestmentFlow } from "@/components/how-it-works/InvestmentFlow";
import { ProblemsSolutions } from "@/components/how-it-works/ProblemsSolutions";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "Learn how Community Asset Vouchers and Commitment Pooling create prospering economies in communities across Kenya.",
};

const beforeAfter = [
  {
    before: "Jacob\u2019s family ate ugali every day because KSH were too scarce for variety.",
    after: "Through CAVs, Jacob trades fish for rice, beans, and wheat flour from other pool members.",
  },
  {
    before: "When crops failed in Miyani, farmers had no safety net.",
    after: "1,637 Mwerya events organized. 30 houses built through rotational community labor.",
  },
  {
    before: "Small businesses in Kawangware couldn\u2019t trade during economic downturns.",
    after: "258 businesses joined the Gatina-Pesa network and kept trading through vouchers.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      {/* 1. Hero */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <Image
          src="/images/how-it-works/howit-img1.webp"
          alt="Community members using Commitment Pooling"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight text-center max-w-4xl px-6 font-serif">
            Commitment Pooling and Community Asset Vouchers
          </h1>
        </div>
      </section>

      {/* 2. YouTube Video */}
      <Section>
        <ScrollReveal>
          <div className="max-w-4xl mx-auto">
            <YouTubeEmbed
              url="https://www.youtube.com/embed/gn4mMspXlF0"
              title="How Commitment Pooling Works"
            />
          </div>
        </ScrollReveal>
      </Section>

      {/* 3. Jacob's Story + Pull Quote */}
      <Section background="warm">
        <StoryCallout
          title="Jacob's Story"
          location="MIYANI, KWALE COUNTY"
          story="Jacob is a 44-year-old farmer and fisherman with seven children. Before joining a Commitment Pool, his family ate ugali every day — it was all they could afford when Kenyan Shillings were scarce. Through Community Asset Vouchers, Jacob now trades his catch and crops with other pool members. His daily earnings rose from 2,500 to 3,700 KSH on good fishing days. His family now buys rice, beans, and wheat flour."
          imageSrc="/images/how-it-works/cic-img3.webp"
        />
        <PullQuote
          quote="I don't have to eat ugali every day now. I can buy rice, beans, wheat flour."
          attribution="Jacob, farmer and fisherman"
          location="Miyani, Kwale County"
        />
      </Section>

      {/* 4. What are CAVs? */}
      <Section background="gray">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <SectionHeading centered={false} eyebrow="THE MECHANISM" serif>
              What are Community Asset Vouchers?
            </SectionHeading>
            <p className="text-lg text-slate-600 leading-relaxed">
              Community Asset Vouchers (CAVs) are formalized commitments that
              individuals, businesses and communities can make for their goods and
              services. When pooled together they can also act as regional means of
              exchange and supplement gaps in the national currency system.
            </p>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              See other CAVs and create your own for free on{" "}
              <a
                href="https://sarafu.network"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:underline"
              >
                Sarafu Network
              </a>
              .
            </p>
          </ScrollReveal>
        </div>
      </Section>

      {/* 5. Visual CAV Process Diagram (RESTORED) */}
      <Section>
        <ProcessDiagram />
      </Section>

      {/* 6. Full-width photo (RESTORED) */}
      <FullWidthPhoto
        src="/images/how-it-works/cic-training1.webp"
        alt="Community members in a CIC training session"
      />

      {/* 7. Community Vouchers (RESTORED) */}
      <Section background="warm">
        <CommunityVouchers />
      </Section>

      {/* 8. Full-width photo (RESTORED) */}
      <FullWidthPhoto
        src="/images/how-it-works/bangla-pesa-launch1.webp"
        alt="Bangla-Pesa community currency launch event"
      />

      {/* 9. Investment Flow (RESTORED) */}
      <Section background="gray">
        <InvestmentFlow />
      </Section>

      {/* 10. Full-width photo (RESTORED) */}
      <FullWidthPhoto
        src="/images/how-it-works/empowering-mothers1.webp"
        alt="Empowering mothers through community economics"
      />

      {/* 11. Problems & Solutions (RESTORED) */}
      <Section>
        <ProblemsSolutions />
      </Section>

      {/* 12. Impact Metrics */}
      <Section background="green">
        <SectionHeading eyebrow="MEASURED IMPACT" serif>
          Through our work starting in Kenya we&apos;ve seen
        </SectionHeading>
        <ImpactMetrics />
        <div className="mt-12 text-center">
          <Button href="/research">Learn More About Our Research</Button>
        </div>
      </Section>

      {/* 13. ROLA */}
      <Section background="warm">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <ScrollReveal>
            <SectionHeading centered={false} eyebrow="ANCIENT PRACTICES" serif>
              The Roots of Commitment Pooling
            </SectionHeading>
            <p className="text-lg text-slate-700 leading-relaxed">
              ROLA (Rotational Labor Associations) is an ancestral practice
              where community members take turns helping each other farm, build
              homes, and create together. It predates any formal economy and is
              not the same as barter. Commitment Pooling learns from this ancient
              wisdom and helps us give it digital infrastructure, allowing
              communities to coordinate mutual aid at scale.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/how-it-works/cic-img7.webp"
                alt="Rotational labor association practice in action"
                fill
                className="object-cover"
              />
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* 14. Before and After */}
      <Section background="dark">
        <SectionHeading eyebrow="REAL STORIES" serif>
          Before and After
        </SectionHeading>
        <div className="max-w-4xl mx-auto space-y-8">
          {beforeAfter.map((pair, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-slate-800 rounded-2xl p-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3">Before</p>
                  <p className="text-slate-300 leading-relaxed">{pair.before}</p>
                </div>
                <div className="bg-green-900/30 border border-green-700/30 rounded-2xl p-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-green-400 mb-3">After</p>
                  <p className="text-green-100 leading-relaxed font-medium">{pair.after}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* 15. Going to Scale + Closing (RESTORED) */}
      <Section background="gray">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto">
            <SectionHeading serif>Going to Scale</SectionHeading>
            <p className="text-lg text-slate-600 mb-8">
              See how Community Asset Vouchers are being made globally and create
              your own on{" "}
              <a
                href="https://sarafu.network/vouchers"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:underline"
              >
                Sarafu Network
              </a>
              . Finally create your own pool to connect different vouchers as well
              as national currencies together!
            </p>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <div className="text-center max-w-2xl mx-auto border-t border-slate-200 pt-12 mt-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-4 font-serif">
              This is just the beginning!
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Community Asset Vouchers via Commitment Pooling are creating a
              worldwide{" "}
              <a
                href="https://viz.sarafu.network"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:underline"
              >
                trust network
              </a>
              .
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="https://sarafu.network/vouchers" external>
                Create Your Own CAV
              </Button>
              <Button href="/support" variant="outline">
                Get Involved
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </Section>
    </>
  );
}
