import { integer, pgTable, primaryKey, text } from 'drizzle-orm/pg-core'
import { posts } from './posts'
import { relations } from 'drizzle-orm'

export const postPhotos = pgTable(
  'post_photos',
  {
    postId: integer('post_id')
      .notNull()
      .references(() => posts.id, { onDelete: 'cascade' }),
    photoUrl: text('photo_url').notNull(),
  },
  table => ({
    pk_posts_photos: primaryKey({ columns: [table.postId, table.photoUrl] }),
  }),
)

export const postPhotosRelations = relations(postPhotos, ({ one }) => ({
  post: one(posts, {
    fields: [postPhotos.postId],
    references: [posts.id],
  }),
}))
