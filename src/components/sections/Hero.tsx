'use client'

import { motion } from 'framer-motion'
import { fadeUp, stagger } from '@/lib/motion'
import { useTheme } from '@/lib/theme'

const tagline = ['Founded 2024', 'Bangladesh-based', 'Modern Tech Stack', 'Agile Delivery']

export default function Hero() {
  const { isDark } = useTheme()

  return (
    <section
      id="hero"
      aria-label="Hero"
      className={`min-h-screen pt-32 pb-20 px-[5%] flex items-center relative overflow-hidden ${
        isDark ? 'bg-ink-900' : 'bg-[#FAFAF8]'
      }`}
      style={!isDark ? {
        background: 'radial-gradient(ellipse 80% 60% at 15% 40%, rgba(255,122,0,0.08) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 85% 60%, rgba(155,63,255,0.05) 0%, transparent 60%), #FAFAF8'
      } : undefined}
    >
      {/* Grid background with radial mask */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(${isDark ? 'rgba(255,122,0,.04)' : 'rgba(255,122,0,.06)'} 1px,transparent 1px),linear-gradient(90deg,${isDark ? 'rgba(255,122,0,.04)' : 'rgba(255,122,0,.06)'} 1px,transparent 1px)`,
          backgroundSize: '56px 56px',
          maskImage: 'radial-gradient(ellipse 80% 70% at 50% 50%,black,transparent)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 50% 50%,black,transparent)',
        }}
        aria-hidden="true"
      />
      {/* Pulsing orange orb */}
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-40 right-[5%] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(255,122,0,.12) 0%,transparent 70%)' }}
        aria-hidden="true"
      />
      {/* Purple orb */}
      <motion.div
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -bottom-32 -left-20 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(155,63,255,.08) 0%,transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="max-w-[1240px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-[1]">
        {/* ── Left: Text ── */}
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          {/* Badge */}
          <motion.div
            variants={fadeUp}
            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6 border ${
              isDark
                ? 'bg-orange-500/10 border-orange-500/20 text-orange-300'
                : 'bg-orange-100 border-orange-200 text-orange-700'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-orange-500 pulse-dot" />
            Software Development Company — Bangladesh
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={fadeUp}
            className={`font-display font-black leading-[1.05] tracking-tight mb-5 ${isDark ? 'text-white' : 'text-gray-900'}`}
            style={{ fontSize: 'clamp(2.6rem,5.5vw,4.5rem)' }}
          >
            Building Software
            <br />
            Solutions,{' '}
            <span className="grad-text">Empowering</span>
            <br />
            Businesses.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className={`text-lg leading-relaxed max-w-[500px] mb-8 ${isDark ? 'text-white/50' : 'text-gray-600'}`}
          >
            StackLeo engineers high-quality, scalable digital solutions that help businesses
            transform, grow, and compete globally — with precision and reliability.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4 items-center">
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-white font-display font-bold grad-bg glow"
            >
              Get in Touch <span>→</span>
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              href="#services"
              onClick={(e) => { e.preventDefault(); document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }) }}
              className={`inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-display font-bold border transition-colors ${
                isDark
                  ? 'text-white/75 border-white/15 hover:bg-white/[0.06]'
                  : 'text-gray-800 border-gray-300 bg-white hover:bg-gray-50 shadow-sm'
              }`}
            >
              Explore Services
            </motion.a>
          </motion.div>

          {/* Tagline chips */}
          <motion.div
            variants={fadeUp}
            className={`flex flex-wrap gap-2 mt-10 pt-8 border-t ${isDark ? 'border-white/[0.08]' : 'border-orange-100'}`}
          >
            {tagline.map((item) => (
              <span
                key={item}
                className={`text-xs font-medium px-3 py-1 rounded-full border ${
                  isDark
                    ? 'bg-white/[0.04] border-white/10 text-white/40'
                    : 'bg-orange-50 border-orange-100 text-orange-700/70'
                }`}
              >
                {item}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* ── Right: Dashboard Cards ── */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="relative h-[500px] hidden lg:block"
        >
          {/* Card 1 — Outfit POS (top-left, floats up) */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className={`absolute w-[60%] top-0 left-0 rounded-2xl p-5 border backdrop-blur-xl ${
              isDark ? 'bg-ink-700/95 border-purple-500/20' : 'bg-white border-gray-200 shadow-xl'
            }`}
          >
            <div className="text-[0.65rem] font-bold tracking-widest uppercase text-orange-400 mb-2">Live Product</div>
            <div className={`font-display font-bold text-sm mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Outfit POS
            </div>
            <div className={`text-xs mb-3 ${isDark ? 'text-white/40' : 'text-gray-500'}`}>
              Fashion retail billing & inventory
            </div>
            <div className="flex gap-1.5 mb-3">
              <span className="text-[0.65rem] font-bold px-1.5 py-0.5 rounded bg-orange-500/15 text-orange-400">Next.js</span>
              <span className="text-[0.65rem] font-bold px-1.5 py-0.5 rounded bg-purple-500/15 text-purple-400">PostgreSQL</span>
            </div>
            <div className="flex gap-1.5">
              <span className="text-[0.65rem] font-bold px-1.5 py-0.5 rounded bg-green-500/15 text-green-400">✓ Live</span>
              <span className={`text-[0.65rem] ${isDark ? 'text-white/25' : 'text-gray-400'}`}>outfit.stackleo.com</span>
            </div>
          </motion.div>

          {/* Card 2 — StackLeo (center, elevated) */}
          <div
            className={`absolute w-[92%] left-[4%] top-1/2 -translate-y-1/2 rounded-2xl p-5 border ${
              isDark ? 'bg-ink-700 border-orange-500/25' : 'bg-white border-orange-200'
            }`}
            style={{ boxShadow: isDark ? '0 25px 70px rgba(0,0,0,.55)' : '0 25px 70px rgba(255,122,0,.15)' }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 grad-bg glow">
                <svg width="22" height="22" viewBox="0 0 40 40" fill="none">
                  <path d="M10 14L18 20L10 26" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M20 26H30" stroke="white" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <div className={`font-display font-bold text-sm ${isDark ? 'text-white' : 'text-gray-900'}`}>StackLeo</div>
                <div className={`text-xs ${isDark ? 'text-white/35' : 'text-gray-500'}`}>Bangladesh-based software company</div>
              </div>
            </div>

            <div className="flex justify-between items-end">
              <div>
                <div className={`text-[0.6rem] tracking-widest uppercase mb-1.5 ${isDark ? 'text-white/30' : 'text-gray-400'}`}>Founder</div>
                <div className="flex items-center gap-2">
                  <div
                    className="w-7 h-7 rounded-full border-2 flex items-center justify-center text-[0.55rem] font-black text-white"
                    style={{
                      background: 'linear-gradient(135deg,#E84A00,#FFB800)',
                      borderColor: isDark ? '#1C1C26' : '#fff',
                    }}
                  >
                    MS
                  </div>
                  <span className={`text-xs ${isDark ? 'text-white/40' : 'text-gray-500'}`}>Mohammad Siam</span>
                </div>
              </div>
              <div className="text-right">
                <div className="font-display font-black text-2xl grad-text">2</div>
                <div className={`text-xs ${isDark ? 'text-white/30' : 'text-gray-400'}`}>Products Live</div>
              </div>
            </div>

            <div className={`mt-3 pt-3 border-t flex justify-between items-center ${isDark ? 'border-white/[0.08]' : 'border-gray-100'}`}>
              <span className="text-[0.65rem] font-bold px-1.5 py-0.5 rounded bg-green-500/15 text-green-400">
                ✓ Both Products Online
              </span>
              <span className={`text-xs ${isDark ? 'text-white/25' : 'text-gray-300'}`}>stackleo.com</span>
            </div>
          </div>

          {/* Card 3 — LenDen POS (bottom-right, floats down) */}
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className={`absolute w-[60%] bottom-0 right-0 rounded-2xl p-5 border backdrop-blur-xl ${
              isDark ? 'bg-ink-700/95 border-yellow-500/20' : 'bg-white border-gray-200 shadow-xl'
            }`}
          >
            <div className="text-[0.65rem] font-bold tracking-widest uppercase text-yellow-500 mb-2">Live Product</div>
            <div className={`font-display font-bold text-sm mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>LenDen POS</div>
            <div className={`text-xs mb-3 ${isDark ? 'text-white/40' : 'text-gray-500'}`}>
              IT shop billing & stock management
            </div>
            <div className="flex gap-1.5">
              <span className="text-[0.65rem] font-bold px-1.5 py-0.5 rounded bg-green-500/15 text-green-400">✓ Live</span>
              <span className="text-[0.65rem] font-bold px-1.5 py-0.5 rounded bg-orange-500/15 text-orange-400">Docker</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
