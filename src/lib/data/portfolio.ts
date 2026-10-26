import type { Dictionary } from '@/i18n/dictionaries/en'

export type ProjectSlug = keyof Dictionary['portfolio']['projects']

export type Project = {
  slug: ProjectSlug
  image: string
  tags: readonly string[]
  liveUrl?: string
  // Dedicated marketing page, if the product has one
  page?: string
}

export const projects: readonly Project[] = [
  {
    slug: 'outfit',
    image: 'projects/outfit.stackleo.com.png',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Prisma'],
    liveUrl: 'https://outfit.stackleo.com',
  },
  {
    slug: 'helix',
    image: 'projects/helix.stackleo.com.png',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Prisma'],
  },
  {
    slug: 'lenden',
    image: 'projects/lenden.stackleo.com.png',
    tags: ['React', 'NestJS', 'PostgreSQL', 'TypeORM', 'Docker'],
    liveUrl: 'https://lenden.stackleo.com',
    page: '/lenden',
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}
