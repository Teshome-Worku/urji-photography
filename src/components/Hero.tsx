"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section id="home" className="relative flex h-screen items-center justify-center overflow-hidden">
      {/* Background image with brightness/contrast boost */}
      <Image
        src="/images/hero.jpg"
        alt="Urji Photography hero"
        fill
        priority
        className="object-cover brightness-[1.15] contrast-[1.08] saturate-[1.05]"
        sizes="100vw"
        quality={90}
      />

      {/* Thin vignette at edges only — image stays fully clear */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,rgba(0,0,0,0.3)_100%)]" />

      {/* Content — no backdrop, no blur, just text shadows for readability */}
      <div className="relative z-10 px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4 text-sm font-medium tracking-[0.3em] uppercase [text-shadow:0_1px_8px_rgba(0,0,0,0.5)]"
          style={{ color: "#d4b876" }}
        >
          Professional Photography
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-heading text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-8xl [text-shadow:0_2px_24px_rgba(0,0,0,0.6),0_1px_4px_rgba(0,0,0,0.4)]"
        >
          Urji Photography
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-4 text-lg font-light tracking-wide text-white/95 sm:text-xl lg:text-2xl [text-shadow:0_1px_12px_rgba(0,0,0,0.5)]"
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
            className="group relative inline-flex items-center gap-2 rounded-full border-2 px-8 py-3 text-sm font-medium tracking-wider uppercase transition-all duration-300 hover:text-black [text-shadow:0_1px_6px_rgba(0,0,0,0.3)]"
            style={{
              borderColor: "#d4b876",
              color: "#d4b876",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#d4b876";
              e.currentTarget.style.color = "#000";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "#d4b876";
            }}
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
            className="inline-flex items-center rounded-full px-8 py-3 text-sm font-semibold tracking-wider text-black uppercase transition-all duration-300 hover:shadow-lg"
            style={{ backgroundColor: "#d4b876" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#dfca92";
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(212,184,118,0.25)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#d4b876";
              e.currentTarget.style.boxShadow = "none";
            }}
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
          className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/40 pt-2"
        >
          <div className="h-2 w-0.5 rounded-full bg-white/70" />
        </motion.div>
      </motion.div>
    </section>
  );
}
