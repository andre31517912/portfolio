'use client'

import { useEffect } from 'react'
import { CursorDistortion } from './cursor-distortion'
import { isMuted, playClickSound } from '@/lib/click-sound'

export function GlobalEffects() {
  useEffect(() => {
    const onClick = () => {
      if (!isMuted()) playClickSound()
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  return <CursorDistortion />
}
