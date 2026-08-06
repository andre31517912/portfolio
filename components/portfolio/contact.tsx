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

        <RevealItem className="mt-6 max-w-xl text-pretty leading-relaxed text-muted-foreground">
          {contact.blurb}
        </RevealItem>

        <RevealItem className="mt-8 flex flex-col gap-3">
          <a
            href={`mailto:${contact.email}`}
            className="group relative inline-block w-fit text-xl text-foreground md:text-2xl"
          >
            {contact.email}
            <span className="absolute bottom-0 left-0 h-px w-0 bg-accent transition-all duration-200 group-hover:w-full" />
          </a>
          <a
            href={`tel:${contact.phone.replace(/[^0-9]/g, '')}`}
            className="group relative inline-block w-fit text-xl text-foreground md:text-2xl"
          >
            {contact.phone}
            <span className="absolute bottom-0 left-0 h-px w-0 bg-accent transition-all duration-200 group-hover:w-full" />
          </a>
        </RevealItem>

        <RevealItem className="mt-10 flex flex-wrap gap-3">
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity duration-200 hover:opacity-90"
          >
            Connect on LinkedIn
          </a>
          <a
            href={contact.resume}
            className="rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors duration-200 hover:bg-muted"
            {...(contact.resume === '#'
              ? {}
              : { target: '_blank', rel: 'noreferrer' })}
          >
            View résumé
          </a>
        </RevealItem>

        <RevealItem className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm">
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
