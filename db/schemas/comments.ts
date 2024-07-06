import { relations } from 'drizzle-orm'
import {
  integer,
  pgTable,
  primaryKey,
  serial,
  timestamp,
} from 'drizzle-orm/pg-core'
import { posts } from './posts'
import { visitors } from './visitors'

export const comments = pgTable(
  'comments',
  {
    createdAt: timestamp('created_at', {
      withTimezone: true,
      precision: 0,
    }),
    id: serial('id'),
    postId: integer('post_id'),
    visitorId: integer('visitor_id'),
  },
  table => ({
    pk: primaryKey({
      columns: [table.id, table.postId, table.visitorId],
    }),
  }),
)

export const commentsRelations = relations(comments, ({ one }) => ({
  postId: one(posts, {
    fields: [comments.postId],
    references: [posts.id],
  }),
  visitorId: one(visitors, {
    fields: [comments.id],
    references: [visitors.id],
  }),
}))
