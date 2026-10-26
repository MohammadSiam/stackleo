import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import LendenLanding from '@/components/lenden/LendenLanding'
import { getDictionary } from '@/i18n/get-dictionary'
import { hasLocale, localePath } from '@/i18n/config'

export async function generateMetadata({ params }: PageProps<'/[lang]/lenden'>): Promise<Metadata> {
  const { lang } = await params
  if (!hasLocale(lang)) return {}
  const { meta } = (await getDictionary(lang)).lenden
  return {
    title: { absolute: meta.title },
    description: meta.description,
    keywords: [
      'IT shop POS software Bangladesh',
      'POS software Bangladesh',
      'inventory software for computer shop',
      'serial number tracking software',
      'warranty management software',
      'আইটি শপ সফটওয়্যার',
      'দোকানের হিসাব সফটওয়্যার',
      'LenDen',
    ],
    alternates: {
      canonical: localePath(lang, '/lenden'),
      languages: { en: '/lenden', bn: '/bn/lenden' },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: localePath(lang, '/lenden'),
      images: ['/projects/lenden.stackleo.com.png'],
    },
  }
}

export default async function LendenPage({ params }: PageProps<'/[lang]/lenden'>) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()
  const { meta } = (await getDictionary(lang)).lenden

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'LenDen',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Android, iOS',
    description: meta.description,
    url: `https://stackleo.com${localePath(lang, '/lenden')}`,
    inLanguage: lang,
    publisher: { '@type': 'Organization', name: 'StackLeo', url: 'https://stackleo.com' },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />
      <Nav />
      <main>
        <LendenLanding />
      </main>
      <Footer />
    </>
  )
}
