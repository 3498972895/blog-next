import { chain } from './middlewares/chain'
import { withI18nMiddleware } from '@/middlewares/withI18nMiddleware'
import { withSimpleMiddleware } from './middlewares/withSimpleMiddleware'

export default chain([withSimpleMiddleware,withI18nMiddleware])

// export default function middleware(request: NextRequest) {
//   console.log('hello world')
//   return NextResponse.next()
// }
export const config = {
  matcher: ['/', '/(cn|en)/:path*'],
  // matcher: ['/'],
}
