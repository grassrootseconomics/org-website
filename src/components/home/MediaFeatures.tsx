import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

const mediaLogos = [
  { name: "Quartz", src: "/images/home/quartz.webp", href: "https://qz.com/86618/introducing-the-bangla-pesa-kenyas-beautiful-new-complementary-currency/" },
  { name: "Bloomberg", src: "/images/home/bloomberg.webp", href: "https://www.bloomberg.com/news/features/2018-10-31/closing-the-cash-gap-with-cryptocurrency" },
  { name: "BBC", src: "/images/home/bbc.webp", href: "http://bbc.co.uk/programmes/p05zw020" },
  { name: "Al Jazeera", src: "/images/home/aljazeera.webp", href: "https://www.youtube.com/watch?v=UpCr8-3K05E" },
  { name: "Huffington Post", src: "/images/home/huffpost.webp", href: "https://www.huffingtonpost.com/ellen-brown/the-crime-of-alleviating-_b_3519858.html" },
  { name: "YES!", src: "/images/home/yes.webp", href: "http://www.yesmagazine.org/commonomics/alternative-currencies-bigger-than-bitcoin-bangla-pesa-brixton" },
  { name: "KTB", src: "/images/home/ktb.webp", href: "https://www.youtube.com/watch?v=1awCx-eJB0I" },
  { name: "AFD", src: "/images/home/afd.webp", href: "https://vimeo.com/album/2637039/video/84658423" },
  { name: "Doughnut Economics", src: "/images/home/doughnut.webp", href: "https://www.kateraworth.com/doughnut/" },
];

export function MediaFeatures() {
  return (
    <section className="py-20 md:py-28 bg-cream-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <Link
              href="/media"
              className="text-sm font-medium uppercase tracking-widest text-slate-500 hover:text-green-600 transition-colors"
            >
              As Featured In
            </Link>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {mediaLogos.map((logo) => (
              <a
                key={logo.name}
                href={logo.href}
                target="_blank"
                rel="noopener noreferrer"
                className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={120}
                  height={40}
                  className="h-8 md:h-10 w-auto object-contain"
                />
              </a>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
