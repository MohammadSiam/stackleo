'use client'

import MView from '@/components/ui/MView'
import Pill from '@/components/ui/Pill'
import { useTheme } from '@/lib/theme'

export default function Team() {
  const { isDark } = useTheme()

  return (
    <section id="team" aria-label="Meet the Team" className={`py-24 px-[5%] ${isDark ? 'bg-page' : 'bg-card'}`}>
      <div className="max-w-[1200px] mx-auto">
        <MView className="text-center mb-14">
          <Pill>The Founder</Pill>
          <h2
            className="font-display font-black tracking-tight mb-3 mt-3 text-fg"
            style={{ fontSize: 'clamp(2rem,3.5vw,3rem)' }}
          >
            Who&apos;s Behind <span className="grad-text">StackLeo</span>
          </h2>
          <p className="text-base max-w-[480px] mx-auto leading-relaxed text-muted">
            Not a faceless agency. A real engineer who personally works on every project.
          </p>
        </MView>

        <MView>
          <div className="flex justify-center">
            <div
              className={`rounded-2xl p-8 border max-w-[360px] w-full text-center transition-all
                ${isDark
                  ? 'bg-white/[0.03] border-white/[0.08]'
                  : 'bg-card border-line shadow-md'
                }`}
            >
              {/* Avatar */}
              <div
                className="w-20 h-20 rounded-2xl mx-auto mb-5 flex items-center justify-center font-display font-black text-2xl text-white"
                style={{ background: 'linear-gradient(135deg,#E84A00,#FFB800)' }}
              >
                MS
              </div>

              <div className="font-display font-bold text-lg mb-0.5 text-fg">Mohammad Siam</div>
              <div className="text-xs font-bold tracking-widest uppercase grad-text mb-4">Founder & CEO</div>

              <p className={`text-sm leading-relaxed mb-6 ${isDark ? 'text-white/45' : 'text-gray-500'}`}>
                Hi, I&apos;m Siam — Founder &amp; full-stack engineer at StackLeo. I personally work on every project, from architecture to deployment. When you work with StackLeo, you&apos;re working directly with the person building your product — no account managers, no handoffs.
              </p>

              <a
                href="https://www.linkedin.com/company/stackleo/"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold border transition-all hover:-translate-y-0.5 ${
                  isDark
                    ? 'bg-white/[0.05] border-white/10 text-white/60 hover:text-white hover:border-white/20'
                    : 'bg-white border-gray-200 text-gray-600 hover:text-gray-900 shadow-sm hover:shadow-md'
                }`}
              >
                <span className="font-black">in</span> LinkedIn
              </a>
            </div>
          </div>
        </MView>
      </div>
    </section>
  )
}
