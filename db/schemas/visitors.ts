import { relations } from 'drizzle-orm'
import { integer, pgTable, text } from 'drizzle-orm/pg-core'
import { comments } from './comments'

export const visitors = pgTable('visitors', {
  id: integer('id').primaryKey(),
  name: text('name'),
  avatar: text('avatar'),
})

export const visitorsRelations = relations(visitors, ({ many }) => ({
  comments: many(comments),
}))
