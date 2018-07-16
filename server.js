const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const config = require("./webpack.config");

config.entry.unshift(
	"webpack-dev-server/client?http://localhost:3000",
	"webpack/hot/dev-server"
);
config.plugins.push(new webpack.HotModuleReplacementPlugin());

const proxy = {};

const app = new WebpackDevServer(webpack(config), {
	hot: true,
	inline: true,
	historyApiFallback: true,
	compress: true,
	proxy,
	stats: { colors: true },
	disableHostCheck: true
});

app.listen(3000);

//参考：http://www.cnblogs.com/CyLee/p/5890681.html