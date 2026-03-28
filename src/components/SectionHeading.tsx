"use client";

import { motion } from "motion/react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  light?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  light = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="mb-16 text-center"
    >
      <h2
        className={`font-heading text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl ${
          light ? "text-[#0B0B0B]" : "text-white"
        }`}
      >
        {title}
      </h2>
      <div className="mx-auto mt-4 h-[2px] w-16 bg-accent" />
      {subtitle && (
        <p
          className={`mx-auto mt-4 max-w-xl text-base sm:text-lg ${
            light ? "text-[#555]" : "text-muted"
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
