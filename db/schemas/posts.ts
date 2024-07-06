import {
  date,
  pgTable,
  serial,
  text,
  boolean,
  integer,
  index,
} from 'drizzle-orm/pg-core'
import { categories } from './categories'
import { relations } from 'drizzle-orm'
import { postsToTags } from './postsToTags'
import { postsToPhotos } from './postsToPhotos'
import { comments } from './comments'

export const posts = pgTable(
  'posts',
  {
    id: serial('id').primaryKey(),
    url: text('text'),
    title: text('text'),
    createdAt: date('created_at'),
    isPinned: boolean('is_pinned'),
    categoryId: integer('category_id'),
    likes: integer('likes'),
  },
  table => ({
    categoryId: index('category_id').on(table.categoryId),
  }),
)

export const postsRelations = relations(posts, ({ one, many }) => ({
  categoryId: one(categories, {
    fields: [posts.categoryId],
    references: [categories.id],
  }),
  comments: many(comments),
  postsToTags: many(postsToTags),
  postsToPhotos: many(postsToPhotos),
}))
