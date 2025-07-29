"use client"

import { useSearchParams } from "next/navigation"
import { ProductCard } from "@/components/product-card"
import { EmergencyBanner } from "@/components/emergency-banner"
import type { Product } from "@/lib/types"
import { Badge } from "@/components/ui/badge"
import { useEffect, useState } from "react"

const products: Product[] = [
  {
    id: "1",
    name: "Birthday Celebration Cake",
    description: "Custom decorated cake perfect for birthdays",
    price: 1899.99,
    image: "/images/birthday-celebration-cake.avif",
    category: "cakes",
    customizable: true,
  },
  {
    id: "2",
    name: "Chocolate Fudge Brownies",
    description: "Rich, decadent brownies with chocolate chips",
    price: 549.99,
    image: "/images/chocolate-fudge-brownies.jpeg",
    category: "pastries",
  },
  {
    id: "3",
    name: "Fresh Strawberry Tart",
    description: "Seasonal fresh strawberries on vanilla custard",
    price: 799.99,
    image: "/images/fresh-strawberry-tart.jpeg",
    category: "pastries",
  },
  {
    id: "4",
    name: "Wedding Cake",
    description: "Elegant multi-tier cake for your special day",
    price: 5299.99,
    image: "/images/wedding-cake.jpeg",
    category: "cakes",
    customizable: true,
  },
  {
    id: "5",
    name: "Chocolate Chip Cookies",
    description: "Classic homemade cookies, dozen pack",
    price: 379.99,
    image: "/images/chocolate-chip-cookies.jpeg",
    category: "cookies",
  },
  {
    id: "6",
    name: "Lemon Bars",
    description: "Tangy lemon bars with powdered sugar",
    price: 649.99,
    image: "/images/lemon-bars.jpeg",
    category: "pastries",
  },
]

export default function ProductsPage() {
  const searchParams = useSearchParams()
  const [selectedCategory, setSelectedCategory] = useState("all")
  const categories = ["all", "cakes", "pastries", "cookies"]

  useEffect(() => {
    const categoryParam = searchParams.get("category")
    if (categoryParam && categories.includes(categoryParam)) {
      setSelectedCategory(categoryParam)
    }
  }, [searchParams])

  const filteredProducts =
    selectedCategory === "all" ? products : products.filter((product) => product.category === selectedCategory)

  return (
    <div className="container mx-auto px-4 py-8">
      <EmergencyBanner />

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-amber-800 mb-4">Our Products</h1>
        <p className="text-amber-600 mb-6">Freshly baked daily with love and the finest ingredients</p>

        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className={`cursor-pointer transition-colors ${
                selectedCategory === category ? "bg-amber-500 hover:bg-amber-600" : "hover:bg-amber-50"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Badge>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-16">
          <p className="text-amber-600 text-lg">No products found in this category.</p>
        </div>
      )}
    </div>
  )
}
