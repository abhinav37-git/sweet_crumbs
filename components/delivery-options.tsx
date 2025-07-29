"use client"

import { useStore } from "@/lib/store"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, MapPin, Car, Store } from "lucide-react"

export function DeliveryOptions() {
  const { deliveryOptions } = useStore()

  const getIcon = (optionName: string) => {
    if (optionName.includes("Delivery")) return <Car className="h-4 w-4" />
    if (optionName.includes("Store")) return <Store className="h-4 w-4" />
    if (optionName.includes("Curbside")) return <MapPin className="h-4 w-4" />
    return <MapPin className="h-4 w-4" />
  }

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Fulfillment Options</h3>
      <div className="grid gap-4 md:grid-cols-2">
        {deliveryOptions.map((option) => (
          <Card key={option.id} className={`${!option.available ? "opacity-60" : ""}`}>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base flex items-center gap-2">
                  {getIcon(option.name)}
                  {option.name}
                </CardTitle>
                <div className="flex items-center gap-2">
                  <Badge variant={option.available ? "default" : "destructive"}>
                    {option.available ? "Available" : "Unavailable"}
                  </Badge>
                  {option.price > 0 && <Badge variant="outline">${option.price}</Badge>}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-2">{option.description}</p>
              <div className="flex items-center gap-1 text-sm">
                <Clock className="h-3 w-3" />
                <span>{option.estimatedTime}</span>
              </div>
              {option.available && (
                <Button className="w-full mt-3 bg-transparent" variant="outline">
                  Select This Option
                </Button>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
