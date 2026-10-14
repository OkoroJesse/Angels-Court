"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { gsap } from "gsap";
import { hotelConfig } from "@/data/hotel.config";
import { ExternalLink, ChevronDown } from "lucide-react";
import BookingModal from "@/components/ui/BookingModal";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  // Subtle parallax on scroll
  useEffect(() => {
    const el = imageRef.current;
    if (!el) return;

    const onScroll = () => {
      const scrollY = window.scrollY;
      el.style.transform = `translateY(${scrollY * 0.3}px)`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // GSAP entrance — image scale-in
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { scale: 1.08 },
        { scale: 1, duration: 2.2, ease: "power2.out" }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const bookingUrl = hotelConfig.bookingUrl;

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero — Angels Court Hotel and Suite"
    >
      {/* Background image */}
      <div
        ref={imageRef}
        className="absolute inset-0 w-full h-full will-change-transform"
        aria-hidden
      >
        <Image
          src={hotelConfig.images.exteriorNight}
          alt="Angels Court Hotel illuminated at night"
          fill
          sizes="100vw"
          priority
          quality={90}
          className="object-cover object-center"
        />
        {/* Cinematic overlay */}
        <div className="absolute inset-0 overlay-cinematic" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-5 max-w-4xl mx-auto flex flex-col items-center pt-28 pb-20 md:pt-32 md:pb-24">
        {/* Eyebrow Location Badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#d4af37]/40 bg-[#080808]/60 backdrop-blur-sm mb-6"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] animate-pulse" />
          <span className="label-gold text-[10px] tracking-[0.24em]">
            Kubwa · Abuja · Nigeria
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          className="font-serif text-[#f7f4ee] max-w-3xl"
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(2.6rem, 7vw, 5.5rem)",
            fontWeight: 300,
            lineHeight: 1.08,
            letterSpacing: "0.02em",
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Angels Court
          <br />
          <span style={{ fontWeight: 600, color: "#d4af37" }}>
            Hotel &amp; Suite
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          className="font-serif italic text-[#e7c96b] mt-3"
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(1.15rem, 2.5vw, 1.65rem)",
            fontWeight: 300,
            letterSpacing: "0.04em",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.85 }}
        >
          Your Dream of Paradise
        </motion.p>

        {/* Supporting copy */}
        <motion.p
          className="text-[#b9b4aa] text-sm md:text-base leading-relaxed max-w-lg mt-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.05 }}
        >
          A stay worth remembering. Modern comfort, warm hospitality, and a
          setting designed to exceed every expectation.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mt-8"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.25 }}
        >
          <button
            type="button"
            onClick={() => setBookingModalOpen(true)}
            className="inline-flex items-center justify-center gap-2.5 bg-[#d4af37] hover:bg-[#e7c96b] text-[#080808] text-[10px] tracking-[0.22em] uppercase font-semibold px-9 py-4 transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.45)] hover:-translate-y-0.5 active:translate-y-0"
          >
            Check Availability
            <ExternalLink size={12} aria-hidden />
          </button>

          <Link
            href="/rooms"
            className="inline-flex items-center justify-center border border-[#d4af37]/60 hover:border-[#d4af37] bg-[#080808]/40 hover:bg-[#d4af37]/10 text-[#f7f4ee] hover:text-[#d4af37] text-[10px] tracking-[0.22em] uppercase font-semibold px-9 py-4 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5"
          >
            Explore Our Rooms
          </Link>
        </motion.div>
      </div>

      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
      />

      {/* Scroll indicator - cleanly placed at bottom */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        aria-hidden
      >
        <span className="text-[#b9b4aa]/80 text-[8.5px] tracking-[0.28em] uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ChevronDown size={14} className="text-[#d4af37]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
