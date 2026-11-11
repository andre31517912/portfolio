'use client'

import { motion } from 'framer-motion'
import { brand, contact } from '@/content'
import { GlitchText } from '@/components/dress/glitch-text'

const ease = [0.16, 1, 0.3, 1] as const

export default function ContactPage() {
  return (
    <main className="flex min-h-[calc(100vh-3.5rem)] items-center px-6 py-16 md:px-10 md:py-24">
      <div className="mx-auto w-full max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
        >
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Get in touch
          </span>
          <GlitchText
            as="h1"
            className="mt-4 font-display text-5xl font-bold uppercase tracking-[0.1em] text-foreground md:text-6xl"
            autoGlitchInterval={6000}
          >
            Contact
          </GlitchText>
        </motion.div>

        <div className="mt-16 grid gap-16 md:grid-cols-2">
          {/* Art inquiries */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.15 }}
          >
            <div className="flex items-center gap-3">
              <div className="h-px flex-1 bg-accent/40" />
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                Creative
              </span>
            </div>
            <h2 className="mt-6 text-2xl font-semibold tracking-tight text-foreground">
              Art & Music
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Photography collaborations, music inquiries, brand partnerships, and creative work.
            </p>
            <a
              href={`mailto:${brand.artEmail}`}
              className="group relative mt-6 inline-block text-lg text-foreground"
            >
              {brand.artEmail}
              <span className="absolute bottom-0 left-0 h-px w-0 bg-accent transition-all duration-200 group-hover:w-full" />
            </a>
            <div className="mt-6 flex flex-wrap gap-4">
              <SocialPill href={brand.instagram} label={brand.instagramHandle} />
              <SocialPill href={brand.soundcloud} label="SoundCloud" />
            </div>
          </motion.div>

          {/* Tech inquiries */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.3 }}
          >
            <div className="flex items-center gap-3">
              <div className="h-px flex-1 bg-muted-foreground/30" />
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Technical
              </span>
            </div>
            <h2 className="mt-6 text-2xl font-semibold tracking-tight text-foreground">
              Software & Engineering
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Full-time roles, freelance projects, consulting, and technical collaborations.
            </p>
            <a
              href={`mailto:${brand.techEmail}`}
              className="group relative mt-6 inline-block text-lg text-foreground"
            >
              {brand.techEmail}
              <span className="absolute bottom-0 left-0 h-px w-0 bg-accent transition-all duration-200 group-hover:w-full" />
            </a>
            <div className="mt-6 flex flex-wrap gap-4">
              <SocialPill href={brand.github} label="GitHub" />
              <SocialPill href={brand.linkedin} label="LinkedIn" />
            </div>
          </motion.div>
        </div>

        {/* Phone */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease, delay: 0.5 }}
          className="mt-16 border-t border-border pt-8"
        >
          <div className="flex flex-wrap items-center gap-8">
            <a
              href={`tel:${contact.phone.replace(/[^0-9]/g, '')}`}
              className="group relative inline-block text-muted-foreground transition-colors hover:text-foreground"
            >
              {contact.phone}
              <span className="absolute bottom-0 left-0 h-px w-0 bg-accent transition-all duration-200 group-hover:w-full" />
            </a>
            <span className="font-mono text-xs text-muted-foreground/40">
              I usually reply the same day.
            </span>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-24 pb-8"
        >
          <p className="font-mono text-xs text-muted-foreground/40">
            © {new Date().getFullYear()} DRESS
          </p>
        </motion.footer>
      </div>
    </main>
  )
}

function SocialPill({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="rounded-full border border-border px-4 py-1.5 font-mono text-xs text-muted-foreground transition-colors duration-200 hover:border-accent/40 hover:text-foreground"
    >
      {label}
    </a>
  )
}
