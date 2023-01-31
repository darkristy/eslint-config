module.exports = {
  extends: ["plugin:prettier/recommended"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        trailingComma: "es5",
        singleQuote: false,
        printWidth: 100,
        tabWidth: 2,
        useTabs: false,
        arrowParens: "always",
        breakBeforeElse: true,
        disableLanguages: [],
        flattenTernaries: true,
        proseWrap: "never",
        htmlWhitespaceSensitivity: "ignore",
        plugins: ["prettier-plugin-tailwindcss"],
      },
    ],
    "arrow-body-style": "off",
    "prefer-arrow-callback": "off",
  },
};
