import { Metadata } from 'next'
import { SignInForm } from '@/components/auth/signin-form'
import { Navbar } from '@/components/layout/navbar'

export const metadata: Metadata = {
  title: 'Sign In - FashionCraft',
  description: 'Sign in to your FashionCraft account.',
}

export default function SignInPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-display font-bold mb-2">Welcome Back</h1>
            <p className="text-muted-foreground">Sign in to continue creating amazing designs</p>
          </div>
          <SignInForm />
        </div>
      </main>
    </div>
  )
}