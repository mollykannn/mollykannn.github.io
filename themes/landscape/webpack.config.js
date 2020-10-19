const path = require("path");
const StylelintPlugin = require("stylelint-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    main: ["./src/js/script.js", "./src/css/style.scss"],
    "local-search": "./src/js/local-search.js",
  },
  output: {
    path: path.join(__dirname, "source"),
    filename: "js/[name].js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "../",
            },
          },
          "css-loader",
          "postcss-loader",
        ],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "../",
            },
          },
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      {
        test: /\.(png|jpe?g|gif|webp)$/i,
        use: {
          loader: "url-loader",
          options: {
            name: "images/[name].[ext]",
            limit: 10000,
          },
        },
      },
    ],
  },
  plugins: [
    new StylelintPlugin({
      configFile: "stylelint.config.js",
      fix: true,
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
    }),
  ],
};
