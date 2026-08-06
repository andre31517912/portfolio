import { about } from '@/content'
import { Reveal, RevealItem } from './reveal'
import { SectionLabel } from './section-label'

export function About() {
  return (
    <section
      id="about"
      aria-label="About"
      className="border-t border-border px-6 py-24 md:px-10 md:py-32 lg:px-16"
    >
      <Reveal className="mx-auto grid w-full max-w-5xl gap-10 md:grid-cols-[1.6fr_1fr] md:gap-16">
        <div>
          <RevealItem>
            <SectionLabel>About</SectionLabel>
          </RevealItem>
          <RevealItem
            as="p"
            className="mt-6 max-w-xl text-pretty text-xl leading-relaxed text-foreground md:text-2xl"
          >
            {about.paragraph}
          </RevealItem>
        </div>

        <div>
          <RevealItem>
            <SectionLabel>Stack</SectionLabel>
          </RevealItem>
          <RevealItem as="ul" className="mt-6 flex flex-col gap-2">
            {about.stack.map((tech) => (
              <li
                key={tech}
                className="text-base leading-relaxed text-muted-foreground"
              >
                {tech}
              </li>
            ))}
          </RevealItem>
        </div>
      </Reveal>
    </section>
  )
}
