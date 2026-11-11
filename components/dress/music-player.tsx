'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { setMuted } from '@/lib/click-sound'

const SOUNDCLOUD_URL = 'https://soundcloud.com/dresswhatever'
const WIDGET_SRC = `https://w.soundcloud.com/player/?url=${encodeURIComponent(SOUNDCLOUD_URL)}&auto_play=false&show_artwork=false&show_playcount=false&show_user=false&color=%23c9a96e&buying=false&sharing=false&download=false`

export function MusicPlayer() {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [catalogOpen, setCatalogOpen] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)

  const togglePlay = useCallback(() => {
    if (!iframeRef.current) return
    const widget = (window as any).SC?.Widget?.(iframeRef.current)
    if (!widget) return

    if (isPlaying) {
      widget.pause()
      setIsPlaying(false)
      setMuted(true)
    } else {
      widget.play()
      setIsPlaying(true)
      setHasInteracted(true)
      setMuted(false)
    }
  }, [isPlaying])

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://w.soundcloud.com/player/api.js'
    script.async = true
    document.body.appendChild(script)

    script.onload = () => {
      if (!iframeRef.current) return
      const widget = (window as any).SC.Widget(iframeRef.current)
      widget.bind((window as any).SC.Widget.Events.FINISH, () => {
        widget.next()
      })
      widget.bind((window as any).SC.Widget.Events.PAUSE, () => {
        setIsPlaying(false)
      })
      widget.bind((window as any).SC.Widget.Events.PLAY, () => {
        setIsPlaying(true)
      })
    }

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <>
      {/* Hidden SoundCloud iframe */}
      <iframe
        ref={iframeRef}
        className="hidden"
        allow="autoplay"
        src={WIDGET_SRC}
        title="SoundCloud Player"
      />

      {/* Catalog panel */}
      {catalogOpen && (
        <div className="fixed bottom-20 right-6 z-50 w-80 overflow-hidden rounded-lg border border-border bg-card/95 shadow-2xl shadow-black/60 backdrop-blur-md">
          <div className="flex items-center justify-between border-b border-border px-4 py-3">
            <span className="font-mono text-xs uppercase tracking-[0.15em] text-accent">
              Catalog
            </span>
            <button
              onClick={() => setCatalogOpen(false)}
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label="Close catalog"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </button>
          </div>
          <div className="max-h-64 overflow-y-auto">
            <iframe
              className="h-64 w-full border-0"
              scrolling="yes"
              allow="autoplay"
              src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(SOUNDCLOUD_URL)}&auto_play=false&show_artwork=true&show_playcount=false&show_user=true&color=%23c9a96e&buying=false&sharing=false&download=false&show_teaser=false&visual=false`}
              title="SoundCloud Catalog"
            />
          </div>
        </div>
      )}

      {/* Floating music button */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
        {/* Catalog toggle */}
        <button
          onClick={() => setCatalogOpen(!catalogOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border/60 bg-card/80 text-muted-foreground shadow-lg shadow-black/40 backdrop-blur-sm transition-all duration-200 hover:border-accent/40 hover:text-accent"
          aria-label="Open music catalog"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <rect x="1" y="1" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.2" />
            <rect x="9" y="1" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.2" />
            <rect x="1" y="9" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.2" />
            <rect x="9" y="9" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.2" />
          </svg>
        </button>

        {/* Play/Pause button */}
        <button
          onClick={togglePlay}
          className="group relative flex h-14 w-14 items-center justify-center rounded-full border border-border/60 bg-card/80 shadow-lg shadow-black/40 backdrop-blur-sm transition-all duration-300 hover:border-accent/60 hover:shadow-accent/10"
          aria-label={isPlaying ? 'Pause music' : 'Play music'}
        >
          {/* Spinning ring when playing */}
          {isPlaying && (
            <span className="absolute inset-0 animate-spin rounded-full border border-transparent border-t-accent" style={{ animationDuration: '3s' }} />
          )}

          {!hasInteracted ? (
            <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground transition-colors group-hover:text-accent">
              Play
            </span>
          ) : isPlaying ? (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" className="text-accent">
              <rect x="3" y="2" width="4" height="12" rx="1" />
              <rect x="9" y="2" width="4" height="12" rx="1" />
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" className="text-muted-foreground transition-colors group-hover:text-accent">
              <path d="M4 2l10 6-10 6V2z" />
            </svg>
          )}
        </button>
      </div>
    </>
  )
}
