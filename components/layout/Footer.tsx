import Image from "next/image";
import Link from "next/link";
import { hotelConfig } from "@/data/hotel.config";
import { MapPin, Phone, Mail } from "lucide-react";
import BookingButton from "@/components/ui/BookingButton";

// Inline SVG social icons — avoids lucide-react export incompatibility
function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { href: "/", label: "Home" },
    { href: "/rooms", label: "Rooms & Suites" },
    { href: "/dining", label: "Dining" },
    { href: "/experience", label: "Experience" },
    { href: "/gallery", label: "Gallery" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const address = hotelConfig.address;

  return (
    <footer
      className="bg-[#080808] border-t border-[#d4af37]/15"
      role="contentinfo"
    >
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand column */}
        <div className="flex flex-col gap-5">
          <Link href="/" className="flex items-center gap-3 w-fit">
            <div
              className="relative w-14 h-14 rounded-full overflow-hidden ring-1 ring-[#d4af37]/40 shrink-0"
              style={{ width: "56px", height: "56px", minWidth: "56px", minHeight: "56px" }}
            >
              <Image
                src={hotelConfig.logo}
                alt={`${hotelConfig.shortName} logo`}
                fill
                sizes="56px"
                className="object-cover"
              />
            </div>
            <div>
              <p
                className="text-[#d4af37] font-serif font-semibold text-lg leading-tight"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                Angels Court
              </p>
              <p className="text-[#b9b4aa] text-[10px] tracking-[0.18em] uppercase">
                Hotel &amp; Suite
              </p>
            </div>
          </Link>
          <p className="text-[#b9b4aa] text-sm leading-relaxed max-w-xs">
            {hotelConfig.tagline}. Modern comfort and warm hospitality in the
            heart of Kubwa, Abuja.
          </p>

          {/* Social icons */}
          {(hotelConfig.social.instagram || hotelConfig.social.facebook) && (
            <div className="flex gap-4">
              {hotelConfig.social.instagram && (
                <a
                  href={hotelConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow Angels Court on Instagram"
                  className="text-[#b9b4aa] hover:text-[#d4af37] transition-colors"
                >
                  <InstagramIcon size={18} />
                </a>
              )}
              {hotelConfig.social.facebook && (
                <a
                  href={hotelConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow Angels Court on Facebook"
                  className="text-[#b9b4aa] hover:text-[#d4af37] transition-colors"
                >
                  <FacebookIcon size={18} />
                </a>
              )}
            </div>
          )}
        </div>

        {/* Navigation */}
        <nav aria-label="Footer navigation">
          <p className="label-gold mb-5">Explore</p>
          <ul className="flex flex-col gap-2.5">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[#b9b4aa] hover:text-[#d4af37] transition-colors text-sm"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact */}
        <div>
          <p className="label-gold mb-5">Get in Touch</p>
          <ul className="flex flex-col gap-4">
            {/* Address */}
            <li className="flex gap-3 items-start">
              <MapPin
                size={16}
                className="text-[#d4af37] shrink-0 mt-0.5"
              />
              <a
                href={address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#b9b4aa] hover:text-[#d4af37] transition-colors text-xs leading-relaxed"
              >
                <span className="text-[#f7f4ee] block font-medium">{address.street}</span>
                <span className="block">{address.landmark}</span>
                <span className="block">{address.area}, {address.city}, {address.country}</span>
              </a>
            </li>

            {/* Telephone Numbers */}
            <li className="flex gap-3 items-start">
              <Phone size={16} className="text-[#d4af37] shrink-0 mt-0.5" />
              <div className="flex flex-col gap-1">
                <span className="text-[11px] text-[#f7f4ee] font-medium uppercase tracking-wider">Direct Lines:</span>
                <div className="flex flex-wrap gap-x-3 gap-y-1">
                  {hotelConfig.phones.map((p) => (
                    <a
                      key={p.number}
                      href={`tel:${p.tel}`}
                      className="text-[#b9b4aa] hover:text-[#d4af37] transition-colors text-xs font-mono"
                    >
                      {p.number}
                    </a>
                  ))}
                </div>
              </div>
            </li>

            {/* Email Address */}
            <li className="flex gap-3 items-start">
              <Mail size={16} className="text-[#d4af37] shrink-0 mt-0.5" />
              <a
                href={`mailto:${hotelConfig.email}`}
                className="text-[#d4af37] hover:text-[#e7c96b] hover:underline transition-colors text-xs font-medium"
              >
                {hotelConfig.email}
              </a>
            </li>
          </ul>

          {/* Booking CTA */}
          <div className="mt-8">
            <BookingButton
              label="Book Your Stay"
              size="md"
            />
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#d4af37]/10 py-6 px-5 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-[#b9b4aa]/60 text-xs">
          <p>
            &copy; {currentYear} {hotelConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/contact"
              className="hover:text-[#d4af37] transition-colors"
            >
              Contact &amp; Location
            </Link>
            <Link
              href="/rooms"
              className="hover:text-[#d4af37] transition-colors"
            >
              Accommodation
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
