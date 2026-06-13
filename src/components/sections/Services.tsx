'use client'

import MView from '@/components/ui/MView'
import Pill from '@/components/ui/Pill'
import { services, additionalServices } from '@/lib/data/services'
import { useTheme } from '@/lib/theme'

export default function Services() {
  const { isDark } = useTheme()

  return (
    <section id="services" aria-label="Services" className="py-24 px-[5%] bg-sect">
      <div className="max-w-[1200px] mx-auto">
        <MView className="text-center mb-14">
          <Pill>What We Do</Pill>
          <h2
            className="font-display font-black tracking-tight mb-3 mt-3 text-fg"
            style={{ fontSize: 'clamp(2rem,3.5vw,3rem)' }}
          >
            Core <span className="grad-text">Services</span>
          </h2>
          <p className="text-base max-w-[520px] mx-auto leading-relaxed text-muted">
            Three things we do exceptionally well — built on a foundation of modern engineering.
          </p>
        </MView>

        <MView>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 items-stretch mb-10">
            {services.map(({ icon, title, desc }) => (
              <article
                key={title}
                className="group relative rounded-2xl p-7 border overflow-hidden h-full flex flex-col
                  transition-all duration-300 -translate-y-0 hover:-translate-y-1.5
                  bg-card border-line hover:border-orange-500/40 shadow-sm hover:shadow-xl"
              >
                {/* Gradient top bar slides in on hover */}
                <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl grad-bg
                  scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                {/* Ambient corner glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: 'radial-gradient(circle at 10% 10%, rgba(232,74,0,0.09), transparent 55%)' }}
                />

                <div
                  className="flex items-center justify-center text-[1.4rem] mb-6 shrink-0 rounded-xl border transition-colors
                    bg-icon-bg group-hover:bg-icon-hi border-orange-500/20"
                  style={{ width: 52, height: 52 }}
                >
                  {icon}
                </div>

                <div className="font-display font-bold text-[0.95rem] mb-2 text-fg">{title}</div>
                <div className="text-sm leading-relaxed text-faint">{desc}</div>
              </article>
            ))}
          </div>

          {/* Additional capabilities */}
          <div className={`rounded-2xl px-6 py-5 border ${isDark ? 'bg-white/[0.02] border-white/[0.06]' : 'bg-white border-orange-100'}`}>
            <div className={`text-[0.65rem] font-bold tracking-widest uppercase mb-3 ${isDark ? 'text-white/30' : 'text-gray-400'}`}>
              Additional Capabilities
            </div>
            <div className="flex flex-wrap gap-2">
              {additionalServices.map((s) => (
                <span
                  key={s}
                  className={`text-xs font-medium px-3 py-1.5 rounded-full border ${
                    isDark
                      ? 'bg-white/[0.04] border-white/10 text-white/50'
                      : 'bg-orange-50 border-orange-100 text-orange-700/70'
                  }`}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </MView>
      </div>
    </section>
  )
}
