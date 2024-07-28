import { serial, text, pgTable } from 'drizzle-orm/pg-core'
export const administrator = pgTable('administrator', {
  id: serial('id').primaryKey(),
  username: text('username').notNull(),
  password: text('password').notNull(),
})
