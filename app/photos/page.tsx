import type { Metadata } from 'next'
import { photoShoots } from '@/content'
import { PhotoGallery } from '@/components/dress/photo-gallery'
import { GlitchText } from '@/components/dress/glitch-text'

export const metadata: Metadata = {
  title: 'Photos — DRESS',
  description: 'Professional photography by DRESS.',
}

export default function PhotosPage() {
  return (
    <main className="min-h-[calc(100vh-3.5rem)] px-6 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-6xl">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Photography
        </span>
        <GlitchText
          as="h1"
          className="mt-4 font-display text-4xl font-bold uppercase tracking-[0.15em] text-foreground md:text-5xl"
          autoGlitchInterval={6000}
        >
          Photos
        </GlitchText>
        <p className="mt-4 max-w-xl font-mono text-sm leading-relaxed text-muted-foreground">
          Professional shoots and visual work. More coming soon.
        </p>

        <div className="mt-16">
          <PhotoGallery shoots={photoShoots} />
        </div>

      </div>
    </main>
  )
}
