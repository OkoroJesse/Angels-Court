"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { galleryImages, galleryCategories, type GalleryCategory } from "@/data/gallery";

export default function GalleryClient() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory | "all">("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    activeCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const prev = useCallback(() => {
    setLightboxIndex((i) =>
      i !== null ? (i - 1 + filtered.length) % filtered.length : null
    );
  }, [filtered.length]);

  const next = useCallback(() => {
    setLightboxIndex((i) =>
      i !== null ? (i + 1) % filtered.length : null
    );
  }, [filtered.length]);

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    },
    [lightboxIndex, closeLightbox, prev, next]
  );

  const currentImage =
    lightboxIndex !== null ? filtered[lightboxIndex] : null;

  // Filter out categories with no images
  const availableCategories = galleryCategories.filter((cat) => {
    if (cat.value === "all") return true;
    return galleryImages.some((img) => img.category === cat.value);
  });

  return (
    <>
      {/* Category filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-10" role="group" aria-label="Filter gallery by category">
        {availableCategories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setActiveCategory(cat.value)}
            className={`text-[10px] tracking-[0.18em] uppercase font-medium px-5 py-2.5 border transition-all duration-300 ${
              activeCategory === cat.value
                ? "bg-[#d4af37] border-[#d4af37] text-[#080808]"
                : "border-[#d4af37]/30 text-[#b9b4aa] hover:border-[#d4af37] hover:text-[#d4af37]"
            }`}
            aria-pressed={activeCategory === cat.value}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Masonry-style grid */}
      {filtered.length > 0 ? (
        <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
          {filtered.map((img, i) => (
            <motion.button
              key={img.id}
              className="group relative w-full overflow-hidden block cursor-pointer focus-visible:ring-2 focus-visible:ring-[#d4af37]"
              style={{
                aspectRatio:
                  img.aspectRatio === "portrait"
                    ? "3/4"
                    : img.aspectRatio === "square"
                    ? "1/1"
                    : "4/3",
              }}
              onClick={() => openLightbox(i)}
              aria-label={`View larger: ${img.alt}`}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#080808]/0 group-hover:bg-[#080808]/25 transition-colors duration-500" />
            </motion.button>
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center h-48 border border-[#d4af37]/20">
          <p className="text-[#b9b4aa] text-sm">No images in this category yet.</p>
        </div>
      )}

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && currentImage && (
          <motion.div
            className="fixed inset-0 z-[100] bg-[#080808]/97 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            role="dialog"
            aria-modal="true"
            aria-label={`Image lightbox: ${currentImage.alt}`}
            onKeyDown={handleKeyDown}
            tabIndex={-1}
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute top-5 right-5 p-2 text-[#f7f4ee] hover:text-[#d4af37] transition-colors z-10"
              aria-label="Close lightbox"
            >
              <X size={24} />
            </button>

            {/* Prev */}
            {filtered.length > 1 && (
              <button
                onClick={prev}
                className="absolute left-4 md:left-8 p-3 text-[#f7f4ee] hover:text-[#d4af37] transition-colors z-10"
                aria-label="Previous image"
              >
                <ChevronLeft size={28} />
              </button>
            )}

            {/* Image */}
            <motion.div
              key={lightboxIndex}
              className="relative w-full h-full max-w-5xl max-h-[85vh] mx-16"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={currentImage.src}
                alt={currentImage.alt}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </motion.div>

            {/* Next */}
            {filtered.length > 1 && (
              <button
                onClick={next}
                className="absolute right-4 md:right-8 p-3 text-[#f7f4ee] hover:text-[#d4af37] transition-colors z-10"
                aria-label="Next image"
              >
                <ChevronRight size={28} />
              </button>
            )}

            {/* Caption */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
              <p className="text-[#b9b4aa] text-xs">{currentImage.alt}</p>
              <p className="text-[#b9b4aa]/50 text-[10px] mt-1">
                {lightboxIndex + 1} / {filtered.length}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
