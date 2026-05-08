import MView from '@/components/ui/MView'
import { whyUsItems } from '@/lib/data/why-us'

export default function WhyUs() {
  return (
    <section
      id="why-us"
      aria-label="Why StackLeo"
      className="py-24 px-[5%] relative overflow-hidden"
      style={{ backgroundColor: '#08080C' }}
    >
      {/* Background orbs */}
      <div
        className="absolute -top-40 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(155,63,255,.08),transparent 70%)' }}
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-20 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(255,122,0,.07),transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="max-w-[1200px] mx-auto relative z-[1]">
        <MView className="text-center mb-14">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase bg-orange-500/10 text-orange-300 border border-orange-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
            Why StackLeo
          </span>
          <h2
            className="font-display font-black tracking-tight mb-3 mt-3 text-white"
            style={{ fontSize: 'clamp(2rem,3.5vw,3rem)' }}
          >
            What Sets Us <span className="grad-text">Apart</span>
          </h2>
          <p className="text-base max-w-[520px] mx-auto leading-relaxed text-white/40">
            We don&apos;t just build software. We engineer competitive advantages.
          </p>
        </MView>

        <MView>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch">
            {whyUsItems.map(({ icon, title, desc }, i) => (
              <article
                key={title}
                className="group relative rounded-2xl p-7 border border-white/10 bg-white/[0.03] overflow-hidden h-full flex flex-col
                  transition-all duration-300 -translate-y-0 hover:-translate-y-1.5
                  hover:bg-orange-500/[0.04] hover:border-orange-500/25"
              >
                {/* Ghost number */}
                <div className="absolute top-4 right-5 font-display font-black text-5xl text-orange-500/[0.07] group-hover:text-orange-500/[0.15] transition-colors leading-none select-none pointer-events-none">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl bg-orange-500/10 mb-4 shrink-0">
                  {icon}
                </div>
                <div className="font-display font-bold text-white mb-2">{title}</div>
                <div className="text-sm leading-relaxed text-white/40">{desc}</div>
              </article>
            ))}
          </div>
        </MView>
      </div>
    </section>
  )
}
