import fs from "node:fs";
export const robotsSitemap = () => {
  let config;
  return {
    name: "robots-sitemap",
    hooks: {
      "astro:config:done": async ({ config: cfg }) => {
        config = cfg;
      },

      "astro:build:done": async ({ dir }) => {
        const finalSiteHref = new URL(config.base, config.site).href;
        const robotsTxtContent = fs.readFileSync(new URL("robots.txt", dir), { encoding: "utf8" });
        fs.writeFileSync(new URL("robots.txt", dir), `${robotsTxtContent}\nSitemap: ${finalSiteHref}sitemap-index.xml`);
      },
    },
  };
};
