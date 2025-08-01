import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ShoppingCart, Star, Download, User } from 'lucide-react'
import { formatPrice } from '@/lib/utils'

const marketplaceItems = [
  {
    id: 1,
    title: 'Premium Saree Pattern',
    author: 'Priya Designs',
    category: 'Traditional',
    price: 1999,
    originalPrice: 2499,
    rating: 4.8,
    reviews: 124,
    sales: 567,
    image: '#FFD700',
    description: 'Complete saree design with blouse pattern included'
  },
  {
    id: 2,
    title: 'Modern Kurta Set',
    author: 'Fashion Forward',
    category: 'Fusion',
    price: 1299,
    originalPrice: 1599,
    rating: 4.6,
    reviews: 89,
    sales: 234,
    image: '#FF69B4',
    description: 'Stylish kurta and palazzo set for everyday wear'
  },
  {
    id: 3,
    title: 'Wedding Lehenga Design',
    author: 'Bridal Couture',
    category: 'Bridal',
    price: 4999,
    originalPrice: 5999,
    rating: 4.9,
    reviews: 156,
    sales: 89,
    image: '#DC143C',
    description: 'Luxurious bridal lehenga with detailed embroidery guide'
  },
  {
    id: 4,
    title: 'Casual Shirt Collection',
    author: 'Urban Wear',
    category: 'Western',
    price: 899,
    originalPrice: 1199,
    rating: 4.5,
    reviews: 78,
    sales: 345,
    image: '#4682B4',
    description: 'Pack of 5 shirt designs for casual wear'
  },
  {
    id: 5,
    title: 'Eco Fabric Dress',
    author: 'Green Fashion',
    category: 'Sustainable',
    price: 1799,
    originalPrice: 2199,
    rating: 4.7,
    reviews: 92,
    sales: 178,
    image: '#32CD32',
    description: 'Sustainable dress design using eco-friendly materials'
  },
  {
    id: 6,
    title: 'Festival Outfit Bundle',
    author: 'Festive Styles',
    category: 'Festive',
    price: 2499,
    originalPrice: 2999,
    rating: 4.8,
    reviews: 134,
    sales: 267,
    image: '#FF8C00',
    description: 'Complete festival outfit with accessories guide'
  }
]

export function MarketplaceGrid() {
  return (
    <div className="space-y-6">
      {/* Filter Bar */}
      <div className="flex flex-wrap gap-2 mb-6">
        <Button variant="default" size="sm">All Categories</Button>
        <Button variant="outline" size="sm">Traditional</Button>
        <Button variant="outline" size="sm">Western</Button>
        <Button variant="outline" size="sm">Bridal</Button>
        <Button variant="outline" size="sm">Sustainable</Button>
        <Button variant="outline" size="sm">Under ₹1000</Button>
      </div>

      {/* Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {marketplaceItems.map((item) => (
          <Card key={item.id} className="group hover:shadow-lg transition-shadow overflow-hidden">
            <div 
              className="h-48 w-full flex items-center justify-center text-white text-lg font-bold relative"
              style={{ backgroundColor: item.image }}
            >
              <span className="text-center px-4">Design Preview</span>
              <div className="absolute top-2 right-2">
                <Badge variant="secondary" className="text-xs">
                  {item.category}
                </Badge>
              </div>
              {item.originalPrice > item.price && (
                <div className="absolute top-2 left-2">
                  <Badge variant="destructive" className="text-xs">
                    {Math.round((1 - item.price / item.originalPrice) * 100)}% OFF
                  </Badge>
                </div>
              )}
            </div>

            <CardHeader className="pb-2">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                    <User className="h-3 w-3 text-primary" />
                  </div>
                  <span className="text-sm font-medium">{item.author}</span>
                </div>
                <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  <span>{item.rating}</span>
                  <span>({item.reviews})</span>
                </div>
              </div>
              <CardTitle className="text-lg leading-tight">{item.title}</CardTitle>
            </CardHeader>

            <CardContent className="pt-0">
              <CardDescription className="mb-3">
                {item.description}
              </CardDescription>

              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-bold text-primary">
                    {formatPrice(item.price)}
                  </span>
                  {item.originalPrice > item.price && (
                    <span className="text-sm text-muted-foreground line-through">
                      {formatPrice(item.originalPrice)}
                    </span>
                  )}
                </div>
                <div className="text-xs text-muted-foreground">
                  {item.sales} sold
                </div>
              </div>

              <div className="flex space-x-2">
                <Button className="flex-1" size="sm">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Buy Now
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center pt-8">
        <Button variant="outline" size="lg">
          Load More Items
        </Button>
      </div>
    </div>
  )
}