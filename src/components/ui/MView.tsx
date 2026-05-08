'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import type { Variants } from 'framer-motion'
import { fadeUp, viewport } from '@/lib/motion'

interface MViewProps {
  children: ReactNode
  variants?: Variants
  className?: string
}

export default function MView({ children, variants = fadeUp, className = '' }: MViewProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  )
}
