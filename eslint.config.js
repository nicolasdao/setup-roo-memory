// eslint.config.js
const js = require("@eslint/js");

module.exports = [
  {
    files: ["**/*.js"], // Apply to all JavaScript files
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "commonjs", // Files being linted are CommonJS
      globals: {
        __dirname: "readonly",
        __filename: "readonly",
        exports: "writable",
        module: "readonly",
        require: "readonly",
        process: "readonly",
        console: "readonly",
      }
    },
    rules: {
      ...js.configs.recommended.rules
      // You can add or override rules here if needed
    }
  }
];