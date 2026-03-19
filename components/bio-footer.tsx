"use client"

import { motion } from "framer-motion"

export function BioFooter() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 1 }}
      className="pb-12 pt-2 text-center flex flex-col items-center gap-3"
    >
      <div className="w-8 h-[1px] bg-border/50" />
      <p className="text-[11px] text-muted-foreground/40 tracking-wide">
        {"جميع الحقوق محفوظة"} &copy; {new Date().getFullYear()}
      </p>
    </motion.footer>
  )
}
