import { NextFetchEvent, NextRequest, NextResponse } from 'next/server'
import { CustomMiddleware, type MiddlewareFactory } from './chain'
import createMiddleware from 'next-intl/middleware'
import { locales } from '@/i18n'

export const withI18nMiddleware: MiddlewareFactory = (
  CustomMiddleware: CustomMiddleware,
): CustomMiddleware => {
  return async (
    request: NextRequest,
    event: NextFetchEvent,
    response: NextResponse,
  ) => {
    const handle18nRouting = createMiddleware({
      locales,
      defaultLocale: 'en',
      localeDetection: false,
    })
    response = handle18nRouting(request)
    return CustomMiddleware(request, event, response)
  }
}
