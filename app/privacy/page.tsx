import type { Metadata } from "next"
import PrivacyContent from "./privacy-content"

export const metadata: Metadata = {
  title: "سياسة الخصوصية - تأمين السيارات",
  description: "سياسة الخصوصية وحماية البيانات الشخصية لتأمين السيارات",
}

export default function PrivacyPage() {
  return <PrivacyContent />
}
