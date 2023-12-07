/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { drizzle } from "drizzle-orm/mysql2";
import mysql, { type Pool } from "mysql2/promise";

import * as auth from "../db/auth";
import * as base from "../db/schema";
import { env } from "@/env.js";

const globalForMySQL = globalThis as unknown as { poolConnection: Pool };

const poolConnection =
  globalForMySQL.poolConnection ||
  mysql.createPool({
    host: env.DB_HOST,
    user: env.DB_USERNAME,
    password: env.DB_PASSWORD,
    database: env.DB_NAME,
  });

if (env.NODE_ENV !== "production")
  globalForMySQL.poolConnection = poolConnection;

export const db = drizzle(poolConnection, {
  logger: env.NODE_ENV === "development" ? true : false,
  mode: "default",
  schema: { ...auth, ...base },
});
