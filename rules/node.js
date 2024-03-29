module.exports = {
  env: {
    node: true,
  },

  plugins: ["node"],

  rules: {
    // https://github.com/mysticatea/eslint-plugin-node/blob/7dc8f80a5e/docs/rules/no-unpublished-bin.md
    "node/no-unpublished-bin": "error",

    // https://github.com/mysticatea/eslint-plugin-node/blob/7dc8f80a5e/docs/rules/no-mixed-requires.md
    "node/no-mixed-requires": [
      "error",
      {
        grouping: true,
        allowCall: true,
      },
    ],

    // https://github.com/mysticatea/eslint-plugin-node/blob/7dc8f80a5e/docs/rules/no-new-require.md
    "node/no-new-require": "error",

    // https://github.com/mysticatea/eslint-plugin-node/blob/7dc8f80a5e/docs/rules/no-path-concat.md
    "node/no-path-concat": "error",

    // https://github.com/mysticatea/eslint-plugin-node/blob/7dc8f80a5e/docs/rules/no-unpublished-import.md
    "node/no-unpublished-import": "error",

    // https://github.com/mysticatea/eslint-plugin-node/blob/7dc8f80a5e/docs/rules/no-unpublished-require.md
    "node/no-unpublished-require": "error",

    // https://github.com/mysticatea/eslint-plugin-node/blob/7dc8f80a5e/docs/rules/process-exit-as-throw.md
    "node/process-exit-as-throw": "error",

    // https://github.com/mysticatea/eslint-plugin-node/blob/7dc8f80a5e/docs/rules/no-deprecated-api.md
    "node/no-deprecated-api": "error",

    "node/prefer-global/buffer": ["error", "always"],
    "node/prefer-global/console": ["error", "always"],
    "node/prefer-global/process": ["error", "always"],
    "node/prefer-global/text-decoder": ["error", "always"],
    "node/prefer-global/text-encoder": ["error", "always"],

    "node/prefer-global/url-search-params": ["error", "always"],
    "node/prefer-global/url": ["error", "always"],
    "node/prefer-promises/dns": "error",
    "node/prefer-promises/fs": "error",
    "node/file-extension-in-import": "off",
  },
};
