"use client";

import { useState } from "react";
import type { Publication } from "@/data/publications";

export function PublicationCard({ pub }: { pub: Publication }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-sm transition-shadow">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <a
            href={pub.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-semibold text-slate-900 hover:text-green-600 transition-colors"
          >
            {pub.title}
          </a>
          <div className="mt-2 flex flex-wrap items-center gap-2 text-sm text-slate-500">
            {pub.authors && <span>{pub.authors}</span>}
            {pub.journal && (
              <>
                <span className="text-slate-300">&middot;</span>
                <span className="italic">{pub.journal}</span>
              </>
            )}
            {pub.year && (
              <>
                <span className="text-slate-300">&middot;</span>
                <span>{pub.year}</span>
              </>
            )}
          </div>
        </div>
        <a
          href={pub.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 text-green-600 hover:text-green-700"
          aria-label={`Read ${pub.title}`}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>

      {pub.abstract && (
        <>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-3 text-sm text-green-600 hover:text-green-700 font-medium"
          >
            {isExpanded ? "Hide abstract" : "Show abstract"}
          </button>
          {isExpanded && (
            <p className="mt-3 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
              {pub.abstract}
            </p>
          )}
        </>
      )}
    </div>
  );
}
