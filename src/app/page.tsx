import Image from "next/image";
import { Hero } from "@/components/home/Hero";
import { MediaFeatures } from "@/components/home/MediaFeatures";
import { Section } from "@/components/shared/Section";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Button } from "@/components/shared/Button";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Section 2: Ending poverty */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-serif font-semibold tracking-tight text-slate-900 mb-6">
              Ending poverty lies in building communities
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Through Commitment Pooling, people have a way to exchange
              Community Asset Vouchers representing commitments for goods and
              services while incubating projects and businesses, without relying
              on scarce national currency and volatile markets.
            </p>
            <Button href="/how-it-works">How it works</Button>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/home/home-img2.webp"
                alt="Community members using Community Asset Vouchers"
                fill
                className="object-cover"
              />
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* Section 3: We envision */}
      <Section background="gray">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <ScrollReveal delay={0.15}>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/home/home-img3.webp"
                alt="Grassroots Economics community gathering"
                fill
                className="object-cover"
              />
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-serif font-semibold tracking-tight text-slate-900 mb-6">
              We envision prospering economies built by thriving communities
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Grassroots Economics is a non-profit foundation that has been
              seeking to empower marginalized communities to take charge of
              their own livelihoods and economic future since 2010.
            </p>
            <Button href="/about">About us</Button>
          </ScrollReveal>
        </div>
      </Section>

      {/* Section 4: Get involved */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/home/home-img4.webp"
            alt="Community commitment pooling"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/75" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <ScrollReveal direction="none">
            <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-white mb-6">
              Get involved
            </h2>
            <p className="text-lg text-slate-200 max-w-2xl mx-auto mb-10 leading-relaxed">
              Communities can develop their own prospering economies with the
              stability of their own pooled commitments.
            </p>
            <Button href="/support">Support us</Button>
          </ScrollReveal>
        </div>
      </section>

      <MediaFeatures />
    </>
  );
}
