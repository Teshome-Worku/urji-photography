"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Full-screen background photo — clearly visible */}
      <Image
        src="/images/hero.jpg"
        alt="Wedding photography by Urji"
        fill
        priority
        className="object-cover"
        sizes="100vw"
        quality={90}
      />

      {/* Gentle bottom gradient only — just enough for text contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

      {/* Thin top fade for navbar readability */}
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/20 to-transparent" />

      {/* Large heading — left aligned, vertically centered */}
      <div className="absolute inset-0 flex items-center px-8 sm:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-2xl"
        >
          <h1 className="font-heading text-5xl leading-[1.1] font-bold text-white sm:text-6xl lg:text-7xl xl:text-8xl">
            Capture Life&apos;s
            <br />
            Moments with
            <br />
            <span className="inline-flex items-baseline gap-4">
              Urji
              <a
                href="#portfolio"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-white/60 transition-all duration-300 hover:border-white hover:bg-white/10 sm:h-14 sm:w-14"
              >
                <svg
                  className="h-5 w-5 text-white sm:h-6 sm:w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 17L17 7M17 7H7M17 7v10"
                  />
                </svg>
              </a>
            </span>
          </h1>
        </motion.div>
      </div>

      {/* Bottom right — description + CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute right-8 bottom-24 left-8 sm:right-12 sm:left-auto sm:max-w-sm lg:right-20"
      >
        <p className="text-sm leading-relaxed text-white/80 sm:text-base">
          A passionate photographer dedicated to capturing life&apos;s most
          precious moments with elegance and artistry.
        </p>
        <a
          href="#contact"
          className="group mt-6 inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-xs font-medium tracking-[0.2em] text-white uppercase transition-all duration-300 hover:border-white hover:bg-white/10 sm:text-sm"
        >
          Book a Session Now
          <svg
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </motion.div>

      {/* Bottom left — prev/next style nav hints */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="absolute bottom-10 left-8 hidden items-center gap-8 text-[11px] tracking-[0.2em] text-white/50 uppercase sm:left-12 sm:flex lg:left-20"
      >
        <span className="cursor-pointer transition-colors hover:text-white">Prev</span>
        <span className="cursor-pointer transition-colors hover:text-white">Next</span>
      </motion.div>

      {/* Scroll indicator — bottom center */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 sm:hidden"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/30 pt-2"
        >
          <div className="h-2 w-[2px] rounded-full bg-white/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
