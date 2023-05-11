import { defineConfig } from "astro/config";
import { loadEnv } from "vite";
import { resolve } from "path";
import purgecss from "astro-purgecss";
import critters from "astro-critters";

const env = loadEnv(process.env.MODE, resolve(process.cwd(), "environment"), "");
const { R_BASE_URL, R_HOSTNAME } = env;

// https://astro.build/config
export default defineConfig({
  site: R_HOSTNAME,
  base: R_BASE_URL,
  output: "static",
  integrations: [
    purgecss(),
    critters({
      critters: {
        publicPath: R_BASE_URL,
      },
    }),
  ],
  build: {
    assets: "public",
  },
  vite: {
    envDir: "environment",
    css: {
      preprocessorOptions: {
        scss: {
          includePaths: ["src/styles"],
        },
      },
    },
  },
});
