import {
  date,
  pgTable,
  serial,
  text,
  boolean,
  integer,
} from 'drizzle-orm/pg-core'
import { relations } from 'drizzle-orm'
import { postsToTags } from './postsToTags'
import { comments } from './comments'
import { postPhotos } from './postPhotos'

export const posts = pgTable('posts', {
  id: serial('id').primaryKey(),
  mdUrl: text('md_url').notNull(),
  title: text('title').notNull(),
  createdAt: date('created_at').defaultNow(),
  likeCounts: integer('like_counts').default(0),
  isPinned: boolean('is_pinned').default(false),
})

export const postsRelations = relations(posts, ({ many }) => ({
  postsToTags: many(postsToTags),
  photos: many(postPhotos),
  comments: many(comments),
}))
