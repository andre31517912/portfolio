import { contact } from '@/content'
import { Reveal, RevealItem } from './reveal'

export function Contact() {
  return (
    <section
      id="contact"
      aria-label="Contact"
      className="border-t border-border px-6 py-24 md:px-10 md:py-40 lg:px-16"
    >
      <Reveal className="mx-auto w-full max-w-5xl">
        <RevealItem as="h2" className="text-4xl font-semibold tracking-tight md:text-6xl">
          {contact.heading}
        </RevealItem>

        <RevealItem className="mt-8">
          <a
            href={`mailto:${contact.email}`}
            className="group relative inline-block text-xl text-foreground md:text-2xl"
          >
            {contact.email}
            <span className="absolute bottom-0 left-0 h-px w-0 bg-accent transition-all duration-200 group-hover:w-full" />
          </a>
        </RevealItem>

        <RevealItem className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm">
          {contact.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="group relative inline-block py-1 text-muted-foreground transition-colors duration-200 hover:text-foreground"
              {...(link.href === '#'
                ? {}
                : { target: '_blank', rel: 'noreferrer' })}
            >
              {link.label}
              <span className="absolute bottom-0 left-0 h-px w-0 bg-accent transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </RevealItem>
      </Reveal>
    </section>
  )
}
