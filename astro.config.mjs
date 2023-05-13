import { defineConfig } from "astro/config";
import { loadEnv } from "vite";
import { resolve } from "path";
import purgecss from "astro-purgecss";
import critters from "astro-critters";
import basicSsl from "@vitejs/plugin-basic-ssl";
import { esbuildInliner } from "./tools/vite-plugins/esbuild-inliner.mjs";

// TODO
// sitemap
// seo
// opengraph

const env = loadEnv(process.env.MODE, resolve(process.cwd(), "environment"), "");
const { R_BASE_URL, R_HOSTNAME, SSL } = env;

// https://astro.build/config
export default defineConfig({
  site: `${R_HOSTNAME}${R_BASE_URL}`,
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
    server: {
      https: !!SSL,
    },
    plugins: [SSL ? basicSsl() : undefined, esbuildInliner()],
    css: {
      preprocessorOptions: {
        scss: {
          includePaths: ["src/styles"],
        },
      },
    },
  },
});
