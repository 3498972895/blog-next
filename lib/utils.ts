import 'dotenv/config'
import { supabase } from '../db/supabaseClient'
import ErrorTypes from './ErrorTypes'

export async function uploadFile(file: File, folder: string) {
  const fileName = getUniqueFileName(file.name)
  const uploadPath = `/${folder}/${fileName}`

  const { error } = await supabase.storage
    .from(process.env.SUPABASE_BUCKET_NAME!)
    .upload(uploadPath, file)
  if (error) {
    throw new Error(`${ErrorTypes.UPLOAD_FAILED} : Failed to Upload File`)
  } else {
    const filePath = `${process.env.SUPABASE_BUCKET_FULL_NAME}/${folder}/${fileName}`
    return filePath
  }
}

export async function uploadImage(image: File, folder: string) {
  try {
    const imagePath = await uploadFile(image, folder)
    return imagePath
  } catch (error) {
    throw error
  }
}

export async function uploadMD(file: File) {
  const filePath = await uploadFile(
    file,
    process.env.SUPABASE_BUCKET_FOLDER_POSTS!,
  )
  return filePath
}

export function isMD(file: File) {
  const { extension } = getFilenameParts(file.name)
  if (extension !== 'md') return false
  return true
}
export function transfromToMDFile(soureInput: string) {
  const filename = getUniqueFileName('md')
  const mdFile = new File([soureInput], `${filename}.md`)
  return mdFile
}

export function hasImageInMD(file: File) {
  const fileContent = file.toString()
  const regex = /!\[.*\]\((.*?)\)/g
  return regex.test(fileContent)
}
export function extractImageUrls(file: File) {
  const fileContent = file.toString()
  const imageUrls = []
  const regex = /!\[.*\]\((.*?)\)/g
  let match
  while ((match = regex.exec(fileContent))) {
    const imageUrl = match[1]
    imageUrls.push(imageUrl)
  }
  return imageUrls
}
export function isValidFormatOfImageUrl(url: string): boolean {
  const regex = /^https?:\/\/.*\.(jpg|jpeg|png|gif|svg)$/i
  return regex.test(url)
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

export function isNumeric(str: string): boolean {
  return /^-?\d+(\.\d+)?$/.test(str)
}
