export type Project = {
  slug: string
  image: string
  cat: string
  name: string
  desc: string
  longDesc: string
  tags: readonly string[]
  impact: string
  liveUrl?: string
}

export const projects: readonly Project[] = [
  {
    slug: 'outfit',
    image: 'projects/outfit.stackleo.com.png',
    cat: 'Fashion / E-Commerce',
    name: 'Outfit — Online Fashion Store',
    desc: 'A modern fashion e-commerce platform with curated collections, seamless checkout, and a personalised shopping experience.',
    longDesc: 'Outfit is a full-featured fashion retail platform built for speed and conversion. It features a dynamic product catalogue with advanced filtering, a mobile-first responsive UI, Stripe-powered secure checkout, and an admin dashboard for inventory and order management. The platform delivers a smooth, branded shopping experience optimised for high traffic.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe', 'PostgreSQL', 'Vercel'],
    impact: 'Live store · fast checkout · mobile-optimised',
    liveUrl: 'https://outfit.stackleo.com',
  },
  {
    slug: 'lenden',
    image: 'projects/lenden.stackleo.com.png',
    cat: 'FinTech / Lending',
    name: 'LenDen — Peer Lending Platform',
    desc: 'A transparent peer-to-peer lending platform enabling individuals to lend and borrow with flexible terms and real-time tracking.',
    longDesc: 'LenDen is a FinTech platform that connects lenders and borrowers directly, cutting out traditional intermediaries. It features automated loan matching, repayment scheduling, interest calculation, and a live dashboard for tracking portfolio performance. Built with security and compliance at its core, LenDen simplifies personal finance for both parties.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Docker'],
    impact: 'Transparent lending · real-time tracking · secure auth',
    liveUrl: 'https://lenden.stackleo.com',
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}
