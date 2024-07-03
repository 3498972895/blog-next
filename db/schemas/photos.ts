import { relations } from 'drizzle-orm'
import { pgTable, serial, text } from 'drizzle-orm/pg-core'
import { postsToPhotos } from './postsToPhotos'

export const photos = pgTable('photos', {
  id: serial('id').primaryKey(),
  url: text('url').unique(),
})

export const photosRelations = relations(photos, ({ many }) => ({
    postsTophotos:many(postsToPhotos)
}))
