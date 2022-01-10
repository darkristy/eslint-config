module.exports = {
  extends: ["plugin:prettier/recommended"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        trailingComma: "es5",
        singleQuote: false,
        printWidth: 110,
        tabWidth: 2,
        useTabs: false,
        arrowParens: "always",
        breakBeforeElse: true,
        disableLanguages: [],
        flattenTernaries: true,
        proseWrap: "never",
        htmlWhitespaceSensitivity: "ignore",
      },
    ],
    "arrow-body-style": "off",
    "prefer-arrow-callback": "off",
  },
};
