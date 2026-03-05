import type { Metadata } from "next";
import Image from "next/image";
import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Button } from "@/components/shared/Button";
import { getSubstackPosts } from "@/lib/substack";
import { SUBSTACK_URL } from "@/lib/constants";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Latest posts from Grassroots Economics on Substack — community currencies, Commitment Pooling, and economic empowerment.",
};

export default async function BlogPage() {
  const posts = await getSubstackPosts(12);

  return (
    <Section>
      <SectionHeading
        subtitle="Latest posts from our Substack newsletter"
      >
        Blog
      </SectionHeading>

      {posts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {posts.map((post, i) => (
            <ScrollReveal key={post.link} delay={Math.min(i * 0.05, 0.3)}>
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg hover:border-green-200 transition-all h-full flex flex-col"
              >
                {post.imageUrl && (
                  <div className="relative w-full aspect-[16/9] bg-slate-100">
                    <Image
                      src={post.imageUrl}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                )}
                <div className="p-6 flex flex-col flex-1">
                  <time className="text-sm text-slate-400">
                    {new Date(post.pubDate).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <h3 className="mt-2 text-lg font-semibold text-slate-900 group-hover:text-green-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 line-clamp-3">
                    {post.contentSnippet}
                  </p>
                  <p className="mt-auto pt-4 text-sm font-medium text-green-600">
                    Read more &rarr;
                  </p>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-lg text-slate-500">
            Unable to load posts. Visit our Substack directly.
          </p>
        </div>
      )}

      <ScrollReveal>
        <div className="mt-16 text-center">
          <Button href={SUBSTACK_URL} external>
            View All Posts on Substack
          </Button>
        </div>
      </ScrollReveal>
    </Section>
  );
}
