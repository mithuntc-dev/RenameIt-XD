module.exports = {
  entry: "./src/main.jsx",
  output: {
    path: __dirname,
    filename: "main.js",
    libraryTarget: "commonjs2",
  },
  devtool: "none", // prevent webpack from using eval() on my module
  externals: {
    uxp: "uxp",
    scenegraph: "scenegraph",
    application: "application",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          plugins: ["transform-react-jsx"],
        },
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
}
