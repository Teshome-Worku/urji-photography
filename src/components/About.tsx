"use client";

import Image from "next/image";
import { motion } from "motion/react";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="bg-surface-light px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="About"
          subtitle="The person behind the lens"
          light
        />

        <div className="grid items-center gap-12 md:grid-cols-2 lg:gap-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative overflow-hidden rounded-2xl"
          >
            <Image
              src="/images/about.jpg"
              alt="Urji — Photographer"
              width={600}
              height={750}
              className="h-auto w-full object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/10" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          >
            <p className="mb-2 text-sm font-medium tracking-[0.2em] text-accent uppercase">
              Meet Urji
            </p>
            <h3 className="font-heading text-3xl font-bold text-[#0B0B0B] lg:text-4xl">
              Storytelling Through
              <br />
              Every Frame
            </h3>

            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-[#555]">
              <p>
                With over a decade of experience capturing life&apos;s most meaningful moments,
                I&apos;ve built my craft on a foundation of authenticity, artistry, and
                an unwavering attention to detail.
              </p>
              <p>
                From intimate elopements to grand celebrations, my approach blends documentary
                storytelling with fine-art aesthetics — ensuring every image reflects the
                genuine emotion and beauty of the moment.
              </p>
              <p>
                Based in Addis Ababa and available worldwide, I believe that great photography
                isn&apos;t just about what you see — it&apos;s about what you feel when you
                look back.
              </p>
            </div>

            <div className="mt-8 flex gap-12">
              <div>
                <p className="font-heading text-3xl font-bold text-accent">10+</p>
                <p className="mt-1 text-xs tracking-wide text-[#888] uppercase">Years Experience</p>
              </div>
              <div>
                <p className="font-heading text-3xl font-bold text-accent">500+</p>
                <p className="mt-1 text-xs tracking-wide text-[#888] uppercase">Projects Done</p>
              </div>
              <div>
                <p className="font-heading text-3xl font-bold text-accent">200+</p>
                <p className="mt-1 text-xs tracking-wide text-[#888] uppercase">Happy Clients</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
