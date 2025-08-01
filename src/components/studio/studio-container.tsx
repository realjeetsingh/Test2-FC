"use client"

import { useState, useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { MATERIALS } from '@/lib/constants'
import { formatPrice } from '@/lib/utils'
import { cn } from '@/lib/utils'
import { 
  Save, 
  Download, 
  Share2, 
  Undo, 
  Redo, 
  RotateCcw,
  Home,
  Search,
  Filter,
  Grid3X3,
  Layers
} from 'lucide-react'
import Link from 'next/link'

declare global {
  interface Window {
    fabric: any;
  }
}

export function StudioContainer() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [canvas, setCanvas] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [currentMode, setCurrentMode] = useState<'2d' | '3d'>('2d')
  const [selectedMaterial, setSelectedMaterial] = useState<any>(null)
  const [searchTerm, setSearchTerm] = useState('')

  // Initialize Fabric.js canvas
  useEffect(() => {
    let fabricCanvas: any = null

    const initCanvas = async () => {
      try {
        // Wait for fabric.js to load
        let attempts = 0
        while (!window.fabric && attempts < 50) {
          await new Promise(resolve => setTimeout(resolve, 100))
          attempts++
        }

        if (!window.fabric) {
          throw new Error('Fabric.js failed to load')
        }

        if (canvasRef.current) {
          fabricCanvas = new window.fabric.Canvas(canvasRef.current, {
            width: 800,
            height: 600,
            backgroundColor: '#ffffff'
          })

          // Add sample rectangle
          const rect = new window.fabric.Rect({
            left: 100,
            top: 100,
            fill: '#ff6b6b',
            width: 200,
            height: 150,
            angle: 0
          })
          fabricCanvas.add(rect)

          setCanvas(fabricCanvas)
        }
      } catch (error) {
        console.error('Failed to initialize canvas:', error)
      } finally {
        setIsLoading(false)
      }
    }

    // Add script dynamically if not loaded
    if (!window.fabric) {
      const script = document.createElement('script')
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/fabric.js/5.3.0/fabric.min.js'
      script.onload = () => initCanvas()
      script.onerror = () => {
        console.error('Failed to load Fabric.js')
        setIsLoading(false)
      }
      document.head.appendChild(script)
    } else {
      initCanvas()
    }

    return () => {
      if (fabricCanvas) {
        fabricCanvas.dispose()
      }
    }
  }, [])

  const addMaterialToCanvas = (material: any) => {
    if (!canvas) return

    const rect = new window.fabric.Rect({
      left: Math.random() * 400 + 50,
      top: Math.random() * 300 + 50,
      fill: material.color,
      width: 150,
      height: 100,
      angle: 0
    })

    canvas.add(rect)
    canvas.renderAll()
    setSelectedMaterial(material)
  }

  const clearCanvas = () => {
    if (!canvas) return
    canvas.clear()
    canvas.backgroundColor = '#ffffff'
    canvas.renderAll()
  }

  const filteredMaterials = MATERIALS.fabrics.filter(material =>
    material.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    material.origin.toLowerCase().includes(searchTerm.toLowerCase())
  )

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading Design Studio...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="h-screen flex flex-col bg-background">
      {/* Top Navigation */}
      <div className="flex items-center justify-between p-4 border-b border-border bg-muted/20">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/">
              <Home className="h-4 w-4 mr-2" />
              Home
            </Link>
          </Button>
          <div className="h-4 w-px bg-border" />
          <h1 className="text-lg font-semibold">Design Studio</h1>
        </div>

        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <Undo className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="sm">
            <Redo className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="sm" onClick={clearCanvas}>
            <RotateCcw className="h-4 w-4" />
          </Button>
          <div className="h-4 w-px bg-border" />
          <Button variant="outline" size="sm">
            <Save className="h-4 w-4 mr-2" />
            Save
          </Button>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button size="sm">
            <Share2 className="h-4 w-4 mr-2" />
            Share
          </Button>
        </div>
      </div>

      <div className="flex-1 flex">
        {/* Materials Sidebar */}
        <div className="w-80 border-r border-border bg-muted/10 overflow-y-auto">
          <div className="p-4">
            <div className="mb-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search materials..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
            </div>

            <Tabs defaultValue="fabrics" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="fabrics">Fabrics</TabsTrigger>
                <TabsTrigger value="accessories">Parts</TabsTrigger>
                <TabsTrigger value="templates">Templates</TabsTrigger>
              </TabsList>

              <TabsContent value="fabrics" className="mt-4 space-y-3">
                {filteredMaterials.map((material) => (
                  <Card 
                    key={material.id} 
                    className={cn(
                      "cursor-pointer transition-all hover:shadow-md",
                      selectedMaterial?.id === material.id && "ring-2 ring-primary"
                    )}
                    onClick={() => addMaterialToCanvas(material)}
                  >
                    <CardContent className="p-3">
                      <div className="flex items-center space-x-3">
                        <div 
                          className="w-12 h-12 rounded border-2 border-border"
                          style={{ backgroundColor: material.color }}
                        />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium truncate">{material.name}</p>
                          <p className="text-xs text-muted-foreground">{material.origin}</p>
                          <div className="flex items-center justify-between mt-1">
                            <Badge variant="secondary" className="text-xs">
                              {material.category}
                            </Badge>
                            <span className="text-sm font-medium text-primary">
                              {formatPrice(material.price)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="accessories" className="mt-4">
                <div className="text-center py-8 text-muted-foreground">
                  <Grid3X3 className="h-8 w-8 mx-auto mb-2" />
                  <p>Accessories coming soon</p>
                </div>
              </TabsContent>

              <TabsContent value="templates" className="mt-4">
                <div className="text-center py-8 text-muted-foreground">
                  <Layers className="h-8 w-8 mx-auto mb-2" />
                  <p>Templates coming soon</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Canvas Area */}
        <div className="flex-1 flex flex-col">
          <div className="p-4 border-b border-border bg-muted/5">
            <Tabs value={currentMode} onValueChange={(value) => setCurrentMode(value as '2d' | '3d')}>
              <TabsList>
                <TabsTrigger value="2d">2D Canvas</TabsTrigger>
                <TabsTrigger value="3d">3D Preview</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <div className="flex-1 flex items-center justify-center p-8 bg-gradient-to-br from-muted/20 to-background">
            {currentMode === '2d' ? (
              <div className="canvas-container">
                <canvas ref={canvasRef} />
              </div>
            ) : (
              <div className="flex items-center justify-center w-[800px] h-[600px] border-2 border-dashed border-border rounded-lg bg-muted/10">
                <div className="text-center">
                  <div className="text-6xl mb-4">🏃‍♂️</div>
                  <p className="text-lg font-medium mb-2">3D Preview Coming Soon</p>
                  <p className="text-sm text-muted-foreground">
                    We're working on an amazing 3D mannequin experience
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}