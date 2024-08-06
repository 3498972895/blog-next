import { eq } from 'drizzle-orm'
import { db } from '../drizzle'
import { posts } from '../schemas/posts'
import ErrorTypes from '@/lib/ErrorTypes'

export async function getPostInfoById(id: string) {
  try {
    const result = await db
      .select()
      .from(posts)
      .where(eq(posts.id, id as unknown as number))
    return result
  } catch (error) {
    console.log(error)
    throw new Error(`${ErrorTypes.QUERY_FAILED} : Failed Get Post Info`)
  }
}

export async function deletePostById(id: string) {
  try {
    const result = await db
      .delete(posts)
      .where(eq(posts.id, id as unknown as number))
      .returning()
    return result[0].id
  } catch (error) {
    console.log(error)
    throw new Error(`${ErrorTypes.DELETE_FAILED} : Failed Delete Post Info`)
  }
}
export async function getPost(mdUrl: string) {
  try{
  const mdUnit8Array = await fetch(mdUrl)
    .then(data => data.arrayBuffer())
    .then(buffer => new Uint8Array(buffer))
    return mdUnit8Array
  }catch(error){
    console.log(error)
    throw new Error(`${ErrorTypes.QUERY_FAILED} : Failed Get Post`)

  }
}
