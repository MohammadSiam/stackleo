import type { Metadata } from 'next'
import { Outfit, DM_Sans } from 'next/font/google'
import { ThemeProvider } from '@/lib/theme'
import CustomCursor from '@/components/ui/CustomCursor'
import './globals.css'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://stackleo.com'),
  title: {
    default: 'StackLeo — Software Development Company, Bangladesh',
    template: '%s | StackLeo',
  },
  description:
    'StackLeo builds scalable web apps, mobile apps, SaaS platforms, and enterprise software. Based in Dhaka, Bangladesh — serving clients worldwide.',
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://stackleo.com',
    siteName: 'StackLeo',
    title: 'StackLeo — Software Development Company, Bangladesh',
    description:
      'Building software solutions that empower businesses. Custom web apps, mobile apps, SaaS platforms, and enterprise systems.',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'StackLeo — Software Development Company, Bangladesh',
    description: 'Building software solutions that empower businesses.',
    images: ['/opengraph-image'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${dmSans.variable} scroll-smooth`}
      data-theme="dark"
      suppressHydrationWarning
    >
      <body className="bg-ink-900 text-gray-100 font-body antialiased" suppressHydrationWarning>
        <ThemeProvider>
          <CustomCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
