import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { EmergencyBanner } from "@/components/emergency-banner"
import { EnhancedProductCard } from "@/components/enhanced-product-card"
import { StatsSection } from "@/components/stats-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FloatingElements } from "@/components/floating-elements"
import { ClickableSpecialtyCard } from "@/components/clickable-specialty-card"
import type { Product } from "@/lib/types"
import { Cake, Cookie, Heart, Star, ChefHat, Clock, Award, Sparkles } from "lucide-react"

const featuredProducts: Product[] = [
  {
    id: "1",
    name: "Birthday Celebration Cake",
    description: "Custom decorated cake perfect for birthdays with personalized messages and decorations",
    price: 1899.99,
    image: "/images/birthday-celebration-cake.avif",
    category: "cakes",
    customizable: true,
  },
  {
    id: "2",
    name: "Chocolate Fudge Brownies",
    description: "Rich, decadent brownies with premium chocolate and a fudgy texture that melts in your mouth",
    price: 549.99,
    image: "/images/chocolate-fudge-brownies.jpeg",
    category: "pastries",
  },
  {
    id: "3",
    name: "Fresh Strawberry Tart",
    description: "Seasonal fresh strawberries on vanilla custard with a buttery, flaky pastry crust",
    price: 799.99,
    image: "/images/fresh-strawberry-tart.jpeg",
    category: "pastries",
  },
]

const allProducts: Product[] = [
  ...featuredProducts,
  {
    id: "4",
    name: "Wedding Cake",
    description: "Elegant multi-tier cake for your special day with custom decorations and flavors",
    price: 5299.99,
    image: "/images/wedding-cake.jpeg",
    category: "cakes",
    customizable: true,
  },
  {
    id: "5",
    name: "Chocolate Chip Cookies",
    description: "Classic homemade cookies with premium chocolate chips, baked to golden perfection",
    price: 379.99,
    image: "/images/chocolate-chip-cookies.jpeg",
    category: "cookies",
  },
  {
    id: "6",
    name: "Lemon Bars",
    description: "Tangy lemon bars with a buttery shortbread crust and powdered sugar dusting",
    price: 649.99,
    image: "/images/lemon-bars.jpeg",
    category: "pastries",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-pink-50 to-white">
      <EmergencyBanner />

      {/* Mobile-Optimized Hero Section */}
      <section className="relative py-16 sm:py-24 lg:py-32 px-4 overflow-hidden">
        <FloatingElements />
        <div className="absolute inset-0 bg-gradient-to-br from-amber-100/50 via-pink-100/30 to-transparent" />

        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6 sm:mb-8">
              <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-800 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                <Sparkles className="h-3 w-3 sm:h-4 sm:w-4" />
                Fresh Baked Daily Since 2008
              </div>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold text-amber-800 mb-4 sm:mb-6 leading-tight">
              Let's Eat Some
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-pink-800">
                CAKE
              </span>
            </h1>

            <p className="text-lg sm:text-2xl text-amber-700 mb-3 sm:mb-4 font-medium">BECAUSE EVERY CRUMB COUNTS</p>
            <p className="text-base sm:text-lg text-amber-600 mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
              Handcrafted with love, baked with passion. Experience the finest cakes, pastries, and custom creations
              that make every moment sweeter.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12 sm:mb-16 px-4">
              <Link href="/products">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Cake className="mr-2 h-5 w-5 sm:h-6 sm:w-6" />
                  Browse Our Treats
                </Button>
              </Link>
              <Link href="/customize">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-2 border-amber-500 text-amber-700 hover:bg-amber-50 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Heart className="mr-2 h-5 w-5 sm:h-6 sm:w-6" />
                  Custom Orders
                </Button>
              </Link>
            </div>

            {/* Mobile-Optimized Quick Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-sm sm:max-w-md mx-auto">
              {[
                { icon: Award, label: "Award Winning", value: "25+" },
                { icon: Clock, label: "Years Experience", value: "15+" },
                { icon: Heart, label: "Happy Customers", value: "10K+" },
              ].map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <stat.icon className="h-6 w-6 sm:h-8 sm:w-8 mx-auto mb-2 text-pink-600" />
                  <div className="text-xl sm:text-2xl font-bold text-amber-800">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-amber-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mobile-Optimized Featured Products */}
      <section id="featured-treats" className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <ChefHat className="h-3 w-3 sm:h-4 sm:w-4" />
              Handpicked Favorites
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-amber-800 mb-4 sm:mb-6">Featured Treats</h2>
            <p className="text-amber-600 max-w-2xl mx-auto text-base sm:text-lg px-4">
              Discover our most popular items, freshly baked daily with love and the finest ingredients
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featuredProducts.map((product, index) => (
              <EnhancedProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Mobile-Optimized All Products Section */}
      <section
        id="all-treats"
        className="py-12 sm:py-16 lg:py-20 px-4 bg-gradient-to-r from-white via-pink-50/30 to-white"
      >
        <div className="container mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-amber-800 mb-4 sm:mb-6">
              Our Complete Collection
            </h2>
            <p className="text-amber-600 max-w-2xl mx-auto text-base sm:text-lg px-4">
              From classic favorites to custom creations, explore our full range of delicious treats
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {allProducts.map((product, index) => (
              <EnhancedProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Mobile-Optimized Enhanced Categories with Clickable Cards */}
      <section
        id="specialties"
        className="py-12 sm:py-16 lg:py-20 px-4 bg-gradient-to-br from-amber-50 via-pink-50 to-amber-50"
      >
        <div className="container mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-amber-800 mb-4 sm:mb-6">Our Specialties</h2>
            <p className="text-amber-600 max-w-2xl mx-auto text-base sm:text-lg px-4">
              Each category crafted with expertise and passion for perfection
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            <ClickableSpecialtyCard
              name="Custom Cakes"
              icon={Cake}
              description="Personalized for your special moments"
              gradient="from-pink-400 to-pink-600"
              href="/customize"
            />
            <ClickableSpecialtyCard
              name="Fresh Pastries"
              icon={Star}
              description="Daily selections of artisan pastries"
              gradient="from-amber-400 to-amber-600"
              href="/products?category=pastries"
            />
            <ClickableSpecialtyCard
              name="Gourmet Cookies"
              icon={Cookie}
              description="Classic and seasonal flavors"
              gradient="from-yellow-400 to-yellow-600"
              href="/products?category=cookies"
            />
            <ClickableSpecialtyCard
              name="Special Orders"
              icon={Heart}
              description="Made just for you with love"
              gradient="from-red-400 to-red-600"
              href="/customize"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Mobile-Optimized Enhanced About Section */}
      <section
        id="about-section"
        className="py-12 sm:py-16 lg:py-20 px-4 bg-gradient-to-r from-white via-amber-50/30 to-white"
      >
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-800 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                <Heart className="h-3 w-3 sm:h-4 sm:w-4" />
                Our Story
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-amber-800 mb-6 sm:mb-8">
                About Sweet Crumbs
              </h2>
              <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-amber-700">
                <p>
                  For over 15 years, Sweet Crumbs has been crafting delicious memories one treat at a time. Our
                  passionate bakers use only the finest ingredients to create cakes, pastries, and custom orders that
                  bring joy to every celebration.
                </p>
                <p>
                  From birthday cakes to wedding desserts, we believe that every crumb should be perfect. That's why we
                  bake fresh daily and offer custom decorating services to make your special moments even sweeter.
                </p>
                <p>
                  Our commitment to quality, creativity, and customer satisfaction has made us the go-to bakery for
                  thousands of happy customers across the community.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 sm:gap-3 mt-6 sm:mt-8">
                <Badge className="bg-pink-100 text-pink-800 px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm">
                  Fresh Daily
                </Badge>
                <Badge className="bg-amber-100 text-amber-800 px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm">
                  Custom Orders
                </Badge>
                <Badge className="bg-green-100 text-green-800 px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm">
                  Local Ingredients
                </Badge>
                <Badge className="bg-blue-100 text-blue-800 px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm">
                  Award Winning
                </Badge>
              </div>
            </div>
            <div className="relative flex justify-center order-1 lg:order-2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-200 to-amber-200 rounded-full blur-3xl opacity-30 scale-110" />
                <Image
                  src="/sweet-crumbs-logo.png"
                  alt="Sweet Crumbs Logo"
                  width={300}
                  height={300}
                  className="relative rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile-Optimized Call to Action */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-gradient-to-r from-pink-500 via-pink-600 to-pink-500 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">Ready to Sweeten Your Day?</h2>
          <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto opacity-90 px-4">
            Visit us today or place your custom order online. Let us make your next celebration unforgettable!
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Link href="/products">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-white text-pink-600 hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg shadow-lg"
              >
                Shop Now
              </Button>
            </Link>
            <Link href="/customize">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-pink-600 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg bg-transparent"
              >
                Custom Order
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
