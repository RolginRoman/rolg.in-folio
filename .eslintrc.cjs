module.exports = {
  root: true,
  extends: ["eslint:recommended", "plugin:astro/recommended", "plugin:@typescript-eslint/recommended"],
  plugins: ["react", "@typescript-eslint"],
  env: {
    browser: true,
    node: true,
    es2022: true,
  },
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
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_", ignoreRestSiblings: true }],
      },
    },
    {
      files: ["*.ts"],
      parser: "@typescript-eslint/parser",
      rules: {
        "no-unused-vars": "off",
        "@typescript-eslint/triple-slash-reference": "off",
        "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_", ignoreRestSiblings: true }],
      },
    },
  ],
};
