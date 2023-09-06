// drizzle.config.ts
import type { Config } from "drizzle-kit";
import "dotenv/config";

import { env } from "@/env.mjs";

export default {
  driver: "mysql2",
  schema: ["./src/db/auth.ts", "./src/db/schema.ts"],
  dbCredentials: {
    host: env.DB_HOST,
    user: env.DB_USERNAME,
    password: env.DB_PASSWORD,
    database: env.DB_NAME,
  },
} satisfies Config;
