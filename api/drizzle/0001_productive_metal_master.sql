ALTER TABLE "products" ALTER COLUMN "price" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "products" ALTER COLUMN "stock" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "products" ADD COLUMN "created_at" timestamp DEFAULT now() NOT NULL;