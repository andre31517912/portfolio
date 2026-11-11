'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: 'DRESS' },
  { href: '/photos', label: 'Photos' },
  { href: '/tech', label: 'Tech' },
  { href: '/contact', label: 'Contact' },
]

export function Nav() {
  const pathname = usePathname()

  return (
    <nav className="nav-blur fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/60">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          className="font-display text-lg font-bold uppercase tracking-[0.3em] text-foreground"
        >
          DRESS
        </Link>

        <ul className="flex items-center gap-8">
          {links.slice(1).map((link) => {
            const active = pathname === link.href
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative py-1 font-mono text-xs uppercase tracking-[0.15em] transition-colors duration-200 ${
                    active
                      ? 'text-accent'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute -bottom-0.5 left-0 h-px w-full bg-accent" />
                  )}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
