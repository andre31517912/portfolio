'use client'

import { motion } from 'framer-motion'
import { projectsTier1, projectsTier2, experience } from '@/content'
import { ProjectCard, ProjectCardCompact } from '@/components/portfolio/project-card'
import { SectionLabel } from '@/components/portfolio/section-label'
import { GlitchText } from '@/components/dress/glitch-text'

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
}

export default function TechPage() {
  return (
    <main className="min-h-[calc(100vh-3.5rem)]">
      {/* Projects */}
      <section className="px-6 py-16 md:px-10 md:py-24 lg:px-16">
        <div className="mx-auto w-full max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Technical work
            </span>
            <GlitchText
              as="h1"
              className="mt-4 font-display text-4xl font-bold uppercase tracking-[0.15em] text-foreground md:text-5xl"
              autoGlitchInterval={6000}
            >
              Projects
            </GlitchText>
          </motion.div>

          {/* Tier 1 */}
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mt-14 text-xl font-semibold tracking-tight text-foreground md:text-2xl"
          >
            Full-Stack Web
          </motion.h2>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="mt-8 grid gap-6 md:grid-cols-2"
          >
            {projectsTier1.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </motion.div>

          {/* Tier 2 */}
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mt-20 border-t border-border pt-14 text-xl font-semibold tracking-tight text-foreground md:text-2xl"
          >
            Other Work
          </motion.h2>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="mt-8 grid gap-5 md:grid-cols-3"
          >
            {projectsTier2.map((project) => (
              <ProjectCardCompact key={project.name} project={project} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Experience */}
      <section className="border-t border-border px-6 py-24 md:px-10 md:py-32 lg:px-16">
        <div className="mx-auto w-full max-w-5xl">
          <SectionLabel>Experience</SectionLabel>

          <ul className="mt-10 flex flex-col">
            {experience.map((job) => (
              <li
                key={`${job.company}-${job.role}`}
                className="grid gap-2 border-t border-border py-6 md:grid-cols-[1fr_2fr] md:gap-8 md:py-8"
              >
                <div className="flex items-baseline justify-between gap-4 md:flex-col md:justify-start md:gap-1">
                  <h3 className="text-lg font-medium text-foreground">
                    {job.company}
                  </h3>
                  <span className="shrink-0 font-mono text-xs text-muted-foreground">
                    {job.date}
                  </span>
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <p className="text-foreground">{job.role}</p>
                    <span className="rounded-full border border-border px-2.5 py-0.5 font-mono text-[11px] uppercase tracking-wide text-muted-foreground">
                      {job.type}
                    </span>
                  </div>
                  <p className="mt-1 text-pretty leading-relaxed text-muted-foreground">
                    {job.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  )
}
