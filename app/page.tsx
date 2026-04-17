import { HeroSection } from "@/components/home/hero-section"
import { SocialProofSection } from "@/components/home/social-proof-section"
import { TreatmentsSection } from "@/components/home/treatments-section"
import { WhyChooseSection } from "@/components/home/why-choose-section"
import { AboutSection } from "@/components/home/about-section"
import { InstagramSection } from "@/components/home/instagram-section"
import { GoogleReviewsSection } from "@/components/home/google-reviews-section"
import { LocationSection } from "@/components/home/location-section"

/** Ative `true` para voltar a exibir o bloco Instagram / redes na home. */
const SHOW_HOME_INSTAGRAM = false

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <GoogleReviewsSection />
      <TreatmentsSection />
      <WhyChooseSection />
      <AboutSection />
      {SHOW_HOME_INSTAGRAM ? <InstagramSection /> : null}
      <SocialProofSection />
      <LocationSection />
    </>
  )
}
