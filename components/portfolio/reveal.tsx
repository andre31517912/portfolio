'use client'

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

/**
 * Fades in and translates up 12px as it enters the viewport (once).
 * Wrap a group with `Reveal` and its direct children with `RevealItem`
 * to get a 60ms stagger between children.
 */

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06 },
  },
}

const item = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
}

export function Reveal({
  children,
  className,
  as = 'div',
}: {
  children: ReactNode
  className?: string
  as?: 'div' | 'section' | 'ul'
}) {
  const MotionTag = motion[as]
  return (
    <MotionTag
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
    >
      {children}
    </MotionTag>
  )
}

export function RevealItem({
  children,
  className,
  as = 'div',
}: {
  children: ReactNode
  className?: string
  as?: 'div' | 'li' | 'h1' | 'h2' | 'h3' | 'p' | 'span'
}) {
  const MotionTag = motion[as]
  return (
    <MotionTag className={className} variants={item}>
      {children}
    </MotionTag>
  )
}
