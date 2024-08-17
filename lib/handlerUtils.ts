import {
  SUPABASE_STORAGE_PATH,
  SUPABASE_BUCKET_POST_PHOTOS,
} from '@/db/buckets'

export function isMD(file: File) {
  const { extension } = getFilenameParts(file.name)
  if (extension !== 'md') return false
  return true
}

export async function hasImageLinkInMD(file: File) {
  const fileContent = await mdToString(file)
  const regex = /(?<=!\[.*?\]\()(.*?)(?=(\s".*?")?\))/gm
  return regex.test(fileContent)
}

export async function extractMatchRegexItem(
  file: File | string,
  regex = /(?<=!\[.*?\]\()(.*?)(?=(\s".*?")?\))/gm,
) {
  let fileContent
  if (file instanceof File) {
    fileContent = await file.text()
  } else fileContent = file
  const urls = fileContent.match(regex) || []
  return urls
}

export async function isImageLinksExist(url: string) {
    const isValidFormatOfImageUrl = (url: string): boolean => {
      const regex = /^https?:\/\/.*\.(jpg|jpeg|png|gif|svg)$/i
      return regex.test(url)
    }
    const isValidFormatFromPostPhotos = (url: string) => {
      return url.startsWith(
        `${SUPABASE_STORAGE_PATH}/${SUPABASE_BUCKET_POST_PHOTOS}`,
      )
    }
    const isExistFromPostPhotos = async (url: string) => {
      try {
        const response = await fetch(url, { method: 'HEAD' })
        return response.ok
      } catch (error) {
        return false
      }
    }
    return (
      isValidFormatOfImageUrl(url) &&
      isValidFormatFromPostPhotos(url) &&
      (await isExistFromPostPhotos(url))
    )
  }
export async function replaceInValidImageLinks(urls: string[], file: string) {
  

  const regex = /(?<=!\[.*?\]\()(.*)(?=\s"?.*?"?\))/gm
  const isvalidArray: boolean[] = []
  urls.forEach(async url => {
    const lru = await isImageLinksExist(url)
    isvalidArray.push(lru)
  })
  let index = 0
  // const slru = await urls
  // const check = await checkImageLinksExist(slru[index])
  let isValid = isvalidArray[index]
  const fileContent = file.replace(regex, match =>
    isValid ? match : 'https://www.baidu.com',
  )
  return fileContent
}

export function getUniqueFileName(fileName: string) {
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

export function stringToMd(fileString: string, title: string) {
  return new File([fileString], getUniqueFileName(`${title}.md`))
}
export function mdToString(file: File) {
  return file.text()
}
