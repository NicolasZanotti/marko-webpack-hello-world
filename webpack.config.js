const webpack = require('webpack');

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractCssTextPlugin = new ExtractTextPlugin({
	filename: "compiled/bundle.css"
});

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const optionalBeatifyJavaScriptPlugin = new UglifyJsPlugin({
	uglifyOptions: {
		compress: false,
		mangle: false,
		output: {beautify: true}
	}
});

module.exports = {
	entry: "./src/main.js",
	output: {
		path: __dirname,
		filename: "compiled/bundle.js"
	},
	resolve: {
		extensions: ['.js', '.marko'],
		modules: ['./', 'node_modules']
	},
	module: {
		rules: [
			{
				test: /\.css/,
				use: extractCssTextPlugin.extract({
					use: ['css-loader']
				})
			}, {
				test: /\.marko$/,
				use: ['marko-loader']
			}
		]
	},
	plugins: [
		new webpack.NoEmitOnErrorsPlugin(),

		extractCssTextPlugin,

		// Remove to show full output with comments
		optionalBeatifyJavaScriptPlugin
	]
};
