import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import { projects, getProjectBySlug } from '@/lib/data/portfolio'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) return {}
  return {
    title: `${project.name} — Stackleo`,
    description: project.desc,
    openGraph: { images: [`/${project.image}`] },
  }
}

export default async function PortfolioDetailPage({ params }: Props) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) notFound()

  const { image, cat, name, longDesc, tags, impact, liveUrl } = project

  return (
    <>
      <Nav />
      <main className="pt-[70px] min-h-screen bg-page">
        <div className="max-w-[960px] mx-auto px-[5%] py-16">

          <Link
            href="/#portfolio"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-fg mb-10 transition-colors"
          >
            ← Back to Portfolio
          </Link>

          {/* Hero image */}
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-line mb-10">
            <Image
              src={`/${image}`}
              alt={name}
              fill
              sizes="(max-width:960px)100vw,960px"
              className="object-cover"
              priority
            />
          </div>

          {/* Category */}
          <div className="text-[0.65rem] font-bold tracking-widest uppercase grad-text mb-2">
            {cat}
          </div>

          {/* Title */}
          <h1
            className="font-display font-black text-fg mb-5"
            style={{ fontSize: 'clamp(1.8rem,4vw,3rem)' }}
          >
            {name}
          </h1>

          {/* Description */}
          <p className="text-base leading-relaxed text-muted mb-8 max-w-[680px]">
            {longDesc}
          </p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {tags.map((t) => (
              <span key={t} className="text-xs font-semibold px-3 py-1 rounded-md bg-orange-600 text-white">
                {t}
              </span>
            ))}
          </div>

          {/* Impact + Live button row */}
          <div className="flex flex-wrap items-center gap-4">
            <div className="inline-flex items-center gap-2 text-sm border border-line rounded-xl px-4 py-3 bg-card text-dim">
              <span>📈</span> {impact}
            </div>

            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-white font-display font-bold text-sm transition-all hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(90deg,#E84A00,#FF7A00,#FFB800)', boxShadow: '0 6px 24px rgba(255,122,0,.28)' }}
              >
                View Live Site →
              </a>
            )}
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
