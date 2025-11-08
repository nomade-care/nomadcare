"use client"
import { Navbar } from "@/components/nomadcare/navbar"
import { HeroSection } from "@/components/nomadcare/hero-section"
import { ProblemSection } from "@/components/nomadcare/problem-section"
import { SolutionSection } from "@/components/nomadcare/solution-section"
import { FeaturesSection } from "@/components/nomadcare/features-section"
import { CtaSection } from "@/components/nomadcare/cta-section"
import { SocialProofSection } from "@/components/nomadcare/social-proof-section"
import { Footer } from "@/components/nomadcare/footer"

export default function Page() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <FeaturesSection />
      <CtaSection />
      <SocialProofSection />
      <Footer />
    </main>
  )
}
