import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { defineCollection } from "astro:content";

const changelogs = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/changelogs" }),
    schema: z.object({
        type: z.enum(["feature", "security", "improvement", "information"]),
        title: z.string(),
        date: z.coerce.date(),
    }),
});

export const collections = { changelogs };
