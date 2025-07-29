"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Product } from "@/lib/types"
import { useStore } from "@/lib/store"
import { Palette, Plus } from "lucide-react"
import Link from "next/link"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useStore()

  const handleAddToCart = () => {
    addToCart({
      product,
      quantity: 1,
    })
  }

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <CardHeader className="p-0">
        <div className="relative">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            width={300}
            height={200}
            className="w-full h-48 object-cover"
          />
          {product.customizable && (
            <Badge className="absolute top-2 right-2 bg-pink-500">
              <Palette className="h-3 w-3 mr-1" />
              Customizable
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="text-lg mb-2">{product.name}</CardTitle>
        <p className="text-gray-600 text-sm mb-3">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-amber-600">${product.price}</span>
          <Badge variant="secondary">{product.category}</Badge>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex gap-2">
        {product.customizable ? (
          <Link href={`/customize?product=${product.id}`} className="flex-1">
            <Button className="w-full bg-pink-500 hover:bg-pink-600">
              <Palette className="h-4 w-4 mr-2" />
              Customize
            </Button>
          </Link>
        ) : (
          <Button onClick={handleAddToCart} className="flex-1 bg-amber-500 hover:bg-amber-600">
            <Plus className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
