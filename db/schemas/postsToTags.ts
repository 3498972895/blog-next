import { integer, pgTable, primaryKey } from 'drizzle-orm/pg-core'
import { posts } from './posts'
import { tags } from './tags'
import { relations } from 'drizzle-orm'

export const postsToTags = pgTable(
  'posts_to_tags',
  {
    postId: integer('post_id')
      .notNull()
      .references(() => posts.id, { onDelete: 'cascade' }),
    tagId: integer('tag_id')
      .notNull()
      .references(() => tags.id, { onDelete: 'cascade' }),
  },
  table => ({
    pk: primaryKey({ columns: [table.postId, table.tagId] }),
  }),
)

export const postsToTagsRelations = relations(postsToTags, ({ one }) => ({
  postId: one(posts, {
    fields: [postsToTags.postId],
    references: [posts.id],
  }),
  tagId: one(tags, {
    fields: [postsToTags.tagId],
    references: [tags.id],
  }),
}))
