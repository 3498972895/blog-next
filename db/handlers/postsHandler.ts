import { eq } from 'drizzle-orm'

import { db } from '../drizzle'
import { posts } from '../schemas/posts'
import QueryFailedError from '@/lib/errors/QueryFailedError'

export async function getPostById(id: number) {
  try {
    const result = await db.select().from(posts).where(eq(posts.id, id))
    return result
  } catch (error) {
    throw new QueryFailedError()
  }
}

export async function deletePostById(id: number) {
  try {
    const result = await db.delete(posts).where(eq(posts.id, id)).returning()
    return result[0].id
  } catch (error) {
    throw new QueryFailedError()
  }
}

export async function 
