import Link from "next/link";
import Image from "next/image";
import { hotelConfig } from "@/data/hotel.config";

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-5 bg-[#080808]">
      <div className="absolute inset-0" aria-hidden>
        <Image
          src={hotelConfig.images.exteriorNight}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-[#080808]/60" />
      </div>
      <div className="relative z-10 text-center flex flex-col items-center gap-6 max-w-lg">
        <span className="label-gold">404</span>
        <h1
          className="font-serif text-[#f7f4ee]"
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(2.4rem, 6vw, 4rem)",
            fontWeight: 300,
          }}
        >
          Page Not Found
        </h1>
        <span className="divider-gold" />
        <p className="text-[#b9b4aa] text-sm leading-relaxed">
          The page you are looking for does not exist. Let us guide you back.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center bg-[#d4af37] hover:bg-[#e7c96b] text-[#080808] text-[10px] tracking-[0.22em] uppercase font-semibold px-7 py-3.5 transition-all"
          >
            Return Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center border border-[#d4af37]/40 hover:border-[#d4af37] text-[#d4af37] text-[10px] tracking-[0.22em] uppercase font-semibold px-7 py-3.5 transition-all"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
