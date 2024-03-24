import { defineCollection } from "astro:content";

const tilCollection = defineCollection({});

export const collections = {
  til: tilCollection,
};
