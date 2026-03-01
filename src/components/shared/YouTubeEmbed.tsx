"use client";

import { useState } from "react";

interface YouTubeEmbedProps {
  url: string;
  title?: string;
  className?: string;
}

function getVideoId(url: string): string {
  const match = url.match(
    /(?:youtube\.com\/(?:embed\/|watch\?v=)|youtu\.be\/)([a-zA-Z0-9_-]+)/
  );
  return match?.[1] ?? "";
}

export function YouTubeEmbed({
  url,
  title = "Video",
  className = "",
}: YouTubeEmbedProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const videoId = getVideoId(url);
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`;

  if (!videoId) return null;

  return (
    <div
      className={`relative aspect-video overflow-hidden rounded-2xl bg-slate-100 ${className}`}
    >
      {!isLoaded ? (
        <button
          onClick={() => setIsLoaded(true)}
          className="group relative h-full w-full"
          aria-label={`Play ${title}`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={thumbnailUrl}
            alt={title}
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors group-hover:bg-black/30">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 shadow-lg transition-transform group-hover:scale-110">
              <svg
                className="ml-1 h-6 w-6 text-slate-900"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </button>
      ) : (
        <iframe
          src={embedUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      )}
    </div>
  );
}
