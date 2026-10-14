"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import { hotelConfig } from "@/data/hotel.config";

export default function IntroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="bg-[#080808] py-14 lg:py-20 px-5 overflow-hidden"
      aria-labelledby="intro-heading"
    >
      <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Image column - 5 cols on lg for a more compact, proportional presence */}
        <motion.div
          className="lg:col-span-5 relative"
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Main image - 16/10 aspect ratio shows the building width & height naturally */}
          <div className="relative aspect-[16/10] sm:aspect-[4/3] lg:aspect-[16/11] overflow-hidden rounded ring-1 ring-[#d4af37]/25 shadow-xl">
            <Image
              src="/images/discover-exterior.jpg"
              alt="Angels Court Hotel exterior by day — modern facade with marble columns"
              fill
              sizes="(max-width: 1024px) 100vw, 480px"
              quality={95}
              priority
              className="object-cover object-center transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/20 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Floating accent card */}
          <motion.div
            className="absolute -bottom-4 -right-4 bg-[#d4af37] py-3.5 px-4 max-w-[150px] shadow-lg"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            aria-hidden
          >
            <p
              className="text-[#080808] font-serif italic text-base leading-snug"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Your Dream of Paradise
            </p>
          </motion.div>

          {/* Gold border accent */}
          <div
            className="absolute -top-3 -left-3 w-16 h-16 border border-[#d4af37]/30 pointer-events-none"
            aria-hidden
          />
        </motion.div>

        {/* Text column - 7 cols on lg */}
        <motion.div
          className="lg:col-span-7 flex flex-col gap-5"
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <span className="label-gold">Discover Angels Court</span>

          <h2
            id="intro-heading"
            className="font-serif text-[#f7f4ee] leading-tight"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(1.75rem, 3.2vw, 2.6rem)",
              fontWeight: 300,
            }}
          >
            Where Comfort
            <br />
            Meets{" "}
            <span style={{ color: "#d4af37", fontStyle: "italic" }}>
              Distinction
            </span>
          </h2>

          <span className="divider-gold" aria-hidden />

          <p className="text-[#b9b4aa] text-sm leading-relaxed">
            Situated in Kubwa, Abuja, Angels Court Hotel and Suite offers a
            thoughtfully designed retreat for business and leisure travellers.
            Our modern building combines contemporary architecture with attentive
            service — creating an experience that resonates well beyond your
            stay.
          </p>

          <p className="text-[#b9b4aa] text-sm leading-relaxed">
            From the moment you arrive, our 24-hour front desk team is on hand
            to ensure every detail of your visit is perfectly managed. Whether
            you are here for a single night or an extended visit, we welcome you
            as family.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-1">
            <Link
              href="/about"
              className="inline-flex items-center justify-center border border-[#d4af37]/50 hover:border-[#d4af37] text-[#d4af37] text-[10px] tracking-[0.2em] uppercase font-semibold px-6 py-3 transition-all duration-300 hover:bg-[#d4af37]/10 w-fit"
            >
              Our Story
            </Link>
            <Link
              href="/rooms"
              className="inline-flex items-center justify-center text-[#b9b4aa] hover:text-[#d4af37] text-[10px] tracking-[0.2em] uppercase font-semibold px-6 py-3 transition-colors w-fit"
            >
              View Rooms →
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
