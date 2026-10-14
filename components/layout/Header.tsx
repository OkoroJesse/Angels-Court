"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { hotelConfig } from "@/data/hotel.config";
import BookingModal from "@/components/ui/BookingModal";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/rooms", label: "Rooms" },
  { href: "/dining", label: "Dining" },
  { href: "/experience", label: "Experience" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const bookingHref = hotelConfig.bookingUrl ?? `mailto:${hotelConfig.email ?? ""}`;
  const isExternalBooking = !!hotelConfig.bookingUrl;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#080808]/95 backdrop-blur-md border-b border-[#d4af37]/15 py-3"
            : "bg-transparent py-5"
        }`}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-8 flex items-center justify-between gap-6">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 shrink-0 focus-visible:outline-offset-4"
            aria-label={`${hotelConfig.name} — Return to homepage`}
          >
            <div
              className="relative w-10 h-10 lg:w-12 lg:h-12 rounded-full overflow-hidden ring-1 ring-[#d4af37]/40 shrink-0"
              style={{ width: "44px", height: "44px", minWidth: "44px", minHeight: "44px" }}
            >
              <Image
                src={hotelConfig.logo}
                alt={`${hotelConfig.shortName} logo`}
                fill
                sizes="48px"
                className="object-cover"
                priority
              />
            </div>
            <span className="hidden sm:block">
              <span
                className="block text-[#d4af37] font-serif font-semibold leading-tight text-sm lg:text-base tracking-wide"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                Angels Court
              </span>
              <span className="block text-[#b9b4aa] text-[10px] tracking-[0.18em] uppercase font-light">
                Hotel &amp; Suite
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav
            className="hidden lg:flex items-center gap-8"
            aria-label="Primary navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-[11px] tracking-[0.2em] uppercase text-[#b9b4aa] hover:text-[#f7f4ee] transition-all duration-300 font-medium py-1 group"
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#d4af37] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setBookingModalOpen(true)}
              className="hidden sm:inline-flex items-center gap-2 bg-[#d4af37] hover:bg-[#e7c96b] text-[#080808] text-[10px] tracking-[0.2em] uppercase font-semibold px-6 py-2.5 transition-all duration-300 hover:shadow-[0_0_24px_rgba(212,175,55,0.35)]"
            >
              Book Your Stay
              <ExternalLink size={11} />
            </button>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 text-[#f7f4ee] hover:text-[#d4af37] transition-colors"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            ref={menuRef}
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-0 z-40 bg-[#080808] flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            {/* Header row inside drawer */}
            <div className="flex items-center justify-between px-5 pt-5 pb-6 border-b border-[#d4af37]/15">
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-3"
              >
                <div
                  className="relative w-10 h-10 rounded-full overflow-hidden ring-1 ring-[#d4af37]/40 shrink-0"
                  style={{ width: "40px", height: "40px", minWidth: "40px", minHeight: "40px" }}
                >
                  <Image
                    src={hotelConfig.logo}
                    alt={`${hotelConfig.shortName} logo`}
                    fill
                    sizes="40px"
                    className="object-cover"
                  />
                </div>
                <span className="text-[#d4af37] font-serif font-semibold text-base" style={{ fontFamily: "var(--font-cormorant)" }}>
                  Angels Court
                </span>
              </Link>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 text-[#b9b4aa] hover:text-[#d4af37] transition-colors"
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex-1 flex flex-col justify-center px-8 gap-2" aria-label="Mobile navigation">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.06, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-3 border-b border-[#1a1a1a] text-[#f7f4ee] hover:text-[#d4af37] transition-colors font-serif text-2xl font-light"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Mobile booking CTA */}
            <div className="px-8 pb-10 pt-6 border-t border-[#d4af37]/15">
              <button
                type="button"
                onClick={() => {
                  setMobileOpen(false);
                  setBookingModalOpen(true);
                }}
                className="flex items-center justify-center gap-2 w-full bg-[#d4af37] text-[#080808] text-xs tracking-[0.2em] uppercase font-semibold py-4 transition-all hover:bg-[#e7c96b]"
              >
                Book Your Stay
                <ExternalLink size={12} />
              </button>
              <p className="text-center text-[#b9b4aa] text-xs mt-4">
                Or call us directly to reserve
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
      />
    </>
  );
}
