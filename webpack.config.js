const path = require("path");

module.exports = {
  entry: "./src/js/index.js",
  output: {
    filename: "embedded-help.bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "production",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: [/node_modules/],
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
          },
        },
      },
    ],
  },
};
