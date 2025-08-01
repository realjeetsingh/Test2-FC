import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Heart, MessageCircle, Share2, User, MoreHorizontal, Bookmark } from 'lucide-react'

const communityPosts = [
  {
    id: 1,
    author: {
      name: 'Priya Sharma',
      avatar: '👩‍🎨',
      verified: true
    },
    content: 'Just finished working on this amazing Banarasi silk design! The intricate patterns and golden threads took weeks to perfect. What do you think? 🌟',
    image: '#FFD700',
    likes: 234,
    comments: 45,
    shares: 12,
    timestamp: '2 hours ago',
    tags: ['Banarasi', 'Traditional', 'Silk']
  },
  {
    id: 2,
    author: {
      name: 'Arjun Patel',
      avatar: '👨‍💼',
      verified: false
    },
    content: 'Experimenting with sustainable materials for my new collection. This organic cotton blend feels amazing and looks great too! #EcoFashion',
    image: '#32CD32',
    likes: 189,
    comments: 32,
    shares: 8,
    timestamp: '5 hours ago',
    tags: ['Sustainable', 'Organic', 'Cotton']
  },
  {
    id: 3,
    author: {
      name: 'Maya Chen',
      avatar: '👩‍💻',
      verified: true
    },
    content: 'Workshop alert! Join me this weekend for a hands-on session on modern pattern making techniques. Limited spots available!',
    image: '#FF69B4',
    likes: 156,
    comments: 67,
    shares: 23,
    timestamp: '1 day ago',
    tags: ['Workshop', 'Learning', 'PatternMaking']
  },
  {
    id: 4,
    author: {
      name: 'Rahul Gupta',
      avatar: '👨‍🎨',
      verified: false
    },
    content: 'Behind the scenes of creating this wedding lehenga design. The attention to detail in traditional Indian embroidery is just breathtaking!',
    image: '#DC143C',
    likes: 345,
    comments: 89,
    shares: 15,
    timestamp: '2 days ago',
    tags: ['Bridal', 'Lehenga', 'Embroidery']
  }
]

export function CommunityFeed() {
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Create Post */}
      <Card>
        <CardContent className="p-4">
          <div className="flex space-x-3">
            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
              <User className="h-5 w-5 text-primary" />
            </div>
            <div className="flex-1">
              <Button variant="outline" className="w-full justify-start text-muted-foreground">
                Share your latest design or ask the community...
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Feed Posts */}
      <div className="space-y-6">
        {communityPosts.map((post) => (
          <Card key={post.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="text-2xl">{post.author.avatar}</div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="font-semibold">{post.author.name}</span>
                      {post.author.verified && (
                        <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                      )}
                    </div>
                    <span className="text-sm text-muted-foreground">{post.timestamp}</span>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>

            <CardContent className="pt-0">
              <p className="mb-4 leading-relaxed">{post.content}</p>

              {post.image && (
                <div 
                  className="h-64 w-full rounded-lg mb-4 flex items-center justify-center text-white text-xl font-bold"
                  style={{ backgroundColor: post.image }}
                >
                  Design Preview
                </div>
              )}

              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    #{tag}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-border">
                <div className="flex items-center space-x-6">
                  <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-red-500">
                    <Heart className="h-4 w-4 mr-1" />
                    {post.likes}
                  </Button>
                  <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-blue-500">
                    <MessageCircle className="h-4 w-4 mr-1" />
                    {post.comments}
                  </Button>
                  <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-green-500">
                    <Share2 className="h-4 w-4 mr-1" />
                    {post.shares}
                  </Button>
                </div>
                <Button variant="ghost" size="sm" className="text-muted-foreground">
                  <Bookmark className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center pt-8">
        <Button variant="outline" size="lg">
          Load More Posts
        </Button>
      </div>
    </div>
  )
}