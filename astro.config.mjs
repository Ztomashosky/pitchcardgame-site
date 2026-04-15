import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://pitch31.com',
  integrations: [sitemap(), tailwindcss()],
});
