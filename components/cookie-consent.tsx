"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"

export function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      const consent = document.cookie.includes("cookie_consent=true")
      if (!consent) setVisible(true)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  function accept() {
    document.cookie = "cookie_consent=true; max-age=31536000; path=/; SameSite=Lax"
    setVisible(false)
  }

  function decline() {
    document.cookie = "cookie_consent=false; max-age=31536000; path=/; SameSite=Lax"
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed bottom-0 inset-x-0 z-50 p-4"
          role="dialog"
          aria-label="موافقة ملفات تعريف الارتباط"
        >
          <div className="max-w-md mx-auto rounded-2xl border border-border/60 bg-card/95 backdrop-blur-xl shadow-2xl shadow-black/40 p-5">
            {/* Icon and title */}
            <div className="flex items-start gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
                  <path d="M8.5 8.5v.01" />
                  <path d="M16 15.5v.01" />
                  <path d="M12 12v.01" />
                  <path d="M11 17v.01" />
                  <path d="M7 14v.01" />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">
                  {"ملفات تعريف الارتباط"}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {"نستخدم ملفات تعريف الارتباط لتحسين تجربتك وتقديم محتوى مخصص. يمكنك قراءة "}
                  <Link href="/cookies" className="text-primary hover:underline underline-offset-2">
                    {"سياسة ملفات تعريف الارتباط"}
                  </Link>
                  {" للمزيد من التفاصيل."}
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-2 mt-4">
              <button
                onClick={accept}
                className="flex-1 h-11 rounded-xl bg-primary text-primary-foreground text-sm font-bold hover:bg-primary/90 active:scale-[0.97] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                {"موافق"}
              </button>
              <button
                onClick={decline}
                className="flex-1 h-11 rounded-xl bg-secondary border border-border/60 text-secondary-foreground text-sm font-semibold hover:bg-secondary/80 active:scale-[0.97] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                {"رفض"}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
