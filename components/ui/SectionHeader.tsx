"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

interface SectionHeaderProps {
  label?: string;
  heading: string;
  subheading?: string;
  align?: "left" | "center";
  light?: boolean; // true = on dark background
}

export default function SectionHeader({
  label,
  heading,
  subheading,
  align = "center",
  light = true,
}: SectionHeaderProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const alignClass = align === "center" ? "items-center text-center" : "items-start text-left";
  const textColor = light ? "#f7f4ee" : "#171613";
  const mutedColor = light ? "#b9b4aa" : "#555";

  return (
    <div ref={ref} className={`flex flex-col ${alignClass} gap-3`}>
      {label && (
        <motion.span
          className="label-gold"
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {label}
        </motion.span>
      )}

      {label && align === "center" && (
        <motion.span
          className="divider-gold"
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{ transformOrigin: "center" }}
        />
      )}

      <motion.h2
        className="font-serif leading-tight"
        style={{
          fontFamily: "var(--font-cormorant)",
          color: textColor,
          fontSize: "clamp(2rem, 4vw, 3.25rem)",
          fontWeight: 300,
          letterSpacing: "0.01em",
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.15 }}
      >
        {heading}
      </motion.h2>

      {subheading && (
        <motion.p
          className="text-sm leading-relaxed max-w-xl"
          style={{ color: mutedColor }}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          {subheading}
        </motion.p>
      )}
    </div>
  );
}
