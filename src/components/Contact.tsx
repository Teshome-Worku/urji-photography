"use client";

import { motion } from "motion/react";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  return (
    <section id="contact" className="bg-primary px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="Get In Touch"
          subtitle="Ready to create something beautiful? Let's start a conversation."
        />

        <div className="grid gap-12 md:grid-cols-2 lg:gap-20">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col justify-center"
          >
            <p className="mb-2 text-sm font-medium tracking-[0.2em] text-accent uppercase">
              Let&apos;s Connect
            </p>
            <h3 className="font-heading text-3xl font-bold text-white lg:text-4xl">
              Have a Project in Mind?
            </h3>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-white/60">
              Whether it&apos;s a wedding, portrait session, or a special event,
              I&apos;d love to hear about your vision. Reach out and let&apos;s
              make it happen.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10">
                  <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs tracking-wide text-muted uppercase">Email</p>
                  <p className="text-sm text-white">hello@urjiphotography.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10">
                  <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs tracking-wide text-muted uppercase">Phone</p>
                  <p className="text-sm text-white">+251 912 345 678</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10">
                  <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs tracking-wide text-muted uppercase">Location</p>
                  <p className="text-sm text-white">Addis Ababa, Ethiopia</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            onSubmit={(e) => e.preventDefault()}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="mb-2 block text-xs font-medium tracking-wider text-muted uppercase">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your full name"
                className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm text-white placeholder:text-white/30 transition-all duration-300 focus:border-accent/50 focus:ring-1 focus:ring-accent/50 focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-xs font-medium tracking-wider text-muted uppercase">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="your@email.com"
                className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm text-white placeholder:text-white/30 transition-all duration-300 focus:border-accent/50 focus:ring-1 focus:ring-accent/50 focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-xs font-medium tracking-wider text-muted uppercase">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Tell me about your project..."
                className="w-full resize-none rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm text-white placeholder:text-white/30 transition-all duration-300 focus:border-accent/50 focus:ring-1 focus:ring-accent/50 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-accent px-8 py-4 text-sm font-semibold tracking-wider text-black uppercase transition-all duration-300 hover:bg-accent-light hover:shadow-lg hover:shadow-accent/20"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
