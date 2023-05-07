import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  output: "static",
  build: {
    assets: "public",
  },
  vite: {
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
