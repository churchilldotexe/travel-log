import { int, integer, real, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const location = sqliteTable("location", {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  slug: text().notNull().unique(),
  description: text(),
  lat: real().notNull(),
  long: real().notNull(),
  createdAt: integer().$default(() => Date.now()),
  updatedAt: integer().$default(() => Date.now()).$onUpdate(() => Date.now()),
});
