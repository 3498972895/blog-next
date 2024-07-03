import { date, integer, jsonb, pgTable, serial } from 'drizzle-orm/pg-core'
import { photos } from './photos'

export const sharingBooks = pgTable('sharing_books', {
  id: serial('id').primaryKey(),
  createdAt: date('created_at'),
  cover: integer('cover').references(() => photos.id),
  info: jsonb('info').$type<{
    title: string
    authors: string[]
    country: string
    publicationDate: Date
  }>(),
})
