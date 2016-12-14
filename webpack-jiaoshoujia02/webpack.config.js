const path = require('path');
var webpack = require("webpack");
module.exports={
	entry:
	[
		'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080',
		path.resolve(__dirname, './src/main.js'),
     ],
	output:{
		path: path.resolve(__dirname, "./dist"),
		filename:"bundle.js",
		publicPath: "/"
	},
	plugins: [
        new webpack.HotModuleReplacementPlugin()
        ],
	devServer: {
        contentBase : './dist/',
        host: 'localhost', //这里要是本地是IP地址。
        port: '8080',
        // color : true,
        // hot: false,
        // inline: true
    }
 };