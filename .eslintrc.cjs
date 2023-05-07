module.exports = {
  root: true,
  extends: ["eslint:recommended", "plugin:astro/recommended"],
  overrides: [
    {
      files: ["src/**/*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
    },
  ],
};
