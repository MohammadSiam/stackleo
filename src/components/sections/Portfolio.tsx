import Image from 'next/image'
import Link from 'next/link'
import MView from '@/components/ui/MView'
import Pill from '@/components/ui/Pill'
import { projects } from '@/lib/data/portfolio'

export default function Portfolio() {
  return (
    <section id="portfolio" aria-label="Portfolio" className="py-24 px-[5%] bg-sect-2">
      <div className="max-w-[1200px] mx-auto">
        <MView className="text-center mb-14">
          <Pill>Portfolio</Pill>
          <h2
            className="font-display font-black tracking-tight mb-3 mt-3 text-fg"
            style={{ fontSize: 'clamp(2rem,3.5vw,3rem)' }}
          >
            Products We&apos;ve <span className="grad-text">Built</span>
          </h2>
          <p className="text-base max-w-[520px] mx-auto leading-relaxed text-muted">
            In-house SaaS products we&apos;ve designed, built, and shipped — solving real problems for real businesses.
          </p>
        </MView>

        <MView>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 items-stretch">
            {projects.map(({ slug, image, cat, label, name, desc, tags, impact, features }) => (
              <Link
                key={slug}
                href={`/portfolio/${slug}`}
                className="group rounded-2xl overflow-hidden border flex flex-col h-full
                  transition-all duration-300 hover:-translate-y-1.5
                  bg-card border-line shadow-md hover:shadow-2xl hover:border-orange-500/20"
              >
                <div className="relative h-48 shrink-0 overflow-hidden">
                  <Image
                    src={`/${image}`}
                    alt={name}
                    fill
                    sizes="(max-width:640px)100vw,50vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* In-house badge */}
                  <div className="absolute top-3 left-3 text-[0.6rem] font-bold tracking-widest uppercase px-2 py-0.5 rounded-md bg-black/60 text-white/80 backdrop-blur-sm">
                    {label}
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <div className="text-[0.65rem] font-bold tracking-widest uppercase mb-1.5 grad-text">{cat}</div>

                  <div className="font-display font-bold text-[0.95rem] mb-2 leading-snug text-fg">{name}</div>

                  <div className="text-sm leading-relaxed mb-3 text-faint">{desc}</div>

                  {/* Key features */}
                  <ul className="mb-3 space-y-1">
                    {features.slice(0, 3).map((f) => (
                      <li key={f} className="flex items-center gap-1.5 text-xs text-muted">
                        <span className="text-orange-500 text-[0.6rem]">▸</span>{f}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {tags.map((t) => (
                      <span key={t} className="text-[0.67rem] font-semibold px-2 py-0.5 rounded-md bg-orange-600 text-white">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto text-xs pt-3 border-t flex items-center gap-1.5 border-line text-dim">
                    <span>📈</span>{impact}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </MView>
      </div>
    </section>
  )
}
