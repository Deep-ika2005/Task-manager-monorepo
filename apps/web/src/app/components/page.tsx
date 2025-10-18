'use client'

import { HeroSection } from './sections/hero-section'
import { FeaturesSection } from './sections/features-section'
import { StatsSection } from './sections/stats-section'
import { HowItWorksSection } from './sections/how-it-works-section'
import { TestimonialsSection } from './sections/testimonials-section'
import { CTASection } from './sections/cta-section'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <CTASection onGetStarted={() => console.log('Get Started clicked')} />
    </main>
  )
}
