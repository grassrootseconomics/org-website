import Image from "next/image";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Button } from "@/components/shared/Button";

interface ContentSectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  imageSrc: string;
  imageAlt: string;
  reversed?: boolean;
  background?: "white" | "gray";
}

export function ContentSection({
  title,
  description,
  buttonText,
  buttonHref,
  imageSrc,
  imageAlt,
  reversed = false,
  background = "white",
}: ContentSectionProps) {
  return (
    <section
      className={`py-20 md:py-32 ${background === "gray" ? "bg-slate-50" : "bg-white"}`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
            reversed ? "lg:direction-rtl" : ""
          }`}
        >
          <ScrollReveal
            className={reversed ? "lg:order-2" : "lg:order-1"}
          >
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
              {title}
            </h2>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              {description}
            </p>
            <div className="mt-8">
              <Button href={buttonHref} variant="outline">
                {buttonText}
              </Button>
            </div>
          </ScrollReveal>

          <ScrollReveal
            delay={0.15}
            className={reversed ? "lg:order-1" : "lg:order-2"}
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
