const { defineConfig } = require("@rspack/cli");

module.exports = defineConfig({
  context: __dirname,
  entry: {
    main: "./loader.js?pagePath=.%2Fa.js!",
    // main: "./loader.js?pagePath=.%2Fb.js!",
  },
  optimization: {
    minimize: false,
  },
  cache: true,
  experiments: {
    cache: {
      type: "persistent"
    }
  },
});
