import { Metadata } from 'next'
import { Suspense } from 'react'
import { Navbar } from '@/components/layout/navbar'
import { MarketplaceGrid } from '@/components/marketplace/marketplace-grid'
import { LoadingSpinner } from '@/components/ui/loading-spinner'

export const metadata: Metadata = {
  title: 'Marketplace - FashionCraft',
  description: 'Buy and sell custom fashion designs.',
}

export default function MarketplacePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-display font-bold mb-4">Marketplace</h1>
          <p className="text-muted-foreground text-lg">
            Buy custom fashion designs or sell your own creations.
          </p>
        </div>
        <Suspense fallback={<LoadingSpinner />}>
          <MarketplaceGrid />
        </Suspense>
      </main>
    </div>
  )
}