import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { allProjects, contact, getProjectBySlug, site } from '@/content'
import { Reveal, RevealItem } from '@/components/portfolio/reveal'
import { SectionLabel } from '@/components/portfolio/section-label'
import { ProjectGallery } from '@/components/portfolio/project-gallery'
import { GatedCredentials } from '@/components/portfolio/gated-credentials'

export function generateStaticParams() {
  return allProjects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) return { title: 'Project not found' }
  const title = `${project.name} — ${site.name}`
  const description = project.tagline ?? project.description
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: project.heroImage }],
    },
  }
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) notFound()

  const gallery = [
    { src: project.heroImage, alt: `${project.name} interface`, caption: undefined },
    ...(project.gallery ?? []),
  ]

  const meta = [
    project.role ? { label: 'Role', value: project.role } : null,
    project.timeline ? { label: 'Timeline', value: project.timeline } : null,
  ].filter(Boolean) as { label: string; value: string }[]

  return (
    <main className="mx-auto w-full max-w-4xl px-6 py-16 md:px-10 md:py-24 lg:px-0">
      {/* Back link */}
      <Link
        href="/#projects"
        className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <span aria-hidden="true" className="transition-transform group-hover:-translate-x-0.5">
          ←
        </span>
        Back to projects
      </Link>

      {/* Header */}
      <Reveal className="mt-8" as="section">
        <RevealItem>
          <SectionLabel>Case study</SectionLabel>
        </RevealItem>
        <RevealItem as="h1" className="mt-4 text-balance text-4xl font-semibold tracking-tight md:text-5xl">
          {project.name}
        </RevealItem>
        {project.tagline ? (
          <RevealItem as="p" className="mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            {project.tagline}
          </RevealItem>
        ) : null}

        {/* Meta + links */}
        <RevealItem className="mt-8 flex flex-col gap-6 border-y border-border py-6 sm:flex-row sm:flex-wrap sm:items-start sm:gap-x-12">
          {meta.map((m) => (
            <div key={m.label}>
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {m.label}
              </div>
              <div className="mt-1 text-sm text-foreground">{m.value}</div>
            </div>
          ))}
          <div className="sm:ml-auto">
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Links
            </div>
            <div className="mt-1 flex flex-wrap gap-x-5 gap-y-1 text-sm">
              {project.liveUrl && project.liveUrl !== '#' ? (
                <ExternalLink href={project.liveUrl}>Visit live site →</ExternalLink>
              ) : null}
              {project.codeUrl && project.codeUrl !== '#' ? (
                <ExternalLink href={project.codeUrl}>Source code →</ExternalLink>
              ) : null}
              {(!project.liveUrl || project.liveUrl === '#') &&
              (!project.codeUrl || project.codeUrl === '#') ? (
                <span className="text-muted-foreground">Private project</span>
              ) : null}
            </div>
          </div>
        </RevealItem>
      </Reveal>

      {/* Gallery — horizontal scroll / swipe carousel */}
      <Reveal className="mt-12" as="section">
        <RevealItem>
          <ProjectGallery images={gallery} />
        </RevealItem>
      </Reveal>

      {/* Gated demo credentials (blurred until the viewer requests access) */}
      {project.credentials ? (
        <Reveal className="mt-10" as="section">
          <RevealItem>
            <GatedCredentials
              credentials={project.credentials}
              projectName={project.name}
              contactEmail={contact.email}
            />
          </RevealItem>
        </Reveal>
      ) : null}

      {/* Overview */}
      {project.overview?.length ? (
        <Reveal className="mt-16" as="section">
          <RevealItem as="h2" className="text-2xl font-semibold tracking-tight">
            Overview
          </RevealItem>
          <div className="mt-4 flex flex-col gap-4">
            {project.overview.map((para, i) => (
              <RevealItem
                key={i}
                as="p"
                className="max-w-2xl text-pretty leading-relaxed text-muted-foreground"
              >
                {para}
              </RevealItem>
            ))}
          </div>
        </Reveal>
      ) : null}

      {/* Highlights / outline */}
      {project.highlights?.length ? (
        <Reveal className="mt-16" as="section">
          <RevealItem as="h2" className="text-2xl font-semibold tracking-tight">
            Highlights
          </RevealItem>
          <ul className="mt-6 flex flex-col gap-3">
            {project.highlights.map((h) => (
              <RevealItem key={h} as="li" className="flex gap-3 text-pretty leading-relaxed">
                <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span className="text-muted-foreground">{h}</span>
              </RevealItem>
            ))}
          </ul>
        </Reveal>
      ) : null}

      {/* Technical breakdown */}
      {project.technical?.length ? (
        <Reveal className="mt-16" as="section">
          <RevealItem as="h2" className="text-2xl font-semibold tracking-tight">
            Technical breakdown
          </RevealItem>
          <dl className="mt-6 grid gap-x-10 gap-y-6 sm:grid-cols-2">
            {project.technical.map((t) => (
              <RevealItem key={t.label}>
                <dt className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                  {t.label}
                </dt>
                <dd className="mt-2 text-pretty leading-relaxed text-muted-foreground">
                  {t.detail}
                </dd>
              </RevealItem>
            ))}
          </dl>
        </Reveal>
      ) : null}

      {/* Stack */}
      <Reveal className="mt-16" as="section">
        <RevealItem as="h2" className="text-2xl font-semibold tracking-tight">
          Built with
        </RevealItem>
        <RevealItem as="ul" className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted-foreground"
            >
              {tag}
            </li>
          ))}
        </RevealItem>
      </Reveal>

      {/* Footer nav */}
      <div className="mt-20 border-t border-border pt-8">
        <Link
          href="/#projects"
          className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <span aria-hidden="true" className="transition-transform group-hover:-translate-x-0.5">
            ←
          </span>
          Back to all projects
        </Link>
      </div>
    </main>
  )
}

function ExternalLink({ href, children }: { href: string; children: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group/link relative inline-block py-1 text-foreground"
    >
      {children}
      <span className="absolute bottom-0 left-0 h-px w-0 bg-accent transition-all duration-200 group-hover/link:w-full" />
    </a>
  )
}
