const MiniCssExtractPlugin = require('mini-css-extract-plugin');

//single bundle
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ]
  }
};

//creates a separate css file
// module.exports = {
//   module: {
//     rules: [
//       {
//         test: /\.css$/i,
//         use: [MiniCssExtractPlugin.loader, "css-loader"],
//       },
//     ]
//   },
//   plugins: [
//     new MiniCssExtractPlugin(),
//   ]
// };