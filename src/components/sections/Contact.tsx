'use client'

import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import MView from '@/components/ui/MView'
import Pill from '@/components/ui/Pill'
import { fadeLeft, fadeRight } from '@/lib/motion'
import { useTheme } from '@/lib/theme'
import { useI18n } from '@/i18n/I18nProvider'

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function Contact() {
  const { isDark } = useTheme()
  const { t } = useI18n()
  const c = t.contact
  const contactInfo = [
    { icon: '🌐', label: c.info.website,  val: 'www.stackleo.com',    href: 'http://www.stackleo.com' },
    { icon: '✉️', label: c.info.email,    val: 'hello@stackleo.com', href: 'mailto:hello@stackleo.com' },
    { icon: '📍', label: c.info.location, val: c.locationVal,         href: null },
    { icon: '📞', label: c.info.phone,    val: '+880 1913-519903',    href: 'tel:+8801913519903' },
  ]
  const [status, setStatus] = useState<Status>('idle')
  const [form, setForm] = useState({ fname: '', lname: '', email: '', phone: '', service: '', message: '' })

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }))

  const submit = async (e: FormEvent) => {
    e.preventDefault()
    if (!form.email || !form.message) {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
      return
    }
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
      setTimeout(() => {
        setStatus('idle')
        setForm({ fname: '', lname: '', email: '', phone: '', service: '', message: '' })
      }, 4000)
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
    }
  }

  const inputCls = `w-full px-4 py-3 rounded-lg text-sm outline-none border transition-all ${
    isDark
      ? 'bg-ink-700 border-white/10 text-white placeholder:text-white/30 focus:border-orange-500'
      : 'bg-white border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-orange-500 shadow-sm'
  }`

  const btnBg =
    status === 'success' ? 'linear-gradient(90deg,#1A8A40,#4DDE8A)' :
    status === 'error'   ? 'linear-gradient(90deg,#C84020,#E84A00)' :
                           'linear-gradient(90deg,#E84A00,#FF7A00,#FFB800)'
  const btnLabel =
    status === 'success' ? c.sent :
    status === 'error'   ? c.error :
    status === 'loading' ? c.sending :
                           c.send

  return (
    <section id="contact" aria-label="Contact Us" className={`py-24 px-[5%] ${isDark ? 'bg-ink-900' : 'bg-sect-2'}`}>
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.35fr] gap-16 items-start">

        {/* Left: info */}
        <MView variants={fadeLeft}>
          <Pill>{c.pill}</Pill>
          <h2
            className={`font-display font-black tracking-tight mb-3 mt-3 ${isDark ? 'text-white' : 'text-gray-900'}`}
            style={{ fontSize: 'clamp(2rem,3.5vw,3rem)' }}
          >
            {c.title} <span className="grad-text">{c.titleGrad}</span>
          </h2>
          <p className={`text-base leading-relaxed mb-6 ${isDark ? 'text-white/50' : 'text-gray-600'}`}>
            {c.desc}
          </p>

          <div className="flex flex-col gap-3">
            {contactInfo.map(({ icon, label, val, href }) => (
              <motion.div
                key={label}
                whileHover={{ x: 4 }}
                className={`flex items-center gap-4 p-4 rounded-xl border transition-all ${
                  isDark
                    ? 'bg-ink-800 border-white/[0.08] hover:border-orange-500/30'
                    : 'bg-white border-gray-100 shadow-sm hover:shadow-md hover:border-orange-100'
                }`}
              >
                {/* Icon box */}
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0 ${
                  isDark ? 'bg-orange-500/10 border border-orange-500/20' : 'bg-orange-50 border border-orange-100'
                }`}>
                  {icon}
                </div>

                <div className="min-w-0">
                  <div className={`text-[0.67rem] font-bold tracking-widest uppercase mb-0.5 ${isDark ? 'text-white/35' : 'text-gray-400'}`}>
                    {label}
                  </div>
                  {href ? (
                    <a href={href} className={`text-sm font-semibold truncate hover:text-orange-500 transition-colors ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {val}
                    </a>
                  ) : (
                    <span className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>{val}</span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </MView>

        {/* Right: form */}
        <MView variants={fadeRight}>
          <div className={`rounded-2xl p-8 border ${
            isDark ? 'bg-ink-800 border-white/10' : 'bg-white border-gray-100 shadow-2xl'
          }`}>
            <h3 className={`font-display font-bold text-xl mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {c.formTitle}
            </h3>
            <p className={`text-sm mb-6 ${isDark ? 'text-white/40' : 'text-gray-500'}`}>
              {c.formDesc}
            </p>

            <form onSubmit={submit} noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                <div>
                  <label className={`block text-xs font-semibold mb-1.5 ${isDark ? 'text-white/60' : 'text-gray-700'}`}>{c.fname}</label>
                  <input value={form.fname} onChange={set('fname')} placeholder="John" className={inputCls} />
                </div>
                <div>
                  <label className={`block text-xs font-semibold mb-1.5 ${isDark ? 'text-white/60' : 'text-gray-700'}`}>{c.lname}</label>
                  <input value={form.lname} onChange={set('lname')} placeholder="Smith" className={inputCls} />
                </div>
                <div>
                  <label className={`block text-xs font-semibold mb-1.5 ${isDark ? 'text-white/60' : 'text-gray-700'}`}>{c.email}</label>
                  <input type="email" value={form.email} onChange={set('email')} placeholder="john@company.com" className={inputCls} />
                </div>
                <div>
                  <label className={`block text-xs font-semibold mb-1.5 ${isDark ? 'text-white/60' : 'text-gray-700'}`}>{c.phone}</label>
                  <input type="tel" value={form.phone} onChange={set('phone')} placeholder="+1 (555) 000-0000" className={inputCls} />
                </div>
              </div>

              <div className="mb-3">
                <label className={`block text-xs font-semibold mb-1.5 ${isDark ? 'text-white/60' : 'text-gray-700'}`}>{c.service}</label>
                <select value={form.service} onChange={set('service')} className={inputCls}>
                  <option value="">{c.servicePlaceholder}</option>
                  {c.services.map((s) => <option key={s}>{s}</option>)}
                </select>
              </div>

              <div className="mb-5">
                <label className={`block text-xs font-semibold mb-1.5 ${isDark ? 'text-white/60' : 'text-gray-700'}`}>{c.message}</label>
                <textarea
                  value={form.message}
                  onChange={set('message')}
                  rows={4}
                  placeholder={c.messagePlaceholder}
                  className={`${inputCls} resize-y`}
                />
              </div>

              <motion.button
                whileHover={status === 'idle' ? { y: -2 } : {}}
                whileTap={status === 'idle' ? { scale: 0.98 } : {}}
                type="submit"
                disabled={status === 'success' || status === 'loading'}
                className="w-full py-3.5 rounded-xl text-white font-display font-bold text-base disabled:opacity-80 transition-all"
                style={{ background: btnBg, boxShadow: '0 6px 24px rgba(255,122,0,.28)' }}
              >
                {btnLabel}
              </motion.button>
            </form>
          </div>
        </MView>
      </div>
    </section>
  )
}
