const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
module.exports = {
  mode: 'production',
  // javascript执行入口
  entry: './main.js',
  output: {
    //将所有模块合并到 bundle.js
    filename: 'bundle.js',
    //输出文件都存放到dist文件夹下
    path: path.resolve(__dirname, './dist')
  },
  module: {
    rules: [
      {
        // 用正则去匹配要用该 loader 转换的 CSS 文件
        test: /\.css$/,
        // use: ['style-loader', 'css-loader'], // css-loader读取css, style-loader把读取到的css注入到javascript中
        use: [
          MiniCssExtractPlugin.loader,  // replace ExtractTextPlugin.extract({..})
          "css-loader"
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      // 从 .js 文件中提取出来的 .css 文件的名称
      filename: `[name]_[contenthash:8].css`
    })
  ]
}