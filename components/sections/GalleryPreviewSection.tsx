"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import { galleryImages } from "@/data/gallery";

export default function GalleryPreviewSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  // Show up to 4 images
  const preview = galleryImages.slice(0, 4);

  return (
    <section
      ref={ref}
      className="bg-[#080808] py-24 lg:py-36 px-5"
      aria-labelledby="gallery-preview-heading"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6">
          <div className="flex flex-col gap-3">
            <motion.span
              className="label-gold"
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              Gallery
            </motion.span>
            <motion.h2
              id="gallery-preview-heading"
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
              The Angels Court Experience
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 border border-[#d4af37]/40 hover:border-[#d4af37] text-[#d4af37] text-[10px] tracking-[0.2em] uppercase font-semibold px-6 py-3 transition-all duration-300 whitespace-nowrap"
            >
              View Full Gallery
            </Link>
          </motion.div>
        </div>

        {/* Grid */}
        {preview.length > 0 ? (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {preview.map((img, i) => (
              <motion.div
                key={img.id}
                className="group relative aspect-square overflow-hidden cursor-pointer"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.7, delay: 0.1 + i * 0.1 }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#080808]/0 group-hover:bg-[#080808]/30 transition-colors duration-500" />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center h-48 border border-[#d4af37]/20">
            <p className="text-[#b9b4aa] text-sm">
              Gallery images will appear here once photographs are supplied.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
