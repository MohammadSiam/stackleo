'use client'

import { motion } from 'framer-motion'
import MView from '@/components/ui/MView'
import Pill from '@/components/ui/Pill'
import { fadeLeft, fadeRight } from '@/lib/motion'
import { useTheme } from '@/lib/theme'

const techStack = [
  { label: 'React/Next.js', darkColor: '#FF7A00', lightBg: '#fff5eb', lightText: '#c85000' },
  { label: 'Node.js',       darkColor: '#3B82F6', lightBg: '#eef3ff', lightText: '#2250C4' },
  { label: 'Python',        darkColor: '#10B981', lightBg: '#edfaf2', lightText: '#1A8A40' },
  { label: 'React Native',  darkColor: '#9B3FFF', lightBg: '#f2ecff', lightText: '#6B30B0' },
  { label: 'AWS/GCP',       darkColor: '#EF4444', lightBg: '#fff0ee', lightText: '#C84020' },
]

export default function About() {
  const { isDark } = useTheme()

  return (
    <section
      id="about"
      aria-label="About StackLeo"
      className={`py-24 px-[5%] ${isDark ? 'bg-ink-800' : 'bg-[#F5F7FA]'}`}
    >
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: code block — always dark, intentional code-editor look */}
        <MView variants={fadeLeft}>
          <div className="relative">
            <div className="rounded-2xl p-8 relative overflow-hidden border shadow-2xl bg-gray-900 border-gray-800">
              <div
                className="absolute -top-12 -right-12 w-48 h-48 rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle,rgba(155,63,255,.15),transparent 70%)' }}
                aria-hidden="true"
              />
              <div
                className="absolute -bottom-8 -left-8 w-36 h-36 rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle,rgba(255,122,0,.1),transparent 70%)' }}
                aria-hidden="true"
              />
              <pre className="font-mono text-sm leading-[2.1] relative z-[1] m-0 whitespace-pre-wrap">
                <span className="text-blue-400">class</span>{' '}
                <span className="text-orange-400">StackLeo</span>{' '}
                <span className="text-white/70">{'{'}</span>{'\n'}
                {'  '}<span className="text-blue-400">slogan</span>{' '}
                <span className="text-white/50">=</span>{' '}
                <span className="text-green-400">&quot;Build. Scale. Empower.&quot;</span>
                <span className="text-white/50">;</span>{'\n'}
                {'  '}<span className="text-blue-400">location</span>{' '}
                <span className="text-white/50">=</span>{' '}
                <span className="text-green-400">&quot;Bangladesh 🇧🇩&quot;</span>
                <span className="text-white/50">;</span>{'\n'}
                {'  '}<span className="text-blue-400">expertise</span>{' '}
                <span className="text-white/50">= [</span>{'\n'}
                {'    '}<span className="text-green-400">&quot;Full-Stack Dev&quot;</span>
                <span className="text-white/50">,</span>{'\n'}
                {'    '}<span className="text-green-400">&quot;Cloud & DevOps&quot;</span>
                <span className="text-white/50">,</span>{'\n'}
                {'    '}<span className="text-green-400">&quot;Mobile Engineering&quot;</span>
                <span className="text-white/50">,</span>{'\n'}
                {'  '}<span className="text-white/50">];</span>{'\n'}
                {'  '}<span className="text-blue-400">async</span>{' '}
                <span className="text-orange-400">deliver</span>
                <span className="text-white/50">(project) {'{'}</span>{'\n'}
                {'    '}<span className="text-white/25">{'// On time. Always.'}</span>{'\n'}
                {'    '}<span className="text-blue-400">return await</span>{' '}
                <span className="text-orange-400">success</span>
                <span className="text-white/50">(project);</span>{'\n'}
                {'  '}<span className="text-white/50">{'}'}</span>{'\n'}
                <span className="text-white/50">{'}'}</span>
              </pre>
            </div>

            {/* 5★ floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7, rotate: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className={`absolute -bottom-5 -right-5 rounded-xl px-5 py-3 text-center border ${
                isDark
                  ? 'bg-ink-700 border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)]'
                  : 'bg-white border-gray-200 shadow-xl'
              }`}
            >
              <div className="font-display font-black text-2xl leading-none grad-text">5★</div>
              <div className={`text-xs font-semibold mt-0.5 ${isDark ? 'text-white/45' : 'text-gray-500'}`}>Avg. Rating</div>
            </motion.div>
          </div>
        </MView>

        {/* Right: text */}
        <MView variants={fadeRight}>
          <Pill>About StackLeo</Pill>
          <h2
            className={`font-display font-black tracking-tight mb-4 mt-3 ${isDark ? 'text-white' : 'text-gray-900'}`}
            style={{ fontSize: 'clamp(2rem,3.5vw,3rem)', lineHeight: 1.15 }}
          >
            Engineering Tomorrow&apos;s
            <br />
            <span className="grad-text">Digital Landscape</span>
          </h2>
          <p className={`text-base leading-relaxed mb-3 ${isDark ? 'text-white/55' : 'text-gray-600'}`}>
            StackLeo is a forward-thinking software company dedicated to delivering high-quality, scalable digital solutions. We help businesses transform with innovation, precision, and reliability.
          </p>
          <p className={`text-sm leading-relaxed mb-6 ${isDark ? 'text-white/40' : 'text-gray-500'}`}>
            From startups to enterprises, we build software that doesn&apos;t just work — it scales, evolves, and drives measurable business outcomes.
          </p>

          {/* Mission / Vision cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              { label: 'Mission', icon: '🎯', color: '#FF7A00', text: 'Engineer reliable software that lets businesses operate smarter and compete globally.' },
              { label: 'Vision',  icon: '🔭', color: '#9B3FFF', text: 'Become a trusted global tech partner recognized for innovation, quality, and digital impact.' },
            ].map(({ label, icon, color, text }) => (
              <div
                key={label}
                className={`rounded-xl p-4 border ${
                  isDark ? 'bg-white/[0.03] border-white/10' : 'bg-white border-gray-100 shadow-md'
                }`}
                style={{ borderTop: `3px solid ${color}` }}
              >
                <div className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color }}>
                  {icon} {label}
                </div>
                <div className={`text-xs leading-relaxed ${isDark ? 'text-white/45' : 'text-gray-500'}`}>{text}</div>
              </div>
            ))}
          </div>

          {/* Tech stack pills */}
          <div className="flex flex-wrap gap-2">
            {techStack.map(({ label, darkColor, lightBg, lightText }) => (
              <span
                key={label}
                className="text-xs font-semibold px-3 py-1.5 rounded-full"
                style={{
                  background: isDark ? `${darkColor}1f` : lightBg,
                  color: isDark ? darkColor : lightText,
                }}
              >
                {label}
              </span>
            ))}
          </div>
        </MView>
      </div>
    </section>
  )
}
