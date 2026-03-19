import { BioHeader } from "@/components/bio-header";
import { SplitImageLinks } from "@/components/split-image-links";
import { SocialIcons } from "@/components/social-icons";
import { LegalLinks } from "@/components/legal-links";
import { BioFooter } from "@/components/bio-footer";
import { ParticleBackground } from "@/components/particle-background";
import { CookieConsent } from "@/components/cookie-consent";

export default function Page() {
  return (
    <main className="relative min-h-svh flex flex-col items-center bg-background overflow-hidden">
      <ParticleBackground />

      {/* Ambient radial glow */}
      <div
        className="fixed top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(60,120,255,0.06) 0%, transparent 70%)",
          zIndex: 1,
        }}
        aria-hidden="true"
      />
      <div
        className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(40,80,200,0.04) 0%, transparent 70%)",
          zIndex: 1,
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-md mx-auto flex flex-col items-center px-1">
        <BioHeader />
        <SplitImageLinks />
        <LegalLinks />
        <BioFooter />
      </div>

      <CookieConsent />
    </main>
  );
}
