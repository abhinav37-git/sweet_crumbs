"use client"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Cake, Cookie, Heart, Star } from "lucide-react"

interface ClickableSpecialtyCardProps {
  name: string
  iconName: "cake" | "star" | "cookie" | "heart"
  description: string
  gradient: string
  href: string
}

const iconMap = {
  cake: Cake,
  star: Star,
  cookie: Cookie,
  heart: Heart,
}

export function ClickableSpecialtyCard({ name, iconName, description, gradient, href }: ClickableSpecialtyCardProps) {
  const Icon = iconMap[iconName]

  return (
    <Link href={href} className="group block">
      <motion.div whileHover={{ y: -5, scale: 1.02 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.2 }}>
        <Card className="text-center hover:shadow-2xl transition-all duration-500 cursor-pointer border-0 bg-white/80 backdrop-blur-sm overflow-hidden h-full group-hover:bg-white">
          <CardContent className="p-4 sm:p-6 lg:p-8 relative">
            <div
              className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
            />
            <div className="relative z-10">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
                className={`inline-flex p-3 sm:p-4 rounded-full bg-gradient-to-br ${gradient} mb-4 sm:mb-6 shadow-lg`}
              >
                <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </motion.div>
              <h3 className="font-bold text-base sm:text-lg lg:text-xl text-amber-800 mb-2 sm:mb-3 group-hover:text-pink-600 transition-colors">
                {name}
              </h3>
              <p className="text-xs sm:text-sm text-amber-600 group-hover:text-gray-700 transition-colors">
                {description}
              </p>
            </div>

            {/* Hover indicator */}
            <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse"></div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </Link>
  )
}
