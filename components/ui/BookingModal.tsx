"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { X, ExternalLink, Phone, ShieldCheck, Sparkles, Building2 } from "lucide-react";
import { publicBookingPlatforms } from "@/data/booking-platforms";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  roomName?: string;
}

export default function BookingModal({
  isOpen,
  onClose,
  roomName,
}: BookingModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  // Close on Escape key press
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="booking-modal-title"
        >
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-[#080808]/85 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Modal Container: Compact, max-w-lg, neat borders */}
          <motion.div
            ref={modalRef}
            className="relative w-full max-w-lg bg-[#11110f] border border-[#d4af37]/35 shadow-[0_16px_50px_rgba(0,0,0,0.85)] overflow-hidden my-auto z-10 rounded-sm"
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            {/* Header: Compact padding and typography */}
            <div className="relative px-5 py-4 border-b border-[#d4af37]/20 bg-gradient-to-r from-[#191817] via-[#11110f] to-[#191817]">
              <div className="flex items-start justify-between gap-3">
                <div className="flex flex-col gap-0.5">
                  <div className="inline-flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                    <span className="label-gold text-[9px] tracking-[0.2em]">
                      Verified Booking Options
                    </span>
                  </div>
                  <h2
                    id="booking-modal-title"
                    className="font-serif text-[#f7f4ee] text-xl sm:text-2xl font-light leading-tight"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    Choose Where to Book
                  </h2>
                  <p className="text-[#b9b4aa] text-[11px] sm:text-xs leading-normal">
                    {roomName ? (
                      <>
                        Select booking option for{" "}
                        <span className="text-[#d4af37] font-medium">{roomName}</span>
                      </>
                    ) : (
                      "Book directly with our front desk or select a verified travel portal."
                    )}
                  </p>
                </div>

                {/* Close Button */}
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close booking modal"
                  className="p-1.5 text-[#b9b4aa] hover:text-[#d4af37] border border-transparent hover:border-[#d4af37]/40 transition-colors shrink-0 -mr-1 -mt-1"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* List of Platforms: Compact items and scrollable body */}
            <div className="p-3.5 sm:p-4 max-h-[58vh] overflow-y-auto space-y-2">
              {publicBookingPlatforms.map((platform) => {
                if (platform.isDirect) {
                  return (
                    <Link
                      key={platform.id}
                      href={platform.url}
                      onClick={onClose}
                      className="group flex items-center justify-between p-3 sm:p-3.5 bg-gradient-to-r from-[#d4af37]/15 to-[#191817] border border-[#d4af37]/50 hover:border-[#d4af37] transition-all duration-200 hover:shadow-[0_0_20px_rgba(212,175,55,0.2)] rounded-xs"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-[#d4af37] text-[#080808] shrink-0">
                          <Phone size={14} />
                        </div>
                        <div className="flex flex-col">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-[#f7f4ee] font-medium text-xs sm:text-sm group-hover:text-[#d4af37] transition-colors">
                              {platform.name}
                            </span>
                            {platform.badge && (
                              <span className="inline-flex items-center gap-1 bg-[#d4af37] text-[#080808] text-[8.5px] tracking-wider uppercase font-bold px-1.5 py-0.5">
                                <Sparkles size={9} />
                                {platform.badge}
                              </span>
                            )}
                          </div>
                          <span className="text-[#b9b4aa] text-[10.5px] leading-tight">
                            {platform.description}
                          </span>
                        </div>
                      </div>
                      <div className="text-[#d4af37] text-[10px] font-semibold uppercase tracking-wider hidden sm:flex items-center gap-1 shrink-0 pl-2 group-hover:translate-x-0.5 transition-transform">
                        <span>Direct</span>
                        <span>→</span>
                      </div>
                    </Link>
                  );
                }

                return (
                  <a
                    key={platform.id}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between p-2.5 sm:p-3 bg-[#191817] border border-[#d4af37]/15 hover:border-[#d4af37]/60 hover:bg-[#1f1e1c] transition-all duration-200 rounded-xs"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-1.5 bg-[#080808] border border-[#d4af37]/30 text-[#d4af37] shrink-0 group-hover:border-[#d4af37] transition-colors">
                        <Building2 size={13} />
                      </div>
                      <div className="flex flex-col">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-[#f7f4ee] font-medium text-xs sm:text-sm group-hover:text-[#d4af37] transition-colors">
                            {platform.name}
                          </span>
                          {platform.badge && (
                            <span className="inline-flex items-center gap-1 bg-[#d4af37]/15 text-[#d4af37] border border-[#d4af37]/30 text-[8px] tracking-wider uppercase font-semibold px-1.5 py-0.2">
                              <ShieldCheck size={9} />
                              {platform.badge}
                            </span>
                          )}
                        </div>
                        <span className="text-[#b9b4aa] text-[10.5px] leading-tight">
                          {platform.description}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 text-[#b9b4aa] group-hover:text-[#d4af37] shrink-0 text-xs transition-colors pl-2">
                      <ExternalLink size={12} aria-hidden />
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Modal Footer Note: Compact */}
            <div className="px-4 py-3 border-t border-[#d4af37]/15 bg-[#0e0e0d] flex items-center justify-between gap-3">
              <span className="text-[#b9b4aa]/70 text-[10px] leading-tight">
                External portals open in a new tab with secure checkout.
              </span>
              <button
                type="button"
                onClick={onClose}
                className="text-[#b9b4aa] hover:text-[#d4af37] text-[11px] uppercase tracking-wider font-medium shrink-0 transition-colors"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
