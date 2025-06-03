import { int, integer, real, sqliteTable, text } from "drizzle-orm/sqlite-core";

import { user } from "./auth";
import { location } from "./location";

export const locationLog = sqliteTable("locationLog", {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  description: text(),
  startedAt: integer().notNull(),
  endedAt: integer().notNull(),
  lat: real().notNull(),
  long: real().notNull(),
  locationId: int().references(() => location.id),
  userId: int().references(() => user.id),
  createdAt: int().$default(() => Date.now()),
  updatedAt: int().$default(() => Date.now()).$onUpdate(() => Date.now()),
});
