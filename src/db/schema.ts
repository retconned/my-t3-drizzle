import {
  mysqlTableCreator,
  serial,
  timestamp,
  uniqueIndex,
  varchar,
} from "drizzle-orm/mysql-core";

const mysqlTable = mysqlTableCreator((name) => `project1_${name}`);

export const example = mysqlTable(
  "example",
  {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 256 }),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updatedAt").onUpdateNow(),
  },
  (example) => ({
    nameIndex: uniqueIndex("name_idx").on(example.name),
  }),
);
