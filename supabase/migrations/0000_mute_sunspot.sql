CREATE TABLE IF NOT EXISTS "administrator" (
	"id" serial PRIMARY KEY NOT NULL,
	"username" text NOT NULL,
	"password" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "comments" (
	"id" serial NOT NULL,
	"post_id" integer NOT NULL,
	"visitor_id" integer NOT NULL,
	"is_approved" boolean DEFAULT false,
	"comment" text NOT NULL,
	"created_at" timestamp (0) with time zone DEFAULT now(),
	CONSTRAINT "comments_id_post_id_visitor_id_created_at_pk" PRIMARY KEY("id","post_id","visitor_id","created_at")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "gallery" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"where" text,
	"when" date,
	"photo_url" text NOT NULL,
	"created_at" date DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "likes" (
	"visitor_id" integer NOT NULL,
	"like" integer NOT NULL,
	CONSTRAINT "likes_visitor_id_like_pk" PRIMARY KEY("visitor_id","like")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "post_photos" (
	"post_id" integer NOT NULL,
	"photo_url" text NOT NULL,
	CONSTRAINT "post_photos_post_id_photo_url_pk" PRIMARY KEY("post_id","photo_url")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "posts" (
	"id" serial PRIMARY KEY NOT NULL,
	"md_url" text NOT NULL,
	"title" text NOT NULL,
	"created_at" date DEFAULT now(),
	"like_counts" integer DEFAULT 0,
	"is_pinned" boolean DEFAULT false
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
	"created_at" date DEFAULT now(),
	"cover_url" text,
	"info" jsonb NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "sharing_links" (
	"id" serial PRIMARY KEY NOT NULL,
	"link_name" text NOT NULL,
	"link" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "tags" (
	"id" serial PRIMARY KEY NOT NULL,
	"tag_name" varchar(20) NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "visitors" (
	"id" integer PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"avatar_url" text NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "comments" ADD CONSTRAINT "comments_post_id_posts_id_fk" FOREIGN KEY ("post_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "comments" ADD CONSTRAINT "comments_visitor_id_visitors_id_fk" FOREIGN KEY ("visitor_id") REFERENCES "public"."visitors"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "likes" ADD CONSTRAINT "likes_visitor_id_visitors_id_fk" FOREIGN KEY ("visitor_id") REFERENCES "public"."visitors"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "likes" ADD CONSTRAINT "likes_like_posts_id_fk" FOREIGN KEY ("like") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "post_photos" ADD CONSTRAINT "post_photos_post_id_posts_id_fk" FOREIGN KEY ("post_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "posts_to_tags" ADD CONSTRAINT "posts_to_tags_post_id_posts_id_fk" FOREIGN KEY ("post_id") REFERENCES "public"."posts"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "posts_to_tags" ADD CONSTRAINT "posts_to_tags_tag_id_tags_id_fk" FOREIGN KEY ("tag_id") REFERENCES "public"."tags"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
