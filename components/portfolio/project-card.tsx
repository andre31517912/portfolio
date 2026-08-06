'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import type { Project } from '@/content'

const cardVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
}

/** External Live/Code links. Rendered outside the card's main Link so we
 *  never nest one anchor inside another. */
function ExternalLinks({ project }: { project: Project }) {
  const hasAny = project.liveUrl || project.codeUrl
  if (!hasAny) return null
  return (
    <div className="flex flex-wrap gap-x-5 gap-y-2 border-t border-border px-6 py-4 text-sm md:px-8">
      {project.liveUrl ? <ExternalLink href={project.liveUrl}>Live demo →</ExternalLink> : null}
      {project.codeUrl ? <ExternalLink href={project.codeUrl}>Code →</ExternalLink> : null}
    </div>
  )
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      variants={cardVariants}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card/40 shadow-none transition-shadow duration-200 hover:shadow-2xl hover:shadow-black/50"
    >
      <Link
        href={`/projects/${project.slug}`}
        className="flex flex-1 flex-col rounded-t-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        aria-label={`View ${project.name} case study`}
      >
        <div className="relative h-44 w-full overflow-hidden border-b border-border md:h-52">
          <Image
            src={project.heroImage || '/placeholder.svg'}
            alt={`${project.name} interface`}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />
        </div>

        <div className="flex flex-1 flex-col p-6 md:p-8">
          <h3 className="text-2xl font-semibold tracking-tight text-foreground transition-colors duration-200 group-hover:text-accent md:text-3xl">
            {project.name}
          </h3>

          <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
            {project.description}
          </p>

          <ul className="mt-5 flex flex-wrap gap-2">
            {project.stack.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted-foreground"
              >
                {tag}
              </li>
            ))}
          </ul>

          <span className="mt-auto pt-8 text-sm font-medium text-accent">
            View case study →
          </span>
        </div>
      </Link>

      <ExternalLinks project={project} />
    </motion.article>
  )
}

export function ProjectCardCompact({ project }: { project: Project }) {
  return (
    <motion.article
      variants={cardVariants}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card/40 shadow-none transition-shadow duration-200 hover:shadow-xl hover:shadow-black/40"
    >
      <Link
        href={`/projects/${project.slug}`}
        className="flex flex-1 flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        aria-label={`View ${project.name} case study`}
      >
        <div className="relative h-32 w-full overflow-hidden border-b border-border">
          <Image
            src={project.heroImage || '/placeholder.svg'}
            alt={`${project.name} interface`}
            fill
            sizes="(min-width: 768px) 33vw, 100vw"
            className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />
        </div>

        <div className="flex flex-1 flex-col p-5">
          <h3 className="text-lg font-semibold tracking-tight text-foreground transition-colors duration-200 group-hover:text-accent">
            {project.name}
          </h3>

          <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>

          <ul className="mt-4 flex flex-wrap gap-1.5">
            {project.stack.slice(0, 3).map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-border px-2.5 py-0.5 font-mono text-[11px] text-muted-foreground"
              >
                {tag}
              </li>
            ))}
          </ul>

          <span className="mt-auto pt-6 text-sm font-medium text-accent">
            View case study →
          </span>
        </div>
      </Link>

      <ExternalLinks project={project} />
    </motion.article>
  )
}

function ExternalLink({ href, children }: { href: string; children: string }) {
  const isPlaceholder = href === '#'
  return (
    <a
      href={href}
      className="group/link relative inline-block py-1 text-foreground"
      {...(isPlaceholder ? {} : { target: '_blank', rel: 'noreferrer' })}
    >
      {children}
      <span className="absolute bottom-0 left-0 h-px w-0 bg-accent transition-all duration-200 group-hover/link:w-full" />
    </a>
  )
}
