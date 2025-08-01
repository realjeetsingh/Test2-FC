import { Suspense } from 'react'
import { Navbar } from '@/components/layout/navbar'
import { Hero } from '@/components/sections/hero'
import { Features } from '@/components/sections/features'
import { Materials } from '@/components/sections/materials'
import { Community } from '@/components/sections/community'
import { Footer } from '@/components/layout/footer'
import { LoadingSpinner } from '@/components/ui/loading-spinner'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<LoadingSpinner />}>
          <Features />
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <Materials />
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <Community />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}