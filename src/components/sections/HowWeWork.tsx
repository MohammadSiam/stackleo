'use client'

import MView from '@/components/ui/MView'
import Pill from '@/components/ui/Pill'
import { useTheme } from '@/lib/theme'
import { useI18n } from '@/i18n/I18nProvider'

export default function HowWeWork() {
  const { isDark } = useTheme()
  const { t } = useI18n()
  const hw = t.how

  return (
    <section id="how-we-work" aria-label="How We Work" className="py-24 px-[5%] bg-sect">
      <div className="max-w-[1200px] mx-auto">
        <MView className="text-center mb-14">
          <Pill>{hw.pill}</Pill>
          <h2
            className="font-display font-black tracking-tight mb-3 mt-3 text-fg"
            style={{ fontSize: 'clamp(2rem,3.5vw,3rem)' }}
          >
            {hw.title} <span className="grad-text">{hw.titleGrad}</span>
          </h2>
          <p className="text-base max-w-[520px] mx-auto leading-relaxed text-muted">
            {hw.desc}
          </p>
        </MView>

        <MView>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {hw.steps.map(({ icon, title, desc }, i) => {
              const num = String(i + 1).padStart(2, '0')
              return (
              <div key={num} className="relative flex flex-col">

                <article
                  className={`rounded-2xl p-6 border h-full flex flex-col transition-all duration-300 hover:-translate-y-1
                    ${isDark
                      ? 'bg-white/[0.03] border-white/[0.08] hover:border-orange-500/20'
                      : 'bg-card border-line shadow-sm hover:shadow-md hover:border-orange-200'
                    }`}
                >
                  {/* Step number */}
                  <div className="font-display font-black text-4xl leading-none mb-3 grad-text opacity-30 select-none">
                    {num}
                  </div>

                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl mb-4 ${
                    isDark ? 'bg-orange-500/10' : 'bg-orange-50'
                  }`}>
                    {icon}
                  </div>

                  <div className="font-display font-bold text-sm mb-2 text-fg">{title}</div>
                  <div className="text-xs leading-relaxed text-muted">{desc}</div>
                </article>
              </div>
            )})}
          </div>

          {/* CTA nudge */}
          <div className="text-center mt-10 flex flex-col items-center gap-2">
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
              className={`inline-flex items-center gap-2 text-sm font-semibold transition-colors ${
                isDark ? 'text-orange-400 hover:text-orange-300' : 'text-orange-600 hover:text-orange-700'
              }`}
            >
              {hw.cta}
            </a>
            <p className="text-xs text-dim">
              {hw.pricingNote}
            </p>
          </div>
        </MView>
      </div>
    </section>
  )
}
