import { int, integer, real, sqliteTable, text } from "drizzle-orm/sqlite-core";

import { user } from "./auth";

export const location = sqliteTable("location", {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  slug: text().notNull().unique(),
  description: text(),
  lat: real().notNull(),
  long: real().notNull(),
  userId: int().references(() => user.id, { onDelete: "cascade" }),
  createdAt: integer().$default(() => Date.now()),
  updatedAt: integer().$default(() => Date.now()).$onUpdate(() => Date.now()),
});
