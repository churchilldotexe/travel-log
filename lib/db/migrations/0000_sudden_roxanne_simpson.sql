CREATE TABLE `location` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`slug` text NOT NULL,
	`description` text,
	`lat` real NOT NULL,
	`long` real NOT NULL,
	`created_at` integer,
	`updated_at` integer
);
--> statement-breakpoint
CREATE UNIQUE INDEX `location_slug_unique` ON `location` (`slug`);--> statement-breakpoint
CREATE TABLE `locationLog` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`description` text,
	`started_at` integer NOT NULL,
	`ended_at` integer NOT NULL,
	`lat` real NOT NULL,
	`long` real NOT NULL,
	`location_id` integer,
	`created_at` integer,
	`updated_at` integer,
	FOREIGN KEY (`location_id`) REFERENCES `location`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `locationLogImage` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`key` text NOT NULL,
	`location_log_id` integer,
	`created_at` integer,
	`updated_at` integer,
	FOREIGN KEY (`location_log_id`) REFERENCES `locationLog`(`id`) ON UPDATE no action ON DELETE no action
);
