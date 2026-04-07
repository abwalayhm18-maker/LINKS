"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useCallback } from "react";

const links = [
  {
    label: "تأمين شامل",
    description: "تغطية كاملة لجميع الأضرار",
    href: "https://app..oiouip.com",
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
    href: "https://app..oiouip.com",
    badge: "",
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
    href: "https://app..oiouip.com",
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
    href: "https://app..oiouip.com",
    badge: "",
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
  hoveredIndex,
  onHover,
  onLeave,
}: {
  link: (typeof links)[0];
  index: number;
  hoveredIndex: number | null;
  onHover: () => void;
  onLeave: () => void;
}) {
  const isHovered = hoveredIndex === index;

  return (
    <motion.a
      href={link.href}
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

      <div
        className="absolute inset-0 transition-all duration-700 ease-out"
        style={{
          background: isHovered
            ? "linear-gradient(110deg, rgba(6,18,50,0.35) 0%, rgba(10,25,65,0.5) 50%, rgba(6,18,50,0.35) 100%)"
            : "linear-gradient(110deg, rgba(6,18,50,0.65) 0%, rgba(10,25,65,0.78) 50%, rgba(6,18,50,0.65) 100%)",
        }}
      />

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

      <div className="relative z-10 flex items-center justify-between px-5 py-6 min-h-[100px]">
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center w-12 h-12 rounded-xl border bg-white/10">
            {link.icon}
          </div>

          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <span className="text-base font-bold text-white">
                {link.label}
              </span>

              {link.badge && (
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-primary/20 text-primary border border-primary/20">
                  {link.badge}
                </span>
              )}
            </div>

            <span className="text-xs text-white/60">
              {link.description}
            </span>
          </div>
        </div>

        <motion.div
          animate={{
            x: isHovered ? 0 : 6,
            opacity: isHovered ? 1 : 0.2,
          }}
          transition={{ duration: 0.35 }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
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

  const handleHover = useCallback(
    (i: number) => () => setHoveredIndex(i),
    []
  );

  const handleLeave = useCallback(() => setHoveredIndex(null), []);

  return (
    <div className="flex flex-col gap-3 px-5 w-full max-w-md mx-auto">
      {links.map((link, index) => (
        <SplitImageCard
          key={link.label}
          link={link}
          index={index}
          hoveredIndex={hoveredIndex}
          onHover={handleHover(index)}
          onLeave={handleLeave}
        />
      ))}
    </div>
  );
}
