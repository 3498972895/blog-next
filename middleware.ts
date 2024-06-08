import createMiddleware from 'next-intl/middleware'

export default createMiddleware({
  locales: ['en', 'cn'],
  defaultLocale: 'en',
})

export const config = {
  matcher: ['/', '/(cn|en)/:path*'],
}
