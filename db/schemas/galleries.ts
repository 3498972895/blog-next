import { date,  pgTable, serial, text } from 'drizzle-orm/pg-core'

export const galleries = pgTable('gallery', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  where: text('where'),
  when: date('when'),
  photoUrl: text('photo_url').notNull(),
  createdAt:date('created_at').defaultNow()
})
