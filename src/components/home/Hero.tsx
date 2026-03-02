"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Button } from "@/components/shared/Button";

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
            <div className="mb-6">
              <Image
                src="/images/home/home-logo.webp"
                alt="Grassroots Economics"
                width={200}
                height={80}
                className="h-auto w-auto max-h-20"
              />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1] font-serif">
              Prospering economies built by thriving communities.
            </h1>
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
                className="object-cover"
                priority
                unoptimized
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
