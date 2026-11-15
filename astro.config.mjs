// @ts-check
import { defineConfig } from 'astro/config';

// Eliora-only standalone site. Deployed to https://eliora-studio.com
export default defineConfig({
  site: 'https://eliora-studio.com',
  trailingSlash: 'always',
});
