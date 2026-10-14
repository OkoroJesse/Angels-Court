import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Wifi,
  Car,
  Clock,
  UtensilsCrossed,
  Waves,
  Sun,
  Briefcase,
  Coffee,
} from "lucide-react";
import { amenities } from "@/data/amenities";
import { hotelConfig } from "@/data/hotel.config";
import { ExternalLink } from "lucide-react";
import BookingButton from "@/components/ui/BookingButton";

export const metadata: Metadata = {
  title: "Experience & Amenities",
  description:
    "Discover the facilities and experiences available at Angels Court Hotel and Suite, Kubwa, Abuja.",
};

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Wifi,
  Car,
  Clock,
  UtensilsCrossed,
  Waves,
  Sun,
  Briefcase,
  Coffee,
};

const experienceFeatures = [
  {
    number: "01",
    title: "Outdoor Swimming Pool & Patio",
    description:
      "Our outdoor swimming pool and terrace patio provide the perfect setting to relax and unwind after a busy day in Abuja. Enjoy sunny days and refreshing swims in a private environment.",
    image: "/images/pool/pool-1.png",
    imageAlt: "Angels Court Hotel outdoor swimming pool with water fountain",
    imagePlaceholder: false,
  },
  {
    number: "02",
    title: "Dining Experience",
    description:
      "Start your mornings and end your evenings in our comfortable on-site restaurant, where our team serves hearty meals and refreshing drinks in a welcoming ambiance.",
    image: "/images/dining/dining-1.jpg",
    imageAlt: "Angels Court Hotel — on-site restaurant and dining hall",
    imagePlaceholder: false,
  },
  {
    number: "03",
    title: "Poolside Terrace & Lounge",
    description:
      "Take in the views from our multi-level terrace and balcony spaces overlooking the pool courtyard, perfect for casual meetings and unwinding.",
    image: "/images/pool/pool-2.png",
    imageAlt: "Angels Court Hotel poolside terrace and elevated balcony lounge",
    imagePlaceholder: false,
  },
];

export default function ExperiencePage() {
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
            className="object-cover opacity-25"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/50 to-[#080808]" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center gap-4">
          <span className="label-gold">Facilities &amp; Experience</span>
          <h1
            className="font-serif text-[#f7f4ee]"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(2.4rem, 6vw, 4rem)",
              fontWeight: 300,
              lineHeight: 1.1,
            }}
          >
            The Angels Court Experience
          </h1>
          <span className="divider-gold" />
          <p className="text-[#b9b4aa] text-sm leading-relaxed max-w-md">
            From arrival to departure, every detail is designed for your
            comfort and enjoyment.
          </p>
        </div>
      </section>

      {/* Editorial experience sections */}
      <section className="bg-[#080808] py-16 px-5">
        <div className="max-w-7xl mx-auto flex flex-col gap-28">
          {experienceFeatures.map((feature, i) => (
            <div
              key={feature.number}
              className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={feature.image}
                  alt={feature.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                {feature.imagePlaceholder && (
                  <div className="absolute top-4 left-4 bg-[#d4af37]/90 text-[#080808] text-[8px] tracking-[0.15em] uppercase font-semibold px-3 py-1.5">
                    Facility photo coming soon
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/50 to-transparent" />
              </div>

              {/* Text */}
              <div className="flex flex-col gap-5">
                <span className="label-gold">{feature.number}</span>
                <h2
                  className="font-serif text-[#f7f4ee]"
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)",
                    fontWeight: 300,
                  }}
                >
                  {feature.title}
                </h2>
                <span className="divider-gold" />
                <p className="text-[#b9b4aa] text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* All amenities */}
      <section className="bg-[#f7f4ee] py-20 px-5">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <div className="flex flex-col items-center text-center gap-3">
            <span className="label-gold" style={{ color: "#9a7e1a" }}>
              Property Facilities
            </span>
            <span className="divider-gold" />
            <h2
              className="font-serif text-[#171613]"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                fontWeight: 300,
              }}
            >
              Everything Included
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {amenities.map((amenity) => {
              const Icon = iconMap[amenity.icon];
              return (
                <div
                  key={amenity.id}
                  className="flex items-start gap-4 p-5 bg-white border border-[#e8e3d8]"
                >
                  {Icon && (
                    <Icon size={20} className="text-[#d4af37] shrink-0 mt-0.5" aria-hidden />
                  )}
                  <div>
                    <p className="text-[#171613] font-medium text-sm mb-1">{amenity.title}</p>
                    <p className="text-[#777] text-xs leading-relaxed">{amenity.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#080808] py-20 px-5 border-t border-[#d4af37]/10">
        <div className="max-w-2xl mx-auto text-center flex flex-col items-center gap-5">
          <h2
            className="font-serif text-[#f7f4ee]"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
              fontWeight: 300,
            }}
          >
            Experience It for Yourself
          </h2>
          <p className="text-[#b9b4aa] text-sm">
            Reserve your stay at Angels Court Hotel and Suite today.
          </p>
          <BookingButton
            label="Book Your Stay"
            size="lg"
            className="!px-8 !py-4"
          />
        </div>
      </section>
    </>
  );
}
