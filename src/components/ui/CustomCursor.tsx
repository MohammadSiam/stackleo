'use client'

import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef  = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Only activate on pointer-capable (non-touch) devices
    if (!window.matchMedia('(pointer: fine)').matches) return

    const pos     = { x: 0, y: 0 }
    const ringPos = { x: 0, y: 0 }
    let raf: number

    const onMove = (e: MouseEvent) => {
      pos.x = e.clientX
      pos.y = e.clientY
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 6}px, ${e.clientY - 6}px)`
      }
    }

    const animate = () => {
      ringPos.x += (pos.x - ringPos.x) * 0.12
      ringPos.y += (pos.y - ringPos.y) * 0.12
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPos.x - 20}px, ${ringPos.y - 20}px)`
      }
      raf = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', onMove)
    raf = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      {/* Dot — snaps instantly */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-3 h-3 rounded-full pointer-events-none z-[9999]"
        style={{
          background: 'linear-gradient(135deg, #FFB800, #E84A00)',
          mixBlendMode: 'difference',
        }}
      />
      {/* Ring — lags behind with lerp */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-10 h-10 rounded-full pointer-events-none z-[9998]"
        style={{
          border: '1.5px solid rgba(255,122,0,0.6)',
          mixBlendMode: 'difference',
        }}
      />
    </>
  )
}
