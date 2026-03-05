"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Button } from "@/components/shared/Button";

interface Stat {
  label: string;
  value: string;
  href?: string;
}

// Stats sourced from https://dune.com/grassrootseconomics/sarafu-network
// and https://grassecon.substack.com/p/2025-sarafu-network-study-results
// Last updated: March 2026
const stats: Stat[] = [
  { label: "Founded", value: "Since 2010" },
  { label: "People", value: "4,400+" },
  { label: "Pools / Communities", value: "55+" },
  { label: "Vouchers", value: "560+" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-earth-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-green-600 mb-4">
              Individuals &middot; Groups &middot; Organizations
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1] font-serif">
              Prospering economies built by thriving communities.
            </h1>
            <p className="mt-6 text-lg text-slate-700 leading-relaxed max-w-xl">
              Grassroots Economics is a non-profit foundation that has been
              seeking to empower marginalized communities to take charge of their
              own livelihoods and economic future since 2010.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/how-it-works">How it works</Button>
              <Button href="/about" variant="outline">
                About us
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="relative"
          >
            <div className="relative aspect-square rounded-3xl overflow-hidden">
              <Image
                src="/images/home/home-img1-resize.gif"
                alt="Community Asset Voucher network in Kenya"
                fill
                className="object-cover mix-blend-multiply"
                priority
                unoptimized
              />
            </div>
          </motion.div>
        </div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-earth-200 pt-10"
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              {stat.href ? (
                <a
                  href={stat.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <p className="text-3xl font-serif font-bold text-slate-900 group-hover:text-green-600 transition-colors">
                    {stat.value}
                  </p>
                </a>
              ) : (
                <p className="text-3xl font-serif font-bold text-slate-900">
                  {stat.value}
                </p>
              )}
              <p className="text-sm text-slate-500 mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
