import { date, jsonb, pgTable, serial, text } from 'drizzle-orm/pg-core'

export const sharingBooks = pgTable('sharing_books', {
  id: serial('id').primaryKey(),
  createdAt: date('created_at').defaultNow(),
  coverUrl: text('cover_url'),
  info: jsonb('info').$type<{
    title: string
    authors: string[]
    country: string
    publicationDate: Date
  }>().notNull(),
})
