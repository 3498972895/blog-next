import 'dotenv/config'
import { defineConfig } from 'drizzle-kit'
export default defineConfig({
  schema: './db/schemas/*.ts',
  out: './supabase/migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
})
