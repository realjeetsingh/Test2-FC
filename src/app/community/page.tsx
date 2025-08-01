import { Metadata } from 'next'
import { Suspense } from 'react'
import { Navbar } from '@/components/layout/navbar'
import { CommunityFeed } from '@/components/community/community-feed'
import { LoadingSpinner } from '@/components/ui/loading-spinner'

export const metadata: Metadata = {
  title: 'Community - FashionCraft',
  description: 'Connect with fashion designers and creators worldwide.',
}

export default function CommunityPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-display font-bold mb-4">Community</h1>
          <p className="text-muted-foreground text-lg">
            Connect, collaborate, and get inspired by fashion creators worldwide.
          </p>
        </div>
        <Suspense fallback={<LoadingSpinner />}>
          <CommunityFeed />
        </Suspense>
      </main>
    </div>
  )
}