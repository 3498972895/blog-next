import { relations } from 'drizzle-orm'
import { pgTable, serial, varchar } from 'drizzle-orm/pg-core'
import { postsToTags } from './postsToTags'

export const tags = pgTable('tags', {
  id: serial('id').primaryKey(),
  tagName: varchar('tag_name', { length: 20 }).notNull(),
})
export const tagsRelations = relations(tags, ({ many }) => ({
  postsToTags: many(postsToTags),
}))
