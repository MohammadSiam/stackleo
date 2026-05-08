import { ReactNode } from 'react'

interface PillProps {
  children: ReactNode
  className?: string
}

export default function Pill({ children, className = '' }: PillProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase border bg-pill-bg text-pill-text border-pill-ring ${className}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
      {children}
    </span>
  )
}
