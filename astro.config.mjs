import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://norcy.github.io',
  base: '/Tipath',
  trailingSlash: 'always',
  build: {
    inlineStylesheets: 'always'
  }
});
