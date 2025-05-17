import { HeroSection } from '@/components/hero-section'
import { AboutSection } from '@/components/about-section'
import { ServicesSection } from '@/components/services-section'
import { TestimonialsSection } from '@/components/testimonials-section'

export default function Home() {
  return (
    <main className='relative flex flex-col min-h-screen text-white'>
      {/* 🔴 Video Background (global) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className='fixed top-0 left-0 w-full h-full object-cover z-[-1]'
      >
        <source src='/hero-background.mp4' type='video/mp4' />
        Your browser does not support the video tag.
      </video>

      {/* Secciones */}
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
    </main>
  )
}
