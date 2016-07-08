module.exports = {
	entry: [
		"./src/bootstrap.js"
	],
	output: {
		path: __dirname,
		filename: "app.js"
	},
	devtool: "source-map",
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: "babel"
			},
			{ 
				test: /\.css$/,
				loader: "style-loader!css-loader" 
			}
		]
	}
};