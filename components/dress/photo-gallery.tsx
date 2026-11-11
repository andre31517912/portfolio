'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import type { PhotoShoot } from '@/content'

export function PhotoGallery({ shoots }: { shoots: PhotoShoot[] }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const allImages = shoots.flatMap((s) =>
    s.images.map((img) => ({ src: img, title: s.title, caption: s.caption }))
  )

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {allImages.map((img, i) => (
          <motion.div
            key={`${img.src}-${i}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="film-grain group relative cursor-pointer overflow-hidden bg-card"
            onClick={() => setSelectedImage(img.src)}
          >
            <div className="relative aspect-[3/4] w-full overflow-hidden">
              <Image
                src={img.src}
                alt={img.title}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
            {img.caption && (
              <div className="absolute bottom-0 left-0 right-0 translate-y-full p-4 transition-transform duration-300 group-hover:translate-y-0">
                <p className="font-mono text-xs text-foreground/80">{img.caption}</p>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute right-6 top-6 text-muted-foreground transition-colors hover:text-foreground"
            onClick={() => setSelectedImage(null)}
            aria-label="Close"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M4 4l16 16M20 4L4 20" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>
          <div className="relative max-h-[85vh] max-w-[85vw]">
            <Image
              src={selectedImage}
              alt="Full view"
              width={1200}
              height={1600}
              className="max-h-[85vh] w-auto object-contain"
            />
          </div>
        </motion.div>
      )}
    </>
  )
}
