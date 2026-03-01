import Image from "next/image";
import { ScrollReveal } from "./ScrollReveal";

interface StoryCalloutProps {
  title: string;
  story: string;
  imageSrc?: string;
  imageAlt?: string;
  location?: string;
}

export function StoryCallout({
  title,
  story,
  imageSrc,
  imageAlt,
  location,
}: StoryCalloutProps) {
  return (
    <ScrollReveal>
      <div className="my-16 bg-earth-50 rounded-2xl overflow-hidden">
        <div
          className={`flex flex-col ${imageSrc ? "md:flex-row" : ""} gap-0`}
        >
          {imageSrc && (
            <div className="md:w-2/5 relative min-h-[280px]">
              <Image
                src={imageSrc}
                alt={imageAlt ?? title}
                fill
                className="object-cover"
              />
            </div>
          )}
          <div
            className={`p-8 md:p-12 flex flex-col justify-center ${
              imageSrc ? "md:w-3/5" : ""
            }`}
          >
            {location && (
              <p className="text-xs font-semibold uppercase tracking-widest text-green-600 mb-3">
                {location}
              </p>
            )}
            <h3 className="text-2xl font-serif font-semibold text-slate-900 mb-4">
              {title}
            </h3>
            <p className="text-lg leading-relaxed text-slate-700">{story}</p>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
