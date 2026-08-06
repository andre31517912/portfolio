"use client"

import Image from "next/image"
import { useCallback, useEffect, useRef, useState } from "react"
import type { GalleryImage } from "@/content"

export function ProjectGallery({ images }: { images: GalleryImage[] }) {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(false)

  const updateControls = useCallback(() => {
    const el = scrollerRef.current
    if (!el) return
    const { scrollLeft, scrollWidth, clientWidth } = el
    setCanPrev(scrollLeft > 8)
    setCanNext(scrollLeft < scrollWidth - clientWidth - 8)
    // Which slide is most centered.
    const slideWidth = el.firstElementChild
      ? (el.firstElementChild as HTMLElement).offsetWidth + 16
      : clientWidth
    setActive(Math.round(scrollLeft / slideWidth))
  }, [])

  useEffect(() => {
    const el = scrollerRef.current
    if (!el) return
    updateControls()
    el.addEventListener("scroll", updateControls, { passive: true })
    window.addEventListener("resize", updateControls)
    return () => {
      el.removeEventListener("scroll", updateControls)
      window.removeEventListener("resize", updateControls)
    }
  }, [updateControls])

  const scrollToIndex = useCallback((i: number) => {
    const el = scrollerRef.current
    if (!el) return
    const child = el.children[i] as HTMLElement | undefined
    if (child) el.scrollTo({ left: child.offsetLeft, behavior: "smooth" })
  }, [])

  const nudge = useCallback(
    (dir: 1 | -1) => {
      const el = scrollerRef.current
      if (!el) return
      const slideWidth = el.firstElementChild
        ? (el.firstElementChild as HTMLElement).offsetWidth + 16
        : el.clientWidth
      el.scrollBy({ left: dir * slideWidth, behavior: "smooth" })
    },
    [],
  )

  const single = images.length <= 1

  return (
    <div className="relative">
      {/* Scroller */}
      <div
        ref={scrollerRef}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        role="group"
        aria-roledescription="carousel"
        aria-label="Project screenshots"
      >
        {images.map((img, i) => (
          <figure
            key={img.src}
            className="w-full shrink-0 snap-center"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${images.length}`}
          >
            <div className="overflow-hidden rounded-lg border border-border bg-card/40">
              <Image
                src={img.src || "/placeholder.svg"}
                alt={img.alt}
                width={1600}
                height={1000}
                priority={i === 0}
                className="h-auto w-full object-cover"
              />
              {img.caption ? (
                <figcaption className="border-t border-border px-4 py-3 text-sm text-muted-foreground">
                  {img.caption}
                </figcaption>
              ) : null}
            </div>
          </figure>
        ))}
      </div>

      {/* Prev / Next arrows */}
      {!single ? (
        <>
          <button
            type="button"
            onClick={() => nudge(-1)}
            disabled={!canPrev}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/80 text-foreground backdrop-blur transition-opacity hover:bg-background disabled:pointer-events-none disabled:opacity-0 md:flex"
          >
            <span aria-hidden="true">←</span>
          </button>
          <button
            type="button"
            onClick={() => nudge(1)}
            disabled={!canNext}
            aria-label="Next image"
            className="absolute right-3 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/80 text-foreground backdrop-blur transition-opacity hover:bg-background disabled:pointer-events-none disabled:opacity-0 md:flex"
          >
            <span aria-hidden="true">→</span>
          </button>
        </>
      ) : null}

      {/* Dots + counter */}
      {!single ? (
        <div className="mt-4 flex items-center justify-between">
          <div className="flex gap-2" role="tablist" aria-label="Choose image">
            {images.map((img, i) => (
              <button
                key={img.src}
                type="button"
                role="tab"
                aria-selected={i === active}
                aria-label={`Go to image ${i + 1}`}
                onClick={() => scrollToIndex(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === active ? "w-6 bg-accent" : "w-1.5 bg-border hover:bg-muted-foreground"
                }`}
              />
            ))}
          </div>
          <span className="font-mono text-xs tabular-nums text-muted-foreground">
            {active + 1} / {images.length}
          </span>
        </div>
      ) : null}
    </div>
  )
}
