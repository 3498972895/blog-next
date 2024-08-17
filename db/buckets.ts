export const SUPABASE_BUCKET_POSTS = 'posts'
export const SUPABASE_BUCKET_POST_PHOTOS = 'post_photos'
export const SUPABASE_BUCKET_GALLERY = 'gallery'
export const SUPABASE_BUCKET_COVERS = 'covers'


export const SUPABASE_STORAGE = 'storage_blog_next'
export const SUPABASE_STORAGE_PATH = `https://qobbkzgkhyhjpqvjzpwi.supabase.co/storage/v1/object/public/${SUPABASE_STORAGE}`

export type SupabaseBucket =
  | typeof SUPABASE_BUCKET_POSTS
  | typeof SUPABASE_BUCKET_POST_PHOTOS
  | typeof SUPABASE_BUCKET_GALLERY
  | typeof SUPABASE_BUCKET_COVERS
