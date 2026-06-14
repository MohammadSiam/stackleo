export type Project = {
  slug: string
  image: string
  cat: string
  label: string
  name: string
  desc: string
  longDesc: string
  problem: string
  features: readonly string[]
  tags: readonly string[]
  impact: string
  liveUrl?: string
}

export const projects: readonly Project[] = [
  {
    slug: 'outfit',
    image: 'projects/outfit.stackleo.com.png',
    cat: 'Retail / POS',
    label: 'In-house SaaS Product',
    name: 'Outfit — Point of Sale System',
    desc: 'A modern POS system built for fashion retail stores — fast billing, inventory management, and sales reporting in one place.',
    longDesc: 'Outfit is a purpose-built Point of Sale system for fashion retail businesses. It streamlines the entire sales workflow — from product management and barcode scanning to invoice generation and daily sales reports. The system includes an inventory module with low-stock alerts, a customer management panel, and a clean cashier interface designed for speed at the counter.',
    problem: 'Fashion retailers in Bangladesh were managing inventory, billing, and staff operations on spreadsheets and paper. There was no affordable POS built for the specific needs of local fashion stores — sizing variations, multi-branch stock, and fast counter billing.',
    features: ['Barcode-based billing', 'Real-time inventory tracking', 'Staff roles & permissions', 'Daily sales reports'],
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Prisma'],
    impact: 'Fast billing · inventory tracking · sales reports',
    liveUrl: 'https://outfit.stackleo.com',
  },
  {
    slug: 'helix',
    image: 'projects/helix.stackleo.com.png',
    cat: 'E-Commerce / SaaS',
    label: 'In-house SaaS Product',
    name: 'Helix Commerce — E-Commerce Platform',
    desc: 'A full-featured multi-vendor e-commerce platform with real-time analytics, order management, and a powerful admin dashboard.',
    longDesc: 'Helix Commerce is a SaaS e-commerce platform built for modern online businesses. It provides merchants with a comprehensive admin panel — covering revenue analytics, order tracking, product and inventory management, customer insights, and traffic source breakdowns. The platform supports multi-vendor setups, coupon and review management, and a built-in marketing module, all wrapped in a clean, fast dashboard interface.',
    problem: 'Growing e-commerce businesses needed a unified platform to manage orders, vendors, inventory, and analytics — without juggling multiple tools. Existing solutions were either too expensive or too rigid for local and regional merchants.',
    features: ['Real-time revenue & order analytics', 'Multi-vendor & multi-plan support', 'Inventory & product management', 'Traffic source & conversion tracking'],
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Prisma'],
    impact: 'Multi-vendor · real-time analytics · full commerce stack',
  },
  {
    slug: 'lenden',
    image: 'projects/lenden.stackleo.com.png',
    cat: 'IT Retail / POS',
    label: 'In-house SaaS Product',
    name: 'LenDen — POS for IT Shops',
    desc: 'A tailored Point of Sale system for IT product shops — manage products, process sales, and track stock with ease.',
    longDesc: 'LenDen is a Point of Sale solution designed specifically for IT hardware and accessories retailers. It handles product cataloguing with category and brand filters, barcode-based billing, due/credit tracking for trusted customers, and detailed sales analytics. The system is optimised for the fast-paced environment of IT shops where quick lookup and accurate stock counts are critical.',
    problem: 'IT shops in Bangladesh had no POS system built for their specific product types — accessories, parts, and repair services. Generic billing software couldn\'t handle the nuances of IT retail: supplier ledgers, repair job tracking, and multi-category stock.',
    features: ['Part & accessory cataloguing', 'Supplier ledger management', 'Repair job tracking', 'Multi-branch support'],
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Docker'],
    impact: 'IT shop ready · credit tracking · stock management',
    liveUrl: 'https://lenden.stackleo.com',
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}
