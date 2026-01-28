import { pgTable, bigint, varchar, text, timestamp, uniqueIndex } from 'drizzle-orm/pg-core';

export const links = pgTable(
  'links',
  {
    id: bigint('id', { mode: 'number' }).generatedByDefaultAsIdentity().primaryKey(),
    shortcode: varchar('shortcode', { length: 32 }).notNull(),
    target_url: text('target_url').notNull(),
    user_id: text('user_id').notNull(),
    created_at: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
    updated_at: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
  },
  (table) => ({
    shortcodeIndex: uniqueIndex('shortcode_idx').on(table.shortcode),
    userIdIndex: uniqueIndex('user_id_shortcode_idx').on(table.user_id, table.shortcode),
  }),
);
