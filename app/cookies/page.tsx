import type { Metadata } from "next"
import CookiesContent from "./cookies-content"

export const metadata: Metadata = {
  title: "سياسة ملفات تعريف الارتباط - تأمين السيارات",
  description: "سياسة استخدام ملفات تعريف الارتباط (الكوكيز) في منصة تأمين السيارات",
}

export default function CookiesPage() {
  return <CookiesContent />
}
