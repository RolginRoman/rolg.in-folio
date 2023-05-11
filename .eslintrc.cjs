module.exports = {
  root: true,
  extends: ["eslint:recommended", "plugin:astro/recommended"],
  plugins: ["react"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    extraFileExtensions: [".astro"],
  },
  overrides: [
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
      },
      rules: {
        "react/jsx-no-target-blank": "error",
      },
    },
  ],
};
