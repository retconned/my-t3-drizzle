// drizzle.config.ts
import type { Config } from "drizzle-kit";
import "dotenv/config";

export default {
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  schema: ["./src/db/auth.ts", "./src/db/schema.ts"],
} satisfies Config;
