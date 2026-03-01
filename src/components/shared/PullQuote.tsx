import { ScrollReveal } from "./ScrollReveal";

interface PullQuoteProps {
  quote: string;
  attribution: string;
  location?: string;
}

export function PullQuote({ quote, attribution, location }: PullQuoteProps) {
  return (
    <ScrollReveal direction="none">
      <blockquote className="my-16 max-w-3xl mx-auto border-l-4 border-green-600 pl-8 py-4 bg-earth-50 rounded-r-2xl pr-8">
        <p className="text-2xl sm:text-3xl font-serif italic leading-relaxed text-slate-800">
          &ldquo;{quote}&rdquo;
        </p>
        <footer className="mt-4">
          <span className="text-sm font-semibold text-slate-700">
            {attribution}
          </span>
          {location && (
            <span className="text-sm text-slate-500"> — {location}</span>
          )}
        </footer>
      </blockquote>
    </ScrollReveal>
  );
}
