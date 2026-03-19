"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import type { ReactNode } from "react"

interface LegalPageLayoutProps {
  title: string
  icon: ReactNode
  lastUpdated: string
  children: ReactNode
}

export function LegalPageLayout({ title, icon, lastUpdated, children }: LegalPageLayoutProps) {
  return (
    <main className="relative min-h-svh bg-background">
      {/* Top bar */}
      <div className="sticky top-0 z-20 border-b border-border/40 bg-background/80 backdrop-blur-xl">
        <div className="max-w-2xl mx-auto flex items-center justify-between px-5 py-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg px-2 py-1"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6" />
            </svg>
            <span>{"الرئيسية"}</span>
          </Link>
          <div className="text-[11px] text-muted-foreground/50">
            {"آخر تحديث: "}{lastUpdated}
          </div>
        </div>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-2xl mx-auto px-5 py-10"
      >
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 text-primary">
            {icon}
          </div>
          <div>
            <h1 className="text-2xl font-extrabold text-foreground tracking-tight text-balance">
              {title}
            </h1>
            <p className="text-xs text-muted-foreground mt-1">
              {"تأمين السيارات"}
            </p>
          </div>
        </div>

        <div className="w-full h-px bg-border/40 mb-8" />

        {/* Sections */}
        <div className="flex flex-col gap-8">
          {children}
        </div>

        {/* Bottom nav */}
        <div className="mt-12 pt-6 border-t border-border/30">
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link href="/privacy" className="text-xs text-muted-foreground/50 hover:text-primary transition-colors">
              {"سياسة الخصوصية"}
            </Link>
            <span className="text-muted-foreground/20">{"/"}</span>
            <Link href="/security" className="text-xs text-muted-foreground/50 hover:text-primary transition-colors">
              {"قواعد الأمان"}
            </Link>
            <span className="text-muted-foreground/20">{"/"}</span>
            <Link href="/cookies" className="text-xs text-muted-foreground/50 hover:text-primary transition-colors">
              {"ملفات تعريف الارتباط"}
            </Link>
          </div>
          <p className="text-center text-[10px] text-muted-foreground/30 mt-4">
            {"جميع الحقوق محفوظة"} &copy; {new Date().getFullYear()} {"تأمين السيارات"}
          </p>
        </div>
      </motion.div>
    </main>
  )
}

export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="text-base font-bold text-foreground mb-3 flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
        {title}
      </h2>
      <div className="text-sm text-muted-foreground leading-[1.85] pr-4">
        {children}
      </div>
    </section>
  )
}
