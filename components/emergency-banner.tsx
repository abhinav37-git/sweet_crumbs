"use client"

import { useStore } from "@/lib/store"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertTriangle, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function EmergencyBanner() {
  const { emergencyUpdates } = useStore()
  const [dismissed, setDismissed] = useState<string[]>([])

  const activeUpdates = emergencyUpdates.filter(
    (update) => !dismissed.includes(update.id) && update.severity === "critical",
  )

  if (activeUpdates.length === 0) return null

  return (
    <div className="space-y-2">
      {activeUpdates.map((update) => (
        <Alert key={update.id} className="border-red-200 bg-red-50">
          <AlertTriangle className="h-4 w-4 text-red-600" />
          <div className="flex-1">
            <AlertTitle className="text-red-800">{update.title}</AlertTitle>
            <AlertDescription className="text-red-700">
              {update.message}
              {update.alternativeOptions && (
                <div className="mt-2">
                  <strong>Available alternatives:</strong> {update.alternativeOptions.join(", ")}
                </div>
              )}
            </AlertDescription>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setDismissed([...dismissed, update.id])}
            className="text-red-600 hover:text-red-800"
          >
            <X className="h-4 w-4" />
          </Button>
        </Alert>
      ))}
    </div>
  )
}
