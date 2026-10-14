"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import BookingModal from "./BookingModal";

interface BookingButtonProps {
  label?: string;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  roomName?: string;
  showIcon?: boolean;
}

export default function BookingButton({
  label = "Book Your Stay",
  variant = "primary",
  size = "md",
  className = "",
  roomName,
  showIcon = true,
}: BookingButtonProps) {
  const [modalOpen, setModalOpen] = useState(false);

  const sizeClasses = {
    sm: "px-4 py-2 text-[9px] tracking-[0.18em]",
    md: "px-6 py-3 text-[10px] tracking-[0.2em]",
    lg: "px-8 py-4 text-[11px] tracking-[0.22em]",
  };

  const variantClasses = {
    primary:
      "bg-[#d4af37] hover:bg-[#e7c96b] text-[#080808] font-semibold shadow-none hover:shadow-[0_0_24px_rgba(212,175,55,0.35)]",
    outline:
      "border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-[#080808] font-semibold",
    ghost:
      "text-[#d4af37] hover:text-[#e7c96b] underline-offset-4 hover:underline font-medium",
  };

  const baseClasses = `inline-flex items-center justify-center gap-2 uppercase transition-all duration-300 ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  const ariaLabel = roomName
    ? `Choose booking platform for ${roomName}`
    : `${label} — choose booking options`;

  return (
    <>
      <motion.button
        type="button"
        onClick={() => setModalOpen(true)}
        aria-label={ariaLabel}
        className={baseClasses}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <span>{label}</span>
        {showIcon && <ExternalLink size={11} aria-hidden />}
      </motion.button>

      <BookingModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        roomName={roomName}
      />
    </>
  );
}
