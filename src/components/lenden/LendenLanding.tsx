'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import MView from '@/components/ui/MView'
import Pill from '@/components/ui/Pill'
import { fadeUp, stagger } from '@/lib/motion'
import { useTheme } from '@/lib/theme'
import { useI18n } from '@/i18n/I18nProvider'

const SIGNUP_URL = 'https://lenden.stackleo.com/register'
const WHATSAPP_NUMBER = '8801913519903'

// Same order as t.lenden.showcase.items
const SHOWCASE_IMAGES = ['pos', 'sale-serial', 'warranty', 'labels']

function SectionHeading({ pill, title, grad, desc }: { pill: string; title: string; grad: string; desc?: string }) {
  return (
    <MView className="text-center mb-14">
      <Pill>{pill}</Pill>
      <h2
        className="font-display font-black tracking-tight mb-3 mt-3 text-fg"
        style={{ fontSize: 'clamp(1.9rem,3.5vw,2.8rem)', lineHeight: 1.2 }}
      >
        {title} <span className="grad-text">{grad}</span>
      </h2>
      {desc && <p className="text-base max-w-[560px] mx-auto leading-relaxed text-muted">{desc}</p>}
    </MView>
  )
}

function Phone({ src, alt, priority = false }: { src: string; alt: string; priority?: boolean }) {
  return (
    <div className="rounded-[2rem] bg-[#111] p-[6px] shadow-2xl ring-1 ring-white/10">
      <div className="relative aspect-[390/844] rounded-[1.6rem] overflow-hidden bg-white">
        <div className="absolute top-1.5 left-1/2 z-[1] h-4 w-14 -translate-x-1/2 rounded-full bg-[#111]" aria-hidden="true" />
        <Image src={src} alt={alt} fill priority={priority} sizes="210px" className="object-cover object-top" />
      </div>
    </div>
  )
}

export default function LendenLanding() {
  const { isDark } = useTheme()
  const { t } = useI18n()
  const l = t.lenden
  const [shot, setShot] = useState(0)
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(l.whatsappText)}`

  const primaryBtn =
    'inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-white font-display font-bold grad-bg glow transition-transform hover:-translate-y-0.5'
  const secondaryBtn = `inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-display font-bold border transition-all hover:-translate-y-0.5 ${
    isDark ? 'text-white/85 border-white/15 hover:bg-white/[0.06]' : 'text-gray-800 border-gray-300 bg-white hover:bg-gray-50 shadow-sm'
  }`
  const cardCls = `rounded-2xl border h-full transition-all duration-300 hover:-translate-y-1 ${
    isDark ? 'bg-white/[0.03] border-white/[0.08] hover:border-orange-500/25' : 'bg-card border-line shadow-sm hover:shadow-md hover:border-orange-200'
  }`
  const iconBox = `rounded-xl flex items-center justify-center shrink-0 ${isDark ? 'bg-orange-500/10' : 'bg-orange-50'}`

  return (
    <>
      {/* Hero */}
      <section
        aria-label="LenDen"
        className={`pt-32 pb-20 px-[5%] relative overflow-hidden ${isDark ? 'bg-ink-900' : 'bg-[#FAFAF8]'}`}
      >
        <div
          className="absolute -top-40 right-[5%] w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle,rgba(255,122,0,.12) 0%,transparent 70%)' }}
          aria-hidden="true"
        />
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 items-center relative z-[1]">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp} className="mb-6">
              <Image
                src={isDark ? '/lenden/logo/lenden-logo-dark.svg' : '/lenden/logo/lenden-logo-light.svg'}
                alt="LenDen"
                width={150}
                height={40}
                priority
                className="h-9 w-auto"
              />
            </motion.div>
            <motion.div
              variants={fadeUp}
              className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6 border ${
                isDark ? 'bg-orange-500/10 border-orange-500/20 text-orange-300' : 'bg-orange-100 border-orange-200 text-orange-700'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-orange-500 pulse-dot" />
              {l.hero.badge}
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="font-display font-black tracking-tight mb-5 text-fg"
              style={{ fontSize: 'clamp(2.2rem,4.5vw,3.6rem)', lineHeight: 1.15 }}
            >
              {l.hero.title} <span className="grad-text">{l.hero.titleGrad}</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg leading-relaxed max-w-[540px] mb-8 text-muted">
              {l.hero.desc}
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
              <a href={SIGNUP_URL} target="_blank" rel="noopener noreferrer" className={primaryBtn}>
                {l.hero.primary} <span>→</span>
              </a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={secondaryBtn}>
                💬 {l.hero.secondary}
              </a>
            </motion.div>
            <motion.p variants={fadeUp} className="text-xs mt-5 text-dim">
              {l.hero.note}
            </motion.p>
          </motion.div>

          {/* Monitor with the dashboard, phone with the POS cart in front */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative pb-6 pl-[14%]"
          >
            <div className="rounded-2xl bg-[#1b1b1b] p-2 border border-white/10 shadow-2xl">
              <div className="relative aspect-[16/10] rounded-lg overflow-hidden bg-white">
                <Image
                  src="/lenden/screens/dashboard.webp"
                  alt={l.hero.screenshotAlt}
                  fill
                  priority
                  sizes="(max-width:1024px)90vw,600px"
                  className="object-cover object-left-top"
                />
              </div>
            </div>
            <div className="mx-auto h-10 w-20 bg-gradient-to-b from-gray-400 to-gray-300" aria-hidden="true" />
            <div className="mx-auto h-3 w-48 rounded-full bg-gradient-to-b from-gray-300 to-gray-400" aria-hidden="true" />

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute left-0 bottom-0 w-[34%] max-w-[210px] -rotate-6"
            >
              <Phone src="/lenden/phone/pos-cart.webp" alt="LenDen POS" priority />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Problems */}
      <section aria-label={l.problems.pill} className="py-24 px-[5%] bg-sect-2">
        <div className="max-w-[1200px] mx-auto">
          <SectionHeading pill={l.problems.pill} title={l.problems.title} grad={l.problems.titleGrad} />
          <MView>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {l.problems.items.map(({ icon, title, desc }) => (
                <article key={title} className={`${cardCls} p-6`}>
                  <div className={`${iconBox} w-11 h-11 text-xl mb-4`}>{icon}</div>
                  <div className="font-display font-bold mb-2 text-fg">{title}</div>
                  <p className="text-sm leading-relaxed text-muted">{desc}</p>
                </article>
              ))}
            </div>
          </MView>
        </div>
      </section>

      {/* Features */}
      <section aria-label={l.features.pill} className="py-24 px-[5%] bg-sect">
        <div className="max-w-[1200px] mx-auto">
          <SectionHeading pill={l.features.pill} title={l.features.title} grad={l.features.titleGrad} desc={l.features.desc} />
          <MView>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {l.features.items.map(({ icon, title, desc }) => (
                <article key={title} className={`${cardCls} p-5`}>
                  <div className={`${iconBox} w-10 h-10 text-lg mb-3`}>{icon}</div>
                  <div className="font-display font-bold text-sm mb-1.5 text-fg">{title}</div>
                  <p className="text-xs leading-relaxed text-muted">{desc}</p>
                </article>
              ))}
            </div>
          </MView>
        </div>
      </section>

      {/* Screenshots */}
      <section aria-label={l.showcase.pill} className="py-24 px-[5%] bg-sect-2">
        <div className="max-w-[1100px] mx-auto">
          <SectionHeading pill={l.showcase.pill} title={l.showcase.title} grad={l.showcase.titleGrad} />
          <MView>
            <div className="flex flex-wrap justify-center gap-2 mb-6" role="tablist">
              {l.showcase.items.map(({ title }, i) => (
                <button
                  key={title}
                  role="tab"
                  aria-selected={shot === i}
                  onClick={() => setShot(i)}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold border transition-colors ${
                    shot === i
                      ? 'text-white border-transparent grad-bg'
                      : isDark
                        ? 'text-white/60 border-white/10 hover:text-white'
                        : 'text-gray-600 border-gray-200 bg-white hover:text-gray-900'
                  }`}
                >
                  {title}
                </button>
              ))}
            </div>
            <p className="text-center text-sm text-muted mb-6 max-w-[560px] mx-auto">{l.showcase.items[shot].desc}</p>
            <div className={`rounded-2xl border overflow-hidden ${isDark ? 'border-white/10 bg-ink-700' : 'border-gray-200 bg-white shadow-xl'}`}>
              <div className="relative aspect-[2/1] bg-white">
                <Image
                  key={SHOWCASE_IMAGES[shot]}
                  src={`/lenden/screens/${SHOWCASE_IMAGES[shot]}.webp`}
                  alt={l.showcase.items[shot].title}
                  fill
                  sizes="(max-width:1100px)100vw,1100px"
                  className="object-contain object-top"
                />
              </div>
            </div>
          </MView>
        </div>
      </section>

      {/* Video */}
      <section aria-label={l.video.pill} className="py-24 px-[5%] bg-sect">
        <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-[auto_1fr] gap-10 md:gap-16 items-center">
          <MView className="mx-auto">
            <video
              src="/lenden/reels/promo.mp4"
              poster="/lenden/reels/promo.jpg"
              controls
              playsInline
              preload="none"
              className={`w-[280px] sm:w-[320px] aspect-[9/16] rounded-2xl border bg-black object-cover shadow-2xl ${isDark ? 'border-white/10' : 'border-gray-200'}`}
            />
          </MView>
          <MView>
            <Pill>{l.video.pill}</Pill>
            <h2
              className="font-display font-black tracking-tight mb-4 mt-3 text-fg"
              style={{ fontSize: 'clamp(1.9rem,3.5vw,2.8rem)', lineHeight: 1.2 }}
            >
              {l.video.title} <span className="grad-text">{l.video.titleGrad}</span>
            </h2>
            <p className="text-base leading-relaxed mb-6 text-muted">{l.video.desc}</p>
            <ul className="flex flex-col gap-3 list-none m-0 p-0 mb-8">
              {l.video.points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-fg">
                  <span className="w-5 h-5 mt-0.5 rounded-md bg-orange-500/15 flex items-center justify-center text-orange-500 text-xs shrink-0">✓</span>
                  {point}
                </li>
              ))}
            </ul>
            <a href={SIGNUP_URL} target="_blank" rel="noopener noreferrer" className={primaryBtn}>
              {l.hero.primary} <span>→</span>
            </a>
          </MView>
        </div>
      </section>

      {/* Mobile */}
      <section aria-label={l.mobile.pill} className="py-24 px-[5%] bg-sect-2">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <MView>
            <Pill>{l.mobile.pill}</Pill>
            <h2
              className="font-display font-black tracking-tight mb-4 mt-3 text-fg"
              style={{ fontSize: 'clamp(1.9rem,3.5vw,2.8rem)', lineHeight: 1.2 }}
            >
              {l.mobile.title}
            </h2>
            <p className="text-base leading-relaxed mb-6 text-muted max-w-[520px]">{l.mobile.desc}</p>
            <ul className="flex flex-col gap-3 list-none m-0 p-0">
              {l.mobile.points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-fg">
                  <span className="w-5 h-5 mt-0.5 rounded-md bg-orange-500/15 flex items-center justify-center text-orange-500 text-xs shrink-0">✓</span>
                  {point}
                </li>
              ))}
            </ul>
          </MView>

          {/* Real phone screens */}
          <MView className="flex justify-center items-end">
            <div className="w-[130px] sm:w-[150px] -mr-6 rotate-[-8deg] translate-y-4">
              <Phone src="/lenden/phone/items.webp" alt="LenDen items" />
            </div>
            <div className="w-[160px] sm:w-[185px] relative z-[1]">
              <Phone src="/lenden/phone/pos-products.webp" alt="LenDen POS" />
            </div>
            <div className="w-[130px] sm:w-[150px] -ml-6 rotate-[8deg] translate-y-4">
              <Phone src="/lenden/phone/warranty.webp" alt="LenDen warranty" />
            </div>
          </MView>
        </div>
      </section>

      {/* Steps */}
      <section aria-label={l.steps.pill} className="py-24 px-[5%] bg-sect">
        <div className="max-w-[1100px] mx-auto">
          <SectionHeading pill={l.steps.pill} title={l.steps.title} grad={l.steps.titleGrad} />
          <MView>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {l.steps.items.map(({ title, desc }, i) => (
                <article key={title} className={`${cardCls} p-6`}>
                  <div className="font-display font-black text-4xl leading-none mb-4 grad-text opacity-40 select-none">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div className="font-display font-bold mb-2 text-fg">{title}</div>
                  <p className="text-sm leading-relaxed text-muted">{desc}</p>
                </article>
              ))}
            </div>
          </MView>
        </div>
      </section>

      {/* FAQ */}
      <section aria-label={l.faq.pill} className="py-24 px-[5%] bg-sect-2">
        <div className="max-w-[800px] mx-auto">
          <MView className="text-center mb-10">
            <Pill>{l.faq.pill}</Pill>
            <h2
              className="font-display font-black tracking-tight mt-3 text-fg"
              style={{ fontSize: 'clamp(1.9rem,3.5vw,2.8rem)' }}
            >
              {l.faq.title}
            </h2>
          </MView>
          <MView>
            <div className="flex flex-col gap-3">
              {l.faq.items.map(({ q, a }) => (
                <details
                  key={q}
                  className={`group rounded-xl border px-5 py-4 ${isDark ? 'bg-white/[0.03] border-white/[0.08]' : 'bg-card border-line shadow-sm'}`}
                >
                  <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-display font-bold text-fg [&::-webkit-details-marker]:hidden">
                    {q}
                    <span className="text-orange-500 text-xl leading-none transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{a}</p>
                </details>
              ))}
            </div>
          </MView>
        </div>
      </section>

      {/* Final CTA */}
      <section
        aria-label={l.hero.primary}
        className="py-24 px-[5%] text-center relative overflow-hidden"
        style={{
          background: isDark
            ? 'linear-gradient(135deg,#0E0E12 0%,#1A0E00 50%,#0E0E12 100%)'
            : 'linear-gradient(135deg,#FFE4D0 0%,#FFD0A8 50%,#FFE8C0 100%)',
        }}
      >
        <MView className="relative z-[1] max-w-[680px] mx-auto">
          <h2
            className={`font-display font-black tracking-tight mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}
            style={{ fontSize: 'clamp(2rem,4vw,3rem)', lineHeight: 1.2 }}
          >
            {l.final.title} <span className="grad-text">{l.final.titleGrad}</span>
          </h2>
          <p className={`text-base leading-relaxed mb-8 ${isDark ? 'text-white/70' : 'text-gray-700'}`}>{l.final.desc}</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href={SIGNUP_URL} target="_blank" rel="noopener noreferrer" className={primaryBtn}>
              {l.hero.primary} <span>→</span>
            </a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={secondaryBtn}>
              💬 {l.hero.secondary}
            </a>
          </div>
        </MView>
      </section>
    </>
  )
}
