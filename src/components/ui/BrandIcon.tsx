interface BrandIconProps {
  size?: number
  className?: string
  variant?: 'orange' | 'purple'
}

export default function BrandIcon({ size = 40, className = '', variant = 'orange' }: BrandIconProps) {
  const gradId = `brand-grad-${variant}`
  const gradColors =
    variant === 'purple'
      ? { from: '#9B3FFF', to: '#7B2FFF' }
      : { from: '#E84A00', to: '#FF7A00' }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="40" height="40" rx="10" fill={`url(#${gradId})`} />
      <path
        d="M10 14L18 20L10 26"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 26H30"
        stroke="#FFB800"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor={gradColors.from} />
          <stop offset="1" stopColor={gradColors.to} />
        </linearGradient>
      </defs>
    </svg>
  )
}
