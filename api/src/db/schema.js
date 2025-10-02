import {
  decimal,
  integer,
  pgTable,
  text,
  timestamp,
  varchar,
} from 'drizzle-orm/pg-core';

export const productsTable = pgTable('products', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  description: text(),
  price: decimal().notNull(),
  stock: integer().notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});
