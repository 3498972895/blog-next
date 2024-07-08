import { integer, pgTable, primaryKey } from 'drizzle-orm/pg-core'
import { posts } from './posts'
import { relations } from 'drizzle-orm'
import { photos } from './photos'

export const postsToPhotos = pgTable(
  'posts_to_photos',
  {
    postId: integer('post_id')
      .notNull()
      .references(() => posts.id, { onDelete: 'cascade' }),
    photoId: integer('photo_id')
      .notNull()
      .references(() => photos.id, {
        onDelete: 'cascade',
      }),
  },
  table => ({
    pk_posts_photos: primaryKey({ columns: [table.postId, table.photoId] }),
  }),
)

export const postsToTagsRelations = relations(postsToPhotos, ({ one }) => ({
  postId: one(posts, {
    fields: [postsToPhotos.postId],
    references: [posts.id],
  }),
  photoId: one(photos, {
    fields: [postsToPhotos.photoId],
    references: [photos.id],
  }),
}))
