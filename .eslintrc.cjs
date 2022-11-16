/* eslint-disable */
const configs = require("./dist-cjs/index.js");

module.exports = configs.buildEslintConfig({
  esm: true,
  prettier: true,
  typescript: true,
});
