import type { Metadata } from "next";
import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Button } from "@/components/shared/Button";

export const metadata: Metadata = {
  title: "MOOC",
  description:
    "Free online courses and educational resources about Community Asset Vouchers, Commitment Pooling, and grassroots economics.",
};

const audioFiles = [
  "GE-Intro.mp3",
  "GE_Module_0.mp3",
  "GE_Module_1.mp3",
  "GE_Module_2.mp3",
  "GE_Module_3.mp3",
  "GE_Module_4.mp3",
  "GE_Module_5.mp3",
  "GE_Module_6.mp3",
  "GE_Module_7.mp3",
  "GE_Module_8.mp3",
  "GE_Module_9.mp3",
  "GE_Module_10.mp3",
  "GE_Module_11.mp3",
];

const resources = [
  {
    title: "Course Videos",
    description: "Full video course on community currencies and commitment pooling.",
    href: "https://www.youtube.com/playlist?list=PLPUExzwZAUpbaCnZSJPxMve-h1yys54v4",
    icon: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    title: "Paper-Based Community Currencies",
    description:
      "Video series on non-digital community currency systems and their implementation.",
    href: "https://www.youtube.com/playlist?list=PLPUExzwZAUpbEInJy_8Wj_c_mDsw7-qXe",
    icon: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    title: "Village Market Simulator",
    description:
      "A series of explorations and simulations on community economics.",
    href: "https://github.com/GrassrootsEconomics",
    icon: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    title: "Operational Documentation",
    description:
      "Understand how Grassroots Economics operates day-to-day.",
    href: "https://docs.grassecon.org/operations/",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
];

export default function MOOCPage() {
  return (
    <>
      <Section>
        <SectionHeading
          eyebrow="FREE TRAINING"
          serif
          subtitle="Free online courses and resources about community currencies, Commitment Pooling, and grassroots economics."
        >
          Educational Resources
        </SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {resources.map((resource, i) => (
            <ScrollReveal key={resource.title} delay={i * 0.1}>
              <a
                href={resource.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-lg hover:border-green-200 transition-all duration-300 h-full"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-green-50 text-green-600 mb-4 group-hover:bg-green-100 transition-colors">
                  {resource.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-green-600 transition-colors">
                  {resource.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {resource.description}
                </p>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      <Section background="warm">
        <SectionHeading eyebrow="LISTEN TO THE COURSE" serif>
          Audio Modules
        </SectionHeading>
        <div className="max-w-3xl mx-auto space-y-4">
          {audioFiles.map((file, i) => (
            <ScrollReveal key={file} delay={Math.min(i * 0.05, 0.3)}>
              <div className="bg-white rounded-xl p-4 flex items-center gap-4">
                <span className="text-sm font-medium text-slate-500 w-24 flex-shrink-0">
                  {file.replace("GE_", "").replace("GE-", "").replace(".mp3", "").replace(/_/g, " ")}
                </span>
                {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
                <audio controls preload="none" className="w-full h-10">
                  <source src={"/audio/" + file} type="audio/mpeg" />
                </audio>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      <Section>
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4 font-serif">
              Want to learn more?
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Contact us for more up-to-date information about our courses and
              training programs.
            </p>
            <Button href="/contact">Get In Touch</Button>
          </div>
        </ScrollReveal>
      </Section>
    </>
  );
}
