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

      <Section background="warm" className="pt-10 md:pt-14 pb-20 md:pb-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold tracking-tight text-slate-900 mb-4 text-center">
            What we do across the stack
          </h2>
          <p className="text-lg text-slate-600 text-center max-w-3xl mx-auto mb-10 leading-relaxed">
            From field implementation to digital infrastructure and open research,
            Grassroots Economics builds practical systems communities can use
            today.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-7 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Sarafu.Network (dApp)
              </h3>
              <p className="text-slate-600 leading-relaxed mb-5">
                A live decentralized application where communities create
                vouchers, form pools, and coordinate exchange in real time.
              </p>
              <Button href="https://sarafu.network" external size="sm">
                Open Sarafu.Network
              </Button>
            </div>
            <div className="bg-white rounded-2xl p-7 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Cosmo-Local Credit DAO
              </h3>
              <p className="text-slate-600 leading-relaxed mb-5">
                Open protocol and governance infrastructure for routing
                commitments across communities without value silos.
              </p>
              <Button href="https://cosmolocal.credit" external size="sm">
                Visit Cosmo-Local DAO
              </Button>
            </div>
            <div className="bg-white rounded-2xl p-7 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Ecosystem Restoration
              </h3>
              <p className="text-slate-600 leading-relaxed mb-5">
                Community-led restoration and food-forest work that links
                ecological regeneration with local economic resilience.
              </p>
              <Button
                href="/ecosystem"
                size="sm"
              >
                See Restoration Work
              </Button>
            </div>
            <div className="bg-white rounded-2xl p-7 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Research
              </h3>
              <p className="text-slate-600 leading-relaxed mb-5">
                Open datasets, impact studies, and peer-reviewed publications
                that validate and improve deployment.
              </p>
              <Button href="/research" size="sm">
                View Research
              </Button>
            </div>
          </div>
        </div>
      </Section>

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
              on scarce national currency and volatile markets. On Sarafu.Network,
              this coordination is already live and usable by communities.
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
              We envision a world where communities have the tools and agency
              to build their own prospering economies, using the abundance of
              their own resources and commitments rather than depending on
              scarce national currency. This same work supports ecosystem
              restoration and is continuously strengthened through open research.
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
              stability of their own pooled commitments. You can help by
              supporting field programs, using Sarafu.Network, exploring
              Cosmo-Local Credit DAO, and contributing to research and ecosystem
              restoration.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/support">Support us</Button>
              <Button href="https://sarafu.network" external>
                Use Sarafu.Network
              </Button>
              <Button href="/research">
                View Research
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <MediaFeatures />
    </>
  );
}
