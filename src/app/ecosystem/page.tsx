import type { Metadata } from "next";
import Image from "next/image";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/shared/Button";
import { ECOSYSTEM_STEWARDSHIP_HTML } from "@/data/ecosystem-content";

export const metadata: Metadata = {
  title: "Ecosystem Stewardship",
  description:
    "Community-led ecosystem restoration practices, stewardship agreements, and regenerative infrastructure from Grassroots Economics.",
};

export default function EcosystemPage() {
  return (
    <>
      <Section background="warm">
        <div className="max-w-5xl mx-auto">
          <SectionHeading eyebrow="ECOSYSTEM RESTORATION" serif>
            Ecosystem Stewardship
          </SectionHeading>
          <p className="text-center text-sm text-slate-500">
            Regeneration Is Relationship • June 12, 2025
          </p>
          <ScrollReveal>
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mt-8 shadow-sm">
              <Image
                src="/images/ecosystem/f330cac9-32b8-4a32-8f2b-9da30cada839_1600x747.jpeg"
                alt="Ecosystem stewardship at Grassroots Economics"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 960px"
                priority
              />
            </div>
          </ScrollReveal>
        </div>
      </Section>

      <Section className="pt-10 md:pt-14">
        <ScrollReveal>
          <article
            className="mx-auto max-w-3xl text-slate-700 leading-relaxed [&_h1]:text-3xl [&_h1]:font-serif [&_h1]:font-semibold [&_h1]:text-slate-900 [&_h1]:mb-6 [&_h2]:text-2xl [&_h2]:font-serif [&_h2]:font-semibold [&_h2]:text-slate-900 [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-slate-900 [&_h3]:mt-8 [&_h3]:mb-3 [&_p]:text-lg [&_p]:mb-6 [&_a]:text-green-600 [&_a]:underline [&_a]:underline-offset-2 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-6 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-6 [&_ol_ol]:list-[lower-alpha] [&_li]:mb-2 [&_figure]:my-8 [&_img]:rounded-2xl [&_img]:w-full [&_img]:h-auto [&_img]:my-8 [&_em]:text-slate-600"
            dangerouslySetInnerHTML={{ __html: ECOSYSTEM_STEWARDSHIP_HTML }}
          />
        </ScrollReveal>

        <div className="text-center mt-12 flex flex-wrap justify-center gap-4">
          <Button href="https://sarafu.network" external>
            Explore Sarafu.Network
          </Button>
          <Button href="/support" variant="outline">
            Support This Work
          </Button>
        </div>
      </Section>
    </>
  );
}
