const webpack = require("webpack");
const path = require('path');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

//定义文件路径
const ROOT_PATH = path.resolve(__dirname);
const APP_PATH = path.resolve(ROOT_PATH, './src/app.js');
const BUILD_PATH = path.resolve(ROOT_PATH, './dist/');

const NODE_ENV = process.env.NODE_ENV ? process.env.NODE_ENV : "development";

module.exports = {
  //项目的文件夹 可以直接用文件夹名称 默认会找index.js 也可以确定是哪个文件名字
  entry: new Array(APP_PATH),
  //输出的文件名 合并以后的js会命名为bundle.js
  // output: {
  //   path: path.join(__dirname, BUILD_PATH),
  //   filename: 'bundle.js'
  // },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader', {
            loader: 'typings-for-css-modules-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]-[local]-[hash:base64:5]'
            }
          },
          'postcss-loader'
        ]
      }, {
        test: /\.less$/,
        use: [
          'style-loader', {
            loader: 'typings-for-css-modules-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]-[local]-[hash:base64:5]'
            }
          }, {
            loader: 'less-loader',
            options: {
              sourceMap: true
            }
          },
          'postcss-loader'
        ]
      }, {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true
            }
          }
        ]
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: ["babel-loader?cacheDirectory=true", "ts-loader"]
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[hash:7].[ext]'    //ext为扩展名
            }
          }
        ]
      },

    ]
  },

  resolve: {
    extensions: [".js", ".ts", ".tsx"],// webpack2及以上取消空字符串
    modules: [path.resolve(__dirname, "src"), "node_modules"]
  },

  //添加我们的插件 会自动生成一个html文件
  plugins: [
    new HtmlwebpackPlugin({
      title: 'Hello World app',
      // filename: "./dist/index.html",
      template: "./src/template.html",
      inject: true
    }),
    new UglifyJsPlugin()
  ],
  mode:NODE_ENV,
  devtool: NODE_ENV === "production" ? "" : "eval-source-map"
};