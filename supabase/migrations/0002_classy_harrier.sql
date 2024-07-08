CREATE TABLE IF NOT EXISTS "categories" (
	"id" serial PRIMARY KEY NOT NULL,
	"category_name" varchar(20) NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "comments" (
	"id" serial NOT NULL,
	"post_id" integer,
	"visitor_id" integer,
	"created_at" timestamp (0) with time zone,
	CONSTRAINT "comments_id_post_id_visitor_id_pk" PRIMARY KEY("id","post_id","visitor_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "galleries" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text,
	"where" text,
	"when" date,
	"photo_id" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "photos" (
	"id" serial PRIMARY KEY NOT NULL,
	"url" text,
	CONSTRAINT "photos_url_unique" UNIQUE("url")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "posts" (
	"id" serial PRIMARY KEY NOT NULL,
	"text" text,
	"created_at" date,
	"is_pinned" boolean,
	"category_id" integer,
	"likes" integer
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "posts_to_photos" (
	"post_id" integer NOT NULL,
	"photo_id" integer NOT NULL,
	CONSTRAINT "posts_to_photos_post_id_photo_id_pk" PRIMARY KEY("post_id","photo_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "posts_to_tags" (
	"post_id" integer NOT NULL,
	"tag_id" integer NOT NULL,
	CONSTRAINT "posts_to_tags_post_id_tag_id_pk" PRIMARY KEY("post_id","tag_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "sharing_books" (
	"id" serial PRIMARY KEY NOT NULL,
	"created_at" date,
	"cover" integer,
	"info" jsonb
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "sharing_links" (
	"id" serial PRIMARY KEY NOT NULL,
	"link_name" text,
	"link" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "visitor_likes" (
	"visitor_id" integer,
	"like" integer,
	CONSTRAINT "visitor_likes_visitor_id_like_pk" PRIMARY KEY("visitor_id","like")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "visitors" (
	"id" integer PRIMARY KEY NOT NULL,
	"name" text,
	"avatar_url" text
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "galleries" ADD CONSTRAINT "galleries_photo_id_photos_id_fk" FOREIGN KEY ("photo_id") REFERENCES "public"."photos"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "posts_to_photos" ADD CONSTRAINT "posts_to_photos_post_id_posts_id_fk" FOREIGN KEY ("post_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "posts_to_photos" ADD CONSTRAINT "posts_to_photos_photo_id_photos_id_fk" FOREIGN KEY ("photo_id") REFERENCES "public"."photos"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "posts_to_tags" ADD CONSTRAINT "posts_to_tags_post_id_posts_id_fk" FOREIGN KEY ("post_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "posts_to_tags" ADD CONSTRAINT "posts_to_tags_tag_id_tags_id_fk" FOREIGN KEY ("tag_id") REFERENCES "public"."tags"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sharing_books" ADD CONSTRAINT "sharing_books_cover_photos_id_fk" FOREIGN KEY ("cover") REFERENCES "public"."photos"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "visitor_likes" ADD CONSTRAINT "visitor_likes_visitor_id_visitors_id_fk" FOREIGN KEY ("visitor_id") REFERENCES "public"."visitors"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "visitor_likes" ADD CONSTRAINT "visitor_likes_like_posts_id_fk" FOREIGN KEY ("like") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "category_id" ON "posts" USING btree ("category_id");