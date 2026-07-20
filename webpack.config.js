console.log('WEBPACK CONFIG LOADED');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const pkg = require('./package.json');
const webpack = require('webpack');
const fs = require('fs');
const name = pkg.name;
let plugins = [];

module.exports = (env = {}) => {
	if (env.production) {
		plugins = [
			new webpack.optimize.UglifyJsPlugin({minimize: true, compressor: {warnings: false}}),
			new webpack.BannerPlugin(`${name} - ${pkg.version}`),
		]
	} else {
		const index = 'index.html';
		const indexDev = '_' + index;
		plugins.push(new HtmlWebpackPlugin({
			template: fs.existsSync(indexDev) ? indexDev : index
		}));
	}

	return {
		entry: './src',
		output: {
			filename: `./dist/${name}.min.js`,
			library: name,
			libraryTarget: 'umd',
		},
		module: {
			rules: [
				{
					test: /\.js$/,
					include: /src/,
					use: 'babel-loader',
				},
				{
					test: /\.css$/,
					use: [
						'style-loader',
						'css-loader'
					]
				}
			]
		},
		externals: {'grapesjs': 'grapesjs'},
		plugins: plugins,
	};
}
