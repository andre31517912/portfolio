import { About } from '@/components/portfolio/about'
import { Contact } from '@/components/portfolio/contact'
import { Experience } from '@/components/portfolio/experience'
import { Hero } from '@/components/portfolio/hero'
import { Projects } from '@/components/portfolio/projects'
import { site } from '@/content'

export default function Page() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <footer className="border-t border-border px-6 py-10 md:px-10 lg:px-16">
        <p className="mx-auto max-w-5xl font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} {site.name}
        </p>
      </footer>
    </main>
  )
}
