/** @typedef { import('eslint').Linter.Config } ESLintConfig */

require("@rushstack/eslint-patch/modern-module-resolution");

/** @type { ESLintConfig } */
const config = {
  extends: [
    "./rules/best-practices",
    "./rules/errors",
    "./rules/node",
    "./rules/style",
    "./rules/variables",
    "./rules/es6",
    "./rules/imports",
    "./rules/prettier",
    "./rules/promise",
    "./rules/unicorn",
    "./rules/no-use-extend-native",
    "./rules/eslint-comments",
    "./rules/json",
    "./rules/regexp",
    "./rules/typescript",
    "./rules/markdown",
    "./rules/react",
  ].map((rulePath) => require.resolve(rulePath)),
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
  },
  ignorePatterns: ["**/node_modules/**", "coverage/**", "{tmp,temp}/**", "**/*.min.js", "**/vendor/**", "**/dist/**"],
};
module.exports = config;
