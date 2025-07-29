export interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: "cakes" | "pastries" | "cookies" | "custom"
  customizable?: boolean
  formattedPrice?: string
}

export interface CartItem {
  product: Product
  quantity: number
  customizations?: {
    size?: string
    flavor?: string
    message?: string
    decorations?: string[]
  }
}

export interface EmergencyUpdate {
  id: string
  type: "traffic" | "weather" | "supply" | "delivery"
  severity: "low" | "medium" | "high" | "critical"
  title: string
  message: string
  timestamp: Date
  affectedAreas?: string[]
  alternativeOptions?: string[]
}

export interface DeliveryOption {
  id: string
  name: string
  description: string
  estimatedTime: string
  available: boolean
  price: number
}

export const formatPrice = (price: number): string => {
  return `₹${price.toFixed(2)}`
}
