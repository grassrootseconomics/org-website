import type { Metadata } from "next";
import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { YouTubeEmbed } from "@/components/shared/YouTubeEmbed";
import { mediaArticles } from "@/data/media-articles";
import { mediaVideos } from "@/data/media-videos";

export const metadata: Metadata = {
  title: "Media",
  description:
    "Grassroots Economics in the press — coverage from Bloomberg, BBC, Al Jazeera, and more.",
};

export default function MediaPage() {
  return (
    <>
      <Section>
        <SectionHeading
          subtitle="Our work has been featured in major publications and media outlets worldwide."
        >
          Media Coverage
        </SectionHeading>

        <div className="max-w-4xl mx-auto space-y-4">
          {mediaArticles.map((article, i) => (
            <ScrollReveal key={article.link} delay={Math.min(i * 0.05, 0.3)}>
              <a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-6 bg-white border border-slate-200 rounded-2xl hover:shadow-sm hover:border-green-200 transition-all group"
              >
                <div className="flex items-center gap-4">
                  <span className="text-sm font-semibold text-green-600 bg-green-50 px-3 py-1 rounded-full flex-shrink-0">
                    {article.outlet}
                  </span>
                  <span className="text-slate-900 group-hover:text-green-600 transition-colors">
                    {article.title}
                  </span>
                </div>
                <div className="flex items-center gap-3 flex-shrink-0">
                  {article.year && (
                    <span className="text-sm text-slate-400">{article.year}</span>
                  )}
                  <svg className="w-4 h-4 text-slate-300 group-hover:text-green-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      <Section background="gray">
        <SectionHeading>Videos</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {mediaVideos.map((video, i) => (
            <ScrollReveal key={video.embedUrl} delay={Math.min(i * 0.1, 0.3)}>
              <div>
                <YouTubeEmbed url={video.embedUrl} title={video.title} />
                <p className="mt-3 text-sm font-medium text-slate-700">
                  {video.title}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>
    </>
  );
}
