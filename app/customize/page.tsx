"use client"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { useStore } from "@/lib/store"
import { EmergencyBanner } from "@/components/emergency-banner"
import { Cake, Palette, Heart } from "lucide-react"
import Image from "next/image"

const cakeOptions = {
  sizes: [
    { id: "6inch", name: "6 inch (serves 6-8)", price: 1099.99 },
    { id: "8inch", name: "8 inch (serves 10-12)", price: 1499.99 },
    { id: "10inch", name: "10 inch (serves 15-20)", price: 1899.99 },
    { id: "12inch", name: "12 inch (serves 25-30)", price: 2799.99 },
  ],
  flavors: ["Vanilla", "Chocolate", "Strawberry", "Red Velvet", "Carrot", "Lemon", "Funfetti"],
  frostings: ["Buttercream", "Cream Cheese", "Chocolate Ganache", "Whipped Cream", "Fondant"],
  decorations: [
    { id: "flowers", name: "Buttercream Flowers", price: 249.99 },
    { id: "writing", name: "Custom Writing", price: 169.99 },
    { id: "sprinkles", name: "Colorful Sprinkles", price: 89.99 },
    { id: "candles", name: "Birthday Candles", price: 129.99 },
    { id: "figurines", name: "Custom Figurines", price: 549.99 },
  ],
}

export default function CustomizePage() {
  const searchParams = useSearchParams()
  const { addToCart } = useStore()

  const [customization, setCustomization] = useState({
    size: "",
    flavor: "",
    frosting: "",
    message: "",
    specialInstructions: "",
    decorations: [] as string[],
  })

  const selectedSize = cakeOptions.sizes.find((s) => s.id === customization.size)
  const selectedDecorations = cakeOptions.decorations.filter((d) => customization.decorations.includes(d.id))

  const basePrice = selectedSize?.price || 0
  const decorationPrice = selectedDecorations.reduce((sum, d) => sum + d.price, 0)
  const totalPrice = basePrice + decorationPrice

  const handleDecorationChange = (decorationId: string, checked: boolean) => {
    setCustomization((prev) => ({
      ...prev,
      decorations: checked ? [...prev.decorations, decorationId] : prev.decorations.filter((id) => id !== decorationId),
    }))
  }

  const handleAddToCart = () => {
    if (!customization.size || !customization.flavor || !customization.frosting) {
      alert("Please select size, flavor, and frosting")
      return
    }

    const customProduct = {
      id: `custom-${Date.now()}`,
      name: `Custom ${customization.flavor} Cake`,
      description: `${selectedSize?.name} ${customization.flavor} cake with ${customization.frosting} frosting`,
      price: totalPrice,
      image: "/placeholder.svg?height=200&width=300&text=Custom+Cake",
      category: "custom" as const,
      customizable: true,
    }

    addToCart({
      product: customProduct,
      quantity: 1,
      customizations: {
        size: selectedSize?.name,
        flavor: customization.flavor,
        message: customization.message,
        decorations: selectedDecorations.map((d) => d.name),
      },
    })

    alert("Custom cake added to cart!")
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <EmergencyBanner />

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-amber-800 mb-4">
            <Cake className="inline mr-2" />
            Customize Your Perfect Cake
          </h1>
          <p className="text-amber-600">Create a one-of-a-kind cake for your special celebration</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Palette className="h-5 w-5" />
                  Cake Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="size">Size *</Label>
                  <Select
                    value={customization.size}
                    onValueChange={(value) => setCustomization((prev) => ({ ...prev, size: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select cake size" />
                    </SelectTrigger>
                    <SelectContent>
                      {cakeOptions.sizes.map((size) => (
                        <SelectItem key={size.id} value={size.id}>
                          {size.name} - ₹{size.price}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="flavor">Flavor *</Label>
                  <Select
                    value={customization.flavor}
                    onValueChange={(value) => setCustomization((prev) => ({ ...prev, flavor: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select cake flavor" />
                    </SelectTrigger>
                    <SelectContent>
                      {cakeOptions.flavors.map((flavor) => (
                        <SelectItem key={flavor} value={flavor}>
                          {flavor}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="frosting">Frosting *</Label>
                  <Select
                    value={customization.frosting}
                    onValueChange={(value) => setCustomization((prev) => ({ ...prev, frosting: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select frosting type" />
                    </SelectTrigger>
                    <SelectContent>
                      {cakeOptions.frostings.map((frosting) => (
                        <SelectItem key={frosting} value={frosting}>
                          {frosting}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message">Custom Message</Label>
                  <Input
                    id="message"
                    placeholder="Happy Birthday John!"
                    value={customization.message}
                    onChange={(e) => setCustomization((prev) => ({ ...prev, message: e.target.value }))}
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-5 w-5" />
                  Decorations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {cakeOptions.decorations.map((decoration) => (
                    <div key={decoration.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={decoration.id}
                        checked={customization.decorations.includes(decoration.id)}
                        onCheckedChange={(checked) => handleDecorationChange(decoration.id, checked as boolean)}
                      />
                      <Label htmlFor={decoration.id} className="flex-1">
                        {decoration.name}
                      </Label>
                      <Badge variant="outline">+₹{decoration.price}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Special Instructions</CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Any special requests or dietary restrictions..."
                  value={customization.specialInstructions}
                  onChange={(e) =>
                    setCustomization((prev) => ({
                      ...prev,
                      specialInstructions: e.target.value,
                    }))
                  }
                />
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Preview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <Image
                    src="/placeholder.svg?height=250&width=300&text=Your+Custom+Cake"
                    alt="Custom Cake Preview"
                    width={300}
                    height={250}
                    className="mx-auto rounded-lg mb-4"
                  />
                  <h3 className="font-semibold text-lg mb-2">{customization.flavor || "Custom"} Cake</h3>
                  {customization.size && <p className="text-sm text-gray-600 mb-1">Size: {selectedSize?.name}</p>}
                  {customization.frosting && (
                    <p className="text-sm text-gray-600 mb-1">Frosting: {customization.frosting}</p>
                  )}
                  {customization.message && (
                    <p className="text-sm text-gray-600 mb-1">Message: "{customization.message}"</p>
                  )}
                  {selectedDecorations.length > 0 && (
                    <div className="mt-2">
                      <p className="text-sm font-medium mb-1">Decorations:</p>
                      <div className="flex flex-wrap gap-1 justify-center">
                        {selectedDecorations.map((decoration) => (
                          <Badge key={decoration.id} variant="secondary" className="text-xs">
                            {decoration.name}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {selectedSize && (
                  <div className="flex justify-between">
                    <span>Base Cake ({selectedSize.name})</span>
                    <span>₹{selectedSize.price}</span>
                  </div>
                )}
                {selectedDecorations.map((decoration) => (
                  <div key={decoration.id} className="flex justify-between text-sm">
                    <span>{decoration.name}</span>
                    <span>+₹{decoration.price}</span>
                  </div>
                ))}
                <div className="border-t pt-3 flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span>₹{totalPrice.toFixed(2)}</span>
                </div>
                <Button
                  onClick={handleAddToCart}
                  className="w-full bg-pink-500 hover:bg-pink-600"
                  disabled={!customization.size || !customization.flavor || !customization.frosting}
                >
                  Add Custom Cake to Cart
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
