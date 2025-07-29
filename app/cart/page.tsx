"use client"

import { useStore } from "@/lib/store"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { EmergencyBanner } from "@/components/emergency-banner"
import { DeliveryOptions } from "@/components/delivery-options"
import Image from "next/image"
import { Minus, Plus, Trash2 } from "lucide-react"


export default function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useStore()
  
  const formatPrice = (price: number): string => {
    return `₹${price.toFixed(2)}`
  }

  const subtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0)
  const tax = subtotal * 0.08
  const total = subtotal + tax

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <EmergencyBanner />
        <div className="text-center py-16">
          <h1 className="text-3xl font-bold text-amber-800 mb-4">Your Cart is Empty</h1>
          <p className="text-amber-600 mb-8">Add some delicious treats to get started!</p>
          <Button className="bg-pink-500 hover:bg-pink-600">Browse Products</Button>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <EmergencyBanner />

      <h1 className="text-3xl font-bold text-amber-800 mb-8">Shopping Cart</h1>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {cart.map((item) => (
            <Card key={`${item.product.id}-${JSON.stringify(item.customizations)}`}>
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <Image
                    src={item.product.image || "/placeholder.svg"}
                    alt={item.product.name}
                    width={100}
                    height={100}
                    className="rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{item.product.name}</h3>
                    <p className="text-gray-600 text-sm mb-2">{item.product.description}</p>

                    {item.customizations && (
                      <div className="space-y-1 mb-3">
                        {item.customizations.size && <Badge variant="outline">Size: {item.customizations.size}</Badge>}
                        {item.customizations.flavor && (
                          <Badge variant="outline">Flavor: {item.customizations.flavor}</Badge>
                        )}
                        {item.customizations.message && (
                          <Badge variant="outline">Message: "{item.customizations.message}"</Badge>
                        )}
                      </div>
                    )}

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateQuantity(item.product.id, Math.max(1, item.quantity - 1))}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>

                      <div className="flex items-center gap-4">
                        <span className="font-semibold text-lg">{formatPrice(item.product.price * item.quantity)}</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeFromCart(item.product.id)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span>{formatPrice(tax)}</span>
              </div>
              <Separator />
              <div className="flex justify-between font-semibold text-lg">
                <span>Total</span>
                <span>{formatPrice(total)}</span>
              </div>
              <Button className="w-full bg-pink-500 hover:bg-pink-600">Proceed to Checkout</Button>
            </CardContent>
          </Card>

          <DeliveryOptions />
        </div>
      </div>
    </div>
  )
}
