import { pgTable, serial, text } from 'drizzle-orm/pg-core'

export const sharingLinks = pgTable('sharing_links', {
  id: serial('id').primaryKey(),
  linkName: text('link_name'),
  link: text('link'),
})
