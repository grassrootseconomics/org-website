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

export default function SarafuNetworkPage() {
  return (
    <>
      {/* Section 1 */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <ScrollReveal>
            <SectionHeading centered={false} serif>
              Sarafu.Network
            </SectionHeading>
            <p className="text-lg text-slate-600 leading-relaxed">
              Grassroots Economics is building and supporting systems that
              empower communities to create their own financial systems based on
              local goods and services in regional markets that are built from
              the ground up.{" "}
              <a
                href="https://sarafu.network"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:underline"
              >
                Sarafu.Network
              </a>{" "}
              is an open source community run decentralized application that
              connects people to the Celo distributed ledger in order to develop
              Economic Commons.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/sarafu/sarafu-img1.webp"
                alt="Sarafu Network platform"
                fill
                className="object-cover"
              />
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* Section 2 */}
      <Section background="dark">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <ScrollReveal delay={0.15}>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/sarafu/sarafu-img2.webp"
                alt="USSD technology for community currencies"
                fill
                className="object-cover"
              />
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <p className="text-lg text-white leading-relaxed">
              Celo Distributed ledger technology provides underlying protocols to
              secure user accounts and USSD technology enables any cell phone
              (even without internet) to have access.{" "}
              <a
                href="https://docs.grassecon.org/software/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:underline"
              >
                Read about our Open source software and Celo blockchain.
              </a>
            </p>
          </ScrollReveal>
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
