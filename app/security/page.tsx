import type { Metadata } from "next"
import SecurityContent from "./security-content"

export const metadata: Metadata = {
  title: "قواعد الأمان - تأمين السيارات",
  description: "قواعد وسياسات الأمان لحماية بياناتك ومعاملاتك في تأمين السيارات",
}

export default function SecurityPage() {
  return <SecurityContent />
}
