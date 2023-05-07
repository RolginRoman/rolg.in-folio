import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://rolginroman.github.io",
  base: "/rolg.in-folio",
  output: "static",
  build: {
    assets: "public",
  },
  vite: {
    server: {
      watch: {
        useFsEvents: true,
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          includePaths: ["src/styles"],
        },
      },
    },
  },
  experimental: {
    inlineStylesheets: "auto",
  },
});
