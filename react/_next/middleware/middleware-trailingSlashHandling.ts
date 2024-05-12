const legacyPrefixes = ['/docs', '/blog']
import NextResponse from 'next/server';
export default async function middleware(res: NextResponse, req) {
  const { pathname } = req.nextUrl
 
  if (legacyPrefixes.some((prefix) => pathname.startsWith(prefix))) {
    return res.next()
  }
 
  // apply trailing slash handling
  if (
    !pathname.endsWith('/') &&
    !pathname.match(/((?!\.well-known(?:\/.*)?)(?:[^/]+\/)*[^/]+\.\w+)/)
  ) {
    req.nextUrl.pathname += '/'
    return NextResponse.redirect(req.nextUrl)
  }
}