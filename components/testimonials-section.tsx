"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Ayushi Vashishth",
    role: "Birthday Party Host",
    content:
      "The custom birthday cake was absolutely perfect! My daughter's face lit up when she saw it. Sweet Crumbs made her day extra special.",
    rating: 5,
    avatar: "/placeholder.svg?height=40&width=40&text=AV",
  },
  {
    name: "Sakshi Punia",
    role: "Wedding Couple",
    content:
      "Our wedding cake was a masterpiece! Not only did it look stunning, but it tasted incredible. All our guests were asking for the bakery's name.",
    rating: 5,
    avatar: "/placeholder.svg?height=40&width=40&text=SP",
  },
  {
    name: "Shipra Verma",
    role: "Regular Customer",
    content:
      "I visit Sweet Crumbs every week for their fresh pastries. The quality is consistently amazing, and the staff is so friendly!",
    rating: 5,
    avatar: "/placeholder.svg?height=40&width=40&text=SV",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-amber-800 mb-4">What Our Customers Say</h2>
          <p className="text-amber-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our happy customers
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-pink-50 to-amber-50">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: index * 0.2 + i * 0.1 }}
                      >
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      </motion.div>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={testimonial.avatar || "/placeholder.svg"} />
                      <AvatarFallback>
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-gray-800">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
