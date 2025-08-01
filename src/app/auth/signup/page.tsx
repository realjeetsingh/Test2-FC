import { Metadata } from 'next'
import { SignUpForm } from '@/components/auth/signup-form'
import { Navbar } from '@/components/layout/navbar'

export const metadata: Metadata = {
  title: 'Sign Up - FashionCraft',
  description: 'Join FashionCraft and start creating amazing fashion designs.',
}

export default function SignUpPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-display font-bold mb-2">Join FashionCraft</h1>
            <p className="text-muted-foreground">Start your fashion design journey today</p>
          </div>
          <SignUpForm />
        </div>
      </main>
    </div>
  )
}