import { pgTable, text, serial, integer, boolean, timestamp, decimal } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  email: text("email").notNull().unique(),
  password: text("password").notNull(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  region: text("region"),
  category: text("category").default("beginner"),
  rank: integer("rank").default(0),
  points: integer("points").default(0),
  competitions: integer("competitions").default(0),
  achievements: integer("achievements").default(0),
  subscriptionType: text("subscription_type").default("basic"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const competitions = pgTable("competitions", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description"),
  discipline: text("discipline").notNull(),
  location: text("location").notNull(),
  date: timestamp("date").notNull(),
  status: text("status").default("upcoming"), // upcoming, live, completed
  participants: integer("participants").default(0),
  organizerId: integer("organizer_id").references(() => users.id),
  latitude: decimal("latitude", { precision: 10, scale: 8 }),
  longitude: decimal("longitude", { precision: 11, scale: 8 }),
  createdAt: timestamp("created_at").defaultNow(),
});

export const trainings = pgTable("trainings", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description"),
  location: text("location").notNull(),
  schedule: text("schedule"), // e.g., "Вт, Чт 18:00"
  status: text("status").default("active"),
  organizerId: integer("organizer_id").references(() => users.id),
  createdAt: timestamp("created_at").defaultNow(),
});

export const registrations = pgTable("registrations", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id),
  competitionId: integer("competition_id").references(() => competitions.id),
  status: text("status").default("registered"), // registered, cancelled, completed
  registeredAt: timestamp("registered_at").defaultNow(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  email: true,
  password: true,
  firstName: true,
  lastName: true,
  region: true,
});

export const insertCompetitionSchema = createInsertSchema(competitions).pick({
  name: true,
  description: true,
  discipline: true,
  location: true,
  date: true,
  latitude: true,
  longitude: true,
});

export const insertTrainingSchema = createInsertSchema(trainings).pick({
  name: true,
  description: true,
  location: true,
  schedule: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertCompetition = z.infer<typeof insertCompetitionSchema>;
export type Competition = typeof competitions.$inferSelect;
export type InsertTraining = z.infer<typeof insertTrainingSchema>;
export type Training = typeof trainings.$inferSelect;
export type Registration = typeof registrations.$inferSelect;
