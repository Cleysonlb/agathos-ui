module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: 'style-loader'
      },
      {
        test: /\.css$/i,
        loader: 'css-loader',
        options: {
          modules: {
            localIdentName: 'ag-[hash:base64:5]'
          }
        }
      }
    ]
  },
};