'use server'

import { uploadImage } from '@/db/handlers/bucketsHandler'
import { isImageLinksExist } from '@/lib/handlerUtils'

export async function needsImages(extractedUrls: string[]) {
  let needs: any[] = []
  extractedUrls.forEach(async url =>
    (await isImageLinksExist(url)) ? needs.push(true) : needs.push(false),
  )
  return needs
}

export async function uploadImageStage(formData: FormData, needs: number) {
  const imageUrls: string[] = []
  for (let i = 0; i < needs; i++) {
    try {
      const imageFile = formData.get(i as unknown as string) as File
      const url = await uploadImage(imageFile, 'post_photos')
      imageUrls.push(url)
    } catch (error) {
      throw error
    }
  }
  return imageUrls
}
