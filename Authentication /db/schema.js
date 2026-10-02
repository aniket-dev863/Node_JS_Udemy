import {
  integer,
  pgTable,
  varchar,
  uuid,
  text,
  timestamp,
} from "drizzle-orm/pg-core";
export const usersTable = pgTable("users", {
  id: uuid().primaryKey().defaultRandom(),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  password: text().notNull(),
  salt: text().notNull(),
});

export const userSessions = pgTable("user_sessions", {
  id: uuid().primaryKey().defaultRandom(),
  user_id: uuid()
    .references(() => usersTable.id)
    .notNull(),
  createdAt: timestamp().defaultNow().notNull(),
});

// we should never store plain passwords
// we should hash the password given by user
// use a random salt to hash so two idnetical passwards don't look alike.
// store Password and the salt used for every user
