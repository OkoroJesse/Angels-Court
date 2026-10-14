import type { Metadata } from "next";
import { hotelConfig } from "@/data/hotel.config";
import { rooms } from "@/data/rooms";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import BookingButton from "@/components/ui/BookingButton";

export const metadata: Metadata = {
  title: "Rooms & Suites",
  description:
    "Discover our range of thoughtfully designed rooms and suites at Angels Court Hotel and Suite, Kubwa, Abuja.",
};

export default function RoomsPage() {
  return (
    <>
      {/* Page hero */}
      <section className="relative pt-40 pb-24 px-5 overflow-hidden bg-[#080808]">
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
          <span className="label-gold">Accommodation</span>
          <h1
            className="font-serif text-[#f7f4ee]"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(2.4rem, 6vw, 4rem)",
              fontWeight: 300,
              lineHeight: 1.1,
            }}
          >
            Rooms &amp; Suites
          </h1>
          <span className="divider-gold" />
          <p className="text-[#b9b4aa] text-sm leading-relaxed max-w-md">
            Each room at Angels Court is a carefully designed space for rest,
            privacy, and comfort — tailored to make every stay exceptional.
          </p>
        </div>
      </section>

      {/* Rooms list */}
      <section className="bg-[#080808] py-16 px-5">
        <div className="max-w-7xl mx-auto flex flex-col gap-20">
          {rooms.map((room, i) => (
            <article
              key={room.id}
              className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
              aria-label={room.name}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden group">
                <Image
                  src={room.image}
                  alt={`${room.name} at Angels Court Hotel`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {room.image.includes("exterior") && (
                  <div className="absolute top-4 left-4 bg-[#d4af37]/90 text-[#080808] text-[8px] tracking-[0.15em] uppercase font-semibold px-3 py-1.5">
                    Room photo coming soon
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="flex flex-col gap-5">
                <span className="label-gold">
                  {String(i + 1).padStart(2, "0")} — Accommodation
                </span>
                <h2
                  className="font-serif text-[#f7f4ee]"
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)",
                    fontWeight: 300,
                  }}
                >
                  {room.name}
                </h2>
                <span className="divider-gold" />
                <p className="text-[#b9b4aa] text-sm leading-relaxed">
                  {room.longDescription}
                </p>

                {/* Room specs */}
                {(room.bedType || room.maxOccupancy || room.size) && (
                  <div className="flex flex-wrap gap-6 text-[10px] tracking-[0.15em] uppercase text-[#b9b4aa] border-t border-[#d4af37]/15 pt-4">
                    {room.bedType && (
                      <span>
                        <span className="text-[#d4af37] block mb-1">Bed</span>
                        {room.bedType}
                      </span>
                    )}
                    {room.maxOccupancy && (
                      <span>
                        <span className="text-[#d4af37] block mb-1">Guests</span>
                        Up to {room.maxOccupancy}
                      </span>
                    )}
                    {room.size && (
                      <span>
                        <span className="text-[#d4af37] block mb-1">Size</span>
                        {room.size}
                      </span>
                    )}
                  </div>
                )}

                {/* Amenities */}
                {room.amenities.length > 0 && (
                  <ul className="grid grid-cols-2 gap-1.5">
                    {room.amenities.map((a) => (
                      <li
                        key={a}
                        className="text-[#b9b4aa] text-xs flex items-center gap-2 before:content-[''] before:w-1 before:h-1 before:bg-[#d4af37] before:shrink-0"
                      >
                        {a}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Actions */}
                <div className="flex flex-wrap gap-3 mt-2">
                  <Link
                    href={`/rooms/${room.slug}`}
                    className="inline-flex items-center border border-[#d4af37]/50 hover:border-[#d4af37] text-[#d4af37] text-[10px] tracking-[0.2em] uppercase font-semibold px-6 py-3 transition-all duration-300"
                  >
                    View Room
                  </Link>
                  <BookingButton
                    label="Book This Room"
                    roomName={room.name}
                    size="md"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[#11110f] py-20 px-5 border-t border-[#d4af37]/10">
        <div className="max-w-2xl mx-auto text-center flex flex-col items-center gap-5">
          <h2
            className="font-serif text-[#f7f4ee]"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
              fontWeight: 300,
            }}
          >
            Not Sure Which Room to Choose?
          </h2>
          <p className="text-[#b9b4aa] text-sm leading-relaxed">
            Our team is happy to help you find the perfect accommodation for
            your visit to Abuja.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center border border-[#d4af37] hover:bg-[#d4af37] hover:text-[#080808] text-[#d4af37] text-[10px] tracking-[0.2em] uppercase font-semibold px-8 py-3.5 transition-all duration-300"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
