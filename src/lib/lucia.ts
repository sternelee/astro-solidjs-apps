import { lucia } from "lucia";
import { astro } from "lucia/middleware";
// import { prisma } from "@lucia-auth/adapter-prisma";
// import { PrismaClient } from "@prisma/client";
import { betterSqlite3 } from "@lucia-auth/adapter-sqlite";
import sqlite from "better-sqlite3";

// https://lucia-auth.com/database-adapters/better-sqlite3/
// const client = new PrismaClient();
const db = sqlite("main.db");

export const auth = lucia({
	env: import.meta.env.DEV ? "DEV" : "PROD",
	middleware: astro(),
  // adapter: prisma(client),
  adapter: betterSqlite3(db, {
		user: "user",
		key: "user_key",
		session: "user_session"
	})
});

export type Auth = typeof auth;
