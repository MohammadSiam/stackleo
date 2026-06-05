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
    cat: 'Retail / POS',
    name: 'Outfit — Point of Sale System',
    desc: 'A modern POS system built for fashion retail stores — fast billing, inventory management, and sales reporting in one place.',
    longDesc: 'Outfit is a purpose-built Point of Sale system for fashion retail businesses. It streamlines the entire sales workflow — from product management and barcode scanning to invoice generation and daily sales reports. The system includes an inventory module with low-stock alerts, a customer management panel, and a clean cashier interface designed for speed at the counter.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Prisma'],
    impact: 'Fast billing · inventory tracking · sales reports',
    liveUrl: 'https://outfit.stackleo.com',
  },
  {
    slug: 'lenden',
    image: 'projects/lenden.stackleo.com.png',
    cat: 'IT Retail / POS',
    name: 'LenDen — POS for IT Shops',
    desc: 'A tailored Point of Sale system for IT product shops — manage products, process sales, and track stock with ease.',
    longDesc: 'LenDen is a Point of Sale solution designed specifically for IT hardware and accessories retailers. It handles product cataloguing with category and brand filters, barcode-based billing, due/credit tracking for trusted customers, and detailed sales analytics. The system is optimised for the fast-paced environment of IT shops where quick lookup and accurate stock counts are critical.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Docker'],
    impact: 'IT shop ready · credit tracking · stock management',
    liveUrl: 'https://lenden.stackleo.com',
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}
