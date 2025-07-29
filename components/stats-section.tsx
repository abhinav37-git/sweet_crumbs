"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Award, Clock, Heart } from "lucide-react"

const stats = [
  { icon: "users", label: "Happy Customers", value: "10,000+", color: "text-blue-600" },
  { icon: "award", label: "Awards Won", value: "25+", color: "text-yellow-600" },
  { icon: "clock", label: "Years Experience", value: "15+", color: "text-green-600" },
  { icon: "heart", label: "Custom Cakes", value: "5,000+", color: "text-pink-600" },
]

const iconMap = {
  users: Users,
  award: Award,
  clock: Clock,
  heart: Heart,
}

export function StatsSection() {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-amber-50 via-pink-50 to-amber-50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-amber-800 mb-4">Our Sweet Success</h2>
          <p className="text-amber-600 max-w-2xl mx-auto">
            Numbers that tell our story of spreading sweetness across the community
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const IconComponent = iconMap[stat.icon as keyof typeof iconMap]
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="text-center hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <motion.div whileHover={{ scale: 1.1, rotate: 5 }} transition={{ duration: 0.3 }}>
                      <IconComponent className={`h-12 w-12 mx-auto mb-4 ${stat.color}`} />
                    </motion.div>
                    <motion.h3 className="text-3xl font-bold text-gray-800 mb-2" whileHover={{ scale: 1.05 }}>
                      {stat.value}
                    </motion.h3>
                    <p className="text-gray-600">{stat.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
