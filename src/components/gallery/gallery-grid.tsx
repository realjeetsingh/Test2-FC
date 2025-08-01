import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Heart, MessageCircle, Share2, User, Eye } from 'lucide-react'

const galleryDesigns = [
  {
    id: 1,
    title: 'Elegant Banarasi Saree Design',
    author: 'Priya Sharma',
    category: 'Traditional',
    likes: 234,
    views: 1200,
    comments: 45,
    image: '#FFD700',
    description: 'Beautiful traditional Banarasi saree pattern with golden zari work'
  },
  {
    id: 2,
    title: 'Modern Kurta Collection',
    author: 'Arjun Patel',
    category: 'Fusion',
    likes: 189,
    views: 890,
    comments: 32,
    image: '#FF69B4',
    description: 'Contemporary kurta designs blending comfort with style'
  },
  {
    id: 3,
    title: 'Sustainable Fashion Line',
    author: 'Maya Chen',
    category: 'Eco-Friendly',
    likes: 156,
    views: 678,
    comments: 28,
    image: '#32CD32',
    description: 'Eco-conscious designs using organic materials'
  },
  {
    id: 4,
    title: 'Wedding Lehenga Concept',
    author: 'Rahul Gupta',
    category: 'Bridal',
    likes: 345,
    views: 1567,
    comments: 67,
    image: '#DC143C',
    description: 'Luxurious bridal lehenga with intricate embroidery'
  },
  {
    id: 5,
    title: 'Minimalist Western Wear',
    author: 'Sneha Reddy',
    category: 'Western',
    likes: 198,
    views: 945,
    comments: 41,
    image: '#4682B4',
    description: 'Clean, minimalist approach to everyday fashion'
  },
  {
    id: 6,
    title: 'Festival Special Collection',
    author: 'Kiran Singh',
    category: 'Festive',
    likes: 267,
    views: 1134,
    comments: 53,
    image: '#FF8C00',
    description: 'Vibrant designs perfect for Indian festivals'
  }
]

export function GalleryGrid() {
  return (
    <div className="space-y-6">
      {/* Filter Bar */}
      <div className="flex flex-wrap gap-2">
        <Button variant="default" size="sm">All</Button>
        <Button variant="outline" size="sm">Traditional</Button>
        <Button variant="outline" size="sm">Fusion</Button>
        <Button variant="outline" size="sm">Western</Button>
        <Button variant="outline" size="sm">Bridal</Button>
        <Button variant="outline" size="sm">Eco-Friendly</Button>
      </div>

      {/* Design Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryDesigns.map((design) => (
          <Card key={design.id} className="group hover:shadow-lg transition-shadow overflow-hidden">
            <div 
              className="h-48 w-full flex items-center justify-center text-white text-lg font-bold relative"
              style={{ backgroundColor: design.image }}
            >
              <span className="text-center px-4">Design Preview</span>
              <div className="absolute top-2 right-2">
                <Badge variant="secondary" className="text-xs">
                  {design.category}
                </Badge>
              </div>
            </div>

            <CardHeader className="pb-2">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                    <User className="h-3 w-3 text-primary" />
                  </div>
                  <span className="text-sm font-medium">{design.author}</span>
                </div>
                <Button variant="ghost" size="sm">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
              <CardTitle className="text-lg leading-tight">{design.title}</CardTitle>
            </CardHeader>

            <CardContent className="pt-0">
              <CardDescription className="mb-3">
                {design.description}
              </CardDescription>

              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Heart className="h-4 w-4" />
                    <span>{design.likes}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Eye className="h-4 w-4" />
                    <span>{design.views}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MessageCircle className="h-4 w-4" />
                    <span>{design.comments}</span>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="h-8 px-2">
                  View
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center pt-8">
        <Button variant="outline" size="lg">
          Load More Designs
        </Button>
      </div>
    </div>
  )
}