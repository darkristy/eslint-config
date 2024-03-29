const path = require("path");

const packageJson = require(path.resolve("package.json"));
const isCli = "bin" in packageJson;

module.exports = {
  plugins: ["unicorn"],

  extends: "plugin:unicorn/recommended",

  rules: {
    // Good rule and would like warning but no autofix
    // Some low level libraries that compile using babel would prefer to use
    // Array.from
    "unicorn/prefer-spread": "off",
    "unicorn/no-array-reduce": "off",
    // Had some test files where I was creating inline functions within a test
    // Might make sense to enable this and turn this off for test/
    "unicorn/consistent-function-scoping": "off",

    // Too many cases where 3rd party library expects null
    "unicorn/no-null": "off",

    "unicorn/import-index": [
      "error",
      {
        // Don't check import statements
        ignoreImports: true,
      },
    ],

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/898fcb4/docs/rules/prevent-abbreviations.md
    "unicorn/prevent-abbreviations": "off",
		
    "unicorn/prefer-object-from-entries": "off",

    "unicorn/prefer-node-protocol": "off",

    "unicorn/prefer-module": "off",

    // Disable in favor of eslint-plugin-regexp
    "unicorn/better-regex": "off",

    "unicorn/prefer-ternary": "off",

    // ts-node can't load TypeScript's compliation of export-from
    // https://github.com/privatenumber/esbuild-loader/issues/232#issuecomment-998487005
    // Disable even warnings because of autofix
    "unicorn/prefer-export-from": [
      "off",
      {
        ignoreUsedVariables: true,
      },
    ],
    "unicorn/filename-case": "off",
    /**
     * For-of + iterators currently requires transpilation:
     * https://www.typescriptlang.org/tsconfig#downlevelIteration
     *
     * Given this cost, it doesn't make sense to use instead of for-loops yet
     */
    "unicorn/no-for-loop": "off",
    "unicorn/no-nested-ternary": "off",
    "unicorn/new-for-builtins": "off",

    /**
     * Too many false positives.
     *
     * It changed the formatting of inline snapshots in tests
     */
    "unicorn/template-indent": "off",
  },
  overrides: [
    ...(isCli
      ? [
          {
            files: "cli.{js,ts}",
            rules: {
              "unicorn/no-process-exit": "off",
            },
          },
        ]
      : []),
  ],
};
