'use client'

import { useEffect, useRef } from 'react'

export function CursorDistortion() {
  const blobRef = useRef<HTMLDivElement>(null)
  const pos = useRef({ x: -200, y: -200 })
  const rendered = useRef({ x: -200, y: -200 })
  const rafRef = useRef<number>()

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY }
    }
    const onTouch = (e: TouchEvent) => {
      const t = e.touches[0]
      if (t) pos.current = { x: t.clientX, y: t.clientY }
    }
    const onLeave = () => {
      pos.current = { x: -200, y: -200 }
    }

    document.addEventListener('mousemove', onMove)
    document.addEventListener('touchmove', onTouch, { passive: true })
    document.addEventListener('mouseleave', onLeave)

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t

    const animate = () => {
      rendered.current.x = lerp(rendered.current.x, pos.current.x, 0.12)
      rendered.current.y = lerp(rendered.current.y, pos.current.y, 0.12)

      if (blobRef.current) {
        blobRef.current.style.transform = `translate(${rendered.current.x - 60}px, ${rendered.current.y - 60}px)`
      }

      rafRef.current = requestAnimationFrame(animate)
    }

    rafRef.current = requestAnimationFrame(animate)

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('touchmove', onTouch)
      document.removeEventListener('mouseleave', onLeave)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <>
      <svg className="fixed" width="0" height="0" aria-hidden="true">
        <defs>
          <filter id="cursor-warp" x="-50%" y="-50%" width="200%" height="200%">
            <feTurbulence
              type="turbulence"
              baseFrequency="0.015"
              numOctaves="3"
              seed="2"
              result="turbulence"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="turbulence"
              scale="18"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>

      <div
        ref={blobRef}
        className="pointer-events-none fixed top-0 left-0 z-[9998] h-[120px] w-[120px] rounded-full opacity-0 mix-blend-screen transition-opacity duration-300"
        style={{
          background: 'radial-gradient(circle, rgba(201,169,110,0.07) 0%, transparent 70%)',
          filter: 'url(#cursor-warp)',
          willChange: 'transform',
        }}
        onTransitionEnd={() => {}}
      />

      <div
        className="pointer-events-none fixed top-0 left-0 z-[9998]"
        style={{ willChange: 'transform' }}
      >
        <div
          ref={(el) => {
            if (!el) return
            const parent = blobRef.current
            if (!parent) return
            const obs = new MutationObserver(() => {
              el.style.transform = parent.style.transform
            })
            obs.observe(parent, { attributes: true, attributeFilter: ['style'] })
          }}
          className="h-[120px] w-[120px] rounded-full opacity-[0.03]"
          style={{
            backdropFilter: 'blur(1px) brightness(1.15)',
            WebkitBackdropFilter: 'blur(1px) brightness(1.15)',
            mask: 'radial-gradient(circle, black 30%, transparent 70%)',
            WebkitMask: 'radial-gradient(circle, black 30%, transparent 70%)',
          }}
        />
      </div>
    </>
  )
}
