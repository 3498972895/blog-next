import {
    NextMiddlewareResult,
} from 'next/dist/server/web/types'
import { NextFetchEvent, NextRequest, NextResponse } from 'next/server'

export type CustomMiddleware = (
    request: NextRequest,
    event: NextFetchEvent,
    response: NextResponse,
) => NextMiddlewareResult | Promise<NextMiddlewareResult>


export type MiddlewareFactory = (
    customMiddleware: CustomMiddleware,
) => CustomMiddleware

export function chain(
    middlewareFactorys: MiddlewareFactory[],
    index = 0,
): CustomMiddleware {
    const current = middlewareFactorys[index]
    if (current) {
        const next = chain(middlewareFactorys, index + 1)
        return current(next)
    }
    return (
        request: NextRequest,
        event: NextFetchEvent,
        response: NextResponse,
    ) => response
}
