import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Pakker: Mathias redigerer JSON-filer i src/content/pakker/ uten å røre
// komponenter. fraPris: null betyr TODO – pakken vises da uten pris.
const pakker = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/pakker' }),
  schema: z.object({
    navn: z.string(),
    rekkefolge: z.number(),
    beskrivelse: z.string(),
    inkludert: z.array(z.string()),
    fraPris: z.number().positive().nullable(),
    merknad: z.string().optional(),
  }),
});

// Galleri: bilder/video med kategori for filtrering (uten JavaScript).
const galleri = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/galleri' }),
  schema: ({ image }) =>
    z.object({
      bilde: image(), // optimaliseres av Astros bildeverktøy (AVIF/WebP)
      alt: z.string(),
      tekst: z.string().optional(),
      kategori: z.enum(['bryllup', 'russ', 'firma', 'klubb', 'utendørs', 'annet']),
      rekkefolge: z.number().default(99),
    }),
});

export const collections = { pakker, galleri };
