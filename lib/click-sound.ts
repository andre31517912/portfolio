let ctx: AudioContext | null = null

function getCtx(): AudioContext {
  if (!ctx) ctx = new AudioContext()
  return ctx
}

export function playClickSound() {
  try {
    const audio = getCtx()
    if (audio.state === 'suspended') audio.resume()

    const now = audio.currentTime

    const noise = audio.createBufferSource()
    const buf = audio.createBuffer(1, audio.sampleRate * 0.06, audio.sampleRate)
    const data = buf.getChannelData(0)
    for (let i = 0; i < data.length; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (data.length * 0.15))
    }
    noise.buffer = buf

    const bp = audio.createBiquadFilter()
    bp.type = 'bandpass'
    bp.frequency.setValueAtTime(3500, now)
    bp.frequency.exponentialRampToValueAtTime(800, now + 0.05)
    bp.Q.value = 2.5

    const gain = audio.createGain()
    gain.gain.setValueAtTime(0.08, now)
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06)

    noise.connect(bp).connect(gain).connect(audio.destination)
    noise.start(now)
    noise.stop(now + 0.06)

    const osc = audio.createOscillator()
    osc.type = 'sine'
    osc.frequency.setValueAtTime(1200, now)
    osc.frequency.exponentialRampToValueAtTime(200, now + 0.04)

    const oscGain = audio.createGain()
    oscGain.gain.setValueAtTime(0.03, now)
    oscGain.gain.exponentialRampToValueAtTime(0.001, now + 0.04)

    osc.connect(oscGain).connect(audio.destination)
    osc.start(now)
    osc.stop(now + 0.04)
  } catch {
    // Web Audio not available
  }
}

export function isMuted(): boolean {
  return typeof window !== 'undefined' && (window as any).__dressMuted === true
}

export function setMuted(muted: boolean) {
  if (typeof window !== 'undefined') (window as any).__dressMuted = muted
}
