"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section id="home" className="relative flex h-screen items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/hero.jpg"
        alt="Urji Photography hero"
        fill
        priority
        className="object-cover"
        sizes="100vw"
        quality={90}
      />

      {/* Gradient overlay -- lighter so the photo shines through */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />

      {/* Content */}
      <div className="relative z-10 px-6 text-center drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4 text-sm font-medium tracking-[0.3em] text-accent uppercase"
        >
          Professional Photography
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-heading text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-8xl [text-shadow:_0_2px_20px_rgba(0,0,0,0.5)]"
        >
          Urji Photography
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-4 text-lg font-light tracking-wide text-white sm:text-xl lg:text-2xl [text-shadow:_0_1px_10px_rgba(0,0,0,0.4)]"
        >
          Capturing Moments That Matter
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#portfolio"
            className="group relative inline-flex items-center gap-2 rounded-full border-2 border-accent px-8 py-3 text-sm font-medium tracking-wider text-accent uppercase transition-all duration-300 hover:bg-accent hover:text-black"
          >
            View Work
            <svg
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-accent px-8 py-3 text-sm font-medium tracking-wider text-black uppercase transition-all duration-300 hover:bg-accent-light hover:shadow-lg hover:shadow-accent/20"
          >
            Contact
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
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
