import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const expo = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/expo' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    kind: z.enum(['geste', 'objet', 'terroir', 'enjeu']),
    summary: z.string(),
    region: z.string().optional(),
    image: image().optional(),
    imageAlt: z.string().optional(),
    order: z.number().default(99),
  }),
});

export const collections = { expo };
