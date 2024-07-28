'use server'
import { uploadImage } from '@/lib/utils/fileIO'

export async function exampleTest(formdata: FormData) {
  const exampleFile = formdata.get('example') as File
  uploadImage(exampleFile, process.env.SUPABASE_BUCKET_FOLDER_POST_PHOTOS!)
}
