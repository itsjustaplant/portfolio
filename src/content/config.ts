import { defineCollection, z } from "astro:content";

const tilCollection = defineCollection({
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    published: z.boolean().default(false),
    tags: z.array(z.string()),
    cover: image(),
    coverAlt: z.string().default('asd')
  })
});

export const collections = {
  til: tilCollection,
};
