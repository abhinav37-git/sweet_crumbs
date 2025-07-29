"use client"

import { create } from "zustand"
import type { CartItem, EmergencyUpdate, DeliveryOption } from "./types"

interface StoreState {
  cart: CartItem[]
  emergencyUpdates: EmergencyUpdate[]
  deliveryOptions: DeliveryOption[]
  addToCart: (item: CartItem) => void
  removeFromCart: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
  addEmergencyUpdate: (update: EmergencyUpdate) => void
  updateDeliveryOptions: (options: DeliveryOption[]) => void
}

export const useStore = create<StoreState>((set) => ({
  cart: [],
  emergencyUpdates: [
    {
      id: "1",
      type: "traffic",
      severity: "critical",
      title: "EMERGENCY TRAFFIC UPDATE",
      message:
        "Due to a city marathon and unexpected civic protests, 50% of roads across town are blocked or heavily delayed. Our delivery fleet is experiencing significant delays.",
      timestamp: new Date(),
      affectedAreas: ["Downtown", "City Center", "North District", "East Side"],
      alternativeOptions: ["In-store pickup", "Contactless curbside", "Partner location pickup"],
    },
  ],
  deliveryOptions: [
    {
      id: "1",
      name: "Standard Delivery",
      description: "Regular home delivery",
      estimatedTime: "Currently delayed 2-4 hours",
      available: false,
      price: 5.99,
    },
    {
      id: "2",
      name: "In-Store Pickup",
      description: "Pick up at our bakery location",
      estimatedTime: "30 minutes",
      available: true,
      price: 0,
    },
    {
      id: "3",
      name: "Curbside Pickup",
      description: "Contactless pickup at our location",
      estimatedTime: "30 minutes",
      available: true,
      price: 0,
    },
    {
      id: "4",
      name: "Partner Pickup Points",
      description: "Pickup at nearby partner locations",
      estimatedTime: "45 minutes",
      available: true,
      price: 2.99,
    },
  ],
  addToCart: (item) =>
    set((state) => ({
      cart: [...state.cart, item],
    })),
  removeFromCart: (productId) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.product.id !== productId),
    })),
  updateQuantity: (productId, quantity) =>
    set((state) => ({
      cart: state.cart.map((item) => (item.product.id === productId ? { ...item, quantity } : item)),
    })),
  clearCart: () => set({ cart: [] }),
  addEmergencyUpdate: (update) =>
    set((state) => ({
      emergencyUpdates: [update, ...state.emergencyUpdates],
    })),
  updateDeliveryOptions: (options) => set({ deliveryOptions: options }),
}))
