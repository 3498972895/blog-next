import MDXServer from '@/components/md/MDX.server'

export default async function Page({
  params: { locale,postId },
}: { params: { locale:string,postId: string }
}) {
  return (
    <div className='bg-blue-800'>
      <MDXServer postId={postId} />
    </div>
  )
}
