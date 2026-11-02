import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://rallycrossed.com',
  output: 'static',
  build: {
    assets: '_assets',
  },
});
