import { Metadata } from 'next'
import { StudioContainer } from '@/components/studio/studio-container'

export const metadata: Metadata = {
  title: 'Design Studio - FashionCraft',
  description: 'Create amazing fashion designs with our advanced 2D and 3D design tools.',
}

export default function StudioPage() {
  return (
    <div className="h-screen overflow-hidden">
      <StudioContainer />
    </div>
  )
}