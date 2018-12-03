20118/11/28 add-log：目前技术栈
/* react */
   react 16.4 
   immutable 
   redux 
   react-router 4.3.1

/* less */
   less
   less-loader

/* babel */
   babel-core
   babel-loader
   babel-plugin-add-module-exports
   babel-preset-es2015
   babel-preset-react
   babel-preset-stage-0

/* webpack */
   webpack4
   webpack-cli
   webpack-dev-server
   uglifyjs-webpack-plugin  //minify js

   css-loader
   file-loader

/* 使用postcss 可以配置autoprefixer,同时可以配置全局css变量 */
   postcss-loader
   postcss-cssnext
   autoprefixer
   
/* 兼容linux和window环境*/
   cross-env


文件组织架构

配置及说明文件
readme.md 
webpack.config.js
postcss.config.js
package.json
tsconfig.json
.gitignore
server.js
[src]
   * [assets] 通用代码文件存放
   * [components]存放纯函数组件
   * [containers]存放容器组件
   * [context]存放上下问组件
   * [store]redux存放store目录
   * app.tsx 项目索引文件
   * comoon.ts 解决图片路径在TS下报错问题
   * template.html 静态页面的模板文件  
[dist]文件打包后所在文件夹

