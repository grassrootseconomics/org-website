import Image from "next/image";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SectionHeading } from "@/components/shared/SectionHeading";

const gifs = [
  { src: "/images/how-it-works/cartimg.gif", alt: "Cart representing local commerce" },
  { src: "/images/how-it-works/house-img.gif", alt: "House representing community building" },
  { src: "/images/how-it-works/foodimg.gif", alt: "Food representing basic needs" },
];

export function CommunityVouchers() {
  return (
    <div>
      <SectionHeading serif>
        Community and Organizational issued Vouchers connect&hellip;
      </SectionHeading>

      <ScrollReveal>
        <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto items-center mb-12">
          <div className="text-center">
            <div className="relative w-24 h-24 md:w-32 md:h-32 mx-auto rounded-full overflow-hidden border-2 border-slate-200">
              <Image
                src="/images/how-it-works/round-img1.webp"
                alt="Underutilized workforces"
                fill
                className="object-cover"
              />
            </div>
            <p className="mt-3 text-sm md:text-base font-semibold text-slate-700">
              Underutilized workforces
            </p>
          </div>

          <div className="flex items-center justify-center">
            <span className="text-4xl md:text-5xl font-light text-green-600">+</span>
          </div>

          <div className="text-center">
            <div className="relative w-24 h-24 md:w-32 md:h-32 mx-auto rounded-full overflow-hidden border-2 border-slate-200">
              <Image
                src="/images/how-it-works/round-img2.webp"
                alt="Underutilized resources"
                fill
                className="object-cover"
              />
            </div>
            <p className="mt-3 text-sm md:text-base font-semibold text-slate-700">
              Underutilized resources
            </p>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.15}>
        <p className="text-xl md:text-2xl font-semibold text-center text-slate-800 max-w-2xl mx-auto mb-12">
          &hellip;in Commitment Pools as local markets that guarantee the provision of basic needs and a medium of exchange
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.3}>
        <div className="flex justify-center gap-6 md:gap-10">
          {gifs.map((gif) => (
            <div
              key={gif.src}
              className="w-20 h-20 md:w-28 md:h-28 rounded-full overflow-hidden border-2 border-slate-200"
            >
              <Image
                src={gif.src}
                alt={gif.alt}
                width={112}
                height={112}
                className="object-cover w-full h-full"
                unoptimized
              />
            </div>
          ))}
        </div>
      </ScrollReveal>
    </div>
  );
}
