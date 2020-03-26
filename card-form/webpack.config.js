const MODE = "development";

const enabledSourceMap = MODE === "development";

module.exports = {
  mode: MODE,
  entry: "./src/index.js",
  module: {
    rules: [{
      test: /\.scss/,
      use: [
        "style-loader",
        {
          loader: "css-loader",
          options: {
            url: false,
            sourceMap: enabledSourceMap,
            importLoaders: 2
          }
        },
        {
          loader: "sass-loader",
          options: {
            sourceMap: enabledSourceMap
          }
        }
      ]
    }]
  }
};
