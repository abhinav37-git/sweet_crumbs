"use client"

import Image from "next/image"
import Link from "next/link"
import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useStore } from "@/lib/store"

export function Header() {
  const { cart } = useStore()
  const cartItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/sweet-crumbs-logo.png" alt="Sweet Crumbs" width={60} height={60} className="rounded-lg" />
            <div>
              <h1 className="text-2xl font-bold text-amber-800">Sweet Crumbs</h1>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-amber-800 hover:text-amber-600 transition-colors">
              Home
            </Link>
            <Link href="/products" className="text-amber-800 hover:text-amber-600 transition-colors">
              Products
            </Link>
            <Link href="/customize" className="text-amber-800 hover:text-amber-600 transition-colors">
              Custom Orders
            </Link>
            <button
              onClick={() => scrollToSection("about-section")}
              className="text-amber-800 hover:text-amber-600 transition-colors cursor-pointer"
            >
              About
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            <Link href="/cart">
              <Button variant="outline" className="relative bg-transparent hover:bg-amber-50 transition-colors">
                <ShoppingCart className="h-4 w-4" />
                {cartItemsCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                    {cartItemsCount}
                  </Badge>
                )}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
