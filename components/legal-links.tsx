"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const legalLinks = [
  {
    label: "سياسة الخصوصية",
    href: "/privacy",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L3 7v5c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z" />
        <path d="M12 8v4" />
        <path d="M12 16h.01" />
      </svg>
    ),
  },
  {
    label: "قواعد الأمان",
    href: "/security",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    label: "سياسة ملفات تعريف الارتباط",
    href: "/cookies",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
        <path d="M8.5 8.5v.01" />
        <path d="M16 15.5v.01" />
        <path d="M12 12v.01" />
        <path d="M11 17v.01" />
        <path d="M7 14v.01" />
      </svg>
    ),
  },
]

export function LegalLinks() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.9 }}
      className="w-full max-w-md mx-auto px-5 pb-4"
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="h-px flex-1 bg-border/40" />
        <span className="text-[10px] text-muted-foreground/50 font-semibold tracking-wider">
          {"القانونية"}
        </span>
        <div className="h-px flex-1 bg-border/40" />
      </div>
      <div className="flex items-center justify-center gap-1 flex-wrap">
        {legalLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="group flex items-center gap-1.5 px-3 py-2 rounded-xl text-[11px] text-muted-foreground/60 hover:text-primary hover:bg-primary/5 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <span className="text-muted-foreground/40 group-hover:text-primary transition-colors duration-300">
              {link.icon}
            </span>
            {link.label}
          </Link>
        ))}
      </div>
    </motion.div>
  )
}
