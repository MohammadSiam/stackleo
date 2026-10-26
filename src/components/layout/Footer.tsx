'use client'

import BrandIcon from '@/components/ui/BrandIcon'
import { useI18n } from '@/i18n/I18nProvider'

const socials = [
  { label: 'LinkedIn', char: 'in', href: 'https://www.linkedin.com/company/stackleo/' },
  { label: 'Facebook', char: 'f',  href: 'https://www.facebook.com/StackLeoBD' },
]

export default function Footer() {
  const { t } = useI18n()
  const f = t.footer
  const columns = [
    { title: f.servicesTitle, links: f.services },
    { title: f.companyTitle, links: f.company },
    { title: f.contactTitle, links: ['hello@stackleo.com', 'www.stackleo.com', f.location, '+880 1913-519903'] },
  ]

  return (
    <footer className="pt-16 pb-8 px-[5%] border-t border-white/5" style={{ backgroundColor: '#08080C' }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-10 mb-12">
          {/* Brand column */}
          <div>
            <a href="#hero" className="flex items-center gap-2.5 mb-3">
              <BrandIcon variant="orange" size={32} />
              <span className="font-display font-extrabold text-lg tracking-tight grad-text">StackLeo</span>
            </a>
            <p className="text-sm text-white/35 leading-relaxed max-w-[240px] mb-4">
              {f.tagline}
            </p>
            <div className="flex gap-2">
              {socials.map(({ label, char, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/[0.05] border border-white/10 flex items-center justify-center text-white/40 text-sm
                    transition-all duration-200 hover:bg-orange-500/15 hover:text-orange-300 hover:-translate-y-0.5"
                >
                  {char}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {columns.map(({ title, links }) => (
            <div key={title}>
              <div className="text-white/75 font-display font-bold text-xs tracking-widest uppercase mb-4">
                {title}
              </div>
              <ul className="flex flex-col gap-2.5 list-none m-0 p-0">
                {links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-white/35 hover:text-orange-400 transition-colors">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-wrap justify-between items-center pt-6 border-t border-white/5 gap-4">
          <p className="text-xs text-white/25">
            &copy; 2026 <span className="font-bold grad-text">StackLeo</span>. {f.rights}
          </p>
          <div className="flex gap-5">
            {[f.privacy, f.terms].map((label) => (
              <a key={label} href="#" className="text-xs text-white/25 hover:text-orange-400 transition-colors">
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
