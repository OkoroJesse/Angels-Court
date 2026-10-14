"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import { rooms } from "@/data/rooms";
import { hotelConfig } from "@/data/hotel.config";
import { ExternalLink } from "lucide-react";
import BookingButton from "@/components/ui/BookingButton";

export default function RoomsPreviewSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  // Show max 3 rooms on homepage
  const featured = rooms.slice(0, 3);

  return (
    <section
      ref={ref}
      className="bg-[#11110f] py-24 lg:py-36 px-5"
      aria-labelledby="rooms-heading"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-14">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4">
          <motion.span
            className="label-gold"
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Accommodation
          </motion.span>
          <motion.span
            className="divider-gold"
            style={{ transformOrigin: "center" }}
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          />
          <motion.h2
            id="rooms-heading"
            className="font-serif text-[#f7f4ee]"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(2rem, 4vw, 3.25rem)",
              fontWeight: 300,
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            Rooms &amp; Suites
          </motion.h2>
          <motion.p
            className="text-[#b9b4aa] text-sm max-w-lg leading-relaxed"
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            Each room at Angels Court is designed for comfort, privacy, and a
            restful atmosphere — whatever brings you to Abuja.
          </motion.p>
        </div>

        {/* Room cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((room, i) => (
            <motion.article
              key={room.id}
              className="group relative flex flex-col bg-[#191817] overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 + i * 0.12 }}
              aria-label={room.name}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={room.image}
                  alt={`${room.name} at Angels Court Hotel`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#191817] to-transparent opacity-60" />

                {/* TODO badge when using placeholder image */}
                {(room.image.includes("exterior") ) && (
                  <div className="absolute top-3 left-3 bg-[#d4af37]/90 text-[#080808] text-[8px] tracking-[0.15em] uppercase font-semibold px-2 py-1">
                    Photo Coming Soon
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="flex flex-col gap-3 p-6 flex-1">
                <h3
                  className="font-serif text-[#f7f4ee]"
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "1.5rem",
                    fontWeight: 400,
                  }}
                >
                  {room.name}
                </h3>
                <p className="text-[#b9b4aa] text-xs leading-relaxed flex-1">
                  {room.shortDescription}
                </p>

                {/* Meta row */}
                <div className="flex gap-4 text-[#b9b4aa] text-[10px] tracking-wide uppercase border-t border-[#d4af37]/15 pt-3">
                  {room.bedType && <span>{room.bedType}</span>}
                  {room.maxOccupancy && (
                    <span>Up to {room.maxOccupancy} guests</span>
                  )}
                  {room.size && <span>{room.size}</span>}
                </div>

                {/* Actions */}
                <div className="flex gap-3 mt-1">
                  <Link
                    href={`/rooms/${room.slug}`}
                    className="flex-1 text-center border border-[#d4af37]/40 hover:border-[#d4af37] text-[#d4af37] text-[9px] tracking-[0.18em] uppercase font-semibold py-2.5 transition-all duration-300"
                  >
                    View Room
                  </Link>
                  <BookingButton
                    label="Book"
                    size="sm"
                    roomName={room.name}
                    className="flex-1 !py-2.5 !text-[9px]"
                  />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View all */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Link
            href="/rooms"
            className="inline-flex items-center gap-2 border border-[#d4af37]/40 hover:border-[#d4af37] text-[#d4af37] text-[10px] tracking-[0.2em] uppercase font-semibold px-8 py-3.5 transition-all duration-300"
          >
            View All Rooms &amp; Suites
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
