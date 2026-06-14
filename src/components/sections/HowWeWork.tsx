'use client'

import MView from '@/components/ui/MView'
import Pill from '@/components/ui/Pill'
import { useTheme } from '@/lib/theme'

const steps = [
  {
    num: '01',
    icon: '🔍',
    title: 'Discovery Call',
    desc: 'A free 30-minute call to understand your goals, pain points, and scope — before writing a single line of code.',
  },
  {
    num: '02',
    icon: '📋',
    title: 'Proposal & Timeline',
    desc: 'A detailed scope document with our recommended tech stack, clear milestones, and a realistic timeline. No surprises.',
  },
  {
    num: '03',
    icon: '⚙️',
    title: 'We Build It',
    desc: "Our team handles everything — architecture, frontend, backend, and deployment. You get regular updates so you always know what's happening.",
  },
  {
    num: '04',
    icon: '🚀',
    title: 'Launch & Handoff',
    desc: 'We deploy, run QA, and hand off the product — with documentation and ongoing support options if you need them.',
  },
]

export default function HowWeWork() {
  const { isDark } = useTheme()

  return (
    <section id="how-we-work" aria-label="How We Work" className="py-24 px-[5%] bg-sect">
      <div className="max-w-[1200px] mx-auto">
        <MView className="text-center mb-14">
          <Pill>Process</Pill>
          <h2
            className="font-display font-black tracking-tight mb-3 mt-3 text-fg"
            style={{ fontSize: 'clamp(2rem,3.5vw,3rem)' }}
          >
            How We <span className="grad-text">Work</span>
          </h2>
          <p className="text-base max-w-[520px] mx-auto leading-relaxed text-muted">
            A transparent process from first call to final launch — you know exactly what we&apos;re building and when.
          </p>
        </MView>

        <MView>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map(({ num, icon, title, desc }, i) => (
              <div key={num} className="relative flex flex-col">
                {/* Connecting line (desktop) */}
                {i < steps.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-7 left-[calc(100%+10px)] w-[calc(100%-20px)] h-px pointer-events-none"
                    style={{
                      background: isDark
                        ? 'linear-gradient(90deg,rgba(255,122,0,.3),rgba(255,122,0,.05))'
                        : 'linear-gradient(90deg,rgba(232,74,0,.25),rgba(232,74,0,.04))',
                    }}
                    aria-hidden="true"
                  />
                )}

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
            ))}
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
              Start with a free discovery call →
            </a>
            <p className="text-xs text-dim">
              Project pricing depends on scope and complexity — book a free discovery call for a custom quote.
            </p>
          </div>
        </MView>
      </div>
    </section>
  )
}
