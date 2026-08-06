import { experience } from '@/content'
import { Reveal, RevealItem } from './reveal'
import { SectionLabel } from './section-label'

export function Experience() {
  return (
    <section
      id="experience"
      aria-label="Experience"
      className="border-t border-border px-6 py-24 md:px-10 md:py-32 lg:px-16"
    >
      <Reveal className="mx-auto w-full max-w-5xl">
        <RevealItem>
          <SectionLabel>Experience</SectionLabel>
        </RevealItem>

        <ul className="mt-10 flex flex-col">
          {experience.map((job) => (
            <RevealItem
              as="li"
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
                <p className="text-foreground">{job.role}</p>
                <p className="mt-1 text-pretty leading-relaxed text-muted-foreground">
                  {job.description}
                </p>
              </div>
            </RevealItem>
          ))}
        </ul>
      </Reveal>
    </section>
  )
}
