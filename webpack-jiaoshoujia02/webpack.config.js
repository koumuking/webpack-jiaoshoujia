const path = require('path');
var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin')
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
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
        	title:"我的页面",
        	filename:"index.html"
        })
        ],
	devServer: {
        contentBase : './dist/',
        host: 'localhost', //这里要是本地是IP地址。
        port: '8080'
        // color : true,
        // hot: false,
        // inline: true
    }
 };