"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { galleryItems } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function Gallery() {
  return (
    <section id="portfolio" className="bg-primary px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="Portfolio"
          subtitle="A curated selection of moments captured with passion and precision"
        />

        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: (index % 3) * 0.15,
                ease: "easeOut",
              }}
              className="group relative mb-4 overflow-hidden break-inside-avoid rounded-lg"
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={800}
                height={item.aspect === "tall" ? 1100 : item.aspect === "wide" ? 550 : 800}
                className="w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/0 transition-all duration-500 group-hover:bg-black/50">
                <span className="translate-y-4 text-sm font-medium tracking-[0.25em] text-accent uppercase opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  {item.category}
                </span>
                <span className="mt-2 translate-y-4 text-xs tracking-wider text-white/70 opacity-0 transition-all delay-75 duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  View Details
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
