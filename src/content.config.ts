import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

/**
 * Every piece of prose on the site lives in `src/content` as Markdown and is
 * pulled in through this collection, so pages stay pure layout.
 */
const pages = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    /** Lower sorts first. */
    order: z.number().default(0),
    draft: z.boolean().default(false),
  }),
});

export const collections = { pages };