import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Heart, MessageCircle, Share2, User } from 'lucide-react'
import Link from 'next/link'

const communityPosts = [
  {
    id: 1,
    author: 'Priya Sharma',
    title: 'Traditional Lehenga with Modern Twist',
    description: 'Combining Banarasi silk with contemporary cut and design.',
    image: '#FFD700',
    likes: 124,
    comments: 23,
    category: 'Traditional'
  },
  {
    id: 2,
    author: 'Arjun Patel',
    title: 'Sustainable Cotton Collection',
    description: 'Eco-friendly designs using organic Khadi cotton.',
    image: '#F5F5DC',
    likes: 89,
    comments: 15,
    category: 'Sustainable'
  },
  {
    id: 3,
    author: 'Maya Chen',
    title: 'Fusion Wear for Modern Women',
    description: 'East meets West in this versatile kurta design.',
    image: '#FF69B4',
    likes: 156,
    comments: 31,
    category: 'Fusion'
  }
]

export function Community() {
  return (
    <section className="py-24 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Join Our Creative Community
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get inspired by thousands of designers sharing their creations, techniques, and stories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {communityPosts.map((post) => (
            <Card key={post.id} className="group hover:shadow-lg transition-shadow overflow-hidden">
              <div 
                className="h-48 w-full flex items-center justify-center text-white text-4xl font-bold"
                style={{ backgroundColor: post.image }}
              >
                Design
              </div>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <User className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-sm font-medium">{post.author}</span>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {post.category}
                  </Badge>
                </div>
                <CardTitle className="text-lg leading-tight">{post.title}</CardTitle>
                <CardDescription>{post.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Heart className="h-4 w-4" />
                      <span>{post.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MessageCircle className="h-4 w-4" />
                      <span>{post.comments}</span>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" asChild>
            <Link href="/community">
              Join the Community
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}