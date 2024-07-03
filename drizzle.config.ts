import 'dotenv/config'
import { defineConfig } from 'drizzle-kit'
export default defineConfig({
  schema: ['./db/schemas/administrator.ts','./db/schemas/tags.ts'],
  out: './supabase/migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
})
