'use client'

import { motion } from 'framer-motion'
import { projectsTier1, projectsTier2 } from '@/content'
import { ProjectCard, ProjectCardCompact } from './project-card'
import { SectionLabel } from './section-label'

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
}

export function Projects() {
  return (
    <section
      id="projects"
      aria-label="Projects"
      className="border-t border-border px-6 py-24 md:px-10 md:py-32 lg:px-16"
    >
      <div className="mx-auto w-full max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionLabel>Selected work</SectionLabel>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
            Projects
          </h2>
        </motion.div>

        {/* Tier 1 — Full-Stack Web */}
        <motion.h3
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 text-xl font-semibold tracking-tight text-foreground md:text-2xl"
        >
          Full-Stack Web
        </motion.h3>

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

        {/* Divider + Tier 2 — Other Work */}
        <motion.h3
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 border-t border-border pt-14 text-xl font-semibold tracking-tight text-foreground md:text-2xl"
        >
          Other Work
        </motion.h3>

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
  )
}
