import { NextFetchEvent, NextRequest, NextResponse } from 'next/server'
import { CustomMiddleware, type MiddlewareFactory } from './chain'
import { createI18nMiddleware } from 'next-international/middleware'

export const withI18nMiddleware: MiddlewareFactory = (
  CustomMiddleware: CustomMiddleware,
): CustomMiddleware => {
  return async (
    request: NextRequest,
    event: NextFetchEvent,
    response: NextResponse,
  ) => {
    const i18nMiddleware = createI18nMiddleware({
      locales: ['en', 'cn'],
      // using en when dismatch the user locale
      defaultLocale: 'en',
    })

    response = i18nMiddleware(request)
    return CustomMiddleware(request, event, response)
  }
}
