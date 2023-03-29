import { drizzle } from "drizzle-orm/mysql2";
import mysql, { type Pool } from "mysql2/promise";

const globalForMySQL = globalThis as unknown as { poolConnection: Pool };

const poolConnection =
  globalForMySQL.poolConnection ||
  mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });

if (process.env.NODE_ENV !== "production")
  globalForMySQL.poolConnection = poolConnection;

export const db = drizzle(poolConnection);
