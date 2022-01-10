/** @typedef { import('eslint').Linter.Config } ESLintConfig */

/** @type { ESLintConfig } */
const config = {
  overrides: [
    {
      files: "*.{jsx,tsx}",

      extends: [
        // https://github.com/yannickcr/eslint-plugin-react/blob/c8917b0/index.js
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
      ],
      settings: {
        react: {
          version: "detect",
        },
      },

      rules: {
        // https://eslint.org/docs/rules/jsx-quotes
        "jsx-quotes": ["error", "prefer-double"],
        "react/jsx-indent-props": ["error", 2],
      },
      overrides: [
        {
          files: ["**/*.tsx"],
          rules: {
            "react/prop-types": "off",
          },
        },
      ],
    },
  ],
};

module.exports = config;
