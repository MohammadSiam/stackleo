'use client'

import { motion } from 'framer-motion'
import MView from '@/components/ui/MView'
import Pill from '@/components/ui/Pill'
import { fadeLeft, fadeRight } from '@/lib/motion'
import { useTheme } from '@/lib/theme'

const techStack = [
  { label: 'React/Next.js',  darkColor: '#FF7A00', lightBg: '#fff5eb', lightText: '#c85000' },
  { label: 'Node.js',        darkColor: '#3B82F6', lightBg: '#eef3ff', lightText: '#2250C4' },
  { label: 'NestJS',         darkColor: '#EF4444', lightBg: '#fff0ee', lightText: '#C84020' },
  { label: 'PostgreSQL',     darkColor: '#10B981', lightBg: '#edfaf2', lightText: '#1A8A40' },
  { label: 'React Native',   darkColor: '#9B3FFF', lightBg: '#f2ecff', lightText: '#6B30B0' },
  { label: 'Flutter',        darkColor: '#38BDF8', lightBg: '#e8f7ff', lightText: '#0369a1' },
]

export default function About() {
  const { isDark } = useTheme()

  return (
    <section
      id="about"
      aria-label="About StackLeo"
      className={`py-24 px-[5%] ${isDark ? 'bg-ink-800' : 'bg-sect-2'}`}
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

          </div>
        </MView>

        {/* Right: text */}
        <MView variants={fadeRight}>
          <Pill>About StackLeo</Pill>
          <h2
            className={`font-display font-black tracking-tight mb-4 mt-3 ${isDark ? 'text-white' : 'text-gray-900'}`}
            style={{ fontSize: 'clamp(2rem,3.5vw,3rem)', lineHeight: 1.15 }}
          >
            Who We Are &amp;{' '}
            <span className="grad-text">What We Stand For</span>
          </h2>
          <p className={`text-base leading-relaxed mb-3 ${isDark ? 'text-white/55' : 'text-gray-600'}`}>
            StackLeo is a Dhaka-based software company building modern SaaS products, web applications, and mobile apps for businesses in Bangladesh and beyond.
          </p>
          <p className={`text-sm leading-relaxed mb-6 ${isDark ? 'text-white/40' : 'text-gray-500'}`}>
            We don&apos;t just write code — we understand your business, identify the real problem, and engineer a solution that actually works in the real world. Our products are live, our clients are happy, and our team ships on time.
          </p>

          {/* Mission / Vision cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              { label: 'Mission', icon: '🎯', color: '#FF7A00', text: 'Build reliable, affordable software that helps Bangladeshi and global businesses operate smarter — without enterprise-level complexity.' },
              { label: 'Vision',  icon: '🔭', color: '#9B3FFF', text: 'Become Bangladesh\'s most trusted software partner — known for shipping real products that solve real problems.' },
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
