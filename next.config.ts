import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "substackcdn.com",
      },
      {
        protocol: "https",
        hostname: "*.substack.com",
      },
    ],
  },
  async redirects() {
    return [
      { source: "/pages/about-us.html", destination: "/about", permanent: true },
      { source: "/pages/how-it-works.html", destination: "/how-it-works", permanent: true },
      { source: "/pages/sarafu-network.html", destination: "/sarafu-network", permanent: true },
      { source: "/pages/research.html", destination: "/research", permanent: true },
      { source: "/pages/get-involved.html", destination: "/support", permanent: true },
      { source: "/pages/contact-us.html", destination: "/contact", permanent: true },
      { source: "/pages/media.html", destination: "/media", permanent: true },
      { source: "/pages/food-forests.html", destination: "/food-forests", permanent: true },
      { source: "/pages/mooc.html", destination: "/mooc", permanent: true },
      { source: "/pages/dashboard.html", destination: "/dashboard", permanent: true },
      { source: "/pages/terms-and-conditions.html", destination: "/terms", permanent: true },
    ];
  },
};

export default nextConfig;
