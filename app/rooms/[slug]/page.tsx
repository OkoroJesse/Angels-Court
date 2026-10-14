import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, ChevronLeft } from "lucide-react";
import { rooms } from "@/data/rooms";
import { hotelConfig } from "@/data/hotel.config";
import BookingButton from "@/components/ui/BookingButton";

export async function generateStaticParams() {
  return rooms.map((room) => ({ slug: room.slug }));
}

export async function generateMetadata(
  props: PageProps<"/rooms/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const room = rooms.find((r) => r.slug === slug);
  if (!room) return { title: "Room Not Found" };
  return {
    title: room.name,
    description: room.longDescription,
  };
}

export default async function RoomDetailPage(
  props: PageProps<"/rooms/[slug]">
) {
  const { slug } = await props.params;
  const room = rooms.find((r) => r.slug === slug);

  if (!room) notFound();

  const bookingHref =
    room.bookingUrl ?? hotelConfig.bookingUrl;

  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-0 bg-[#080808] overflow-hidden">
        <div className="relative aspect-[16/7] w-full overflow-hidden">
          <Image
            src={room.image}
            alt={`${room.name} at Angels Court Hotel`}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/40 to-transparent" />
          {room.image.includes("exterior") && (
            <div className="absolute top-4 left-4 bg-[#d4af37]/90 text-[#080808] text-[8px] tracking-[0.15em] uppercase font-semibold px-3 py-1.5">
              Room photo coming soon
            </div>
          )}
        </div>
      </section>

      {/* Content */}
      <section className="bg-[#080808] py-16 px-5">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">
          {/* Main content */}
          <div className="lg:col-span-2 flex flex-col gap-7">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb">
              <Link
                href="/rooms"
                className="inline-flex items-center gap-2 text-[#b9b4aa] hover:text-[#d4af37] text-xs tracking-wide transition-colors"
              >
                <ChevronLeft size={14} />
                All Rooms
              </Link>
            </nav>

            <div className="flex flex-col gap-4">
              <span className="label-gold">Accommodation</span>
              <h1
                className="font-serif text-[#f7f4ee]"
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
                  fontWeight: 300,
                  lineHeight: 1.1,
                }}
              >
                {room.name}
              </h1>
              <span className="divider-gold" />
            </div>

            <p className="text-[#b9b4aa] text-sm leading-relaxed">
              {room.longDescription}
            </p>

            {/* Room specs */}
            {(room.bedType || room.maxOccupancy || room.size) && (
              <div className="grid grid-cols-3 gap-4 border border-[#d4af37]/20 p-6">
                {room.bedType && (
                  <div className="flex flex-col gap-1">
                    <span className="label-gold">Bed Type</span>
                    <span className="text-[#f7f4ee] text-sm">{room.bedType}</span>
                  </div>
                )}
                {room.maxOccupancy && (
                  <div className="flex flex-col gap-1">
                    <span className="label-gold">Guests</span>
                    <span className="text-[#f7f4ee] text-sm">Up to {room.maxOccupancy}</span>
                  </div>
                )}
                {room.size && (
                  <div className="flex flex-col gap-1">
                    <span className="label-gold">Room Size</span>
                    <span className="text-[#f7f4ee] text-sm">{room.size}</span>
                  </div>
                )}
              </div>
            )}

            {/* Amenities */}
            {room.amenities.length > 0 && (
              <div className="flex flex-col gap-4">
                <h2
                  className="font-serif text-[#f7f4ee] text-xl"
                  style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400 }}
                >
                  Room Amenities
                </h2>
                <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {room.amenities.map((a) => (
                    <li
                      key={a}
                      className="text-[#b9b4aa] text-xs flex items-center gap-2 before:content-[''] before:w-1 before:h-1 before:bg-[#d4af37] before:rounded-full before:shrink-0"
                    >
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Sidebar booking card */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 bg-[#11110f] border border-[#d4af37]/20 p-7 flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <span className="label-gold">Reserve Your Stay</span>
                <h3
                  className="font-serif text-[#f7f4ee] text-2xl"
                  style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300 }}
                >
                  {room.name}
                </h3>
                {room.priceFrom && (
                  <p className="text-[#d4af37] text-sm font-medium">
                    From {room.priceFrom} / night
                  </p>
                )}
              </div>

              <span className="divider-gold" />

              <BookingButton
                label="Book This Room"
                roomName={room.name}
                size="lg"
                className="w-full !py-4"
              />

              {hotelConfig.whatsapp && (
                <a
                  href={`https://wa.me/${hotelConfig.whatsapp}?text=${encodeURIComponent(
                    `Hello Angels Court Hotel and Suite, I would like to enquire about booking the ${room.name}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center border border-[#d4af37]/40 hover:border-[#d4af37] text-[#d4af37] text-[10px] tracking-[0.2em] uppercase font-semibold py-3.5 transition-all duration-300 w-full"
                >
                  WhatsApp Enquiry
                </a>
              )}

              <p className="text-[#b9b4aa] text-xs text-center leading-relaxed">
                Questions? Our team is available 24 hours to assist you.
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* Other rooms */}
      <section className="bg-[#11110f] py-16 px-5 border-t border-[#d4af37]/10">
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          <h2
            className="font-serif text-[#f7f4ee] text-center"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
              fontWeight: 300,
            }}
          >
            Other Rooms &amp; Suites
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rooms
              .filter((r) => r.id !== room.id)
              .map((r) => (
                <Link
                  key={r.id}
                  href={`/rooms/${r.slug}`}
                  className="group flex flex-col bg-[#191817] overflow-hidden hover:ring-1 hover:ring-[#d4af37]/30 transition-all duration-300"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={r.image}
                      alt={r.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-600 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5 flex flex-col gap-2">
                    <h3
                      className="font-serif text-[#f7f4ee] text-xl"
                      style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400 }}
                    >
                      {r.name}
                    </h3>
                    <p className="text-[#b9b4aa] text-xs leading-relaxed">
                      {r.shortDescription}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
