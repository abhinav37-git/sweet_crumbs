"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface AnimatedCardProps {
  children: ReactNode
  delay?: number
  className?: string
}

export function AnimatedCard({ children, delay = 0, className = "" }: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{
        y: -10,
        transition: { duration: 0.3 },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
