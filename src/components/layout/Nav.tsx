'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '@/lib/theme'

const links: [string, string][] = [
  ['About', 'about'],
  ['Services', 'services'],
  ['Why Us', 'why-us'],
  ['Portfolio', 'portfolio'],
  ['Contact', 'contact'],
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { isDark, toggleTheme } = useTheme()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const handleLink = (id: string) => {
    setMenuOpen(false)
    const el = document.getElementById(id)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-[100]">
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`h-[70px] px-[5%] flex items-center justify-between transition-all duration-300 backdrop-blur-xl
          ${isDark
            ? `bg-ink-900/85 border-b border-white/10 ${scrolled ? 'shadow-2xl shadow-black/40' : ''}`
            : `bg-[#FAFAF8]/90 border-b border-orange-100 ${scrolled ? 'shadow-lg shadow-orange-900/10' : ''}`
          }`}
      >
        {/* Logo */}
        <button
          onClick={() => handleLink('hero')}
          className="focus-visible:outline-none"
          aria-label="StackLeo home"
        >
          <img src="/logo.svg" alt="StackLeo" style={{ height: 28, width: 'auto' }} />
        </button>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-1 list-none m-0 p-0" aria-label="Primary navigation">
          {links.map(([label, id]) => (
            <li key={id}>
              <button
                onClick={() => handleLink(id)}
                className={`px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all ${
                  isDark
                    ? 'text-white/55 hover:text-white hover:bg-white/[0.07]'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-orange-50'
                }`}
              >
                {label}
              </button>
            </li>
          ))}

          {/* Theme toggle */}
          <li className="ml-2">
            <motion.button
              whileTap={{ scale: 0.92 }}
              onClick={toggleTheme}
              className={`p-2 rounded-lg text-base transition-colors ${
                isDark ? 'bg-white/[0.07] hover:bg-white/10' : 'bg-gray-100 hover:bg-orange-100'
              }`}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? '☀️' : '🌙'}
            </motion.button>
          </li>

          {/* CTA */}
          <li>
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => handleLink('contact')}
              className="ml-1 px-4 py-2 rounded-lg text-sm font-bold text-white bg-gradient-to-r from-orange-600 to-orange-400 glow"
            >
              Get a Quote
            </motion.button>
          </li>
        </ul>

        {/* Mobile: theme + hamburger */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-base"
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? '☀️' : '🌙'}
          </button>
          <button
            className="flex flex-col gap-1.5 p-1"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <motion.span
              animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 8 : 0 }}
              className={`block w-6 h-0.5 rounded-full origin-center ${isDark ? 'bg-white' : 'bg-gray-800'}`}
            />
            <motion.span
              animate={{ opacity: menuOpen ? 0 : 1 }}
              className={`block w-6 h-0.5 rounded-full ${isDark ? 'bg-white' : 'bg-gray-800'}`}
            />
            <motion.span
              animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -8 : 0 }}
              className={`block w-6 h-0.5 rounded-full origin-center ${isDark ? 'bg-white' : 'bg-gray-800'}`}
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className={`lg:hidden overflow-hidden border-b backdrop-blur-xl ${
              isDark ? 'bg-ink-900/95 border-ink-700' : 'bg-[#FAFAF8]/95 border-orange-100'
            }`}
          >
            <nav className="flex flex-col px-6 py-4 gap-1" aria-label="Mobile navigation">
              {links.map(([label, id], i) => (
                <motion.button
                  key={id}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => handleLink(id)}
                  className={`text-left px-4 py-3 rounded-lg transition-colors ${
                    isDark
                      ? 'text-gray-300 hover:text-white hover:bg-ink-700/50'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  {label}
                </motion.button>
              ))}
              <button
                onClick={() => handleLink('contact')}
                className="mt-2 px-5 py-3 text-sm font-bold rounded-xl bg-gradient-to-r from-orange-600 to-orange-400 text-white text-center"
              >
                Get a Quote
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
