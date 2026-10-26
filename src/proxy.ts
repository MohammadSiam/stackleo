import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// English is served without a prefix (/lenden -> /en/lenden internally); Bangla lives under /bn
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (pathname === '/bn' || pathname.startsWith('/bn/')) return

  if (pathname === '/en' || pathname.startsWith('/en/')) {
    const url = request.nextUrl.clone()
    url.pathname = pathname.slice(3) || '/'
    return NextResponse.redirect(url, 308)
  }

  const url = request.nextUrl.clone()
  url.pathname = `/en${pathname}`
  return NextResponse.rewrite(url)
}

export const config = {
  // Skip API, Next internals, metadata routes and any file with an extension
  matcher: ['/((?!api|_next|opengraph-image|.*\\..*).*)'],
}
