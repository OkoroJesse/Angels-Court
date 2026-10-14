"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import {
  Wifi,
  Car,
  Clock,
  UtensilsCrossed,
  Waves,
  Sun,
} from "lucide-react";
import { amenities } from "@/data/amenities";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Wifi,
  Car,
  Clock,
  UtensilsCrossed,
  Waves,
  Sun,
};

export default function AmenitiesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="bg-[#f7f4ee] py-24 lg:py-36 px-5"
      aria-labelledby="amenities-heading"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-14">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4">
          <motion.span
            className="label-gold"
            style={{ color: "#9a7e1a" }}
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Facilities
          </motion.span>
          <motion.span
            className="divider-gold"
            style={{ transformOrigin: "center" }}
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          />
          <motion.h2
            id="amenities-heading"
            className="font-serif text-[#171613]"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(2rem, 4vw, 3.25rem)",
              fontWeight: 300,
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            Everything You Need
          </motion.h2>
          <motion.p
            className="text-[#555] text-sm max-w-lg leading-relaxed"
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            Angels Court Hotel and Suite provides a range of facilities designed
            to make your stay as comfortable and convenient as possible.
          </motion.p>
        </div>

        {/* Amenities grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {amenities.map((amenity, i) => {
            const Icon = iconMap[amenity.icon];
            return (
              <motion.div
                key={amenity.id}
                className="flex flex-col gap-3 p-6 bg-white border border-[#e8e3d8] hover:border-[#d4af37]/50 transition-colors duration-300"
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.08 }}
              >
                {Icon && (
                  <Icon size={22} className="text-[#d4af37]" aria-hidden />
                )}
                <h3
                  className="text-[#171613] font-medium text-sm"
                >
                  {amenity.title}
                </h3>
                <p className="text-[#777] text-xs leading-relaxed">
                  {amenity.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
