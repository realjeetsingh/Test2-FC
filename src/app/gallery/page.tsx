import { Metadata } from 'next'
import { Suspense } from 'react'
import { Navbar } from '@/components/layout/navbar'
import { GalleryGrid } from '@/components/gallery/gallery-grid'
import { LoadingSpinner } from '@/components/ui/loading-spinner'

export const metadata: Metadata = {
  title: 'Design Gallery - FashionCraft',
  description: 'Explore amazing fashion designs from our community.',
}

export default function GalleryPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-display font-bold mb-4">Design Gallery</h1>
          <p className="text-muted-foreground text-lg">
            Discover and get inspired by amazing fashion designs from our creative community.
          </p>
        </div>
        <Suspense fallback={<LoadingSpinner />}>
          <GalleryGrid />
        </Suspense>
      </main>
    </div>
  )
}