import 'dotenv/config'
import { supabase } from '../supabaseClient'
import ErrorTypes from '@/lib/ErrorTypes'
import {
  SUPABASE_STORAGE,
  SUPABASE_STORAGE_PATH,
  SupabaseBucket,
  SUPABASE_BUCKET_GALLERY,
  SUPABASE_BUCKET_COVERS,
  SUPABASE_BUCKET_POST_PHOTOS,
} from '@/db/buckets'
import { getUniqueFileName } from '@/lib/handlerUtils'

export async function uploadFile(file: File, bucket: SupabaseBucket) {
  const fileName = getUniqueFileName(file.name)
  const uploadPath = `/${bucket}/${fileName}`

  const { error } = await supabase.storage
    .from(SUPABASE_STORAGE)
    .upload(uploadPath, file)
  if (error) {
    throw new Error(`${ErrorTypes.UPLOAD_FAILED} : Failed to Upload File`)
  } else {
    const filePath = `${SUPABASE_STORAGE_PATH}/${bucket}/${fileName}`
    return filePath
  }
}

export async function uploadImage(
  image: File,
  bucket: Extract<
    SupabaseBucket,
    typeof SUPABASE_BUCKET_GALLERY | typeof SUPABASE_BUCKET_COVERS | typeof SUPABASE_BUCKET_POST_PHOTOS
  >,
) {
  try {
    const imagePath = await uploadFile(image, bucket)
    return imagePath
  } catch (error) {
    throw error
  }
}

export async function uploadMD(file: File) {
  try {
    const filePath = await uploadFile(file, 'posts')
    return filePath
  } catch (error) {
    throw error
  }
}
