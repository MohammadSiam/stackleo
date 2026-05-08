import MView from '@/components/ui/MView'

export default function CtaBanner() {
  return (
    <section
      aria-label="Call to action"
      className="py-24 px-[5%] text-center relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg,#0E0E12 0%,#1A0E00 50%,#0E0E12 100%)' }}
    >
      {/* Orange radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 80% at 50% 50%,rgba(255,122,0,.13),transparent)' }}
        aria-hidden="true"
      />

      <div className="relative z-[1] max-w-[680px] mx-auto">
        <MView>
          <div className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4 bg-orange-500/10 text-orange-300 border border-orange-500/20">
            🚀 Let&apos;s Collaborate
          </div>
          <h2
            className="font-display font-black text-white tracking-tight mb-4 mt-2"
            style={{ fontSize: 'clamp(2rem,4vw,3rem)' }}
          >
            Let&apos;s Build the{' '}
            <span className="grad-text">Future Together</span>
          </h2>
          <p className="text-base text-white/50 leading-relaxed mb-8">
            We collaborate with businesses to transform ideas into powerful digital products that deliver measurable results.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-xl text-white font-display font-bold text-lg grad-bg glow-strong
              transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02]"
          >
            Start a Project →
          </a>
        </MView>
      </div>
    </section>
  )
}
