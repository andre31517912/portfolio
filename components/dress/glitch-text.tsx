'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

const GLITCH_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?/~`'

interface GlitchTextProps {
  children: string
  as?: keyof Pick<JSX.IntrinsicElements, 'h1' | 'h2' | 'h3' | 'span' | 'p'>
  className?: string
  scrambleOnHover?: boolean
  autoGlitch?: boolean
  autoGlitchInterval?: number
}

export function GlitchText({
  children,
  as: Tag = 'span',
  className = '',
  scrambleOnHover = true,
  autoGlitch = true,
  autoGlitchInterval = 4000,
}: GlitchTextProps) {
  const [displayText, setDisplayText] = useState(children)
  const isScrambling = useRef(false)
  const intervalRef = useRef<ReturnType<typeof setInterval>>()

  const scramble = useCallback(() => {
    if (isScrambling.current) return
    isScrambling.current = true

    const original = children
    const duration = 500
    const frameRate = 30
    const totalFrames = Math.floor(duration / (1000 / frameRate))
    let frame = 0

    const tick = () => {
      frame++
      const progress = frame / totalFrames

      const scrambled = original
        .split('')
        .map((char, i) => {
          if (char === ' ') return ' '
          if (progress > (i + 1) / original.length) return char
          return GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)]
        })
        .join('')

      setDisplayText(scrambled)

      if (frame < totalFrames) {
        requestAnimationFrame(tick)
      } else {
        setDisplayText(original)
        isScrambling.current = false
      }
    }

    requestAnimationFrame(tick)
  }, [children])

  useEffect(() => {
    if (!autoGlitch) return
    intervalRef.current = setInterval(scramble, autoGlitchInterval)
    return () => clearInterval(intervalRef.current)
  }, [autoGlitch, autoGlitchInterval, scramble])

  useEffect(() => {
    setDisplayText(children)
  }, [children])

  return (
    <Tag
      className={`glitch ${className}`}
      data-text={children}
      onMouseEnter={scrambleOnHover ? scramble : undefined}
    >
      {displayText}
    </Tag>
  )
}
