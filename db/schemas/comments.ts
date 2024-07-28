import { relations } from 'drizzle-orm'
import {
  boolean,
  integer,
  pgTable,
  primaryKey,
  serial,
  text,
  timestamp,
} from 'drizzle-orm/pg-core'
import { posts } from './posts'
import { visitors } from './visitors'

export const comments = pgTable(
  'comments',
  {
    id: serial('id'),
    postId: integer('post_id')
      .notNull()
      .references(() => posts.id, { onDelete: 'cascade' }),
    visitorId: integer('visitor_id')
      .notNull()
      .references(() => visitors.id, { onDelete: 'cascade' }),
    isApproved: boolean('is_approved').default(false),
    comment: text('comment').notNull(),
    createdAt: timestamp('created_at', {
      withTimezone: true,
      precision: 0,
    }).defaultNow(),
  },
  table => ({
    pk: primaryKey({
      columns: [table.id, table.postId, table.visitorId, table.createdAt],
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
