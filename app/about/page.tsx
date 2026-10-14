import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { hotelConfig } from "@/data/hotel.config";
import { ExternalLink } from "lucide-react";
import BookingButton from "@/components/ui/BookingButton";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Angels Court Hotel and Suite — modern hospitality in Kubwa, Abuja, Nigeria.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-20 px-5 bg-[#080808] overflow-hidden">
        <div className="absolute inset-0" aria-hidden>
          <Image
            src={hotelConfig.images.exteriorDay}
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/50 to-[#080808]" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center gap-4">
          <span className="label-gold">Our Story</span>
          <h1
            className="font-serif text-[#f7f4ee]"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(2.4rem, 6vw, 4rem)",
              fontWeight: 300,
              lineHeight: 1.1,
            }}
          >
            About Angels Court
          </h1>
          <span className="divider-gold" />
        </div>
      </section>

      {/* Main content */}
      <section className="bg-[#080808] py-20 px-5">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: images stacked */}
          <div className="flex flex-col gap-4">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={hotelConfig.images.exteriorDay}
                alt="Angels Court Hotel exterior by day — a modern building in Kubwa, Abuja"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[16/9] overflow-hidden">
              <Image
                src={hotelConfig.images.exteriorNight}
                alt="Angels Court Hotel illuminated at night with distinctive blue lighting"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Right: text */}
          <div className="flex flex-col gap-7 lg:sticky lg:top-28">
            <span className="label-gold">Kubwa, Abuja, Nigeria</span>
            <h2
              className="font-serif text-[#f7f4ee]"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)",
                fontWeight: 300,
                lineHeight: 1.2,
              }}
            >
              A Hotel Built Around
              <br />
              <span style={{ color: "#d4af37", fontStyle: "italic" }}>
                Your Comfort
              </span>
            </h2>
            <span className="divider-gold" />

            <p className="text-[#b9b4aa] text-sm leading-relaxed">
              Angels Court Hotel and Suite stands as a modern landmark in Kubwa,
              Abuja — a property built with a clear purpose: to provide
              exceptional accommodation and genuine hospitality to every guest
              who passes through our doors.
            </p>

            <p className="text-[#b9b4aa] text-sm leading-relaxed">
              Our building combines clean contemporary architecture with warm
              interiors, creating an environment that balances professional
              efficiency with personal comfort. Whether you are visiting Abuja
              for business, family, or leisure, Angels Court is designed to make
              your stay as smooth and memorable as possible.
            </p>

            <p className="text-[#b9b4aa] text-sm leading-relaxed">
              From the glow of our distinctive exterior lighting to the care of
              our 24-hour front desk team, every element of the Angels Court
              experience reflects our commitment to quality. We believe that
              where you stay shapes how you feel — and we want every guest to
              leave feeling rested, valued, and ready to return.
            </p>

            {/* Gold tagline pull-quote */}
            <blockquote className="border-l-2 border-[#d4af37] pl-5 py-2">
              <p
                className="font-serif italic text-[#d4af37] text-xl"
                style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300 }}
              >
                &ldquo;Your Dream of Paradise.&rdquo;
              </p>
            </blockquote>

            <div className="flex flex-wrap gap-3 mt-2">
              <Link
                href="/rooms"
                className="inline-flex items-center border border-[#d4af37]/50 hover:border-[#d4af37] text-[#d4af37] text-[10px] tracking-[0.2em] uppercase font-semibold px-6 py-3 transition-all duration-300"
              >
                View Rooms
              </Link>
              <BookingButton
                label="Book Your Stay"
                size="md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values strip */}
      <section className="bg-[#11110f] py-16 px-5 border-t border-[#d4af37]/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
          {[
            {
              label: "Our Promise",
              text: "Attentive, personal service — from check-in to check-out and every moment in between.",
            },
            {
              label: "Our Environment",
              text: "A modern, well-maintained property designed for comfort, cleanliness, and quiet.",
            },
            {
              label: "Our Location",
              text: "Situated in Kubwa, Abuja — a convenient base for business and leisure travellers.",
            },
          ].map((item) => (
            <div key={item.label} className="flex flex-col gap-3">
              <span className="label-gold">{item.label}</span>
              <span className="divider-gold" />
              <p className="text-[#b9b4aa] text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
