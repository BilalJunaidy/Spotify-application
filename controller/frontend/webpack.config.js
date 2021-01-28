const path = require("path");
const webpack = require("webpack");

module.exports = {
// This is where the file is coming from - so like the input file 
  entry: "./src/index.js",

// This is the relative address of the output file - As seen below, it is going to be saved in the static/frontend folder 
  output: {
    path: path.resolve(__dirname, "./static/frontend"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

// The following simply removes all of the unneccesary whitespace and extra information in our JavaScript file when performing the above output operation.
// The benefit of this is that using this this optimization basically reduces the size of our JavaScript file making it more efficient for the browser to load it. 

  optimization: {
    minimize: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        // This has effect on the react lib size
        NODE_ENV: JSON.stringify("production"),
      },
    }),
  ],
};