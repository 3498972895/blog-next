import { relations } from 'drizzle-orm'
import { integer, pgTable, text } from 'drizzle-orm/pg-core'
import { comments } from './comments'
import {likes} from '@/db/schemas/likes'

export const visitors = pgTable('visitors', {
  id: integer('id').primaryKey(),
  name: text('name').notNull(),
  avatarURL: text('avatar_url').notNull(),
})

export const visitorsRelations = relations(visitors, ({ many }) => ({
  comments: many(comments),
  likes:many(likes)
}))
