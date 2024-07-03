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
import { tags } from './tags'
import { relations } from 'drizzle-orm'
import { postsToTags } from './postsToTags'
import { postsToPhotos } from './postsToPhotos'

export const posts = pgTable(
  'posts',
  {
    id: serial('id').primaryKey(),
    url: text('text'),
    title: text('text'),
    createdAt: date('created_at'),
    isPinned: boolean('is_pinned'),
    category: integer('category_id'),
  },
  table => {
    return {
      categoryId: index('category_id').on(table.category),
    }
  },
)

export const postsRelations = relations(posts, ({ one, many }) => ({
  categoryId: one(categories, {
    fields: [posts.category],
    references: [categories.id],
  }),
  postsToTags: many(postsToTags),
  postsToPhotos: many(postsToPhotos),
}))
