"use client"

import { motion } from "framer-motion"

export function BioHeader() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col items-center gap-5 pt-12 pb-8 px-6"
    >
      {/* Avatar with animated ring */}
      <div className="relative">
        {/* Pulse ring */}
        <div
          className="absolute inset-0 rounded-full border-2 border-primary/40"
          style={{ animation: "pulse-ring 2.5s ease-out infinite" }}
        />
        {/* Outer glow ring */}
        <div className="w-28 h-28 rounded-full p-[3px] bg-gradient-to-br from-primary via-accent to-primary">
          <div className="w-full h-full rounded-full bg-background p-[3px]">
            <div className="w-full h-full rounded-full bg-secondary flex items-center justify-center overflow-hidden">
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                className="text-primary"
              >
                <path
                  d="M12 2L3 7v5c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z"
                  fill="currentColor"
                  opacity="0.12"
                />
                <path
                  d="M12 2L3 7v5c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
                <path
                  d="M9 12.5L11 14.5L15.5 10"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
        {/* Verified badge */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 300 }}
          className="absolute -bottom-1 -left-1 w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/30"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-primary-foreground"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </motion.div>
      </div>

      {/* Text content */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="text-center flex flex-col items-center gap-2"
      >
        <h1 className="text-3xl font-extrabold text-foreground tracking-tight text-balance">
          {"تأمين السيارات"}
        </h1>
        <div className="w-12 h-[2px] rounded-full bg-primary/50" />
        <p className="text-sm text-muted-foreground mt-1 max-w-[280px] text-pretty leading-relaxed">
          {"حماية شاملة لسيارتك بأفضل الأسعار والتغطيات التأمينية"}
        </p>
      </motion.div>

      {/* Trust badges */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.45, duration: 0.6 }}
        className="flex items-center gap-4 mt-1"
      >
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-primary">
            <path d="M12 2L3 7v5c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z" fill="currentColor" opacity="0.3"/>
            <path d="M12 2L3 7v5c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          </svg>
          <span>{"موثوق"}</span>
        </div>
        <div className="w-1 h-1 rounded-full bg-muted-foreground/30" />
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-primary">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor" opacity="0.3"/>
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          </svg>
          <span>{"4.9"}</span>
        </div>
        <div className="w-1 h-1 rounded-full bg-muted-foreground/30" />
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-primary">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.5" fill="currentColor" opacity="0.3"/>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <span>{"+50K"}</span>
        </div>
      </motion.div>
    </motion.header>
  )
}
