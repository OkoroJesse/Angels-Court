import type { Metadata } from "next";
import Image from "next/image";
import { hotelConfig } from "@/data/hotel.config";
import GalleryClient from "@/components/gallery/GalleryClient";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Explore photographs of Angels Court Hotel and Suite — exterior, rooms, dining, pool, and facilities in Kubwa, Abuja.",
};

export default function GalleryPage() {
  return (
    <>
      {/* Page hero */}
      <section className="relative pt-40 pb-20 px-5 bg-[#080808] overflow-hidden">
        <div className="absolute inset-0" aria-hidden>
          <Image
            src={hotelConfig.images.exteriorNight}
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/60 to-[#080808]" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center gap-4">
          <span className="label-gold">Photography</span>
          <h1
            className="font-serif text-[#f7f4ee]"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(2.4rem, 6vw, 4rem)",
              fontWeight: 300,
              lineHeight: 1.1,
            }}
          >
            Our Gallery
          </h1>
          <span className="divider-gold" />
          <p className="text-[#b9b4aa] text-sm leading-relaxed max-w-md">
            A visual introduction to Angels Court Hotel and Suite — your dream
            of paradise in Abuja.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-[#080808] py-12 pb-24 px-5">
        <div className="max-w-7xl mx-auto">
          <GalleryClient />
        </div>
      </section>
    </>
  );
}
