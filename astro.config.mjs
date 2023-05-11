import { defineConfig } from "astro/config";
import purgecss from "astro-purgecss";
// import critters from "astro-critters";

// import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  site: "https://rolginroman.github.io",
  // base: env;
  output: "static",
  integrations: [
    purgecss(),
    // critters({
    //   critters: {
    //     path: "public",
    //     logLevel: "trace",
    //   },
    // }),
    // compress(),
  ],
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
});
