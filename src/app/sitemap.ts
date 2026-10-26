import type { MetadataRoute } from 'next'
import { projects } from '@/lib/data/portfolio'

const BASE = 'https://stackleo.com'

// Each page in English (root) and Bangla (/bn), linked as alternates
function entry(path: string, priority: number): MetadataRoute.Sitemap[number] {
  const en = `${BASE}${path === '/' ? '' : path}`
  const bn = `${BASE}/bn${path === '/' ? '' : path}`
  return {
    url: en,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority,
    alternates: { languages: { en, bn } },
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    entry('/', 1),
    entry('/lenden', 0.9),
    ...projects.map((p) => entry(`/portfolio/${p.slug}`, 0.7)),
  ]
}
