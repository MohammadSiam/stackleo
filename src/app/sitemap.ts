import type { MetadataRoute } from 'next'
import { projects } from '@/lib/data/portfolio'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://stackleo.com',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...projects.map((p) => ({
      url: `https://stackleo.com/portfolio/${p.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ]
}
