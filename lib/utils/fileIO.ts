import 'dotenv/config'
import { supabase } from './supabaseClient'
import UploadFailedError from '../errors/UploadFailedError'

// Upload file using standard upload
export async function uploadFile(file: File, folder: string) {
  const fileName = getUniqueFileName(file.name)
  const uploadPath = `/${folder}/${fileName}`

  const { error } = await supabase.storage
    .from(process.env.SUPABASE_BUCKET_NAME!)
    .upload(uploadPath, file)
  if (error) {
    throw new UploadFailedError()
  } else {
    const filePath = `${process.env.SUPABASE_BUCKET_FULL_NAME}/${folder}/${fileName}`
    return filePath
  }
}

export async function uploadImage(image: File, folder: string) {
  try {
    const imagePath = uploadFile(image, folder)
    return imagePath
  } catch (error) {
    throw error
  }
}

export function hasImageUrlInMD(file: File) {

  return true
}
export function isMD(file: File) {
  const { extension } = getFilenameParts(file.name)
  if (extension !== 'md') return false
  return true
}
function getUniqueFileName(fileName: string) {
  const timestamp = Date.now()
  const randomString = Math.random().toString(36).substring(2, 15)
  const { name, extension } = getFilenameParts(fileName)
  return `${name}-${timestamp}-${randomString}.${extension}`
}
function getFilenameParts(fileName: string) {
  const match = /\.([^.]+)$/.exec(fileName)
  const extension = match ? match[1] : ''
  const name = match ? fileName.substring(0, match.index) : fileName
  return { name, extension }
}
