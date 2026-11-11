'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { GlitchText } from '@/components/dress/glitch-text'

const ease = [0.16, 1, 0.3, 1] as const

export default function Page() {
  return (
    <main className="relative flex min-h-[calc(100vh-3.5rem)] flex-col items-center justify-center overflow-hidden">
      {/* Video placeholder — dark gradient with grain */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[#0d0c0a] to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,169,110,0.06)_0%,transparent_70%)]" />

      <div className="relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
        >
          <GlitchText
            as="h1"
            className="font-display text-7xl font-bold uppercase tracking-[0.4em] text-foreground sm:text-8xl md:text-9xl"
            autoGlitchInterval={5000}
          >
            DRESS
          </GlitchText>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease, delay: 0.3 }}
        >
          <GlitchText
            as="p"
            className="mt-4 font-mono text-sm lowercase tracking-[0.2em] text-muted-foreground"
            autoGlitchInterval={7000}
            scrambleOnHover
          >
            no flex zone.
          </GlitchText>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.6 }}
          className="mt-16 flex items-center gap-12"
        >
          <NavLink href="/photos">Photos</NavLink>
          <span className="h-4 w-px bg-border" />
          <NavLink href="/tech">Tech</NavLink>
          <span className="h-4 w-px bg-border" />
          <NavLink href="/contact">Contact</NavLink>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease, delay: 0.9 }}
          className="mt-12 flex items-center gap-6"
        >
          <SocialLink href="https://www.instagram.com/perc3k/" label="Instagram" />
          <SocialLink href="https://soundcloud.com/dresswhatever" label="SoundCloud" />
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/50">
            scroll
          </span>
          <div className="h-8 w-px bg-gradient-to-b from-muted-foreground/30 to-transparent" />
        </div>
      </motion.div>
    </main>
  )
}

function NavLink({ href, children }: { href: string; children: string }) {
  return (
    <Link
      href={href}
      className="group relative font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors duration-200 hover:text-foreground"
    >
      {children}
      <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
    </Link>
  )
}

function SocialLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground/50 transition-colors duration-200 hover:text-accent"
    >
      {label}
    </a>
  )
}
