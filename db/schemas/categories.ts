import { relations } from 'drizzle-orm'
import { pgTable, serial, varchar } from 'drizzle-orm/pg-core'
import { posts } from './posts'

export const categories = pgTable('categories', {
  id: serial('id').primaryKey(),
  categoryName: varchar('category_name', { length: 20 }).notNull(),
})

export const categoriesRelations = relations(categories, ({ many }) => ({
  posts: many(posts),
}))
