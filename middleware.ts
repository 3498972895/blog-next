import { chain } from './middlewares/chain'
import { withI18nMiddleware } from '@/middlewares/withI18nMiddleware'
import { withSimpleMiddleware } from '@/middlewares/withSimpleMiddleware'

export default chain([ withSimpleMiddleware,withI18nMiddleware])

export const config = {
/* match everything except api, static resource, hidden files, _next files, favicon.icon, rebots.txt */
matcher: ['/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)']
}
