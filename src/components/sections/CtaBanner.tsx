'use client'

import MView from '@/components/ui/MView'
import { useTheme } from '@/lib/theme'

export default function CtaBanner() {
  const { isDark } = useTheme()

  return (
    <section
      aria-label="Call to action"
      className="py-24 px-[5%] text-center relative overflow-hidden"
      style={{
        background: isDark
          ? 'linear-gradient(135deg,#0E0E12 0%,#1A0E00 50%,#0E0E12 100%)'
          : 'linear-gradient(135deg,#FFE4D0 0%,#FFD0A8 50%,#FFE8C0 100%)',
      }}
    >
      {/* Glow overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: isDark
            ? 'radial-gradient(ellipse 60% 80% at 50% 50%,rgba(255,122,0,.13),transparent)'
            : 'radial-gradient(ellipse 60% 80% at 50% 50%,rgba(255,255,255,.15),transparent)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-[1] max-w-[680px] mx-auto">
        <MView>
          <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4 border ${
            isDark
              ? 'bg-orange-500/10 text-orange-300 border-orange-500/20'
              : 'bg-orange-500/15 text-orange-700 border-orange-300'
          }`}>
            🚀 Let&apos;s Collaborate
          </div>
          <h2
            className={`font-display font-black tracking-tight mb-4 mt-2 ${isDark ? 'text-white' : 'text-gray-900'}`}
            style={{ fontSize: 'clamp(2rem,4vw,3rem)' }}
          >
            Let&apos;s Build the{' '}
            <span className="grad-text">Future Together</span>
          </h2>
          <p className={`text-base leading-relaxed mb-8 ${isDark ? 'text-white/70' : 'text-gray-600'}`}>
            We collaborate with businesses to transform ideas into powerful digital products that deliver measurable results.
          </p>
          <a
            href="#contact"
            className={`inline-flex items-center gap-2 px-10 py-4 rounded-xl font-display font-bold text-lg
              transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] ${
              isDark
                ? 'text-white grad-bg glow-strong'
                : 'text-orange-600 bg-white shadow-xl hover:shadow-2xl'
            }`}
          >
            Start a Project →
          </a>
        </MView>
      </div>
    </section>
  )
}
