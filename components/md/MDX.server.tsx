import { getPost, getPostInfoById } from '@/db/handlers/postsHandler'
import ErrorTypes from '@/lib/ErrorTypes'
import { isNumeric } from '@/lib/utils'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { cache } from 'react'
import { mdxComponents } from './mdxComponents'

const MDXServer = async({ postId }: { postId: string })=> {
  const source = await getMDSource(postId)
  return <MDXRemote components={mdxComponents} source={source} />
}

const getMDSource = cache(async (postId: string) => {
  try {
    if (!isNumeric(postId))
      throw new Error(`${ErrorTypes.PARAM_ERROR} : Param(s) Not Correct`)
    const item = await getPostInfoById(postId)
    if (item.length === 0)
      throw new Error(`${ErrorTypes.NOT_FOUND} : Post Do Not Exist`)
    const mdUnit8Array = await getPost(item[0].mdUrl)
    return mdUnit8Array
  } catch (error) {
    throw error
  }
})

export default MDXServer