import {
  NextFetchEvent,
  NextRequest,
  NextResponse,
} from 'next/server'
import { CustomMiddleware, MiddlewareFactory } from './chain'

export const withSimpleMiddleware: MiddlewareFactory = (
  customMiddleware: CustomMiddleware,
) => {
  return function (
    request: NextRequest,
    event: NextFetchEvent,
    response: NextResponse,
  ) {
    return customMiddleware(request, event, response)
  }
}
