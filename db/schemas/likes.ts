import { integer, pgTable, primaryKey } from 'drizzle-orm/pg-core'
import { posts } from './posts'
import { relations } from 'drizzle-orm'
import { visitors } from './visitors'
export const likes = pgTable(
  'likes',
  {
    visitorId: integer('visitor_id')
      .notNull()
      .references(() => visitors.id, { onDelete: 'cascade' }),
    like: integer('like')
      .notNull()
      .references(() => posts.id, { onDelete: 'cascade' }),
  },
  table => ({
    pk: primaryKey({ columns: [table.visitorId, table.like] }),
  }),
)

export const likesRelations = relations(likes, ({ one }) => ({
  visitor: one(visitors, {
    fields: [likes.visitorId],
    references: [visitors.id],
  }),
  like: one(posts, {
    fields: [likes.like],
    references: [posts.id],
  }),
}))
