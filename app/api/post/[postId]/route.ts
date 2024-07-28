export const dynamic = 'auto'
import { getPostById } from '@/db/handlers/postsHandler'
import { NextResponse } from 'next/server'
import NotFoundError from '@/lib/errors/NotFoundError'
import QueryFailedError from '@/lib/errors/QueryFailedError'

export async function GET(
  request: Request,
  { params }: { params: { postId: string } },
) {
  try {
    const data = await getPostById(params.postId as unknown as number)
    if (data.length === 0) throw new NotFoundError()
    return NextResponse.json(data, { status: 200 })
  } catch (error) {
    if (error instanceof QueryFailedError)
      return NextResponse.json({ message: 'Inner Error' }, { status: 500 })
    else if (error instanceof NotFoundError)
      return NextResponse.json(
        { message: 'Can Not Found The Post' },
        { status: 404 },
      )
  }
}

export async function Delete(
  request: Request,
  { params }: { params: { postId: string } },
) {}
