import { defineConfig } from "drizzle-kit";

import env from "./lib/env";

export default defineConfig({
  dialect: "turso",
  schema: "./lib/db/schema/index.ts",
  out: "./lib/db/migrations/",
  dbCredentials: {
    url: env.DATABASE_URL,
    authToken: env.NODE_ENV === "development" ? undefined : env.DATABASE_AUTH_TOKEN,
  },
  casing: "snake_case",
});
