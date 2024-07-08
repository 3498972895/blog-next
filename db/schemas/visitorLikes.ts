import { integer, pgTable, primaryKey } from 'drizzle-orm/pg-core'
import { visitors } from './visitors'
import { posts } from './posts'
export const visitorLikes = pgTable(
  'visitor_likes',
  {
    visitorId: integer('visitor_id').references(() => visitors.id, {
      onDelete: 'cascade',
    }),
    like: integer('like').references(() => posts.id, { onDelete: 'cascade' }),
  },
  table => ({
    pk: primaryKey({ columns: [table.visitorId, table.like] }),
  }),
)
