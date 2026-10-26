import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Outfit, DM_Sans, Hind_Siliguri } from 'next/font/google'
import { ThemeProvider } from '@/lib/theme'
import CustomCursor from '@/components/ui/CustomCursor'
import { I18nProvider } from '@/i18n/I18nProvider'
import { getDictionary } from '@/i18n/get-dictionary'
import { hasLocale, localePath, locales } from '@/i18n/config'
import '../globals.css'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

// Fallback for Bangla glyphs, which Outfit/DM Sans don't have
const hindSiliguri = Hind_Siliguri({
  subsets: ['bengali'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-bangla',
  display: 'swap',
})

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export async function generateMetadata({ params }: LayoutProps<'/[lang]'>): Promise<Metadata> {
  const { lang } = await params
  if (!hasLocale(lang)) return {}
  const { meta } = await getDictionary(lang)

  return {
    metadataBase: new URL('https://stackleo.com'),
    title: { default: meta.title, template: '%s | StackLeo' },
    description: meta.description,
    keywords: [
      'software development Bangladesh',
      'web application development',
      'mobile app development',
      'SaaS development',
      'Next.js development',
      'React development',
      'software company Dhaka',
      'StackLeo',
    ],
    authors: [{ name: 'StackLeo', url: 'https://stackleo.com' }],
    creator: 'StackLeo',
    alternates: {
      canonical: localePath(lang, '/'),
      languages: { en: '/', bn: '/bn' },
    },
    openGraph: {
      type: 'website',
      locale: lang === 'bn' ? 'bn_BD' : 'en_US',
      url: localePath(lang, '/'),
      siteName: 'StackLeo',
      title: meta.title,
      description: meta.ogDescription,
      images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.ogDescription,
      images: ['/opengraph-image'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
    },
  }
}

export default async function RootLayout({ children, params }: LayoutProps<'/[lang]'>) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()
  const dict = await getDictionary(lang)

  return (
    <html
      lang={lang}
      className={`${outfit.variable} ${dmSans.variable} ${hindSiliguri.variable} scroll-smooth`}
      data-theme="dark"
      suppressHydrationWarning
    >
      <body className="bg-ink-900 text-gray-100 font-body antialiased" suppressHydrationWarning>
        <I18nProvider lang={lang} dict={dict}>
          <ThemeProvider>
            <CustomCursor />
            {children}
          </ThemeProvider>
        </I18nProvider>
      </body>
    </html>
  )
}
