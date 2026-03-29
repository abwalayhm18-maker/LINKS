"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useCallback } from "react";

const links = [
  {
    label: "تأمين شامل",
    description: "تغطية كاملة لجميع الأضرار",
    href: "https://app.lizsxl.com",
    badge: "الأكثر طلباً",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2L3 7v5c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z" />
        <path d="M9 12.5L11 14.5L15.5 10" />
      </svg>
    ),
  },
  {
    label: "تأمين ضد الغير",
    description: "حماية أساسية بأسعار مناسبة",
    href: "https://app.lizsxl.com",
    badge: null,
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="1" y="3" width="15" height="13" rx="2" />
        <path d="M16 8h4l3 4v5h-3" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
        <path d="M8 18.5h8" />
      </svg>
    ),
  },
  {
    label: "احصل على عرض سعر",
    description: "عرض فوري خلال دقائق",
    href: "https://app.lizsxl.com",
    badge: "مجاني",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
  {
    label: "تواصل معنا",
    description: "فريق دعم على مدار الساعة",
    href: "https://app.lizsxl.com",
    badge: null,
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <path d="M8 10h.01" />
        <path d="M12 10h.01" />
        <path d="M16 10h.01" />
      </svg>
    ),
  },
];

function SplitImageCard({
  link,
  index,
  total,
  hoveredIndex,
  onHover,
  onLeave,
}: {
  link: (typeof links)[0];
  index: number;
  total: number;
  hoveredIndex: number | null;
  onHover: () => void;
  onLeave: () => void;
}) {
  const isHovered = hoveredIndex === index;

  return (
    <motion.a
      href={"https://app.lizsxl.com"}
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.6,
        delay: 0.15 + index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onTouchStart={onHover}
      className="group relative block w-full overflow-hidden rounded-2xl cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      style={{ minHeight: 100 }}
      aria-label={link.label}
    >
      {/* Image background */}
      <div
        className="absolute inset-0 transition-transform duration-700 ease-out"
        style={{
          backgroundImage: "url('/images/hero-split.jpg')",
          backgroundSize: "cover",
          backgroundPosition: `center ${25 * index}%`,
          backgroundRepeat: "no-repeat",
          transform: isHovered ? "scale(1.12)" : "scale(1)",
        }}
      />

      {/* Multi-layer overlay for depth */}
      <div
        className="absolute inset-0 transition-all duration-700 ease-out"
        style={{
          background: isHovered
            ? "linear-gradient(110deg, rgba(6,18,50,0.35) 0%, rgba(10,25,65,0.5) 50%, rgba(6,18,50,0.35) 100%)"
            : "linear-gradient(110deg, rgba(6,18,50,0.65) 0%, rgba(10,25,65,0.78) 50%, rgba(6,18,50,0.65) 100%)",
        }}
      />

      {/* Shimmer line on hover */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: "200%" }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-y-0 w-[30%] pointer-events-none"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(120,170,255,0.08), transparent)",
            }}
          />
        )}
      </AnimatePresence>

      {/* Border glow */}
      <div
        className="absolute inset-0 rounded-2xl transition-all duration-500 pointer-events-none"
        style={{
          boxShadow: isHovered
            ? "inset 0 0 0 1.5px rgba(100, 160, 255, 0.5), 0 8px 40px rgba(60, 120, 255, 0.15), 0 0 60px rgba(60, 120, 255, 0.08)"
            : "inset 0 0 0 1px rgba(255,255,255,0.05)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-between px-5 py-6 min-h-[100px]">
        <div className="flex items-center gap-4">
          {/* Icon container */}
          <motion.div
            animate={{
              backgroundColor: isHovered
                ? "rgba(80, 140, 255, 0.2)"
                : "rgba(255,255,255,0.06)",
              borderColor: isHovered
                ? "rgba(80, 140, 255, 0.3)"
                : "rgba(255,255,255,0.06)",
            }}
            transition={{ duration: 0.4 }}
            className="flex items-center justify-center w-12 h-12 rounded-xl border"
          >
            <motion.span
              animate={{
                color: isHovered
                  ? "rgb(140, 185, 255)"
                  : "rgba(255,255,255,0.6)",
              }}
              transition={{ duration: 0.4 }}
            >
              {link.icon}
            </motion.span>
          </motion.div>

          {/* Text */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <span
                className="text-base font-bold transition-colors duration-400"
                style={{
                  color: isHovered
                    ? "rgb(255,255,255)"
                    : "rgba(255,255,255,0.92)",
                }}
              >
                {link.label}
              </span>
              {link.badge && (
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-primary/20 text-primary border border-primary/20">
                  {link.badge}
                </span>
              )}
            </div>
            <span
              className="text-xs transition-colors duration-400"
              style={{
                color: isHovered
                  ? "rgba(170, 200, 255, 0.85)"
                  : "rgba(255,255,255,0.35)",
              }}
            >
              {link.description}
            </span>
          </div>
        </div>

        {/* Arrow */}
        <motion.div
          animate={{
            x: isHovered ? 0 : 6,
            opacity: isHovered ? 1 : 0.2,
          }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="shrink-0"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-foreground"
          >
            <path d="M19 12H5" />
            <path d="m12 19-7-7 7-7" />
          </svg>
        </motion.div>
      </div>
    </motion.a>
  );
}

export function SplitImageLinks() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const handleHover = useCallback((i: number) => () => setHoveredIndex(i), []);
  const handleLeave = useCallback(() => setHoveredIndex(null), []);

  return (
    <div className="flex flex-col gap-3 px-5 w-full max-w-md mx-auto">
      {links.map((link, index) => (
        <SplitImageCard
          key={link.label}
          link={link}
          index={index}
          total={links.length}
          hoveredIndex={hoveredIndex}
          onHover={handleHover(index)}
          onLeave={handleLeave}
        />
      ))}
    </div>
  );
}
