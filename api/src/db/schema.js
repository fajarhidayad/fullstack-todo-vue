import {
  integer,
  numeric,
  pgTable,
  text,
  timestamp,
  varchar,
} from 'drizzle-orm/pg-core';

export const productsTable = pgTable('products', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  description: text(),
  price: numeric({ mode: 'number' }).notNull(),
  stock: integer().notNull(),
  // imageUrl: varchar({ length: 255 }),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});
