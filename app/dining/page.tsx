import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { hotelConfig } from "@/data/hotel.config";
import { ExternalLink } from "lucide-react";
import BookingButton from "@/components/ui/BookingButton";

export const metadata: Metadata = {
  title: "Dining",
  description:
    "Enjoy on-site dining at Angels Court Hotel and Suite, Kubwa, Abuja.",
};

export default function DiningPage() {
  return (
    <>
      {/* Page hero */}
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
          <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/60 to-[#080808]" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center gap-4">
          <span className="label-gold">Restaurant &amp; Dining</span>
          <h1
            className="font-serif text-[#f7f4ee]"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(2.4rem, 6vw, 4rem)",
              fontWeight: 300,
              lineHeight: 1.1,
            }}
          >
            Dining at Angels Court
          </h1>
          <span className="divider-gold" />
          <p className="text-[#b9b4aa] text-sm leading-relaxed max-w-md">
            Start and end your day well. Our on-site restaurant serves guests in a warm and comfortable environment.
          </p>
        </div>
      </section>

      {/* Dining intro */}
      <section className="bg-[#080808] py-20 px-5">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded ring-1 ring-[#d4af37]/25 shadow-xl">
            <Image
              src="/images/dining/dining-1.jpg"
              alt="Angels Court Hotel — comfortable indoor restaurant dining area"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              quality={95}
              priority
              className="object-cover object-center transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/40 to-transparent pointer-events-none" />
          </div>

          <div className="flex flex-col gap-6">
            <span className="label-gold">On-Site Restaurant</span>
            <h2
              className="font-serif text-[#f7f4ee]"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)",
                fontWeight: 300,
              }}
            >
              A Taste of Comfort
            </h2>
            <span className="divider-gold" />
            <p className="text-[#b9b4aa] text-sm leading-relaxed">
              Angels Court Hotel and Suite features an on-site restaurant where guests can enjoy
              meals in a relaxed and welcoming setting. Whether you are starting
              the day with breakfast or winding down in the evening, our
              restaurant provides a comfortable dining experience.
            </p>
            <p className="text-[#b9b4aa] text-sm leading-relaxed">
              For menu details, operating hours, and reservation enquiries,
              please contact our front desk team — available 24 hours a day.
            </p>

            <div className="bg-[#11110f] border border-[#d4af37]/20 p-5 flex flex-col gap-2">
              <p className="label-gold">Dining Enquiries</p>
              <p className="text-[#b9b4aa] text-sm">
                Our reception team can assist with dining arrangements, special
                requests, and meal schedules throughout your stay.
              </p>
              <Link
                href="/contact"
                className="mt-2 inline-flex items-center border border-[#d4af37]/50 hover:border-[#d4af37] text-[#d4af37] text-[10px] tracking-[0.2em] uppercase font-semibold px-5 py-2.5 transition-all duration-300 w-fit"
              >
                Contact Reception
              </Link>
            </div>

            {/* TODO: Replace with verified dining details when supplied */}
            <p className="text-[#b9b4aa]/50 text-xs italic">
              Full menu and dining hours will be listed here once details are
              confirmed.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#11110f] py-20 px-5 border-t border-[#d4af37]/10">
        <div className="max-w-2xl mx-auto text-center flex flex-col items-center gap-5">
          <h2
            className="font-serif text-[#f7f4ee]"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
              fontWeight: 300,
            }}
          >
            Ready to Experience Angels Court?
          </h2>
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
