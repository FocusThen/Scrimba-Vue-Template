const { VueLoaderPlugin } = require("vue-loader");
module.exports = {
  mode: "development",
  output: {
    filename: "[name].pack.js",
  },
  entry: {
    index: "./index",
  },
  resolve: {
    alias: {
      vue$: "vue/dist/vue.esm.js",
    },
    extensions: ["*", ".js", ".vue", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: "vue-loader",
      },
      {
        test: /\.js$/,
        use: "babel-loader",
      },
    ],
  },
  plugins: [new VueLoaderPlugin()],
};
