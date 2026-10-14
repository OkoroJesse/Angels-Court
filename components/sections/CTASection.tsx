"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import { hotelConfig } from "@/data/hotel.config";
import { ExternalLink } from "lucide-react";
import BookingButton from "@/components/ui/BookingButton";

export default function CTASection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative py-32 lg:py-44 px-5 overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Background */}
      <div className="absolute inset-0" aria-hidden>
        <Image
          src={hotelConfig.images.exteriorNight}
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#080808]/75" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center text-center gap-7">
        <motion.span
          className="label-gold"
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Reserve Your Stay
        </motion.span>

        <motion.h2
          id="cta-heading"
          className="font-serif text-[#f7f4ee]"
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(2.2rem, 5vw, 4rem)",
            fontWeight: 300,
            lineHeight: 1.1,
          }}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          Begin Your Dream
          <br />
          <span style={{ color: "#d4af37", fontStyle: "italic" }}>
            of Paradise
          </span>
        </motion.h2>

        <motion.p
          className="text-[#b9b4aa] text-sm leading-relaxed max-w-md"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          Experience the warmth and comfort of Angels Court. Book your stay
          today and let us take care of everything else.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-3"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.45 }}
        >
          <BookingButton
            label="Check Availability"
            size="lg"
            className="!px-8 !py-4"
          />

          <Link
            href="/contact"
            className="inline-flex items-center justify-center border border-[#f7f4ee]/40 hover:border-[#d4af37] text-[#f7f4ee] hover:text-[#d4af37] text-[10px] tracking-[0.22em] uppercase font-semibold px-8 py-4 transition-all duration-300"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
