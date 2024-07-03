import { date, integer, pgTable, serial, text } from 'drizzle-orm/pg-core'
import { photos } from './photos'

export const galleries = pgTable('galleries', {
  id: serial('id').primaryKey(),
  title: text('title'),
  where: text('where'),
  when: date('when'),
  photoId: integer('photo_id').references(() => photos.id),
})
