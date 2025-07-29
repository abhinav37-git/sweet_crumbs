"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Product } from "@/lib/types"
import { useStore } from "@/lib/store"
import { Palette, Plus, Heart, Star } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useState } from "react"
import { formatPrice } from "@/lib/types"

interface EnhancedProductCardProps {
  product: Product
  index?: number
}

export function EnhancedProductCard({ product, index = 0 }: EnhancedProductCardProps) {
  const { addToCart } = useStore()
  const [isLiked, setIsLiked] = useState(false)

  const handleAddToCart = () => {
    addToCart({
      product,
      quantity: 1,
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group"
    >
      <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm">
        <CardHeader className="p-0 relative overflow-hidden">
          <div className="relative overflow-hidden">
            <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.4 }} className="relative">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                width={300}
                height={40}
                className="w-full h-40 sm:h-48 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>

            {/* Floating badges */}
            <div className="absolute top-2 right-2 flex flex-col gap-2">
              {product.customizable && (
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2 }}>
                  <Badge className="bg-pink-500 hover:bg-pink-600 transition-colors">
                    <Palette className="h-3 w-3 mr-1" />
                    Customizable
                  </Badge>
                </motion.div>
              )}

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsLiked(!isLiked)}
                className={`p-2 rounded-full transition-colors ${
                  isLiked ? "bg-red-500 text-white" : "bg-white/80 text-gray-600 hover:bg-red-50"
                }`}
              >
                <Heart className={`h-4 w-4 ${isLiked ? "fill-current" : ""}`} />
              </motion.button>
            </div>

            {/* Rating stars */}
            <div className="absolute bottom-2 left-2 flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </div>
        </CardHeader>

        <CardContent className="p-4">
          <CardTitle className="text-base sm:text-lg mb-2 group-hover:text-pink-600 transition-colors">
            {product.name}
          </CardTitle>
          <p className="text-gray-600 text-xs sm:text-sm mb-3 line-clamp-2">{product.description}</p>
          <div className="flex items-center justify-between">
            <motion.span className="text-2xl font-bold text-amber-600" whileHover={{ scale: 1.05 }}>
              {formatPrice(product.price)}
            </motion.span>
            <Badge variant="secondary" className="capitalize">
              {product.category}
            </Badge>
          </div>
        </CardContent>

        <CardFooter className="p-4 pt-0 flex gap-2">
          {product.customizable ? (
            <Link href={`/customize?product=${product.id}`} className="flex-1">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button className="w-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 shadow-lg">
                  <Palette className="h-4 w-4 mr-2" />
                  Customize
                </Button>
              </motion.div>
            </Link>
          ) : (
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1">
              <Button
                onClick={handleAddToCart}
                className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 shadow-lg"
              >
                <Plus className="h-4 w-4 mr-2" />
                Add to Cart
              </Button>
            </motion.div>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  )
}
