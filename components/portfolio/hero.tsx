'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { hero } from '@/content'

const ease = [0.16, 1, 0.3, 1] as const

export function Hero() {
  return (
    <section
      className="relative flex min-h-[88vh] flex-col justify-center overflow-hidden px-6 md:px-10 lg:px-16"
      aria-label="Introduction"
    >
      <CursorGlow />

      <div className="relative z-10 mx-auto w-full max-w-5xl">
        <motion.h1
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="text-balance text-5xl font-semibold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
        >
          {hero.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.12 }}
          className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl"
        >
          {hero.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.24 }}
          className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm"
        >
          <HeroLink href="#projects">View projects ↓</HeroLink>
          <HeroLink href="#contact">Get in touch</HeroLink>
        </motion.div>
      </div>
    </section>
  )
}

function HeroLink({ href, children }: { href: string; children: string }) {
  return (
    <a
      href={href}
      className="group relative inline-block py-1 text-muted-foreground transition-colors duration-200 hover:text-foreground"
    >
      {children}
      <span className="absolute bottom-0 left-0 h-px w-0 bg-accent transition-all duration-200 group-hover:w-full" />
    </a>
  )
}

/**
 * Soft ~15% opacity red radial glow that lerp-follows the cursor.
 * Disabled on touch / reduced-motion.
 */
function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)')
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (!canHover.matches || reduced.matches) return
    setEnabled(true)

    const target = { x: window.innerWidth / 2, y: window.innerHeight * 0.4 }
    const pos = { ...target }
    let raf = 0

    const onMove = (e: MouseEvent) => {
      target.x = e.clientX
      target.y = e.clientY
    }

    const tick = () => {
      pos.x += (target.x - pos.x) * 0.08
      pos.y += (target.y - pos.y) * 0.08
      if (ref.current) {
        ref.current.style.transform = `translate3d(${pos.x - 300}px, ${pos.y - 300}px, 0)`
      }
      raf = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMove)
    raf = requestAnimationFrame(tick)
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  if (!enabled) return null

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute left-0 top-0 h-[600px] w-[600px] rounded-full opacity-[0.15] blur-[120px] will-change-transform"
      style={{
        background:
          'radial-gradient(circle, var(--accent) 0%, transparent 70%)',
      }}
    />
  )
}
