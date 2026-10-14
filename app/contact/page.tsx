import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, MessageCircle, ExternalLink } from "lucide-react";
import { hotelConfig } from "@/data/hotel.config";
import BookingButton from "@/components/ui/BookingButton";

export const metadata: Metadata = {
  title: "Location & Contact",
  description:
    "Find and contact Angels Court Hotel and Suite at No. 5 Angels Court Close, Chikakore, Kubwa, Abuja, Nigeria. Get directions, call our direct lines, or reach out via email.",
};

export default function ContactPage() {
  const address = hotelConfig.address;
  const whatsappMessage = encodeURIComponent(hotelConfig.whatsappMessage);

  return (
    <>
      {/* Hero */}
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
          <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/60 to-[#080808]" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center gap-4">
          <span className="label-gold">Find Us</span>
          <h1
            className="font-serif text-[#f7f4ee]"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(2.4rem, 6vw, 4rem)",
              fontWeight: 300,
              lineHeight: 1.1,
            }}
          >
            Location &amp; Contact
          </h1>
          <span className="divider-gold" />
          <p className="text-[#b9b4aa] text-sm leading-relaxed max-w-lg">
            No. 5 Angels Court Close, Off Austin Emumejakpor Street, Just Before Royal Champions Assembly, Chikakore, Kubwa, Abuja, Nigeria.
          </p>
        </div>
      </section>

      {/* Contact grid */}
      <section className="bg-[#080808] py-20 px-5">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          {/* Contact details */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <span className="label-gold">Get in Touch</span>
              <h2
                className="font-serif text-[#f7f4ee]"
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                  fontWeight: 300,
                }}
              >
                We&apos;d Love to Hear From You
              </h2>
              <span className="divider-gold" />
            </div>

            <p className="text-[#b9b4aa] text-sm leading-relaxed">
              Our reception team is available 24 hours a day to assist with
              reservations, directions, dining arrangements, and any other
              enquiries you may have. Call any of our dedicated hotel lines or reach out via email.
            </p>

            {/* Contact items */}
            <div className="flex flex-col gap-5">
              {/* Address */}
              <div className="flex gap-4 items-start p-5 bg-[#11110f] border border-[#d4af37]/15">
                <MapPin size={18} className="text-[#d4af37] shrink-0 mt-1" />
                <div className="flex flex-col gap-1.5">
                  <span className="text-[#f7f4ee] text-sm font-medium">Physical Address</span>
                  <a
                    href={address.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#b9b4aa] text-sm hover:text-[#d4af37] transition-colors leading-relaxed"
                  >
                    <span className="text-[#f7f4ee] font-medium block">{address.street}</span>
                    <span className="block text-xs text-[#b9b4aa]">{address.landmark}</span>
                    <span className="block text-xs text-[#b9b4aa]">{address.area}, {address.city}, {address.country}</span>
                  </a>
                  <a
                    href={address.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#d4af37] text-xs mt-1 hover:text-[#e7c96b] transition-colors w-fit"
                  >
                    Get Directions
                    <ExternalLink size={10} />
                  </a>
                </div>
              </div>

              {/* Telephone Numbers */}
              <div className="flex gap-4 items-start p-5 bg-[#11110f] border border-[#d4af37]/15">
                <Phone size={18} className="text-[#d4af37] shrink-0 mt-1" />
                <div className="flex flex-col gap-2 flex-1">
                  <span className="text-[#f7f4ee] text-sm font-medium">Telephone Numbers</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {hotelConfig.phones.map((p) => (
                      <a
                        key={p.number}
                        href={`tel:${p.tel}`}
                        className="flex items-center gap-2 p-2.5 bg-[#191817] border border-[#d4af37]/20 hover:border-[#d4af37] text-[#f7f4ee] hover:text-[#d4af37] text-sm font-mono transition-all duration-200 group"
                      >
                        <Phone size={12} className="text-[#d4af37] group-hover:scale-110 transition-transform" />
                        <span>{p.number}</span>
                      </a>
                    ))}
                  </div>
                  <span className="text-[#b9b4aa]/60 text-[11px] mt-0.5">Click any number to place a direct call</span>
                </div>
              </div>

              {/* Email Address */}
              <div className="flex gap-4 items-start p-5 bg-[#11110f] border border-[#d4af37]/15">
                <Mail size={18} className="text-[#d4af37] shrink-0 mt-1" />
                <div className="flex flex-col gap-1">
                  <span className="text-[#f7f4ee] text-sm font-medium">Email Address</span>
                  <a
                    href={`mailto:${hotelConfig.email}`}
                    className="text-[#d4af37] text-sm hover:underline hover:text-[#e7c96b] transition-colors font-medium"
                  >
                    {hotelConfig.email}
                  </a>
                  <span className="text-[#b9b4aa]/60 text-[11px]">Send an enquiry or reservation request</span>
                </div>
              </div>

              {/* WhatsApp */}
              {hotelConfig.whatsapp && (
                <div className="flex gap-4 items-start p-5 bg-[#11110f] border border-[#d4af37]/15">
                  <MessageCircle size={18} className="text-[#d4af37] shrink-0 mt-1" />
                  <div className="flex flex-col gap-1">
                    <span className="text-[#f7f4ee] text-sm font-medium">WhatsApp Support</span>
                    <a
                      href={`https://wa.me/${hotelConfig.whatsapp}?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#b9b4aa] text-sm hover:text-[#d4af37] transition-colors"
                    >
                      Chat with us on WhatsApp
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Booking CTA */}
            <div className="flex flex-wrap gap-3 pt-2">
              <BookingButton
                label="Book Your Stay"
                size="md"
                className="!px-7 !py-3.5"
              />
              {hotelConfig.whatsapp && (
                <a
                  href={`https://wa.me/${hotelConfig.whatsapp}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center border border-[#d4af37]/40 hover:border-[#d4af37] text-[#d4af37] text-[10px] tracking-[0.2em] uppercase font-semibold px-7 py-3.5 transition-all duration-300"
                >
                  WhatsApp Us
                </a>
              )}
            </div>
          </div>

          {/* Map / image column */}
          <div className="flex flex-col gap-6">
            <div className="relative aspect-video overflow-hidden rounded ring-1 ring-[#d4af37]/20 shadow-xl">
              <Image
                src={hotelConfig.images.exteriorDay}
                alt="Angels Court Hotel and Suite — No. 5 Angels Court Close, Chikakore, Kubwa, Abuja"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[#080808]/20" />
              <a
                href={address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 left-4 inline-flex items-center gap-2 bg-[#080808]/90 hover:bg-[#080808] text-[#d4af37] text-[10px] tracking-[0.18em] uppercase font-semibold px-4 py-2.5 transition-all border border-[#d4af37]/30"
              >
                <MapPin size={12} />
                View on Google Maps
                <ExternalLink size={10} />
              </a>
            </div>

            {/* Directions note */}
            <div className="bg-[#11110f] border border-[#d4af37]/20 p-6 flex flex-col gap-3">
              <h3
                className="font-serif text-[#f7f4ee] text-lg"
                style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400 }}
              >
                Getting Here &amp; Landmarks
              </h3>
              <p className="text-[#b9b4aa] text-sm leading-relaxed">
                Located at <strong className="text-[#f7f4ee]">No. 5 Angels Court Close</strong>, off Austin Emumejakpor Street, just before Royal Champions Assembly, Chikakore, Kubwa, Abuja.
              </p>
              <p className="text-[#b9b4aa] text-sm leading-relaxed">
                Our front desk team is always available to direct you or arrange transport from the city centre or Nnamdi Azikiwe International Airport.
              </p>
              <p className="text-[#b9b4aa] text-sm leading-relaxed">
                Complimentary, secure self-parking is available on-site for all guests.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
