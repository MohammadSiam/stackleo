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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map(({ slug, image, cat, name, desc, tags }) => (
              <Link
                key={slug}
                href={`/portfolio/${slug}`}
                className="group rounded-2xl overflow-hidden border flex flex-col
                  transition-all duration-300 hover:-translate-y-2
                  bg-card border-line shadow-sm hover:shadow-2xl hover:border-orange-500/25"
              >
                {/* Image with hover overlay */}
                <div className="relative h-52 shrink-0 overflow-hidden">
                  <Image
                    src={`/${image}`}
                    alt={name}
                    fill
                    sizes="(max-width:640px)100vw,(max-width:1024px)50vw,33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Dark gradient overlay — always present, stronger on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent
                    opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                  {/* View Case Study CTA — slides up on hover */}
                  <div className="absolute inset-0 flex items-center justify-center
                    opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white
                      border border-white/30 backdrop-blur-sm bg-white/10">
                      View Case Study →
                    </span>
                  </div>

                  {/* Category chip — bottom left of image */}
                  <div className="absolute bottom-3 left-3 text-[0.6rem] font-bold tracking-widest uppercase
                    px-2.5 py-1 rounded-md bg-black/50 text-white/90 backdrop-blur-sm">
                    {cat}
                  </div>
                </div>

                {/* Card body */}
                <div className="p-5 flex flex-col flex-1">
                  <div className="font-display font-bold text-[0.95rem] leading-snug text-fg mb-2">{name}</div>
                  <div className="text-sm leading-relaxed text-faint mb-4 flex-1">{desc}</div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {tags.slice(0, 4).map((t) => (
                      <span key={t} className="text-[0.65rem] font-semibold px-2 py-0.5 rounded-md bg-orange-600 text-white">
                        {t}
                      </span>
                    ))}
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
